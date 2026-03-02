'use client'

import Link from 'next/link'
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import { ensureDayProgressRow, getAccessContext } from '@/lib/auth'
import {
  SCENARIO_REQUIRED_COUNT,
  mergeUniqueById,
  normalizeStringArray,
  parseDayNumber,
} from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

const PAGE_SIZE = 5

type Question = {
  id: string
  prompt: string
  correct_answer: string | null
}

const parseMultiline = (value: string): string[] =>
  value
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n|\r/g, '\n')
    .split('\n')

export default function ScenarioPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(
    () => parseDayNumber(params.dayNumber),
    [params.dayNumber]
  )

  const [questions, setQuestions] = useState<Question[]>([])
  const [checked, setChecked] = useState<string[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isAdminView, setIsAdminView] = useState(false)
  const [progressState, setProgressState] = useState({
    recapCompleted: false,
    interviewCompleted: false,
    scenarioCompleted: false,
    quizCompleted: false,
  })

  const targetCount = Math.min(SCENARIO_REQUIRED_COUNT, totalCount)
  const hasMore = questions.length < totalCount
  const isComplete = targetCount > 0 && checked.length >= targetCount

  const loadQuestions = useCallback(
    async (offset: number, append: boolean) => {
      if (dayNumber === null) return

      const { data, error, count } = await supabase
        .from('questions')
        .select('*', { count: 'exact' })
        .eq('type', 'scenario')
        .eq('day_number', dayNumber)
        .eq('active', true)
        .order('created_at', { ascending: true })
        .order('id', { ascending: true })
        .range(offset, offset + PAGE_SIZE - 1)

      if (error) {
        console.error('Failed to load scenario questions', error)
        return
      }

      const incoming = (data as Question[] | null) ?? []
      setTotalCount(count ?? 0)
      setQuestions((prev) =>
        append ? mergeUniqueById(prev, incoming) : incoming
      )
    },
    [dayNumber]
  )

  useEffect(() => {
    let active = true

    const load = async () => {
      if (dayNumber === null) {
        setLoading(false)
        return
      }

      setLoading(true)
      const access = await getAccessContext()
      if (!access.user) {
        if (active) setLoading(false)
        return
      }

      if (access.role === 'admin') {
        setIsAdminView(true)
        setIsUnlocked(true)
        setUserId(null)
        setChecked([])
        setProgressState({
          recapCompleted: true,
          interviewCompleted: true,
          scenarioCompleted: true,
          quizCompleted: true,
        })
        await loadQuestions(0, false)
        if (active) setLoading(false)
        return
      }

      await ensureDayProgressRow(access.user.id, dayNumber)

      const { data: progress, error } = await supabase
        .from('student_day_progress')
        .select(
          'recap_completed,interview_completed,scenario_checked,scenario_completed,quiz_completed'
        )
        .eq('student_id', access.user.id)
        .eq('day_number', dayNumber)
        .maybeSingle()

      if (!active) return
      if (error) {
        console.error('Failed to load scenario progress', error)
      }

      // ── Permanent unlock: Scenario stays accessible if interview was ever completed
      // OR if any downstream section was ever unlocked (revision-safe). ────────────
      const unlocked =
        Boolean(progress?.interview_completed) ||
        Boolean(progress?.scenario_completed) ||
        Boolean(progress?.quiz_completed)
      setIsUnlocked(unlocked)
      setUserId(access.user.id)
      setChecked(normalizeStringArray(progress?.scenario_checked))
      setProgressState({
        recapCompleted: Boolean(progress?.recap_completed),
        interviewCompleted: Boolean(progress?.interview_completed),
        scenarioCompleted: Boolean(progress?.scenario_completed),
        quizCompleted: Boolean(progress?.quiz_completed),
      })

      if (unlocked) {
        await loadQuestions(0, false)
      }

      if (active) setLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [dayNumber, loadQuestions])

  useEffect(() => {
    const syncCompletion = async () => {
      if (isAdminView || !userId || dayNumber === null || !isUnlocked) return
      // ── Permanent unlock: only ever write true, never revert to false ────────────
      if (!isComplete) return

      const { error } = await supabase
        .from('student_day_progress')
        .upsert(
          {
            student_id: userId,
            day_number: dayNumber,
            scenario_checked: checked,
            scenario_completed: true,
          },
          { onConflict: 'student_id,day_number' }
        )

      if (error) {
        console.error('Failed to sync scenario completion', error)
        return
      }

      setProgressState((prev) => ({
        ...prev,
        scenarioCompleted: true,
      }))
    }

    syncCompletion()
  }, [checked, dayNumber, isAdminView, isComplete, isUnlocked, userId])

  const toggle = (questionId: string) => {
    setChecked((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    )
  }

  const loadMore = async () => {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    await loadQuestions(questions.length, true)
    setLoadingMore(false)
  }

  if (dayNumber === null) {
    return <p>Invalid day number.</p>
  }

  if (loading) {
    return <p>Loading scenario questions...</p>
  }

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection="scenario"
          progress={{
            recapCompleted: progressState.recapCompleted,
            interviewCompleted: progressState.interviewCompleted,
            scenarioCompleted: progressState.scenarioCompleted,
            quizCompleted: progressState.quizCompleted,
          }}
        />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Scenario - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">
            Complete interview target to unlock scenario.
          </p>
          <Link
            href={`/dashboard/day/${dayNumber}/interview`}
            className="quick-btn mt-4 inline-block"
          >
            Go to Interview
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Scenario - Day {dayNumber}</h1>
        <p className="mt-2 text-sm muted-text">
          Complete the required scenario practice to unlock quiz.
        </p>
        {isAdminView && (
          <p className="mt-2 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
            Admin preview mode: all sections unlocked and progress writes disabled.
          </p>
        )}
      </div>

      <LearningPathNav
        dayNumber={dayNumber}
        currentSection="scenario"
        progress={{
          recapCompleted: progressState.recapCompleted,
          interviewCompleted: progressState.interviewCompleted,
          scenarioCompleted: progressState.scenarioCompleted || isComplete,
          quizCompleted: progressState.quizCompleted,
        }}
      />

      <p className="text-sm muted-text">
        Completed {checked.length} of {targetCount || 0}
      </p>

      {questions.length === 0 && <p>No scenario questions available.</p>}

      {questions.map((q, index) => {
        const answer = (q.correct_answer ?? '').trim()
        return (
          <div key={q.id} className="surface-card p-5">
            <h3 className="font-semibold mb-2">
              {index + 1}. {q.prompt}
            </h3>

            {answer.length > 0 && (
              <div className="mt-2 rounded-xl bg-[var(--bg-soft)] p-3">
                <p className="text-sm font-semibold leading-relaxed">
                  {parseMultiline(answer).map((line, lineIndex, lines) => (
                    <Fragment key={`${q.id}-answer-${lineIndex}`}>
                      {line}
                      {lineIndex < lines.length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              </div>
            )}

            <label className="inline-flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="hover-checkbox"
                checked={checked.includes(q.id)}
                onChange={() => toggle(q.id)}
              />
              <span className="group-hover:text-[var(--primary)] transition-colors duration-150">Got It</span>
            </label>
          </div>
        )
      })}

      <div className="mt-1 flex flex-wrap items-center gap-4">
        {hasMore && (
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="quick-btn disabled:opacity-60"
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        )}

        {!hasMore && isComplete && (
          <Link
            href={`/dashboard/day/${dayNumber}/quiz`}
            className="inline-block rounded-xl px-4 py-2 font-semibold text-white bg-green-600"
          >
            Continue to Quiz
          </Link>
        )}

        {!hasMore && !isComplete && questions.length > 0 && (
          <p className="text-sm muted-text italic">Mark all questions as completed to continue.</p>
        )}
      </div>
    </div>
  )
}
