'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import LearningPathNav from '@/components/learning-path-nav'
import { ensureDayProgressRow, getAccessContext } from '@/lib/auth'
import { parseDayNumber } from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

type DayProgress = {
  recap_completed: boolean | null
  interview_completed: boolean | null
  scenario_completed: boolean | null
  quiz_completed: boolean | null
}

export default function DayPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(
    () => parseDayNumber(params.dayNumber),
    [params.dayNumber]
  )

  const [progress, setProgress] = useState<DayProgress | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdminView, setIsAdminView] = useState(false)

  useEffect(() => {
    let active = true

    const load = async () => {
      if (dayNumber === null) {
        setProgress(null)
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
        if (!active) return
        setIsAdminView(true)
        setProgress({
          recap_completed: true,
          interview_completed: true,
          scenario_completed: true,
          quiz_completed: true,
        })
        setLoading(false)
        return
      }

      await ensureDayProgressRow(access.user.id, dayNumber)

      const { data, error } = await supabase
        .from('student_day_progress')
        .select(
          'recap_completed,interview_completed,scenario_completed,quiz_completed'
        )
        .eq('student_id', access.user.id)
        .eq('day_number', dayNumber)
        .maybeSingle()

      if (!active) return
      if (error) {
        console.error('Failed to load day progress', error)
      }

      setProgress(data as DayProgress | null)
      setLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [dayNumber])

  if (dayNumber === null) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Invalid day</h1>
        <Link href="/dashboard" className="text-blue-600 underline">
          Go back to all days
        </Link>
      </div>
    )
  }

  const recapDone = Boolean(progress?.recap_completed)
  const interviewDone = Boolean(progress?.interview_completed)
  const scenarioDone = Boolean(progress?.scenario_completed)
  const quizDone = Boolean(progress?.quiz_completed)

  // ── Permanent unlock helpers ────────────────────────────────────────────
  // Interview: accessible if recap was ever done OR any downstream is done
  const interviewUnlocked = isAdminView || recapDone || interviewDone || scenarioDone || quizDone
  // Scenario: accessible if interview was ever done OR any downstream is done
  const scenarioUnlocked = isAdminView || interviewDone || scenarioDone || quizDone
  // Quiz: accessible if scenario was ever done OR quiz itself is done
  const quizUnlocked = isAdminView || scenarioDone || quizDone

  const getNextSectionLabel = () => {
    if (!recapDone) return 'Recap'
    if (!interviewDone) return 'Interview'
    if (!scenarioDone) return 'Scenario'
    if (!quizDone) return 'Quiz'
    return 'Completed'
  }

  const nextSectionLabel = getNextSectionLabel()
  const nextSectionHref =
    nextSectionLabel === 'Recap'
      ? `/dashboard/day/${dayNumber}/recap`
      : nextSectionLabel === 'Interview'
        ? `/dashboard/day/${dayNumber}/interview`
        : nextSectionLabel === 'Scenario'
          ? `/dashboard/day/${dayNumber}/scenario`
          : nextSectionLabel === 'Quiz'
            ? `/dashboard/day/${dayNumber}/quiz`
            : null

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Day {dayNumber}</h1>
        <p className="mt-2 text-sm muted-text">
          Complete each section in order to unlock the next one.
        </p>
        {isAdminView && (
          <p className="mt-2 rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
            Admin preview mode: all sections unlocked.
          </p>
        )}
      </div>

      {!loading && (
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection={null}
          progress={{
            recapCompleted: recapDone,
            interviewCompleted: interviewDone,
            scenarioCompleted: scenarioDone,
            quizCompleted: quizDone,
          }}
        />
      )}

      {!loading && (
        <div className="surface-card p-4 md:p-5">
          <p className="text-sm muted-text">Recommended Next Action</p>
          {nextSectionHref ? (
            <Link href={nextSectionHref} className="quick-btn mt-3 inline-block">
              Continue with {nextSectionLabel}
            </Link>
          ) : (
            <p className="mt-2 text-green-700 font-semibold">
              Day {dayNumber} is fully completed.
            </p>
          )}
        </div>
      )}

      {loading && <p>Loading progress...</p>}

      <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
        <Link
          href={`/dashboard/day/${dayNumber}/recap`}
          className="surface-card p-4 font-medium hover:shadow-lg"
        >
          Recap
        </Link>

        <Link
          href={`/dashboard/day/${dayNumber}/interview`}
          className={`surface-card p-4 font-medium hover:shadow-lg ${!interviewUnlocked ? 'pointer-events-none opacity-50' : ''
            }`}
        >
          Interview
        </Link>

        <Link
          href={`/dashboard/day/${dayNumber}/scenario`}
          className={`surface-card p-4 font-medium hover:shadow-lg ${!scenarioUnlocked ? 'pointer-events-none opacity-50' : ''
            }`}
        >
          Scenario
        </Link>

        <Link
          href={`/dashboard/day/${dayNumber}/quiz`}
          className={`surface-card p-4 font-medium hover:shadow-lg ${!quizUnlocked ? 'pointer-events-none opacity-50' : ''
            }`}
        >
          Quiz
        </Link>
      </div>
    </div>
  )
}
