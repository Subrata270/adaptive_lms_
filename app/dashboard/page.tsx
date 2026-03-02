'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { getAccessContext } from '@/lib/auth'
import { getOrderedDayNumbers } from '@/lib/helpers'
import { recapContent } from '@/lib/recapContent'
import { supabase } from '@/lib/supabase'

const BATCH_SIZE = 6
const UNLOCK_PERCENTAGE = 70
const PRACTICE_SCORE_COLUMN = 'Practice Quiz Scores' as const


type Progress = {
  day_number: number | null
  recap_completed: boolean | null
  interview_completed: boolean | null
  scenario_completed: boolean | null
  quiz_completed: boolean | null
  [PRACTICE_SCORE_COLUMN]?: unknown
}

type PracticeAttemptLite = {
  percentage: number
  score: number
  total: number
}

const parsePracticeAttempts = (value: unknown): PracticeAttemptLite[] => {
  if (!Array.isArray(value)) return []
  return value
    .map((entry) => {
      if (!entry || typeof entry !== 'object') return null
      const item = entry as Record<string, unknown>
      const score = Number(item.score ?? 0)
      const total = Number(item.total ?? 0)
      if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return null
      const percentage = Number(item.percentage ?? Math.round((score / total) * 100))
      return {
        score,
        total,
        percentage: Number.isFinite(percentage) ? percentage : Math.round((score / total) * 100),
      } satisfies PracticeAttemptLite
    })
    .filter((entry): entry is PracticeAttemptLite => entry !== null)
}

const hasPassingAttempt = (attempts: PracticeAttemptLite[]): boolean =>
  attempts.some((attempt) => attempt.percentage > UNLOCK_PERCENTAGE)

export default function DashboardPage() {
  const days = useMemo(
    () => getOrderedDayNumbers(recapContent as Record<string, unknown>),
    []
  )

  const [progressByDay, setProgressByDay] = useState<Record<number, Progress>>({})
  const [loading, setLoading] = useState(true)
  const [pbDoneMap, setPbDoneMap] = useState<Record<number, boolean>>({})
  const [isAdminView, setIsAdminView] = useState(false)

  const batches = useMemo(() => {
    const grouped: number[][] = []
    for (let i = 0; i < days.length; i += BATCH_SIZE) {
      grouped.push(days.slice(i, i + BATCH_SIZE))
    }
    return grouped
  }, [days])

  useEffect(() => {
    const loadProgress = async () => {
      const access = await getAccessContext()
      if (!access.user) {
        setLoading(false)
        return
      }

      if (access.role === 'admin') {
        setIsAdminView(true)
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('student_day_progress')
        .select(
          'day_number,recap_completed,interview_completed,scenario_completed,quiz_completed,"Practice Quiz Scores"'
        )
        .eq('student_id', access.user.id)

      if (error) {
        console.error('Failed to load dashboard progress', error)
        setLoading(false)
        return
      }

      const mapped: Record<number, Progress> = {}
      if (data) {
        for (const row of data as Progress[]) {
          if (row.day_number && row.day_number > 0) {
            mapped[row.day_number] = row
          }
        }
      }

      setProgressByDay(mapped)
      const practiceMap: Record<number, boolean> = {}
      for (let index = 0; index < batches.length; index++) {
        const sprintNumber = index + 1
        const batch = batches[index]
        const lastDay = batch[batch.length - 1]
        const row = (data as Progress[] | null)?.find((item) => Number(item.day_number) === lastDay)
        const attempts = parsePracticeAttempts(row?.[PRACTICE_SCORE_COLUMN])
        practiceMap[sprintNumber] = hasPassingAttempt(attempts)
      }
      setPbDoneMap(practiceMap)
      setLoading(false)
    }

    loadProgress()
  }, [batches])

  // Count how many of the 4 steps are done for a day
  const getCompletedCount = (row?: Progress): number => {
    if (!row) return 0
    let count = 0
    if (row.recap_completed) count++
    if (row.interview_completed) count++
    if (row.scenario_completed) count++
    if (row.quiz_completed) count++
    return count
  }

  const isDayFullyDone = (dayNumber: number) =>
    getCompletedCount(progressByDay[dayNumber]) === 4

  // A batch is unlocked if it's the first batch OR the previous batch is 100% complete
  const isBatchUnlocked = (batchIndex: number): boolean => {
    if (isAdminView) return true
    if (batchIndex === 0) return true
    const prevBatch = batches[batchIndex - 1]
    const prevBatchDone = prevBatch.every((dayNum) => isDayFullyDone(dayNum))
    if (!prevBatchDone) return false
    // Also need practice box for prevBatch to be done
    const prevBatchId = batchIndex // batchIndex is 0-based, prevBatch is batchIndex (1-based = batchIndex)
    return pbDoneMap[prevBatchId] === true
  }

  // How many batches are currently visible (unlocked or the first locked one as "next up")
  const firstLockedBatchIndex = isAdminView
    ? -1
    : batches.findIndex((_, i) => !isBatchUnlocked(i))
  // Show all unlocked batches + 0 hidden (don't show any locked batch cards)
  const visibleBatches = isAdminView
    ? batches
    : firstLockedBatchIndex === -1
      ? batches
      : batches.slice(0, firstLockedBatchIndex)

  // Stats
  const totalDays = days.length
  const fullyCompletedDays = days.filter(isDayFullyDone).length
  const inProgressDays = days.filter((d) => {
    const c = getCompletedCount(progressByDay[d])
    return c > 0 && c < 4
  }).length

  // Next batch info (for the "locked next batch" teaser)
  const nextLockedBatch = firstLockedBatchIndex !== -1 ? batches[firstLockedBatchIndex] : null
  const currentBatch = firstLockedBatchIndex > 0
    ? batches[firstLockedBatchIndex - 1]
    : batches[0]
  const currentBatchDoneCount = currentBatch?.filter(isDayFullyDone).length ?? 0
  const currentBatchTotal = currentBatch?.length ?? 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Your Learning Days</h1>
        <p className="mt-2 text-sm muted-text">
          Complete all {BATCH_SIZE} days in a batch to unlock the next batch.
        </p>
        {isAdminView && (
          <p className="mt-2 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
            Admin preview mode: all days are unlocked for review.
          </p>
        )}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="interactive-card reveal-up p-4" style={{ animationDelay: '70ms' }}>
          <p className="text-xs muted-text">Completed</p>
          <p className="mt-1 text-2xl font-bold">{fullyCompletedDays}</p>
        </div>
        <div className="interactive-card reveal-up p-4" style={{ animationDelay: '140ms' }}>
          <p className="text-xs muted-text">In Progress</p>
          <p className="mt-1 text-2xl font-bold">{inProgressDays}</p>
        </div>
      </div>

      {loading ? (
        <div className="surface-card p-8 text-center muted-text">Loading your progress...</div>
      ) : (
        <>
          {/* Render each visible batch */}
          {visibleBatches.map((batch, batchIndex) => {
            const batchDone = batch.every(isDayFullyDone)

            return (
              <section key={batchIndex} className="space-y-3">
                {/* Batch label */}
                <div className="flex items-center gap-3">
                  <h2 className="text-base font-semibold">
                    Sprint {batchIndex + 1}
                    <span className="ml-2 text-sm font-normal muted-text">
                      (Days {batch[0]}-{batch[batch.length - 1]})
                    </span>
                  </h2>
                  {batchDone && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      Complete
                    </span>
                  )}
                  {!batchDone && batchIndex < visibleBatches.length && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                      {batch.filter(isDayFullyDone).length}/{batch.length} days done
                    </span>
                  )}
                </div>

                {/* Day cards for this batch */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {batch.map((dayNumber, indexInBatch) => {
                    const globalIndex = batchIndex * BATCH_SIZE + indexInBatch
                    const progress = progressByDay[dayNumber]
                    const completedCount = getCompletedCount(progress)
                    const completionPct = Math.round((completedCount / 4) * 100)
                    const isFullyDone = completedCount === 4

                    // â”€â”€ Permanent Unlock Logic â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
                    // A day is unlocked if ANY of these are true:
                    // 1. It's the very first day (globalIndex === 0)
                    // 2. Its DB row exists (pre-created when prev day quiz was submitted)
                    //    â†’ Row existence = permanently unlocked, can NEVER be re-locked
                    // 3. Previous day fully completed (backward compatibility)
                    const prevDayNumber = globalIndex > 0 ? days[globalIndex - 1] : null
                    const prevDayCompleted =
                      prevDayNumber === null
                        ? true
                        : getCompletedCount(progressByDay[prevDayNumber]) === 4
                    const rowExists = progressByDay[dayNumber] !== undefined

                    // Practice box gate for first day of a non-first batch
                    const isFirstDayOfBatch = indexInBatch === 0
                    const practiceBoxRequired = isFirstDayOfBatch && batchIndex > 0
                    const practiceBoxOk = isAdminView
                      ? true
                      : practiceBoxRequired
                        ? pbDoneMap[batchIndex] === true
                        : true

                    const isUnlocked =
                      isAdminView ||
                      ((globalIndex === 0 || rowExists || prevDayCompleted) && practiceBoxOk)

                    if (!isUnlocked) {
                      return (
                        <div
                          key={dayNumber}
                          className="surface-card p-4 opacity-40 cursor-not-allowed select-none"
                          title="Complete the previous day to unlock"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-lg font-semibold">Day {dayNumber}</span>
                            <span className="text-xs font-semibold">LOCKED</span>
                          </div>
                          <p className="mt-1 text-xs text-center muted-text">Locked</p>
                          <div className="mt-3 h-2 w-full rounded-full bg-gray-300">
                            <div className="h-2 rounded-full bg-gray-400" style={{ width: '0%' }} />
                          </div>
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={dayNumber}
                        href={`/dashboard/day/${dayNumber}`}
                        className={`surface-card p-4 hover:shadow-lg transition-shadow ${isFullyDone ? 'ring-2 ring-green-500' : ''
                          }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-lg font-semibold">Day {dayNumber}</p>
                          {isFullyDone && <span className="text-xs font-semibold text-green-700">Done</span>}
                        </div>
                        <p className="mt-1 text-xs text-center muted-text">
                          {completedCount}/4 completed
                        </p>
                        <div className="mt-3 h-2 w-full rounded-full bg-gray-300">
                          <div
                            className={`h-2 rounded-full transition-all ${isFullyDone ? 'bg-green-500' : 'bg-blue-600'
                              }`}
                            style={{ width: `${completionPct}%` }}
                          />
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Practice Box â€” appears after the last day of the sprint is done, even if rest isn't */}
                {(() => {
                  const lastDay = batch[batch.length - 1]
                  const lastDayDone = isDayFullyDone(lastDay)
                  const pbDone = pbDoneMap[batchIndex + 1] === true
                  if (!lastDayDone) return null
                  return (
                    <Link
                      href={`/dashboard/practice/${batchIndex + 1}`}
                      className={`group flex w-full cursor-pointer items-center gap-4 rounded-2xl border-2 bg-white p-4 text-black shadow-[var(--shadow-soft)] transition-all duration-200 hover:shadow-lg ${pbDone
                        // Light mode only: bolder green border (bg-white stays white in light, dark card color in dark via globals.css)
                        // Dark mode: ALL dark: classes are identical to original — gradient overlays the dark card bg
                        ? 'border-green-600 hover:border-green-700 dark:border-green-500/50 dark:bg-gradient-to-r dark:from-green-900/20 dark:to-emerald-900/10 dark:text-slate-100 dark:hover:from-green-900/40'
                        : 'border-[var(--border)] hover:border-slate-400 dark:border-purple-400 dark:bg-gradient-to-r dark:from-purple-900/30 dark:to-blue-900/30 dark:text-slate-100 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 dark:hover:shadow-purple-500/20'
                        }`}
                    >
                      {/* Badge — light mode: solid green pill; dark mode inherits dark:bg-* */}
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${pbDone ? 'bg-green-600 text-white dark:bg-slate-700 dark:text-green-300' : 'bg-[var(--bg-soft)] text-[var(--muted)] dark:bg-slate-800 dark:text-slate-200'}`}>
                        {pbDone ? '✓ DONE' : 'PENDING'}
                      </span>
                      <div className="flex-1">
                        <p className="font-bold text-black dark:text-slate-100">
                          Practice Box - Sprint {batchIndex + 1}
                          {pbDone && (
                            // Light mode: solid green badge; dark mode: subtle green
                            <span className="ml-2 rounded-full bg-green-600 px-2 py-0.5 text-xs font-semibold text-white dark:bg-green-800 dark:text-green-200">
                              Completed
                            </span>
                          )}
                        </p>
                        <p className="pb-subtitle-black text-sm text-black dark:text-slate-300">
                          {pbDone
                            ? 'Practice box completed. Next sprint unlocked!'
                            : `Review all interview, scenario & quiz Qs from Days ${batch[0]}-${batch[batch.length - 1]}`
                          }
                        </p>
                      </div>
                      <span className="text-xl text-[var(--muted)] transition-transform group-hover:translate-x-1 dark:text-slate-200">{'->'}</span>
                    </Link>
                  )
                })()}
              </section>
            )
          })}

          {/* Next batch teaser â€” shows what's coming and how close the user is */}
          {!isAdminView && nextLockedBatch && (() => {
            const prevBatchId = firstLockedBatchIndex // 1-based
            const allDaysInPrevBatchDone = currentBatchDoneCount === currentBatchTotal
            const pbPending = allDaysInPrevBatchDone && !pbDoneMap[prevBatchId]
            return (
              <section className="space-y-3">
                <h2 className="text-base font-semibold text-[var(--muted)]">
                  Sprint {firstLockedBatchIndex + 1}
                  <span className="ml-2 text-sm font-normal">
                    (Days {nextLockedBatch[0]}-{nextLockedBatch[nextLockedBatch.length - 1]})
                  </span>
                </h2>

                <div className="surface-card p-6 text-center opacity-60 border-2 border-dashed">
                  <p className="text-sm mb-2 font-semibold">{pbPending ? 'PENDING' : 'LOCKED'}</p>
                  <p className="font-semibold">Next Sprint locked</p>
                  <p className="mt-1 text-sm muted-text">
                    {pbPending
                      ? `Complete Practice Box ${prevBatchId} to unlock Sprint ${firstLockedBatchIndex + 1}.`
                      : `Complete all ${currentBatchTotal} days in Sprint ${firstLockedBatchIndex} to unlock ${nextLockedBatch.length} more days.`
                    }
                  </p>
                  {!pbPending && (
                    <div className="mt-4 max-w-xs mx-auto">
                      <div className="flex justify-between text-xs muted-text mb-1">
                        <span>Sprint {firstLockedBatchIndex} progress</span>
                        <span>{currentBatchDoneCount}/{currentBatchTotal}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-[var(--primary)] transition-all"
                          style={{ width: `${(currentBatchDoneCount / currentBatchTotal) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )
          })()}

          {/* All done! */}
          {!nextLockedBatch && fullyCompletedDays === totalDays && totalDays > 0 && (
            <div className="surface-card p-8 text-center">
              <p className="text-xl font-bold">All days completed!</p>
              <p className="mt-1 muted-text">You&apos;ve finished the entire curriculum.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
