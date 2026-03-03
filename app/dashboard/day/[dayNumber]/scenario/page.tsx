'use client'

import Link from 'next/link'
import { Fragment, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import {
  SCENARIO_REQUIRED_COUNT,
  normalizeStringArray,
  parseDayNumber,
} from '@/lib/helpers'
import { supabase } from '@/lib/supabase'
import { useDayCache } from '@/lib/dayCache'

const parseMultiline = (value: string): string[] =>
  value
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n|\r/g, '\n')
    .split('\n')

export default function ScenarioPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(() => parseDayNumber(params.dayNumber), [params.dayNumber])

  // ── Shared cache — no extra API call ────────────────────────────────────────
  const {
    access,
    progress,
    patchProgress,
    scenarioQuestions,
    scenarioTotalCount,
    appendScenarioQuestions,
  } = useDayCache()

  const [loadingMore, setLoadingMore] = useState(false)

  // Parse checked state from cache
  const checked = useMemo(
    () => normalizeStringArray(progress?.scenario_checked),
    [progress?.scenario_checked]
  )

  const targetCount = Math.min(SCENARIO_REQUIRED_COUNT, scenarioTotalCount)
  const hasMore = scenarioQuestions.length < scenarioTotalCount
  const isComplete = targetCount > 0 && checked.length >= targetCount

  // ── Unlock logic ─────────────────────────────────────────────────────────────
  const isUnlocked =
    access.isAdmin ||
    Boolean(progress?.interview_completed) ||
    Boolean(progress?.scenario_completed) ||
    Boolean(progress?.quiz_completed)

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const toggle = async (questionId: string) => {
    if (access.isAdmin || !access.userId || dayNumber === null) return

    const updated = checked.includes(questionId)
      ? checked.filter((id) => id !== questionId)
      : [...checked, questionId]

    const allDone =
      Math.min(SCENARIO_REQUIRED_COUNT, scenarioTotalCount) > 0 &&
      updated.length >= Math.min(SCENARIO_REQUIRED_COUNT, scenarioTotalCount)

    // Optimistic update
    patchProgress({
      scenario_checked: updated,
      ...(allDone ? { scenario_completed: true } : {}),
    })

    const { error } = await supabase
      .from('student_day_progress')
      .upsert(
        {
          student_id: access.userId,
          day_number: dayNumber,
          scenario_checked: updated,
          ...(allDone ? { scenario_completed: true } : {}),
        },
        { onConflict: 'student_id,day_number' }
      )

    if (error) {
      console.error('Failed to sync scenario completion', error)
      // Rollback
      patchProgress({ scenario_checked: checked })
    }
  }

  const loadMore = async () => {
    if (!hasMore || loadingMore || dayNumber === null) return
    setLoadingMore(true)

    const offset = scenarioQuestions.length
    const { data, error, count } = await supabase
      .from('questions')
      .select('id,prompt,correct_answer', { count: 'exact' })
      .eq('type', 'scenario')
      .eq('day_number', dayNumber)
      .eq('active', true)
      .order('created_at', { ascending: true })
      .order('id', { ascending: true })
      .range(offset, offset + 4)

    if (error) {
      console.error('Failed to load more scenario questions', error)
    } else {
      appendScenarioQuestions(
        (data as { id: string; prompt: string; correct_answer: string | null }[] | null) ?? [],
        count ?? scenarioTotalCount
      )
    }
    setLoadingMore(false)
  }

  // ── Early returns ─────────────────────────────────────────────────────────────
  if (dayNumber === null) return <p>Invalid day number.</p>

  if (access.loading) return <p>Loading scenario questions...</p>

  const progressState = {
    recapCompleted: Boolean(progress?.recap_completed),
    interviewCompleted: Boolean(progress?.interview_completed),
    scenarioCompleted: Boolean(progress?.scenario_completed) || isComplete,
    quizCompleted: Boolean(progress?.quiz_completed),
  }

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection="scenario"
          progress={progressState}
        />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Scenario - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">Complete interview target to unlock scenario.</p>
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
        {access.isAdmin && (
          <p className="mt-2 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
            Admin preview mode: all sections unlocked and progress writes disabled.
          </p>
        )}
      </div>

      <LearningPathNav
        dayNumber={dayNumber}
        currentSection="scenario"
        progress={progressState}
      />

      <p className="text-sm muted-text">
        Completed {checked.length} of {targetCount || 0}
      </p>

      {scenarioQuestions.length === 0 && <p>No scenario questions available.</p>}

      {scenarioQuestions.map((q, index) => {
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
                disabled={access.isAdmin}
              />
              <span className="group-hover:text-[var(--primary)] transition-colors duration-150">
                Got It
              </span>
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

        {!hasMore && !isComplete && scenarioQuestions.length > 0 && (
          <p className="text-sm muted-text italic">
            Mark all questions as completed to continue.
          </p>
        )}
      </div>
    </div>
  )
}
