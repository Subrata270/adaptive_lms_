'use client'

import Link from 'next/link'
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { getOrderedDayNumbers, normalizeStringArray } from '@/lib/helpers'
import { recapContent } from '@/lib/recapContent'
import { supabase } from '@/lib/supabase'

const BATCH_SIZE = 6
const PRACTICE_LIMIT = 10
const PER_DAY_LIMIT = Math.ceil(PRACTICE_LIMIT / BATCH_SIZE) // 2
const QUIZ_TIME = 40

// ─── Types ────────────────────────────────────────────────────────────────────
type Question = {
    id: string
    prompt: string
    correct_answer: string | null
    options: unknown
    type: string
    day_number: number
}

type AttemptReview = {
    questionId: string
    prompt: string
    selected: string | null
    correct: string | null
    isCorrect: boolean
    timedOut: boolean
}

type SavedProgress = {
    currentIndex: number
    firstAttemptAnswers: Record<string, string>
    correctlyAnswered: string[]
    questionStartedAt?: number
}

type Tab = 'interview' | 'scenario' | 'quiz'

// ─── localStorage helpers ─────────────────────────────────────────────────────
const progressKey = (b: number) => `practice_quiz_batch${b}`
const scoreKey = (b: number) => `practice_quiz_score_batch${b}`
const qCacheKey = (b: number) => `practice_qs_v2_batch${b}`
const excludeKey = (b: number) => `practice_excl_batch${b}`

function loadSaved(b: number): SavedProgress | null {
    try { const r = localStorage.getItem(progressKey(b)); return r ? JSON.parse(r) : null } catch { return null }
}
function saveSaved(b: number, p: SavedProgress) {
    try { localStorage.setItem(progressKey(b), JSON.stringify(p)) } catch { /** */ }
}
function clearSaved(b: number) {
    try { localStorage.removeItem(progressKey(b)) } catch { /** */ }
}
function loadScore(b: number): { score: number; total: number } | null {
    try { const r = localStorage.getItem(scoreKey(b)); return r ? JSON.parse(r) : null } catch { return null }
}
function saveScore(b: number, score: number, total: number) {
    try { localStorage.setItem(scoreKey(b), JSON.stringify({ score, total })) } catch { /** */ }
}
function loadQCache(b: number): Question[] | null {
    try { const r = localStorage.getItem(qCacheKey(b)); return r ? JSON.parse(r) : null } catch { return null }
}
function saveQCache(b: number, qs: Question[]) {
    try { localStorage.setItem(qCacheKey(b), JSON.stringify(qs)) } catch { /** */ }
}
function clearQCache(b: number) {
    try { localStorage.removeItem(qCacheKey(b)) } catch { /** */ }
}
function loadExcluded(b: number): string[] {
    try { const r = localStorage.getItem(excludeKey(b)); return r ? JSON.parse(r) : [] } catch { return [] }
}
function saveExcluded(b: number, ids: string[]) {
    try { localStorage.setItem(excludeKey(b), JSON.stringify(ids)) } catch { /** */ }
}
function clearExcluded(b: number) {
    try { localStorage.removeItem(excludeKey(b)) } catch { /** */ }
}

const parseMultiline = (value: string): string[] =>
    value.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n|\r/g, '\n').split('\n')

// ─── Component ────────────────────────────────────────────────────────────────
export default function PracticePage() {
    const params = useParams<{ batchId: string }>()
    const batchId = useMemo(() => { const n = parseInt(params.batchId, 10); return isNaN(n) ? null : n }, [params.batchId])

    const days = useMemo(() => getOrderedDayNumbers(recapContent as Record<string, unknown>), [])
    const batchDays = useMemo(() => {
        if (batchId === null) return []
        return days.slice((batchId - 1) * BATCH_SIZE, batchId * BATCH_SIZE)
    }, [days, batchId])

    // ── Data state ───────────────────────────────────────────────────────────────
    const [activeTab, setActiveTab] = useState<Tab>('interview')
    const [interviewQs, setInterviewQ] = useState<Question[]>([])
    const [scenarioQs, setScenarioQ] = useState<Question[]>([])
    const [quizQs, setQuizQ] = useState<Question[]>([])
    const [loading, setLoading] = useState(true)
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [prevScore, setPrevScore] = useState<{ score: number; total: number } | null>(null)
    const [practiceQuizStarted, setPracticeQuizStarted] = useState(false)
    const [nextDayNumber, setNextDayNumber] = useState<number | null>(null)

    // ── Quiz state ───────────────────────────────────────────────────────────────
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOpt, setSelectedOpt] = useState<string | null>(null)
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
    const [firstAttempt, setFirstAttempt] = useState<Record<string, string>>({})
    const [correct, setCorrect] = useState<Set<string>>(new Set())
    const [attempted, setAttempted] = useState<Set<string>>(new Set())
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState<number | null>(null)
    const [reviewRows, setReviewRows] = useState<AttemptReview[]>([])
    const [timeLeft, setTimeLeft] = useState(QUIZ_TIME)

    // ── Refs ──────────────────────────────────────────────────────────────────────
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const questionStartedAt = useRef<number>(Date.now())
    const quizContainerRef = useRef<HTMLDivElement>(null)
    const handleSubmitRef = useRef<(() => void) | null>(null)

    // ── Derived ───────────────────────────────────────────────────────────────────
    const currentQ = quizQs[currentIndex]
    const currentOptions = normalizeStringArray(currentQ?.options)
    const isCurrentAttempted = currentQ ? attempted.has(currentQ.id) : false
    const allAttempted = quizQs.length > 0 && quizQs.every(q => attempted.has(q.id))
    const timerPct = (timeLeft / QUIZ_TIME) * 100
    const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500'
    const timerTextColor = timeLeft > 20 ? 'text-green-400' : timeLeft > 10 ? 'text-yellow-400' : 'text-red-400'

    // ── startTimer: setInterval-based — does NOT stop on option selection ─────────
    const startTimer = useCallback((from: number) => {
        if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
        setTimeLeft(from)
        if (from <= 0) return
        let remaining = from
        intervalRef.current = setInterval(() => {
            remaining -= 1
            setTimeLeft(remaining)
            if (remaining <= 0) {
                clearInterval(intervalRef.current!)
                intervalRef.current = null
            }
        }, 1000)
    }, [])
    // Cleanup on unmount
    useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])


    useEffect(() => {
        if (activeTab === 'quiz' && practiceQuizStarted && !submitted && quizQs.length > 0) {
            const el = quizContainerRef.current || document.documentElement
            if (el.requestFullscreen) {
                el.requestFullscreen().catch(() => { /* ignore if denied */ })
            }
        } else if (activeTab !== 'quiz' || !practiceQuizStarted) {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => { /* ignore */ })
            }
        }
    }, [activeTab, practiceQuizStarted, submitted, quizQs.length])

    // ── Exit fullscreen when submitted ────────────────────────────────────────────
    useEffect(() => {
        if (submitted && document.fullscreenElement) {
            document.exitFullscreen().catch(() => { /* ignore */ })
        }
    }, [submitted])

    // ── Tab change / window blur auto-submit ─────────────────────────────────────
    useEffect(() => {
        if (activeTab !== 'quiz' || !practiceQuizStarted || submitted || quizQs.length === 0) return

        const forceSubmit = () => {
            if (handleSubmitRef.current) {
                handleSubmitRef.current()
            }
        }

        const handleVisibilityChange = () => {
            if (document.hidden) forceSubmit()
        }
        const handleBlur = () => {
            forceSubmit()
        }
        // If user exits fullscreen (ESC key or any other method), auto-submit immediately
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                forceSubmit()
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        window.addEventListener('blur', handleBlur)
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            window.removeEventListener('blur', handleBlur)
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
        }
    }, [activeTab, practiceQuizStarted, submitted, quizQs.length])


    // ── Fetch quiz questions helper ───────────────────────────────────────────────
    const fetchQuizQs = useCallback(async (excludeIds: string[]): Promise<Question[]> => {
        const results = await Promise.all(
            batchDays.map(dayNum => {
                const q = supabase.from('questions')
                    .select('id,prompt,correct_answer,options,type,day_number')
                    .eq('type', 'quiz').eq('day_number', dayNum).eq('active', true)
                    .order('created_at', { ascending: true }).order('id', { ascending: true })
                    .limit(PER_DAY_LIMIT)
                return excludeIds.length > 0 ? q.not('id', 'in', `(${excludeIds.join(',')})`) : q
            })
        )
        const merged: Question[] = []
        for (const { data } of results) { if (data) merged.push(...(data as Question[])) }
        return merged.slice(0, PRACTICE_LIMIT)
    }, [batchDays])

    // ── Load ──────────────────────────────────────────────────────────────────────
    useEffect(() => {
        let active = true
        const load = async () => {
            if (batchId === null || batchDays.length === 0) { setLoading(false); return }
            const { data: ud } = await supabase.auth.getUser()
            if (!ud.user) { if (active) setLoading(false); return }

            // Check batch completion
            const { data: pd } = await supabase
                .from('student_day_progress')
                .select('day_number,recap_completed,interview_completed,scenario_completed,quiz_completed')
                .eq('student_id', ud.user.id).in('day_number', batchDays)

            const allDone = batchDays.every(d => {
                const row = (pd ?? []).find((r: Record<string, unknown>) => r.day_number === d) as
                    { recap_completed: boolean; interview_completed: boolean; scenario_completed: boolean; quiz_completed: boolean } | undefined
                return row?.recap_completed && row?.interview_completed && row?.scenario_completed && row?.quiz_completed
            })

            if (!active) return
            setIsUnlocked(allDone)
            if (!allDone) { setLoading(false); return }

            // Compute next day after this sprint's last day
            const { data: allProgress } = await supabase
                .from('student_day_progress')
                .select('day_number')
                .eq('student_id', ud.user.id)
            const allDayNums = (allProgress ?? []).map((r: Record<string, unknown>) => Number(r.day_number)).filter(Boolean)
            const lastBatchDay = batchDays[batchDays.length - 1]
            // next day is the first day after lastBatchDay in the ordered days list
            const orderedAll = getOrderedDayNumbers(recapContent as Record<string, unknown>)
            const lastIdx = orderedAll.indexOf(lastBatchDay)
            const nextDay = lastIdx !== -1 && lastIdx < orderedAll.length - 1 ? orderedAll[lastIdx + 1] : null
            if (active) setNextDayNumber(nextDay)
            void allDayNums // suppress unused

            // Interview + Scenario
            const fetchCapped = async (type: string): Promise<Question[]> => {
                const res = await Promise.all(
                    batchDays.map(dayNum =>
                        supabase.from('questions').select('id,prompt,correct_answer,options,type,day_number')
                            .eq('type', type).eq('day_number', dayNum).eq('active', true)
                            .order('created_at', { ascending: true }).order('id', { ascending: true })
                            .limit(PER_DAY_LIMIT)
                    )
                )
                const merged: Question[] = []
                for (const { data } of res) { if (data) merged.push(...(data as Question[])) }
                return merged.slice(0, PRACTICE_LIMIT)
            }

            const [interviews, scenarios] = await Promise.all([fetchCapped('interview'), fetchCapped('scenario')])
            if (!active) return
            setInterviewQ(interviews)
            setScenarioQ(scenarios)

            // Quiz: use cached questions on reload, fetch fresh otherwise
            const savedProg = loadSaved(batchId)
            const cachedQs = loadQCache(batchId)
            let quizzes: Question[]

            if (savedProg && cachedQs && cachedQs.length > 0) {
                quizzes = cachedQs // reload — exact same questions
            } else {
                const excl = loadExcluded(batchId)
                quizzes = await fetchQuizQs(excl)
                if (quizzes.length === 0 && excl.length > 0) { clearExcluded(batchId); quizzes = await fetchQuizQs([]) }
                saveQCache(batchId, quizzes)
            }

            if (!active) return
            setQuizQ(quizzes)
            setPrevScore(loadScore(batchId))

            // Restore saved quiz progress
            if (savedProg && quizzes.length > 0) {
                const validIds = new Set(quizzes.map(q => q.id))
                const validFirst: Record<string, string> = {}
                for (const [id, ans] of Object.entries(savedProg.firstAttemptAnswers)) {
                    if (validIds.has(id)) validFirst[id] = ans
                }
                const validCorrect = new Set(savedProg.correctlyAnswered.filter(id => validIds.has(id)))
                setFirstAttempt(validFirst)
                setCorrect(validCorrect)
                setAttempted(new Set(Object.keys(validFirst)))

                const idx = Math.max(0, Math.min(savedProg.currentIndex, quizzes.length - 1))
                setCurrentIndex(idx)

                const rq = quizzes[idx]
                if (rq && validCorrect.has(rq.id)) { setSelectedOpt(rq.correct_answer ?? null); setFeedback('correct') }
                else if (rq && validFirst[rq.id] && validFirst[rq.id] !== '__TIMEOUT__') { setSelectedOpt(validFirst[rq.id]); setFeedback('wrong') }
                else if (rq && validFirst[rq.id] === '__TIMEOUT__') { setSelectedOpt(null); setFeedback('wrong') }

                // Restore timer with elapsed time accounted for
                if (savedProg.questionStartedAt) {
                    const elapsed = Math.floor((Date.now() - savedProg.questionStartedAt) / 1000)
                    const remaining = Math.max(0, QUIZ_TIME - elapsed)
                    questionStartedAt.current = savedProg.questionStartedAt
                    startTimer(remaining)
                } else {
                    questionStartedAt.current = Date.now()
                    startTimer(QUIZ_TIME)
                }

                // Restore to the quiz tab so user lands where they left off
                setActiveTab('quiz')
            } else {
                // Fresh start — begin timer for first question
                questionStartedAt.current = Date.now()
                startTimer(QUIZ_TIME)
            }

            if (active) setLoading(false)
        }
        load()
        return () => { active = false }
    }, [batchId, batchDays, fetchQuizQs, startTimer])

    // ── Auto-save progress + timer timestamp ─────────────────────────────────────
    useEffect(() => {
        if (batchId === null || quizQs.length === 0 || submitted) return
        saveSaved(batchId, {
            currentIndex,
            firstAttemptAnswers: firstAttempt,
            correctlyAnswered: Array.from(correct),
            questionStartedAt: questionStartedAt.current,
        })
    }, [currentIndex, firstAttempt, correct, batchId, quizQs.length, submitted])

    // ── Auto-fail when timer hits 0 ──────────────────────────────────────────────
    useEffect(() => {
        if (timeLeft > 0 || submitted || !currentQ) return
        if (attempted.has(currentQ.id)) return
        const id = currentQ.id
        setFirstAttempt(prev => prev[id] ? prev : { ...prev, [id]: '__TIMEOUT__' })
        setAttempted(prev => { const s = new Set(prev); s.add(id); return s })
        setSelectedOpt(null)
        setFeedback('wrong')
    }, [timeLeft, submitted, currentQ, attempted])

    // ── Auto-move to next question 1.5s after timeout ────────────────────────────
    useEffect(() => {
        if (submitted || !currentQ) return
        if (firstAttempt[currentQ.id] !== '__TIMEOUT__') return
        const t = setTimeout(() => {
            if (currentIndex < quizQs.length - 1) {
                setCurrentIndex(prev => prev + 1)
                setSelectedOpt(null)
                setFeedback(null)
                questionStartedAt.current = Date.now()
                startTimer(QUIZ_TIME)
            }
        }, 1500)
        return () => clearTimeout(t)
    }, [firstAttempt, currentIndex, submitted, currentQ, quizQs.length, startTimer])

    // ── Handlers ──────────────────────────────────────────────────────────────────
    const handleSelect = (option: string) => {
        if (!currentQ || attempted.has(currentQ.id)) return
        // Stop the timer immediately on answer selection
        if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
        setSelectedOpt(option)
        if (!firstAttempt[currentQ.id]) setFirstAttempt(prev => ({ ...prev, [currentQ.id]: option }))
        setAttempted(prev => { const s = new Set(prev); s.add(currentQ.id); return s })
        if (option === currentQ.correct_answer) {
            setFeedback('correct')
            setCorrect(prev => { const s = new Set(prev); s.add(currentQ.id); return s })
        } else {
            setFeedback('wrong')
        }
    }

    const navigateTo = (idx: number) => {
        const tq = quizQs[idx]
        if (!tq) return
        setCurrentIndex(idx)
        // Only restart timer for unattempted questions — keeps timer running on already-answered ones
        if (!attempted.has(tq.id)) {
            questionStartedAt.current = Date.now()
            startTimer(QUIZ_TIME)
        }
        if (correct.has(tq.id)) { setSelectedOpt(tq.correct_answer ?? null); setFeedback('correct') }
        else if (attempted.has(tq.id)) { setSelectedOpt(firstAttempt[tq.id] === '__TIMEOUT__' ? null : (firstAttempt[tq.id] ?? null)); setFeedback('wrong') }
        else { setSelectedOpt(null); setFeedback(null) }
    }

    const goPrev = () => { if (currentIndex > 0) navigateTo(currentIndex - 1) }
    const goNext = () => { if (isCurrentAttempted && currentIndex < quizQs.length - 1) navigateTo(currentIndex + 1) }

    const handleSubmit = (forced = false) => {
        if (batchId === null) return
        if (!forced && !allAttempted) return
        if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
        let total = 0
        // For forced submit, mark all unanswered questions as timed-out
        const currentFirstAttempt = { ...firstAttempt }
        if (forced) {
            for (const q of quizQs) {
                if (!currentFirstAttempt[q.id]) {
                    currentFirstAttempt[q.id] = '__TIMEOUT__'
                }
            }
        }
        const rows: AttemptReview[] = quizQs.map(q => {
            const sel = currentFirstAttempt[q.id] ?? null
            const timedOut = sel === '__TIMEOUT__'
            const ok = !timedOut && sel !== null && sel === q.correct_answer
            if (ok) total++
            return { questionId: q.id, prompt: q.prompt, selected: timedOut ? null : sel, correct: q.correct_answer ?? null, isCorrect: ok, timedOut }
        })
        setReviewRows(rows); setScore(total); setSubmitted(true)
        clearSaved(batchId); saveScore(batchId, total, quizQs.length)
        setPrevScore({ score: total, total: quizQs.length })
    }

    // Keep handleSubmitRef in sync so event listeners use the latest closure
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handleSubmitRef.current = () => handleSubmit(true)

    const handleTryAgain = async () => {
        if (batchId === null) return
        const usedIds = quizQs.map(q => q.id)
        const prevExcl = loadExcluded(batchId)
        saveExcluded(batchId, [...new Set([...prevExcl, ...usedIds])])
        clearSaved(batchId); clearQCache(batchId)
        const excl = loadExcluded(batchId)
        let newQs = await fetchQuizQs(excl)
        if (newQs.length < 5) { clearExcluded(batchId); newQs = await fetchQuizQs([]) }
        saveQCache(batchId, newQs)
        setQuizQ(newQs)
        setCurrentIndex(0); setSelectedOpt(null); setFeedback(null)
        setFirstAttempt({}); setCorrect(new Set()); setAttempted(new Set())
        setSubmitted(false); setScore(null); setReviewRows([])
        questionStartedAt.current = Date.now()
        startTimer(QUIZ_TIME)
    }

    // ── Early returns ─────────────────────────────────────────────────────────────
    if (batchId === null) return (
        <div className="space-y-4">
            <Link href="/dashboard" className="text-sm muted-text hover:underline">← Back</Link>
            <h1 className="text-2xl font-bold">Invalid batch</h1>
        </div>
    )

    if (loading) return (
        <div className="space-y-4 animate-pulse">
            <div className="h-8 w-48 bg-[var(--bg-soft)] rounded-xl" />
            <div className="h-32 bg-[var(--bg-soft)] rounded-2xl" />
            <div className="h-24 bg-[var(--bg-soft)] rounded-2xl" />
        </div>
    )

    if (!isUnlocked) return (
        <div className="space-y-4">
            <Link href="/dashboard" className="text-sm muted-text hover:underline">← Back to Dashboard</Link>
            <div className="surface-card p-10 text-center">
                <p className="text-5xl mb-4">🔒</p>
                <h1 className="text-2xl font-bold">Practice Box Locked</h1>
                <p className="mt-2 muted-text">Complete all {BATCH_SIZE} days in Sprint {batchId} to unlock.</p>
                <Link href="/dashboard" className="quick-btn mt-5 inline-block">Back to Dashboard</Link>
            </div>
        </div>
    )

    const tabs: { id: Tab; label: string; count: number; emoji: string }[] = [
        { id: 'interview', label: 'Interview', count: interviewQs.length, emoji: '💬' },
        { id: 'scenario', label: 'Scenario', count: scenarioQs.length, emoji: '🗺️' },
        { id: 'quiz', label: 'Quiz', count: quizQs.length, emoji: '🧠' },
    ]

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="surface-card p-5 md:p-6 border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/10">
                <Link href="/dashboard" className="text-sm muted-text hover:underline">← Back to Dashboard</Link>
                <h1 className="text-2xl font-bold md:text-3xl mt-3">🔥 Practice Box — Sprint {batchId}</h1>
                <p className="mt-1 text-sm muted-text">
                    Days {batchDays[0]}–{batchDays[batchDays.length - 1]} &middot; {PRACTICE_LIMIT} questions per section
                </p>
                {prevScore && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-purple-500/20 px-3 py-1.5">
                        <span className="text-sm font-semibold text-purple-300">🏅 Last quiz score: {prevScore.score}/{prevScore.total}</span>
                    </div>
                )}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
                {tabs.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${activeTab === tab.id ? 'bg-[var(--primary)] text-white shadow-lg' : 'surface-card hover:shadow-md'}`}>
                        {tab.emoji} {tab.label}
                        <span className="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-xs">{tab.count}</span>
                    </button>
                ))}
            </div>

            {/* Interview Tab */}
            {activeTab === 'interview' && (
                <div className="space-y-4">
                    {interviewQs.length === 0 && <p className="muted-text surface-card p-6 text-center">No interview questions found.</p>}
                    {interviewQs.map((q, idx) => {
                        const answer = (q.correct_answer ?? '').trim()
                        return (
                            <div key={q.id} className="surface-card p-5 border-l-4 border-blue-500">
                                <h3 className="font-semibold text-base">{idx + 1}. {q.prompt}</h3>
                                {answer.length > 0 && (
                                    <div className="mt-3 rounded-xl bg-[var(--bg-soft)] p-3">
                                        <p className="text-sm leading-relaxed">
                                            {parseMultiline(answer).map((line, li, lines) => (
                                                <Fragment key={`${q.id}-${li}`}>{line}{li < lines.length - 1 && <br />}</Fragment>
                                            ))}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Scenario Tab */}
            {activeTab === 'scenario' && (
                <div className="space-y-4">
                    {scenarioQs.length === 0 && <p className="muted-text surface-card p-6 text-center">No scenario questions found.</p>}
                    {scenarioQs.map((q, idx) => {
                        const answer = (q.correct_answer ?? '').trim()
                        return (
                            <div key={q.id} className="surface-card p-5 border-l-4 border-green-500">
                                <h3 className="font-semibold text-base">{idx + 1}. {q.prompt}</h3>
                                {answer.length > 0 && (
                                    <div className="mt-3 rounded-xl bg-[var(--bg-soft)] p-3">
                                        <p className="text-sm leading-relaxed">
                                            {parseMultiline(answer).map((line, li, lines) => (
                                                <Fragment key={`${q.id}-${li}`}>{line}{li < lines.length - 1 && <br />}</Fragment>
                                            ))}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Quiz Tab */}
            {activeTab === 'quiz' && (
                <div className="space-y-6" ref={quizContainerRef}>
                    {/* Tab-change warning */}
                    {!submitted && quizQs.length > 0 && (
                        <div className="rounded-xl border border-orange-400/50 bg-orange-500/10 px-4 py-3 text-sm text-orange-400 font-medium flex items-center gap-2">
                            <span>⚠️</span>
                            <span>Do NOT switch tabs or minimize the window — the quiz will be <strong>automatically submitted</strong>.</span>
                        </div>
                    )}
                    {quizQs.length === 0 && <p className="muted-text surface-card p-6 text-center">No quiz questions found.</p>}

                    {/* Results */}
                    {submitted && quizQs.length > 0 && (
                        <div className="space-y-6">
                            <div className={`surface-card p-6 text-center border-2 ${score === quizQs.length ? 'border-green-500' : 'border-[var(--primary)]'}`}>
                                <p className="text-4xl mb-2">{score === quizQs.length ? '🎉' : '📊'}</p>
                                <h2 className="text-2xl font-bold">Practice Quiz Complete!</h2>
                                <p className="mt-2 text-3xl font-bold">
                                    <span className={score === quizQs.length ? 'text-green-400' : 'text-[var(--primary)]'}>{score}/{quizQs.length}</span>
                                </p>
                                <p className="mt-1 text-sm muted-text">Score based on first-attempt accuracy</p>
                                <div className="mt-4 flex flex-wrap justify-center gap-3">
                                    <button onClick={handleTryAgain} className="quick-btn">🔄 Try Again (New Questions)</button>
                                    {nextDayNumber && (
                                        <Link href={`/dashboard/day/${nextDayNumber}/recap`} className="quick-btn success">
                                            Continue to Day {nextDayNumber} →
                                        </Link>
                                    )}
                                    {!nextDayNumber && (
                                        <Link href="/dashboard" className="quick-btn success">🎓 Back to Dashboard</Link>
                                    )}
                                </div>
                            </div>

                            {reviewRows.filter(r => !r.isCorrect).length > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">❌ Missed on first attempt</h3>
                                    {reviewRows.filter(r => !r.isCorrect).map((row, idx) => (
                                        <div key={row.questionId} className="surface-card p-4 border-l-4 border-red-400">
                                            <p className="font-medium">{idx + 1}. {row.prompt}</p>
                                            {row.timedOut ? <p className="mt-2 text-sm text-orange-400">⏰ Time ran out</p>
                                                : <p className="mt-2 text-sm text-red-400">Your answer: {row.selected ?? '—'}</p>}
                                            <p className="text-sm text-green-400">Correct: {row.correct ?? '—'}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold">All Questions</h3>
                                {reviewRows.map((row, idx) => (
                                    <div key={row.questionId} className={`surface-card p-4 border-l-4 ${row.isCorrect ? 'border-green-400' : 'border-red-400'}`}>
                                        <p className="font-medium">{idx + 1}. {row.prompt}</p>
                                        {row.timedOut ? <p className="mt-2 text-sm text-orange-400">⏰ Time ran out</p>
                                            : <p className="mt-2 text-sm muted-text">Your answer: {row.selected ?? '—'}</p>}
                                        <p className="text-sm muted-text">Correct: {row.correct ?? '—'}</p>
                                        <p className={`text-sm font-semibold mt-1 ${row.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                            {row.isCorrect ? '✓ Correct' : row.timedOut ? '⏰ Timed Out' : '✗ Incorrect'}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Pre-quiz info screen */}
                    {!submitted && !practiceQuizStarted && quizQs.length > 0 && (
                        <div className="surface-card p-6 md:p-8 space-y-6 border-2 border-purple-500/30">
                            <div className="text-center space-y-2">
                                <p className="text-4xl">🧠</p>
                                <h2 className="text-2xl font-bold">Practice Box Quiz</h2>
                                <p className="text-sm muted-text">Read the instructions carefully before starting.</p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl bg-[var(--bg-soft)] p-4 flex items-start gap-3">
                                    <span className="text-2xl">📋</span>
                                    <div>
                                        <p className="font-semibold text-sm">Total Questions</p>
                                        <p className="text-2xl font-bold text-[var(--primary)]">{quizQs.length}</p>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-[var(--bg-soft)] p-4 flex items-start gap-3">
                                    <span className="text-2xl">🎯</span>
                                    <div>
                                        <p className="font-semibold text-sm">Passing Criteria</p>
                                        <p className="text-lg font-bold text-green-600">{Math.ceil(quizQs.length * 0.6)} / {quizQs.length} correct</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 space-y-3">
                                <p className="font-semibold text-sm flex items-center gap-2"><span>📌</span> Instructions</p>
                                <ul className="space-y-2 text-sm muted-text list-none">
                                    <li>✅ Each question has multiple options — choose the best one.</li>
                                    <li>📊 Score is based on <strong>first-attempt accuracy</strong>.</li>
                                    <li>⏱ Each question has a <strong>40-second timer</strong>.</li>
                                    <li>⚠️ <strong>Do NOT switch tabs</strong> — quiz will be auto-submitted.</li>
                                    <li>🚫 Answers cannot be changed once selected.</li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    onClick={() => setPracticeQuizStarted(true)}
                                    className="quick-btn success flex-1 text-center"
                                >
                                    ✅ Start Quiz
                                </button>
                                <button
                                    onClick={() => setActiveTab('interview')}
                                    className="rounded-xl border-2 border-[var(--border)] px-6 py-2 font-semibold flex-1"
                                >
                                    🔙 Back
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Quiz in progress */}
                    {!submitted && practiceQuizStarted && quizQs.length > 0 && (
                        <div className="space-y-5">
                            {/* Progress + Timer */}
                            <div className="surface-card p-4 space-y-3">
                                <div className="flex justify-between text-sm muted-text">
                                    <span>Question {currentIndex + 1} of {quizQs.length}</span>
                                    <span>{attempted.size} / {quizQs.length} answered</span>
                                </div>
                                <div className="w-full bg-[var(--bg-soft)] rounded-full h-2">
                                    <div className="h-2 rounded-full bg-[var(--primary)] transition-all duration-300"
                                        style={{ width: `${(attempted.size / quizQs.length) * 100}%` }} />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-sm font-bold tabular-nums min-w-[3ch] ${timerTextColor}`}>{timeLeft}s</span>
                                    <div className="flex-1 bg-[var(--bg-soft)] rounded-full h-2 overflow-hidden">
                                        <div className={`h-2 rounded-full transition-all duration-1000 ${timerColor}`}
                                            style={{ width: `${timerPct}%` }} />
                                    </div>
                                    <span className="text-xs muted-text">⏱ Time left</span>
                                </div>
                            </div>

                            {/* Question */}
                            {currentQ && (
                                <div className={`surface-card p-5 border-l-4 transition-colors duration-200 ${feedback === 'correct' ? 'border-green-500' :
                                    feedback === 'wrong' ? 'border-red-500' :
                                        !isCurrentAttempted && timeLeft <= 10 ? 'border-orange-400' : 'border-transparent'
                                    }`}>
                                    <p className="font-semibold text-base mb-5 leading-snug">{currentIndex + 1}. {currentQ.prompt}</p>
                                    <div className="space-y-3">
                                        {currentOptions.map(option => {
                                            const isSel = selectedOpt === option
                                            const isCorrect = option === currentQ.correct_answer
                                            let s = 'border-2 border-[var(--border)] bg-[var(--bg-soft)]'
                                            if (isSel) {
                                                if (feedback === 'correct') s = 'border-2 border-green-500 bg-green-500/10 text-green-300'
                                                else if (feedback === 'wrong') s = 'border-2 border-red-500 bg-red-500/10 text-red-300'
                                                else s = 'border-2 border-[var(--primary)] bg-[var(--primary)]/10'
                                            }
                                            if (feedback === 'wrong' && isCorrect && !correct.has(currentQ.id)) {
                                                s = 'border-2 border-green-500 bg-green-500/10 text-green-300'
                                            }
                                            return (
                                                <button key={option} onClick={() => handleSelect(option)}
                                                    disabled={isCurrentAttempted}
                                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-150 disabled:cursor-default ${s}`}>
                                                    {option}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {feedback === 'wrong' && firstAttempt[currentQ.id] === '__TIMEOUT__' && (
                                        <div className="mt-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
                                            <p className="text-orange-400 font-semibold">⏰ Time&apos;s up! Moving to next question...</p>
                                            <p className="text-sm text-orange-400/80 mt-1">The correct answer is highlighted in green.</p>
                                        </div>
                                    )}
                                    {feedback === 'correct' && (
                                        <div className="mt-4 flex items-center gap-2 text-green-400 font-semibold">
                                            <span className="text-xl">✅</span><span>Correct! Move to the next question.</span>
                                        </div>
                                    )}
                                    {feedback === 'wrong' && firstAttempt[currentQ.id] !== '__TIMEOUT__' && (
                                        <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                                            <p className="text-red-400 font-semibold">❌ That&apos;s not correct.</p>
                                            <p className="text-sm text-red-400/80 mt-1">Correct answer highlighted. You can still proceed.</p>
                                        </div>
                                    )}
                                    {!feedback && <p className="mt-4 text-xs muted-text italic">Select an answer to continue.</p>}
                                </div>
                            )}

                            {/* Navigation */}
                            <div className="flex flex-wrap items-center gap-3">
                                <button onClick={goPrev} disabled={currentIndex === 0}
                                    className="rounded-xl border-2 border-[var(--border)] px-4 py-2 font-semibold transition-opacity disabled:opacity-40">
                                    ← Previous
                                </button>
                                {currentIndex < quizQs.length - 1 ? (
                                    <button onClick={goNext} disabled={!isCurrentAttempted}
                                        className="quick-btn disabled:opacity-40 disabled:cursor-not-allowed">Next →</button>
                                ) : (
                                    <button onClick={() => handleSubmit()} disabled={!allAttempted}
                                        className="quick-btn success disabled:opacity-40 disabled:cursor-not-allowed">Finish Quiz</button>
                                )}
                                {!isCurrentAttempted && <span className="text-xs muted-text italic">Select an answer to proceed.</span>}
                            </div>

                            {allAttempted && (
                                <div className="surface-card p-4 text-center border-2 border-green-500 rounded-xl text-green-400 font-semibold">
                                    🎉 All questions answered! Go to the last question and click <strong>Finish Quiz</strong>.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
