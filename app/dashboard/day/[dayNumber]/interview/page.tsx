'use client'

import Link from 'next/link'
import { Fragment, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import {
  INTERVIEW_REQUIRED_COUNT,
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

export default function InterviewPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(() => parseDayNumber(params.dayNumber), [params.dayNumber])

  // ── Shared cache — no extra API call ────────────────────────────────────────
  const {
    access,
    progress,
    patchProgress,
    interviewQuestions,
    interviewTotalCount,
    appendInterviewQuestions,
  } = useDayCache()

  const [loadingMore, setLoadingMore] = useState(false)

  // Parse checked state from cache
  const checked = useMemo(
    () => normalizeStringArray(progress?.interview_checked),
    [progress?.interview_checked]
  )

  const targetCount = Math.min(INTERVIEW_REQUIRED_COUNT, interviewTotalCount)
  const hasMore = interviewQuestions.length < interviewTotalCount
  const isComplete = targetCount > 0 && checked.length >= targetCount

  // ── Unlock logic (mirrors what DayCacheProvider already computed) ───────────
  const isUnlocked =
    access.isAdmin ||
    Boolean(progress?.recap_completed) ||
    Boolean(progress?.interview_completed) ||
    Boolean(progress?.scenario_completed) ||
    Boolean(progress?.quiz_completed)

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const toggle = async (questionId: string) => {
    if (access.isAdmin || !access.userId || dayNumber === null) return

    const updated = checked.includes(questionId)
      ? checked.filter((id) => id !== questionId)
      : [...checked, questionId]

    const allDone = Math.min(INTERVIEW_REQUIRED_COUNT, interviewTotalCount) > 0 &&
      updated.length >= Math.min(INTERVIEW_REQUIRED_COUNT, interviewTotalCount)

    // Optimistic update
    patchProgress({
      interview_checked: updated,
      ...(allDone ? { interview_completed: true } : {}),
    })

    const { error } = await supabase
      .from('student_day_progress')
      .upsert(
        {
          student_id: access.userId,
          day_number: dayNumber,
          interview_checked: updated,
          ...(allDone ? { interview_completed: true } : {}),
        },
        { onConflict: 'student_id,day_number' }
      )

    if (error) {
      console.error('Failed to sync interview completion', error)
      // Rollback
      patchProgress({ interview_checked: checked })
    }
  }

  const loadMore = async () => {
    if (!hasMore || loadingMore || dayNumber === null) return
    setLoadingMore(true)

    const offset = interviewQuestions.length
    const { data, error, count } = await supabase
      .from('questions')
      .select('id,prompt,correct_answer', { count: 'exact' })
      .eq('type', 'interview')
      .eq('day_number', dayNumber)
      .eq('active', true)
      .order('created_at', { ascending: true })
      .order('id', { ascending: true })
      .range(offset, offset + 4)

    if (error) {
      console.error('Failed to load more interview questions', error)
    } else {
      appendInterviewQuestions(
        (data as { id: string; prompt: string; correct_answer: string | null }[] | null) ?? [],
        count ?? interviewTotalCount
      )
    }
    setLoadingMore(false)
  }

  // ── Early returns ─────────────────────────────────────────────────────────────
  if (dayNumber === null) return <p>Invalid day number.</p>

  if (access.loading) return <p>Loading interview questions...</p>

  const progressState = {
    recapCompleted: Boolean(progress?.recap_completed),
    interviewCompleted: Boolean(progress?.interview_completed) || isComplete,
    scenarioCompleted: Boolean(progress?.scenario_completed),
    quizCompleted: Boolean(progress?.quiz_completed),
  }

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection="interview"
          progress={progressState}
        />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Interview - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">
            Complete all recap checkboxes to unlock interview.
          </p>
          <Link
            href={`/dashboard/day/${dayNumber}/recap`}
            className="quick-btn mt-4 inline-block"
          >
            Go to Recap
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Interview - Day {dayNumber}</h1>
        <p className="mt-2 text-sm muted-text">
          Check completed questions to unlock scenario.
        </p>
        {access.isAdmin && (
          <p className="mt-2 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
            Admin preview mode: all sections unlocked and progress writes disabled.
          </p>
        )}
      </div>

      <LearningPathNav
        dayNumber={dayNumber}
        currentSection="interview"
        progress={progressState}
      />

      <p className="text-sm muted-text">
        Completed {checked.length} of {targetCount || 0}
      </p>

      {interviewQuestions.length === 0 && <p>No interview questions available.</p>}

      {interviewQuestions.map((q, index) => {
        const isItemChecked = checked.includes(q.id)
        const answer = (q.correct_answer ?? '').trim()
        return (
          <div
            key={q.id}
            className={`surface-card p-4 relative overflow-hidden transition-all duration-200 ${isItemChecked
              ? 'border-green-500 shadow-[0_0_0_1.5px_rgba(16,185,129,0.35),var(--shadow-soft)]'
              : ''
              }`}
          >
            {/* Left green accent bar */}
            <span
              className={`absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-200 ${isItemChecked ? 'bg-green-500' : 'bg-transparent'
                }`}
            />

            <h3 className="font-medium pl-1">
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

            <label className="mt-3 inline-flex items-center gap-2 cursor-pointer group pl-1">
              <input
                type="checkbox"
                className="hover-checkbox"
                checked={isItemChecked}
                onChange={() => toggle(q.id)}
                disabled={access.isAdmin}
              />
              <span className="group-hover:text-[var(--primary)] transition-colors duration-150 flex items-center gap-1">
                Got It
                {/* Tick appears only when THIS container is checked */}
                {isItemChecked && (
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2.5,8.5 6,12 13.5,4" />
                  </svg>
                )}
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
            href={`/dashboard/day/${dayNumber}/scenario`}
            className="inline-block rounded-xl px-4 py-2 font-semibold text-white bg-green-600"
          >
            Continue to Scenario
          </Link>
        )}

        {!hasMore && !isComplete && interviewQuestions.length > 0 && (
          <p className="text-sm muted-text italic">
            Mark all questions as completed to continue.
          </p>
        )}
      </div>
    </div>
  )
}
