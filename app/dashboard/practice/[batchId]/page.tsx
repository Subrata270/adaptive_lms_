'use client'

import Link from 'next/link'
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { getAccessContext } from '@/lib/auth'
import { getOrderedDayNumbers, normalizeStringArray } from '@/lib/helpers'
import { recapContent } from '@/lib/recapContent'
import { supabase } from '@/lib/supabase'

const BATCH_SIZE = 6
const PRACTICE_LIMIT = 10
const PER_DAY_LIMIT = Math.ceil(PRACTICE_LIMIT / BATCH_SIZE) // 2
const QUIZ_TIME = 30
const UNLOCK_PERCENTAGE = 70
const MAX_BACK_TO_TEST = 3
const AUTO_NEXT_CORRECT_MS = 1000
const AUTO_NEXT_WRONG_MS = 2000
const PRACTICE_SCORE_COLUMN = 'Practice Quiz Scores' as const

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Types Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
type SubmissionMode = 'completed' | 'quit' | 'violation'

type PracticeAttempt = {
    attempt: number
    score: number
    total: number
    percentage: number
    completed_at: string
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ localStorage helpers Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
const progressKey = (b: number) => `practice_quiz_batch${b}`
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

const parsePracticeAttempts = (value: unknown): PracticeAttempt[] => {
    if (!Array.isArray(value)) return []
    return value
        .map((entry, index) => {
            if (!entry || typeof entry !== 'object') return null
            const item = entry as Record<string, unknown>
            const score = Number(item.score ?? 0)
            const total = Number(item.total ?? 0)
            if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return null
            const attempt = Number(item.attempt ?? index + 1)
            const percentage = Number(item.percentage ?? Math.round((score / total) * 100))
            const completedAt = typeof item.completed_at === 'string' && item.completed_at.length > 0
                ? item.completed_at
                : new Date().toISOString()
            return {
                attempt: Number.isFinite(attempt) && attempt > 0 ? Math.trunc(attempt) : index + 1,
                score,
                total,
                percentage: Number.isFinite(percentage) ? percentage : Math.round((score / total) * 100),
                completed_at: completedAt,
            } satisfies PracticeAttempt
        })
        .filter((entry): entry is PracticeAttempt => entry !== null)
}

const getAverageScore = (attempts: PracticeAttempt[]): number => {
    if (attempts.length === 0) return 0
    const total = attempts.reduce((sum, attempt) => sum + attempt.percentage, 0)
    return Math.round((total / attempts.length) * 100) / 100
}

const hasPassingAttempt = (attempts: PracticeAttempt[]): boolean =>
    attempts.some((attempt) => attempt.percentage > UNLOCK_PERCENTAGE)

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Component Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
export default function PracticePage() {
    const params = useParams<{ batchId: string }>()
    const batchId = useMemo(() => { const n = parseInt(params.batchId, 10); return isNaN(n) ? null : n }, [params.batchId])

    const days = useMemo(() => getOrderedDayNumbers(recapContent as Record<string, unknown>), [])
    const batchDays = useMemo(() => {
        if (batchId === null) return []
        return days.slice((batchId - 1) * BATCH_SIZE, batchId * BATCH_SIZE)
    }, [days, batchId])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Data state Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    const [activeTab, setActiveTab] = useState<Tab>('interview')
    const [interviewQs, setInterviewQ] = useState<Question[]>([])
    const [scenarioQs, setScenarioQ] = useState<Question[]>([])
    const [quizQs, setQuizQ] = useState<Question[]>([])
    const [loading, setLoading] = useState(true)
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [isAdminView, setIsAdminView] = useState(false)
    const [practiceQuizStarted, setPracticeQuizStarted] = useState(false)
    const [nextDayNumber, setNextDayNumber] = useState<number | null>(null)
    const [ownerId, setOwnerId] = useState<string | null>(null)
    const [attemptHistory, setAttemptHistory] = useState<PracticeAttempt[]>([])
    const [averageScore, setAverageScore] = useState(0)
    const [eligibleToUnlock, setEligibleToUnlock] = useState(false)
    const [showAttemptScores, setShowAttemptScores] = useState(false)

    // Ã¢â€â‚¬Ã¢â€â‚¬ Quiz state Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
    const [showLeaveWarning, setShowLeaveWarning] = useState(false)
    const [backToTestCount, setBackToTestCount] = useState(0)
    const [submissionMode, setSubmissionMode] = useState<SubmissionMode>('completed')
    const [resultPersisted, setResultPersisted] = useState(false)

    // Ã¢â€â‚¬Ã¢â€â‚¬ Refs Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const questionStartedAt = useRef<number>(Date.now())
    const quizContainerRef = useRef<HTMLDivElement>(null)
    const hiddenLeaveAttemptRef = useRef(false)
    const suppressNextFullscreenWarningRef = useRef(false)
    const autoAdvanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Ã¢â€â‚¬Ã¢â€â‚¬ Derived Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    const currentQ = quizQs[currentIndex]
    const currentOptions = normalizeStringArray(currentQ?.options)
    const isCurrentAttempted = currentQ ? attempted.has(currentQ.id) : false
    const allAttempted = quizQs.length > 0 && quizQs.every(q => attempted.has(q.id))
    const timerPct = (timeLeft / QUIZ_TIME) * 100
    const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500'
    const timerTextColor = timeLeft > 20 ? 'text-green-400' : timeLeft > 10 ? 'text-yellow-400' : 'text-red-400'
    const isGuardedQuiz =
        !isAdminView && activeTab === 'quiz' && practiceQuizStarted && !submitted && quizQs.length > 0
    const sprintAnchorDay = batchDays.length > 0 ? batchDays[batchDays.length - 1] : null

    // Ã¢â€â‚¬Ã¢â€â‚¬ startTimer: setInterval-based Ã¢â‚¬â€ does NOT stop on option selection Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
    useEffect(() => () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current)
    }, [])


    const enterQuizFullscreen = useCallback(async () => {
        const el = quizContainerRef.current || document.documentElement
        if (!el.requestFullscreen) return
        await el.requestFullscreen().catch(() => { /* ignore if denied */ })
    }, [])

    useEffect(() => {
        if (isGuardedQuiz) {
            if (!document.fullscreenElement) {
                void enterQuizFullscreen()
            }
            return
        }
        if (document.fullscreenElement) {
            suppressNextFullscreenWarningRef.current = true
            document.exitFullscreen().catch(() => { /* ignore */ })
        }
    }, [enterQuizFullscreen, isGuardedQuiz])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Exit fullscreen when submitted Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    useEffect(() => {
        if (!submitted) return
        setShowLeaveWarning(false)
        hiddenLeaveAttemptRef.current = false
    }, [submitted])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Tab/ESC leave guard with confirmation modal Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    useEffect(() => {
        if (!isGuardedQuiz) return

        const handleVisibilityChange = () => {
            if (document.hidden) {
                hiddenLeaveAttemptRef.current = true
                return
            }
            if (hiddenLeaveAttemptRef.current) {
                hiddenLeaveAttemptRef.current = false
                setShowLeaveWarning(true)
            }
        }
        const handleBlur = () => {
            hiddenLeaveAttemptRef.current = true
            setShowLeaveWarning(true)
        }

        const handleFullscreenChange = () => {
            if (suppressNextFullscreenWarningRef.current) {
                suppressNextFullscreenWarningRef.current = false
                return
            }
            if (!document.fullscreenElement) {
                setShowLeaveWarning(true)
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
    }, [isGuardedQuiz])


    // Ã¢â€â‚¬Ã¢â€â‚¬ Fetch quiz questions helper Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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

    // Ã¢â€â‚¬Ã¢â€â‚¬ Load Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    useEffect(() => {
        let active = true
        const load = async () => {
            if (batchId === null || batchDays.length === 0) { setLoading(false); return }
            const access = await getAccessContext()
            if (!access.user) { if (active) setLoading(false); return }

            const adminView = access.role === 'admin'
            if (!active) return
            setIsAdminView(adminView)
            setOwnerId(adminView ? null : access.user.id)

            if (!adminView) {
                const { data: pd } = await supabase
                    .from('student_day_progress')
                    .select('day_number,recap_completed,interview_completed,scenario_completed,quiz_completed,"Practice Quiz Scores"')
                    .eq('student_id', access.user.id)
                    .in('day_number', batchDays)

                const sprintRow = (pd ?? []).find((row: Record<string, unknown>) =>
                    Number(row.day_number) === sprintAnchorDay
                ) as Record<string, unknown> | undefined
                const attempts = parsePracticeAttempts(sprintRow?.[PRACTICE_SCORE_COLUMN])
                const average = getAverageScore(attempts)
                const unlockedByAttempt = hasPassingAttempt(attempts)

                const allDone = batchDays.every(d => {
                    const row = (pd ?? []).find((r: Record<string, unknown>) => r.day_number === d) as
                        { recap_completed: boolean; interview_completed: boolean; scenario_completed: boolean; quiz_completed: boolean } | undefined
                    return row?.recap_completed && row?.interview_completed && row?.scenario_completed && row?.quiz_completed
                })

                if (!active) return
                setAttemptHistory(attempts)
                setAverageScore(average)
                setEligibleToUnlock(unlockedByAttempt)
                setIsUnlocked(allDone)
                if (!allDone) { setLoading(false); return }
            } else {
                setAttemptHistory([])
                setAverageScore(0)
                setEligibleToUnlock(true)
                setShowAttemptScores(false)
                setIsUnlocked(true)
            }

            // Compute next day after this sprint's last day
            const lastBatchDay = batchDays[batchDays.length - 1]
            // next day is the first day after lastBatchDay in the ordered days list
            const orderedAll = getOrderedDayNumbers(recapContent as Record<string, unknown>)
            const lastIdx = orderedAll.indexOf(lastBatchDay)
            const nextDay = lastIdx !== -1 && lastIdx < orderedAll.length - 1 ? orderedAll[lastIdx + 1] : null
            if (active) setNextDayNumber(nextDay)

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
            const canResume = Boolean(savedProg && cachedQs && cachedQs.length > 0)
            let quizzes: Question[]

            if (!canResume) {
                clearSaved(batchId)
                clearQCache(batchId)
            }

            if (canResume) {
                quizzes = cachedQs ?? [] // reload — exact same questions
            } else {
                const excl = loadExcluded(batchId)
                quizzes = await fetchQuizQs(excl)
                if (quizzes.length === 0 && excl.length > 0) { clearExcluded(batchId); quizzes = await fetchQuizQs([]) }
            }

            if (!active) return
            setQuizQ(quizzes)

            // Restore saved quiz progress
            if (canResume && savedProg && quizzes.length > 0) {
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
                setPracticeQuizStarted(true)
                setActiveTab('quiz')
            } else {
                // Fresh start Ã¢â‚¬â€ begin timer for first question
                setPracticeQuizStarted(false)
                setCurrentIndex(0)
                setSelectedOpt(null)
                setFeedback(null)
                setTimeLeft(QUIZ_TIME)
            }

            if (active) setLoading(false)
        }
        load()
        return () => { active = false }
    }, [batchId, batchDays, fetchQuizQs, sprintAnchorDay, startTimer])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Auto-save progress + timer timestamp Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    useEffect(() => {
        if (batchId === null || quizQs.length === 0 || submitted || !practiceQuizStarted) return
        saveSaved(batchId, {
            currentIndex,
            firstAttemptAnswers: firstAttempt,
            correctlyAnswered: Array.from(correct),
            questionStartedAt: questionStartedAt.current,
        })
        saveQCache(batchId, quizQs)
    }, [currentIndex, firstAttempt, correct, batchId, quizQs, quizQs.length, submitted, practiceQuizStarted])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Auto-fail when timer hits 0 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    useEffect(() => {
        if (timeLeft > 0 || submitted || !currentQ || !practiceQuizStarted) return
        if (attempted.has(currentQ.id)) return
        const id = currentQ.id
        setFirstAttempt(prev => prev[id] ? prev : { ...prev, [id]: '__TIMEOUT__' })
        setAttempted(prev => { const s = new Set(prev); s.add(id); return s })
        setSelectedOpt(null)
        setFeedback('wrong')
    }, [timeLeft, submitted, currentQ, attempted, practiceQuizStarted])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Handlers Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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

    const moveToNextQuestion = useCallback(() => {
        if (currentIndex >= quizQs.length - 1) return false
        const nextIndex = currentIndex + 1
        const nextQuestion = quizQs[nextIndex]
        if (!nextQuestion) return false
        setCurrentIndex(nextIndex)
        setSelectedOpt(null)
        setFeedback(null)
        questionStartedAt.current = Date.now()
        startTimer(QUIZ_TIME)
        return true
    }, [currentIndex, quizQs, startTimer])

    const handleSubmit = useCallback(async (
        forced = false,
        persistScore = true,
        mode: SubmissionMode = 'completed'
    ) => {
        if (batchId === null) return
        if (!forced && !allAttempted) return
        setShowLeaveWarning(false)
        hiddenLeaveAttemptRef.current = false
        setSubmissionMode(mode)
        setResultPersisted(false)
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
        setReviewRows(rows)
        setScore(total)
        setSubmitted(true)
        clearSaved(batchId)
        clearQCache(batchId)

        if (!persistScore || mode !== 'completed' || isAdminView || !ownerId || sprintAnchorDay === null) {
            return
        }

        const percentage = quizQs.length > 0 ? Math.round((total / quizQs.length) * 100) : 0
        const nextAttempt: PracticeAttempt = {
            attempt: attemptHistory.length + 1,
            score: total,
            total: quizQs.length,
            percentage,
            completed_at: new Date().toISOString(),
        }
        const updatedAttempts = [...attemptHistory, nextAttempt]
        const average = getAverageScore(updatedAttempts)
        const unlockedByAttempt = hasPassingAttempt(updatedAttempts)

        const { error } = await supabase
            .from('student_day_progress')
            .upsert(
                {
                    student_id: ownerId,
                    day_number: sprintAnchorDay,
                    [PRACTICE_SCORE_COLUMN]: updatedAttempts,
                },
                { onConflict: 'student_id,day_number' }
            )

        if (error) {
            console.error('Failed to save practice quiz score', error)
            return
        }

        setAttemptHistory(updatedAttempts)
        setAverageScore(average)
        setEligibleToUnlock(unlockedByAttempt)
        setResultPersisted(true)
    }, [allAttempted, attemptHistory, batchId, firstAttempt, isAdminView, ownerId, quizQs, sprintAnchorDay])

    const handleQuitExam = () => {
        setShowLeaveWarning(false)
        hiddenLeaveAttemptRef.current = false
        setPracticeQuizStarted(false)
        setSubmissionMode('quit')
        setResultPersisted(false)
        setSubmitted(false)
        setScore(null)
        setReviewRows([])
        setCurrentIndex(0)
        setSelectedOpt(null)
        setFeedback(null)
        setFirstAttempt({})
        setCorrect(new Set())
        setAttempted(new Set())
        setTimeLeft(QUIZ_TIME)
        setShowAttemptScores(false)
        questionStartedAt.current = Date.now()
        if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
        if (autoAdvanceTimeoutRef.current) { clearTimeout(autoAdvanceTimeoutRef.current); autoAdvanceTimeoutRef.current = null }
        if (batchId !== null) {
            clearSaved(batchId)
            clearQCache(batchId)
        }
        suppressNextFullscreenWarningRef.current = true
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { /* ignore */ })
        }
    }

    const handleBackToTest = () => {
        setShowLeaveWarning(false)
        hiddenLeaveAttemptRef.current = false
        const nextCount = backToTestCount + 1
        setBackToTestCount(nextCount)
        if (nextCount >= MAX_BACK_TO_TEST) {
            void handleSubmit(true, false, 'violation')
            return
        }
        void enterQuizFullscreen()
    }

    const handleStartQuiz = () => {
        if (batchId === null || quizQs.length === 0) return
        setPracticeQuizStarted(true)
        setBackToTestCount(0)
        setShowLeaveWarning(false)
        setSubmissionMode('completed')
        setResultPersisted(false)
        setSubmitted(false)
        setScore(null)
        setReviewRows([])
        setCurrentIndex(0)
        setSelectedOpt(null)
        setFeedback(null)
        setFirstAttempt({})
        setCorrect(new Set())
        setAttempted(new Set())
        setShowAttemptScores(false)
        hiddenLeaveAttemptRef.current = false
        questionStartedAt.current = Date.now()
        startTimer(QUIZ_TIME)
    }

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
        setShowLeaveWarning(false)
        setBackToTestCount(0)
        setSubmissionMode('completed')
        setResultPersisted(false)
        setShowAttemptScores(false)
        hiddenLeaveAttemptRef.current = false
        questionStartedAt.current = Date.now()
        startTimer(QUIZ_TIME)
    }

    useEffect(() => {
        if (submitted || !currentQ || !feedback || !attempted.has(currentQ.id)) return
        if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current)
        const delay = feedback === 'correct' ? AUTO_NEXT_CORRECT_MS : AUTO_NEXT_WRONG_MS

        autoAdvanceTimeoutRef.current = setTimeout(() => {
            const moved = moveToNextQuestion()
            if (!moved) {
                void handleSubmit(false, true, 'completed')
            }
        }, delay)

        return () => {
            if (autoAdvanceTimeoutRef.current) {
                clearTimeout(autoAdvanceTimeoutRef.current)
                autoAdvanceTimeoutRef.current = null
            }
        }
    }, [attempted, currentQ, feedback, handleSubmit, moveToNextQuestion, submitted])

    // Ã¢â€â‚¬Ã¢â€â‚¬ Early returns Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    if (batchId === null) return (
        <div className="space-y-4">
            <Link href="/dashboard" className="text-sm muted-text hover:underline">Back</Link>
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
            <Link href="/dashboard" className="text-sm muted-text hover:underline">Back to Dashboard</Link>
            <div className="surface-card p-10 text-center">
                <h1 className="text-2xl font-bold">Practice Box Locked</h1>
                <p className="mt-2 muted-text">Complete all {BATCH_SIZE} days in Sprint {batchId} to unlock.</p>
                <Link href="/dashboard" className="quick-btn mt-5 inline-block">Back to Dashboard</Link>
            </div>
        </div>
    )

    const tabs: { id: Tab; label: string; count: number }[] = [
        { id: 'interview', label: 'Interview', count: interviewQs.length },
        { id: 'scenario', label: 'Scenario', count: scenarioQs.length },
        { id: 'quiz', label: 'Quiz', count: quizQs.length },
    ]

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="surface-card p-5 md:p-6 border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/10">
                <Link href="/dashboard" className="text-sm muted-text hover:underline">&larr; Back to Dashboard</Link>
                <h1 className="text-2xl font-bold md:text-3xl mt-3">Practice Box - Sprint {batchId}</h1>
                <p className="mt-1 text-sm muted-text">
                    Days {batchDays[0]}-{batchDays[batchDays.length - 1]} &middot; {PRACTICE_LIMIT} questions per section
                </p>
                {isAdminView && (
                    <p className="mt-3 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
                        Admin preview mode: sprint unlocked and student progress writes disabled.
                    </p>
                )}
                <div className="mt-3 space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[var(--bg-soft)] px-3 py-1.5">
                        <span className="text-sm font-semibold">
                            Average score: {averageScore.toFixed(2)}%
                        </span>
                        <span
                            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${eligibleToUnlock
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-amber-100 text-amber-700'
                                }`}
                        >
                            {eligibleToUnlock
                                ? `Eligible to unlock next section (any attempt > ${UNLOCK_PERCENTAGE}%)`
                                : `Need any attempt > ${UNLOCK_PERCENTAGE}% to unlock next section`}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setShowAttemptScores((prev) => !prev)}
                            className="rounded-lg border border-[var(--border)] bg-[var(--bg-soft)] px-2.5 py-1 text-xs font-semibold hover:opacity-90"
                        >
                            {showAttemptScores ? 'Hide Attempt Scores' : 'Attempt Scores'}
                        </button>
                        <p className="text-xs muted-text">
                            Attempts: {attemptHistory.length}
                        </p>
                    </div>
                    {showAttemptScores && (
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-3 text-xs">
                            {attemptHistory.length === 0 ? (
                                <p className="muted-text">No attempts yet.</p>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {attemptHistory.map((attempt) => (
                                        <span
                                            key={`${attempt.attempt}-${attempt.completed_at}`}
                                            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-2 py-1 font-semibold"
                                        >
                                            A{attempt.attempt}: {attempt.score}/{attempt.total} ({attempt.percentage}%)
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
                {tabs.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${activeTab === tab.id ? 'bg-[var(--primary)] text-white shadow-lg' : 'surface-card hover:shadow-md'}`}>
                        {tab.label}
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
                            <span>Warning:</span>
                            <span>Leaving fullscreen or switching tabs will prompt an exam quit confirmation.</span>
                        </div>
                    )}
                    {showLeaveWarning && !submitted && practiceQuizStarted && (
                        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-[2px]">
                            <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                                <h3 className="text-lg font-bold text-[var(--text)]">Exit Test?</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                                    You are attempting to leave the test. Do you want to quit the exam?
                                </p>
                                {!isAdminView && (
                                    <p className="mt-2 text-xs text-[var(--muted)]">
                                        Back to Test warnings: {backToTestCount}/{MAX_BACK_TO_TEST}. On the third warning, the quiz is terminated.
                                    </p>
                                )}
                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                                    <button
                                        type="button"
                                        onClick={handleQuitExam}
                                        className="quick-btn danger w-full sm:w-auto"
                                    >
                                        Quit Exam
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleBackToTest}
                                        className="quick-btn w-full sm:w-auto"
                                    >
                                        Back to Test
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {quizQs.length === 0 && <p className="muted-text surface-card p-6 text-center">No quiz questions found.</p>}

                    {/* Results */}
                    {submitted && quizQs.length > 0 && (
                        <div className="space-y-6">
                            <div className={`surface-card p-6 text-center border-2 ${submissionMode === 'completed' && score === quizQs.length ? 'border-green-500' : 'border-[var(--primary)]'}`}>
                                <h2 className="text-2xl font-bold">Practice Quiz Result</h2>
                                {submissionMode === 'completed' ? (
                                    <>
                                        <p className="mt-2 text-3xl font-bold">
                                            <span className={score === quizQs.length ? 'text-green-400' : 'text-[var(--primary)]'}>
                                                {score}/{quizQs.length}
                                            </span>
                                        </p>
                                        <p className="mt-1 text-sm muted-text">Score based on first-attempt accuracy</p>
                                        <p className="mt-2 text-sm muted-text">
                                            Running average: {averageScore.toFixed(2)}%
                                        </p>
                                        {!isAdminView && !resultPersisted && (
                                            <p className="mt-3 rounded-xl bg-red-100 px-3 py-2 text-sm font-semibold text-red-700">
                                                Unable to save this attempt to the database.
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <p className="mt-3 rounded-xl bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700">
                                        This attempt was terminated and no score details are shown.
                                    </p>
                                )}
                                <div className="mt-4 flex flex-wrap justify-center gap-3">
                                    <button onClick={handleTryAgain} className="quick-btn">
                                        Try Again (New Questions)
                                    </button>
                                    {submissionMode === 'completed' && nextDayNumber && eligibleToUnlock && (
                                        <Link href={`/dashboard/day/${nextDayNumber}/recap`} className="quick-btn success">
                                            Continue to Day {nextDayNumber}
                                        </Link>
                                    )}
                                    {submissionMode === 'completed' && nextDayNumber && !eligibleToUnlock && (
                                        <p className="rounded-xl bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700">
                                            You need any attempt above {UNLOCK_PERCENTAGE}% to unlock Day {nextDayNumber}.
                                        </p>
                                    )}
                                    {!nextDayNumber && (
                                        <Link href="/dashboard" className="quick-btn success">Back to Dashboard</Link>
                                    )}
                                </div>
                            </div>
                            {submissionMode === 'completed' && reviewRows.filter(r => !r.isCorrect).length > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Missed on first attempt</h3>
                                    {reviewRows.filter(r => !r.isCorrect).map((row, idx) => (
                                        <div key={row.questionId} className="surface-card p-4 border-l-4 border-red-400">
                                            <p className="font-medium">{idx + 1}. {row.prompt}</p>
                                            {row.timedOut ? <p className="mt-2 text-sm text-orange-400">Time ran out</p>
                                                : <p className="mt-2 text-sm text-red-400">Your answer: {row.selected ?? '-'}</p>}
                                            <p className="text-sm text-green-400">Correct: {row.correct ?? '-'}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {submissionMode === 'completed' && (
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">All Questions</h3>
                                    {reviewRows.map((row, idx) => (
                                        <div key={row.questionId} className={`surface-card p-4 border-l-4 ${row.isCorrect ? 'border-green-400' : 'border-red-400'}`}>
                                            <p className="font-medium">{idx + 1}. {row.prompt}</p>
                                            {row.timedOut ? <p className="mt-2 text-sm text-orange-400">Time ran out</p>
                                                : <p className="mt-2 text-sm muted-text">Your answer: {row.selected ?? '-'}</p>}
                                            <p className="text-sm muted-text">Correct: {row.correct ?? '-'}</p>
                                            <p className={`text-sm font-semibold mt-1 ${row.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                                {row.isCorrect ? 'Correct' : row.timedOut ? 'Timed Out' : 'Incorrect'}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Pre-quiz info screen */}
                    {!submitted && !practiceQuizStarted && quizQs.length > 0 && (
                        <div className="surface-card p-6 md:p-8 space-y-6 border-2 border-purple-500/30">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl font-bold">Practice Box Quiz</h2>
                                <p className="text-sm muted-text">Read the instructions carefully before starting.</p>
                                {isAdminView && (
                                    <p className="text-xs font-semibold text-[var(--primary)]">
                                        Admin preview mode: anti-cheat restrictions are disabled.
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl bg-[var(--bg-soft)] p-4 flex items-start gap-3">
                                    <div>
                                        <p className="font-semibold text-sm">Total Questions</p>
                                        <p className="text-2xl font-bold text-[var(--primary)]">{quizQs.length}</p>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-[var(--bg-soft)] p-4 flex items-start gap-3">
                                    <div>
                                        <p className="font-semibold text-sm">Unlock Criteria</p>
                                        <p className="text-lg font-bold text-green-600">Any one attempt must be greater than {UNLOCK_PERCENTAGE}%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 space-y-3">
                                <p className="font-semibold text-sm">Instructions</p>
                                <ul className="space-y-2 text-sm muted-text list-none">
                                    <li>Each question has multiple options. Choose the best one.</li>
                                    <li>Score is based on <strong>first-attempt accuracy</strong>.</li>
                                    <li>Each question has a <strong>30-second timer</strong>.</li>
                                    <li><strong>Do NOT switch tabs</strong>. Warning popup appears before quit.</li>
                                    <li>Answers cannot be changed once selected.</li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    onClick={handleStartQuiz}
                                    className="quick-btn success flex-1 text-center"
                                >
                                    Start Quiz
                                </button>
                                <button
                                    onClick={() => setActiveTab('interview')}
                                    className="rounded-xl border-2 border-[var(--border)] px-6 py-2 font-semibold flex-1"
                                >
                                    Back
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
                                    <span className="text-xs muted-text">Time left</span>
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
                                            <p className="text-orange-400 font-semibold">Time&apos;s up. Moving in 2 seconds.</p>
                                            <p className="text-sm text-orange-400/80 mt-1">The correct answer is highlighted in green.</p>
                                        </div>
                                    )}
                                    {feedback === 'correct' && (
                                        <div className="mt-4 flex items-center gap-2 text-green-400 font-semibold">
                                            <span>Correct. Moving in 1 second.</span>
                                        </div>
                                    )}
                                    {feedback === 'wrong' && firstAttempt[currentQ.id] !== '__TIMEOUT__' && (
                                        <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                                            <p className="text-red-400 font-semibold">That&apos;s not correct.</p>
                                            <p className="text-sm text-red-400/80 mt-1">Correct answer highlighted. Moving in 2 seconds.</p>
                                        </div>
                                    )}
                                    {!feedback && <p className="mt-4 text-xs muted-text italic">Select an answer to continue.</p>}
                                </div>
                            )}

                            <div className="surface-card p-4 text-center text-sm">
                                {feedback ? (
                                    <p className="font-semibold text-[var(--primary)]">
                                        {currentIndex < quizQs.length - 1
                                            ? `Next question in ${feedback === 'correct' ? 1 : 2} seconds...`
                                            : 'Submitting result...'}
                                    </p>
                                ) : (
                                    <p className="muted-text">Previous questions are locked. Select an answer to continue.</p>
                                )}
                                {!isAdminView && (
                                    <p className="mt-2 text-xs muted-text">
                                        Back-to-test warnings: {backToTestCount}/{MAX_BACK_TO_TEST}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
