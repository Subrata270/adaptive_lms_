'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import { ensureDayProgressRow, getAccessContext } from '@/lib/auth'
import { getOrderedDayNumbers, parseDayNumber } from '@/lib/helpers'
import { recapContent } from '@/lib/recapContent'
import { supabase } from '@/lib/supabase'

type QuizQuestion = { id: string; prompt: string; options: unknown; correct_answer: string | null }
type AttemptReview = { questionId: string; prompt: string; selected: string | null; correct: string | null; isCorrect: boolean }

// ── Validation helpers ────────────────────────────────────────────────────────
// Normalise options: only keep non-empty strings
const normalise = (options: unknown): string[] => {
  if (!Array.isArray(options)) return []
  return options.filter((o): o is string => typeof o === 'string' && o.trim().length > 0)
}

// A question is only shown if:
//  1. It has a non-empty prompt
//  2. It has at least 2 answer options
//  3. It has a correct_answer that actually appears in the options
const isValidQuestion = (q: QuizQuestion): boolean => {
  if (!q.prompt || q.prompt.trim().length === 0) return false
  const opts = normalise(q.options)
  if (opts.length < 2) return false
  if (!q.correct_answer || q.correct_answer.trim().length === 0) return false
  if (!opts.includes(q.correct_answer)) return false
  return true
}

// ── localStorage ──────────────────────────────────────────────────────────────
function storageKey(day: number) { return `quiz_progress_day${day}` }
type SavedProgress = { currentIndex: number; firstAttemptAnswers: Record<string, string>; correctlyAnswered: string[] }
function loadProgress(day: number): SavedProgress | null {
  try { const r = localStorage.getItem(storageKey(day)); return r ? JSON.parse(r) : null } catch { return null }
}
function saveProgress(day: number, p: SavedProgress) {
  try { localStorage.setItem(storageKey(day), JSON.stringify(p)) } catch { /** */ }
}
function clearProgress(day: number) {
  try { localStorage.removeItem(storageKey(day)) } catch { /** */ }
}

export default function QuizPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(() => parseDayNumber(params.dayNumber), [params.dayNumber])

  // Next day for post-quiz navigation
  const allDays = useMemo(() => getOrderedDayNumbers(recapContent as Record<string, unknown>), [])
  const dayIndex = useMemo(() => dayNumber !== null ? allDays.indexOf(dayNumber) : -1, [allDays, dayNumber])
  const nextDayNumber = useMemo(() => {
    if (dayNumber === null || dayIndex === -1) return null
    return dayIndex < allDays.length - 1 ? allDays[dayIndex + 1] : null
  }, [allDays, dayIndex, dayNumber])

  const BATCH_SIZE = 6
  // Is this the last day of a sprint? (0-indexed: 5, 11, 17...)
  const isSixthDay = dayIndex !== -1 && (dayIndex + 1) % BATCH_SIZE === 0
  // Which batch/sprint number is this? (1-based)
  const batchNumber = dayIndex !== -1 ? Math.ceil((dayIndex + 1) / BATCH_SIZE) : null

  // Data
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isAdminView, setIsAdminView] = useState(false)
  const [progressState, setProgressState] = useState({
    recapCompleted: false, interviewCompleted: false, scenarioCompleted: false, quizCompleted: false,
  })

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [firstAttemptAnswers, setFirstAttemptAnswers] = useState<Record<string, string>>({})
  const [correctlyAnswered, setCorrectlyAnswered] = useState<Set<string>>(new Set())
  const [attempted, setAttempted] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [reviewRows, setReviewRows] = useState<AttemptReview[]>([])

  // Derived
  const currentQuestion = questions[currentIndex]
  const currentOptions = normalise(currentQuestion?.options)
  const isCurrentAttempted = currentQuestion ? attempted.has(currentQuestion.id) : false
  const allAttempted = questions.length > 0 && questions.every(q => attempted.has(q.id))

  // Pre-quiz screen state
  const [quizStarted, setQuizStarted] = useState(false)

  // ── Fetch + restore ──────────────────────────────────────────────────────────
  useEffect(() => {
    let active = true
    const fetchQuiz = async () => {
      if (dayNumber === null) { setLoading(false); return }
      setLoading(true)
      const access = await getAccessContext()
      if (!access.user) { if (active) setLoading(false); return }

      if (access.role === 'admin') {
        setIsAdminView(true)
        setUserId(null)
        setIsUnlocked(true)
        setProgressState({
          recapCompleted: true,
          interviewCompleted: true,
          scenarioCompleted: true,
          quizCompleted: true,
        })
      } else {
        setUserId(access.user.id)
        await ensureDayProgressRow(access.user.id, dayNumber)

        const { data: progress, error: progressError } = await supabase
          .from('student_day_progress')
          .select('recap_completed,interview_completed,scenario_completed,quiz_completed')
          .eq('student_id', access.user.id).eq('day_number', dayNumber).maybeSingle()
        if (progressError) console.error('Failed to load progress', progressError)

        // ── Permanent unlock: Quiz stays accessible if scenario was ever completed
        // OR if quiz itself was already completed (revision-safe). ────────────────
        const unlocked =
          Boolean(progress?.scenario_completed) ||
          Boolean(progress?.quiz_completed)
        setIsUnlocked(unlocked)
        setProgressState({
          recapCompleted: Boolean(progress?.recap_completed),
          interviewCompleted: Boolean(progress?.interview_completed),
          scenarioCompleted: Boolean(progress?.scenario_completed),
          quizCompleted: Boolean(progress?.quiz_completed),
        })
        if (!unlocked) { if (active) setLoading(false); return }
      }

      // ── Fetch ALL questions — no hardcoded limit ──────────────────────────────
      const { data, error } = await supabase
        .from('questions').select('id,prompt,options,correct_answer')
        .eq('type', 'quiz').eq('day_number', dayNumber).eq('active', true)
        .order('created_at', { ascending: true }).order('id', { ascending: true })
      if (!active) return
      if (error) console.error('Failed to load quiz questions', error)

      // ── Filter: keep only fully valid questions ───────────────────────────────
      const raw = (data as QuizQuestion[] | null) ?? []
      const loaded = raw.filter(isValidQuestion)
      setQuestions(loaded)

      // Restore saved progress (reload persistence)
      const saved = loadProgress(dayNumber)
      if (saved && loaded.length > 0) {
        const validIds = new Set(loaded.map(q => q.id))
        const validFirst: Record<string, string> = {}
        for (const [id, ans] of Object.entries(saved.firstAttemptAnswers)) {
          if (validIds.has(id)) validFirst[id] = ans
        }
        const validCorrect = new Set(saved.correctlyAnswered.filter((id: string) => validIds.has(id)))
        setFirstAttemptAnswers(validFirst); setCorrectlyAnswered(validCorrect)
        setAttempted(new Set(Object.keys(validFirst)))
        const idx = Math.max(0, Math.min(saved.currentIndex, loaded.length - 1))
        setCurrentIndex(idx)
        const rq = loaded[idx]
        if (rq && validCorrect.has(rq.id)) { setSelectedOption(rq.correct_answer ?? null); setFeedback('correct') }
        else if (rq && validFirst[rq.id]) { setSelectedOption(validFirst[rq.id]); setFeedback('wrong') }
      }
      if (active) setLoading(false)
    }
    fetchQuiz()
    return () => { active = false }
  }, [dayNumber])

  // Auto-save progress
  useEffect(() => {
    if (dayNumber === null || questions.length === 0 || submitted) return
    saveProgress(dayNumber, {
      currentIndex,
      firstAttemptAnswers,
      correctlyAnswered: Array.from(correctlyAnswered),
    })
  }, [currentIndex, firstAttemptAnswers, correctlyAnswered, dayNumber, questions.length, submitted])

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const handleSelect = (option: string) => {
    if (!currentQuestion || attempted.has(currentQuestion.id)) return
    setSelectedOption(option)
    if (!firstAttemptAnswers[currentQuestion.id]) {
      setFirstAttemptAnswers(prev => ({ ...prev, [currentQuestion.id]: option }))
    }
    setAttempted(prev => { const s = new Set(prev); s.add(currentQuestion.id); return s })
    if (option === currentQuestion.correct_answer) {
      setFeedback('correct')
      setCorrectlyAnswered(prev => { const s = new Set(prev); s.add(currentQuestion.id); return s })
    } else {
      setFeedback('wrong')
    }
  }

  const navigateTo = (newIndex: number) => {
    const targetQ = questions[newIndex]
    if (!targetQ) return
    setCurrentIndex(newIndex)
    if (correctlyAnswered.has(targetQ.id)) { setSelectedOption(targetQ.correct_answer ?? null); setFeedback('correct') }
    else if (attempted.has(targetQ.id)) { setSelectedOption(firstAttemptAnswers[targetQ.id] ?? null); setFeedback('wrong') }
    else { setSelectedOption(null); setFeedback(null) }
  }

  const goPrev = () => { if (currentIndex > 0) navigateTo(currentIndex - 1) }
  const goNext = () => { if (isCurrentAttempted && currentIndex < questions.length - 1) navigateTo(currentIndex + 1) }

  const handleSubmit = async () => {
    if (dayNumber === null || !allAttempted) return
    if (!isAdminView && !userId) return
    let totalScore = 0
    const rows: AttemptReview[] = questions.map(q => {
      const firstAns = firstAttemptAnswers[q.id] ?? null
      const correct = q.correct_answer ?? null
      const isCorrect = firstAns !== null && firstAns === correct
      if (isCorrect) totalScore++
      return { questionId: q.id, prompt: q.prompt, selected: firstAns, correct, isCorrect }
    })
    setReviewRows(rows); setScore(totalScore); setSubmitted(true)
    clearProgress(dayNumber)

    if (isAdminView) {
      setProgressState(prev => ({ ...prev, quizCompleted: true }))
      return
    }

    const { error } = await supabase.from('student_day_progress')
      .upsert({ student_id: userId, day_number: dayNumber, quiz_completed: true, quiz_score: totalScore },
        { onConflict: 'student_id,day_number' })
    if (error) console.error('Failed to save quiz score', error)
    else {
      setProgressState(prev => ({ ...prev, quizCompleted: true }))
      // ── Permanent unlock: pre-create next day's row so it can never be re-locked ──
      if (nextDayNumber !== null && userId) {
        await ensureDayProgressRow(userId, nextDayNumber)
      }
    }
  }

  // ── Early returns ─────────────────────────────────────────────────────────────
  if (dayNumber === null) return <p>Invalid day number.</p>
  if (loading) return <p>Loading quiz...</p>

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Quiz - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">Complete scenario target to unlock quiz.</p>
          <Link href={`/dashboard/day/${dayNumber}/scenario`} className="quick-btn mt-4 inline-block">Go to Scenario</Link>
        </div>
      </div>
    )
  }

  // ── No valid questions — show informative message, do NOT open quiz ───────────
  if (questions.length === 0) {
    return (
      <div className="space-y-4">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />
        <div className="surface-card p-6 md:p-8 text-center space-y-4">
          <p className="text-4xl">📭</p>
          <h1 className="text-xl font-bold">Quiz - Day {dayNumber}</h1>
          <p className="muted-text text-sm font-medium">
            No quiz available for this section.
          </p>
          <p className="text-xs muted-text">
            Questions may be missing, incomplete, or have no valid answer options.
          </p>
          <Link href={`/dashboard/day/${dayNumber}`} className="quick-btn mt-2 inline-block">
            ← Back to Day {dayNumber}
          </Link>
        </div>
      </div>
    )
  }

  // ── Pre-quiz information screen ──────────────────────────────────────────────
  if (!quizStarted && !submitted) {
    return (
      <div className="space-y-6">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />

        <div className="surface-card p-6 md:p-8 space-y-6 border-2 border-[var(--primary)]/30">
          <div className="text-center space-y-2">
            <p className="text-4xl">🧠</p>
            <h1 className="text-2xl font-bold md:text-3xl">Quiz — Day {dayNumber}</h1>
            <p className="text-sm muted-text">Read the instructions carefully before starting.</p>
            {isAdminView && (
              <p className="text-xs font-semibold text-[var(--primary)]">
                Admin preview mode: progress is not written to student rows.
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Dynamic question count — based on valid questions only */}
            <div className="rounded-xl bg-[var(--bg-soft)] p-4 flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-sm">Valid Questions</p>
                <p className="text-2xl font-bold text-[var(--primary)]">{questions.length}</p>
                <p className="text-xs muted-text mt-0.5">
                  {questions.length} question{questions.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-[var(--bg-soft)] p-4 flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-sm">Passing Criteria</p>
                <p className="text-lg font-bold text-green-600">{Math.ceil(questions.length * 0.6)} / {questions.length} correct</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 space-y-3">
            <p className="font-semibold text-sm flex items-center gap-2"><span>📌</span> Instructions</p>
            <ul className="space-y-2 text-sm muted-text list-none">
              <li>✅ Each question has multiple options — choose the best one.</li>
              <li>📊 Score is calculated based on <strong>first-attempt accuracy</strong>.</li>
              <li>🔄 You can navigate between answered questions freely.</li>
              <li>✔️ You must answer all questions before submitting.</li>
              <li>🚫 Once an option is selected, it cannot be changed.</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setQuizStarted(true)}
              className="quick-btn success text-center"
            >
              ✅ Start Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Results ──────────────────────────────────────────────────────────────────
  if (submitted) {
    const mistakes = reviewRows.filter(r => !r.isCorrect)
    return (
      <div className="space-y-8">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz"
          progress={{ ...progressState, quizCompleted: true }} />

        <div className="surface-card p-5 md:p-6">
          <h1 className="text-2xl font-bold md:text-3xl">Quiz Complete — Day {dayNumber}</h1>
          <p className="mt-3 text-lg font-semibold">
            Score:{' '}
            <span className={score === questions.length ? 'text-green-600' : 'text-[var(--primary)]'}>
              {score}/{questions.length}
            </span>
          </p>
          <p className="text-sm muted-text mt-1">Based on first-attempt accuracy.</p>

          {/* Post-quiz navigation */}
          <div className="mt-5 flex flex-wrap gap-3">
            {isSixthDay && batchNumber ? (
              // 6th day: go to Practice Box — next day is locked until Practice Box is done
              <Link href={`/dashboard/practice/${batchNumber}`}
                className="quick-btn success">
                🔥 Continue to Practice Box {batchNumber}
              </Link>
            ) : (
              nextDayNumber && (
                <Link href={`/dashboard/day/${nextDayNumber}/recap`}
                  className="quick-btn success">
                  Continue to Day {nextDayNumber} →
                </Link>
              )
            )}
            <Link href="/dashboard" className="rounded-xl border-2 border-[var(--border)] px-4 py-2 font-semibold">
              Back to Dashboard
            </Link>
          </div>
        </div>

        {mistakes.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">❌ Questions you missed</h2>
            {mistakes.map((row, idx) => (
              <div key={row.questionId} className="surface-card p-4 border-l-4 border-red-400">
                <p className="font-medium">{idx + 1}. {row.prompt}</p>
                <p className="text-red-600 mt-2 text-sm">Your answer: {row.selected ?? 'Not attempted'}</p>
                <p className="text-green-700 text-sm">Correct: {row.correct ?? '—'}</p>
              </div>
            ))}
          </div>
        )}
        {mistakes.length === 0 && (
          <div className="surface-card p-5 text-center text-green-700 font-semibold text-lg">
            🎉 Perfect score! Every question correct on the first try.
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Questions</h2>
          {reviewRows.map((row, idx) => (
            <div key={row.questionId}
              className={`surface-card p-4 border-l-4 ${row.isCorrect ? 'border-green-400' : 'border-red-400'}`}>
              <p className="font-medium">{idx + 1}. {row.prompt}</p>
              <p className="mt-2 text-sm">Your answer: {row.selected ?? '—'}</p>
              <p className="text-sm">Correct: {row.correct ?? '—'}</p>
              <p className={`text-sm font-semibold mt-1 ${row.isCorrect ? 'text-green-700' : 'text-red-600'}`}>
                {row.isCorrect ? '✓ Correct' : '✗ Incorrect'}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── Quiz in progress ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Quiz — Day {dayNumber}</h1>
        <p className="mt-1 text-sm muted-text">Score is based on first-attempt accuracy.</p>
        {isAdminView && (
          <p className="mt-2 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
            Admin preview mode: section unlocked and progress writes disabled.
          </p>
        )}
      </div>

      <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />

      {/* Progress bar */}
      <div className="surface-card p-4 space-y-2">
        <div className="flex justify-between text-sm muted-text">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{attempted.size} / {questions.length} answered</span>
        </div>
        <div className="w-full bg-[var(--bg-soft)] rounded-full h-2">
          <div className="h-2 rounded-full bg-[var(--primary)] transition-all duration-300"
            style={{ width: `${(attempted.size / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className={`surface-card p-5 border-l-4 transition-colors duration-200 ${feedback === 'correct' ? 'border-green-500' :
        feedback === 'wrong' ? 'border-red-500' : 'border-transparent'
        }`}>
        <p className="font-semibold text-base mb-5 leading-snug">
          {currentIndex + 1}. {currentQuestion.prompt}
        </p>
        <div className="space-y-3">
          {currentOptions.map(option => {
            const isSel = selectedOption === option
            const isCorrect = option === currentQuestion.correct_answer
            let s = 'border-2 border-[var(--border)] bg-[var(--bg-soft)]'
            if (isSel) {
              if (feedback === 'correct') s = 'border-2 border-green-500 bg-green-50 text-green-800'
              else if (feedback === 'wrong') s = 'border-2 border-red-500 bg-red-50 text-red-700'
              else s = 'border-2 border-[var(--primary)] bg-[color-mix(in_oklab,var(--primary)_8%,white)]'
            }
            if (feedback === 'wrong' && isCorrect && !correctlyAnswered.has(currentQuestion.id)) {
              s = 'border-2 border-green-500 bg-green-50 text-green-800'
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
        {feedback === 'correct' && (
          <div className="mt-4 flex items-center gap-2 text-green-700 font-semibold">
            <span className="text-xl">✅</span><span>Correct! Proceed to the next question.</span>
          </div>
        )}
        {feedback === 'wrong' && (
          <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200">
            <p className="text-red-700 font-semibold">❌ That&apos;s not correct.</p>
            <p className="text-sm text-red-600 mt-1">Correct answer highlighted. You can proceed.</p>
          </div>
        )}
        {!feedback && <p className="mt-4 text-xs muted-text italic">Select an answer to continue.</p>}
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={goPrev} disabled={currentIndex === 0}
          className="rounded-xl border-2 border-[var(--border)] px-4 py-2 font-semibold transition-opacity disabled:opacity-40">
          ← Previous
        </button>
        {currentIndex < questions.length - 1 ? (
          <button onClick={goNext} disabled={!isCurrentAttempted}
            className="quick-btn disabled:opacity-40 disabled:cursor-not-allowed">Next →</button>
        ) : (
          <button onClick={handleSubmit} disabled={!allAttempted}
            className="quick-btn success disabled:opacity-40 disabled:cursor-not-allowed">Finish Quiz</button>
        )}
        {!isCurrentAttempted && <span className="text-xs muted-text italic">Answer to proceed.</span>}
      </div>

      {allAttempted && (
        <div className="surface-card p-4 text-center border-2 border-green-500 rounded-xl text-green-700 font-semibold">
          🎉 All answered! Go to the last question and click <strong>Finish Quiz</strong>.
        </div>
      )}
    </div>
  )
}
