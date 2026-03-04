'use client'

/**
 * DayCacheContext
 *
 * Provides a per-day data cache so that navigating between Recap → Interview →
 * Scenario → Quiz (and back) does NOT trigger repeated Supabase API calls.
 *
 * Data fetched once per (user + day):
 *  - Auth / access context (role, userId)
 *  - student_day_progress row
 *  - Interview questions (all pages)
 *  - Scenario questions (all pages)
 *
 * Quiz questions are still fetched by the quiz page itself (they have their own
 * shuffle/restore logic that is best kept local).
 *
 * Cache lifetime: in-memory for the current browser session.
 * Cache is invalidated only when:
 *  - The day number changes
 *  - `invalidate()` is called explicitly (e.g., after a page reload)
 */

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import { getAccessContext } from '@/lib/auth'
import {
    INTERVIEW_REQUIRED_COUNT,
    SCENARIO_REQUIRED_COUNT,
    mergeUniqueById,
} from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

// ── Types ──────────────────────────────────────────────────────────────────────

export type DayProgress = {
    recap_checked: unknown
    recap_completed: boolean
    interview_checked: unknown
    interview_completed: boolean
    scenario_checked: unknown
    scenario_completed: boolean
    quiz_completed: boolean
    quiz_score: number | null
}

export type SimpleQuestion = {
    id: string
    prompt: string
    correct_answer: string | null
}

export type AccessInfo = {
    userId: string | null
    isAdmin: boolean
    /** true while the first fetch is in flight */
    loading: boolean
    /** true if the user is not authenticated at all */
    unauthenticated: boolean
}

export type DayCacheState = {
    /** always reflects the most recently committed progress values */
    progress: DayProgress | null
    interviewQuestions: SimpleQuestion[]
    interviewTotalCount: number
    scenarioQuestions: SimpleQuestion[]
    scenarioTotalCount: number
    /** true while interview/scenario questions are being fetched for the first time */
    questionsLoading: boolean
    access: AccessInfo
    /** Call to re-fetch everything for the current day from scratch */
    invalidate: () => void
    /** Optimistically update the cached progress (e.g., after a local upsert) */
    patchProgress: (patch: Partial<DayProgress>) => void
    /** Append more interview questions into the cache */
    appendInterviewQuestions: (incoming: SimpleQuestion[], total: number) => void
    /** Append more scenario questions into the cache */
    appendScenarioQuestions: (incoming: SimpleQuestion[], total: number) => void
}

// ── Context ───────────────────────────────────────────────────────────────────

const DayCacheContext = createContext<DayCacheState | null>(null)

export function useDayCache(): DayCacheState {
    const ctx = useContext(DayCacheContext)
    if (!ctx) {
        throw new Error('useDayCache must be used inside <DayCacheProvider>')
    }
    return ctx
}

// ── Provider ──────────────────────────────────────────────────────────────────

const PAGE_SIZE = 5
const RANDOM_SEED_PREFIX = 'day-questions'

const hashStringToUint32 = (value: string): number => {
    let hash = 2166136261
    for (let i = 0; i < value.length; i += 1) {
        hash ^= value.charCodeAt(i)
        hash = Math.imul(hash, 16777619)
    }
    return hash >>> 0
}

const makeSeededRng = (seed: string) => {
    let state = hashStringToUint32(seed)
    return () => {
        state = (state + 0x6D2B79F5) | 0
        let t = Math.imul(state ^ (state >>> 15), 1 | state)
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

const shuffleWithSeed = <T,>(items: T[], seed: string): T[] => {
    const rng = makeSeededRng(seed)
    const copy = [...items]
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rng() * (i + 1))
        const tmp = copy[i]
        copy[i] = copy[j]
        copy[j] = tmp
    }
    return copy
}

const pickRandomSubset = <T,>(items: T[], size: number, seed: string): T[] => {
    if (items.length <= size) return items
    return shuffleWithSeed(items, seed).slice(0, size)
}

type Props = {
    dayNumber: number
    children: React.ReactNode
}

export function DayCacheProvider({ dayNumber, children }: Props) {
    const [progress, setProgress] = useState<DayProgress | null>(null)
    const [interviewQuestions, setInterviewQuestions] = useState<SimpleQuestion[]>([])
    const [interviewTotalCount, setInterviewTotalCount] = useState(0)
    const [scenarioQuestions, setScenarioQuestions] = useState<SimpleQuestion[]>([])
    const [scenarioTotalCount, setScenarioTotalCount] = useState(0)
    const [questionsLoading, setQuestionsLoading] = useState(true)
    const [access, setAccess] = useState<AccessInfo>({
        userId: null,
        isAdmin: false,
        loading: true,
        unauthenticated: false,
    })

    // Track whether the initial load for this dayNumber has already completed
    // so that re-renders of the provider don't trigger a second fetch.
    const loadedDayRef = useRef<number | null>(null)
    const invalidateCountRef = useRef(0)
    const [invalidateTick, setInvalidateTick] = useState(0)

    const invalidate = useCallback(() => {
        loadedDayRef.current = null
        setInvalidateTick((n) => n + 1)
    }, [])

    const patchProgress = useCallback((patch: Partial<DayProgress>) => {
        setProgress((prev) => (prev ? { ...prev, ...patch } : prev))
    }, [])

    const appendInterviewQuestions = useCallback(
        (incoming: SimpleQuestion[], total: number) => {
            setInterviewTotalCount(total)
            setInterviewQuestions((prev) => mergeUniqueById(prev, incoming))
        },
        []
    )

    const appendScenarioQuestions = useCallback(
        (incoming: SimpleQuestion[], total: number) => {
            setScenarioTotalCount(total)
            setScenarioQuestions((prev) => mergeUniqueById(prev, incoming))
        },
        []
    )

    // ── Main fetch effect ───────────────────────────────────────────────────────
    useEffect(() => {
        // Guard: skip if this day was already loaded (and no invalidation happened)
        if (loadedDayRef.current === dayNumber) return

        let active = true

        const fetchAll = async () => {
            // Mark loading
            setAccess({ userId: null, isAdmin: false, loading: true, unauthenticated: false })
            setQuestionsLoading(true)
            // Reset cached data for a fresh load
            setProgress(null)
            setInterviewQuestions([])
            setInterviewTotalCount(0)
            setScenarioQuestions([])
            setScenarioTotalCount(0)

            // ── 1. Auth ────────────────────────────────────────────────────────────
            const ctx = await getAccessContext()
            if (!active) return

            if (!ctx.user) {
                setAccess({ userId: null, isAdmin: false, loading: false, unauthenticated: true })
                setQuestionsLoading(false)
                return
            }

            const isAdmin = ctx.role === 'admin'

            if (isAdmin) {
                setAccess({ userId: null, isAdmin: true, loading: false, unauthenticated: false })
                setProgress({
                    recap_checked: [],
                    recap_completed: true,
                    interview_checked: [],
                    interview_completed: true,
                    scenario_checked: [],
                    scenario_completed: true,
                    quiz_completed: true,
                    quiz_score: null,
                })
                // Admin: always fetch all questions
                await Promise.all([
                    fetchInterviewQuestions(dayNumber, active),
                    fetchScenarioQuestions(dayNumber, active),
                ])
                if (active) {
                    setQuestionsLoading(false)
                    loadedDayRef.current = dayNumber
                }
                return
            }

            const userId = ctx.user.id

            // ── 2. Ensure progress row exists ─────────────────────────────────────
            const { ensureDayProgressRow } = await import('@/lib/auth')
            await ensureDayProgressRow(userId, dayNumber)
            if (!active) return

            // ── 3. Fetch progress + questions in parallel ─────────────────────────
            const selectionSeed = `${RANDOM_SEED_PREFIX}:${userId}:${dayNumber}`

            const [progressResult] = await Promise.all([
                supabase
                    .from('student_day_progress')
                    .select(
                        'recap_checked,recap_completed,interview_checked,interview_completed,scenario_checked,scenario_completed,quiz_completed,quiz_score'
                    )
                    .eq('student_id', userId)
                    .eq('day_number', dayNumber)
                    .maybeSingle(),
                // ── Always fetch both question sets unconditionally ──────────────
                // The unlock gate lives in the UI only, not in data fetching.
                // This ensures questions are ready the moment the user navigates
                // to Interview or Scenario after completing the previous section.
                fetchInterviewQuestions(dayNumber, active, {
                    limit: INTERVIEW_REQUIRED_COUNT,
                    seed: `${selectionSeed}:interview`,
                }),
                fetchScenarioQuestions(dayNumber, active, {
                    limit: SCENARIO_REQUIRED_COUNT,
                    seed: `${selectionSeed}:scenario`,
                }),
            ])

            if (!active) return

            const { data: row, error: progressError } = progressResult
            if (progressError) {
                console.error('[DayCache] Failed to load progress:', progressError)
            }

            const prog: DayProgress = {
                recap_checked: row?.recap_checked ?? [],
                recap_completed: Boolean(row?.recap_completed),
                interview_checked: row?.interview_checked ?? [],
                interview_completed: Boolean(row?.interview_completed),
                scenario_checked: row?.scenario_checked ?? [],
                scenario_completed: Boolean(row?.scenario_completed),
                quiz_completed: Boolean(row?.quiz_completed),
                quiz_score: typeof row?.quiz_score === 'number' ? row.quiz_score : null,
            }

            setAccess({ userId, isAdmin: false, loading: false, unauthenticated: false })
            setProgress(prog)
            setQuestionsLoading(false)

            if (active) {
                loadedDayRef.current = dayNumber
            }
        }

        fetchAll()
        return () => {
            active = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dayNumber, invalidateTick])

    // ── Helpers to fetch questions pages ────────────────────────────────────────

    async function fetchInterviewQuestions(
        day: number,
        active: boolean,
        options?: { limit?: number; seed?: string }
    ) {
        let offset = 0
        let fetched = 0
        let total = 0
        const all: SimpleQuestion[] = []

        do {
            const { data, error, count } = await supabase
                .from('questions')
                .select('id,prompt,correct_answer', { count: 'exact' })
                .eq('type', 'interview')
                .eq('day_number', day)
                .eq('active', true)
                .order('created_at', { ascending: true })
                .order('id', { ascending: true })
                .range(offset, offset + PAGE_SIZE - 1)

            if (!active) return 0
            if (error) {
                console.error('[DayCache] Failed to fetch interview questions:', error)
                return 0
            }

            const incoming = (data as SimpleQuestion[] | null) ?? []
            total = count ?? 0
            fetched += incoming.length
            offset += incoming.length
            all.push(...incoming)

            if (incoming.length === 0) break
        } while (fetched < total)

        let finalList = all
        let finalTotal = total

        if (options?.limit && total > options.limit) {
            const seed = options.seed ?? `${RANDOM_SEED_PREFIX}:interview:${day}`
            finalList = pickRandomSubset(all, options.limit, seed)
            finalTotal = options.limit
        }

        setInterviewQuestions(finalList)
        setInterviewTotalCount(finalTotal)
        return total
    }

    async function fetchScenarioQuestions(
        day: number,
        active: boolean,
        options?: { limit?: number; seed?: string }
    ) {
        let offset = 0
        let fetched = 0
        let total = 0
        const all: SimpleQuestion[] = []

        do {
            const { data, error, count } = await supabase
                .from('questions')
                .select('id,prompt,correct_answer', { count: 'exact' })
                .eq('type', 'scenario')
                .eq('day_number', day)
                .eq('active', true)
                .order('created_at', { ascending: true })
                .order('id', { ascending: true })
                .range(offset, offset + PAGE_SIZE - 1)

            if (!active) return 0
            if (error) {
                console.error('[DayCache] Failed to fetch scenario questions:', error)
                return 0
            }

            const incoming = (data as SimpleQuestion[] | null) ?? []
            total = count ?? 0
            fetched += incoming.length
            offset += incoming.length
            all.push(...incoming)

            if (incoming.length === 0) break
        } while (fetched < total)

        let finalList = all
        let finalTotal = total

        if (options?.limit && total > options.limit) {
            const seed = options.seed ?? `${RANDOM_SEED_PREFIX}:scenario:${day}`
            finalList = pickRandomSubset(all, options.limit, seed)
            finalTotal = options.limit
        }

        setScenarioQuestions(finalList)
        setScenarioTotalCount(finalTotal)
        return total
    }

    async function markSectionComplete(
        section: 'interview' | 'scenario',
        userId: string,
        day: number
    ) {
        const patch =
            section === 'interview'
                ? { interview_completed: true, interview_checked: [] }
                : { scenario_completed: true, scenario_checked: [] }

        setProgress((prev) => (prev ? { ...prev, ...patch } : prev))

        const { error } = await supabase
            .from('student_day_progress')
            .upsert(
                {
                    student_id: userId,
                    day_number: day,
                    ...patch,
                },
                { onConflict: 'student_id,day_number' }
            )

        if (error) {
            console.error(`[DayCache] Failed to auto-complete ${section} section:`, error)
        }
    }

    // ── Render ──────────────────────────────────────────────────────────────────

    const value: DayCacheState = {
        progress,
        interviewQuestions,
        interviewTotalCount,
        scenarioQuestions,
        scenarioTotalCount,
        questionsLoading,
        access,
        invalidate,
        patchProgress,
        appendInterviewQuestions,
        appendScenarioQuestions,
    }

    return (
        <DayCacheContext.Provider value={value}>
            {children}
        </DayCacheContext.Provider>
    )
}
