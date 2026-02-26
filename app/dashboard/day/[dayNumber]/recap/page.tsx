'use client'

import { Fragment, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import { ensureDayProgressRow } from '@/lib/auth'
import { recapContent } from '@/lib/recapContent'
import { normalizeStringArray, parseDayNumber } from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

type RecapTopic = {
  id: string
  title: string
  explanation: string
  examples?: RecapExample[]
}

type RecapExample = {
  language?: string
  code?: string
  explanation?: string
}

type RecapSection = {
  id: string
  title: string
  topics: RecapTopic[]
}

const parseMultiline = (value: string | null | undefined): string[] => {
  if (value == null) return []
  const str = typeof value === 'string' ? value : String(value)
  return str
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n|\r/g, '\n')
    .split('\n')
}

export default function RecapPage() {
  const params = useParams<{ dayNumber: string }>()
  const recapByDay = useMemo(
    () => recapContent as Record<number, RecapSection[]>,
    []
  )
  const dayNumber = useMemo(
    () => parseDayNumber(params.dayNumber),
    [params.dayNumber]
  )
  const sections = useMemo(
    () =>
      ((dayNumber === null ? [] : recapByDay[dayNumber]) ||
        []) as RecapSection[],
    [dayNumber, recapByDay]
  )
  const totalTopics = useMemo(
    () => sections.reduce((count, section) => count + section.topics.length, 0),
    [sections]
  )

  const [checked, setChecked] = useState<string[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [downstreamProgress, setDownstreamProgress] = useState({
    interviewCompleted: false,
    scenarioCompleted: false,
    quizCompleted: false,
  })

  useEffect(() => {
    let active = true

    const load = async () => {
      if (dayNumber === null) {
        setLoading(false)
        return
      }

      setLoading(true)
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        if (active) setLoading(false)
        return
      }

      await ensureDayProgressRow(data.user.id, dayNumber)

      const { data: progress, error } = await supabase
        .from('student_day_progress')
        .select('recap_checked,interview_completed,scenario_completed,quiz_completed')
        .eq('student_id', data.user.id)
        .eq('day_number', dayNumber)
        .maybeSingle()

      if (!active) return
      if (error) {
        console.error('Failed to load recap progress', error)
      }

      setUserId(data.user.id)
      setChecked(normalizeStringArray(progress?.recap_checked))
      setDownstreamProgress({
        interviewCompleted: Boolean(progress?.interview_completed),
        scenarioCompleted: Boolean(progress?.scenario_completed),
        quizCompleted: Boolean(progress?.quiz_completed),
      })
      setLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [dayNumber])

  const toggle = async (topicId: string) => {
    if (!userId || dayNumber === null) return

    const updated = checked.includes(topicId)
      ? checked.filter((id) => id !== topicId)
      : [...checked, topicId]

    setChecked(updated)

    const { error } = await supabase
      .from('student_day_progress')
      .upsert(
        {
          student_id: userId,
          day_number: dayNumber,
          recap_checked: updated,
          recap_completed: totalTopics > 0 && updated.length === totalTopics,
        },
        { onConflict: 'student_id,day_number' }
      )

      
    if (error) {
      console.error('Failed to save recap progress', error)
    }
  }

  const recapCompleted = totalTopics > 0 && checked.length >= totalTopics

  if (dayNumber === null) {
    return <p>Invalid day number.</p>
  }

  if (loading) {
    return <p>Loading recap...</p>
  }

  if (sections.length === 0) {
    return <p>No recap content available for Day {dayNumber}.</p>
  }

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Recap - Day {dayNumber}</h1>
        <p className="mt-2 text-sm muted-text">
          Mark all topics complete to unlock interview.
        </p>
      </div>

      <LearningPathNav
        dayNumber={dayNumber}
        currentSection="recap"
        progress={{
          recapCompleted,
          interviewCompleted: downstreamProgress.interviewCompleted,
          scenarioCompleted: downstreamProgress.scenarioCompleted,
          quizCompleted: downstreamProgress.quizCompleted,
        }}
      />

      <p className="text-sm muted-text">
        Completed {checked.length} of {totalTopics}
      </p>

      {sections.map((section) => (
        <div key={section.id} className="space-y-4">
          <h2 className="text-xl font-semibold">{section.title}</h2>

          {section.topics.map((topic) => (
            <div key={topic.id} className="surface-card p-4">
              <h3 className="font-medium">{topic.title}</h3>
              <p className="mt-2 muted-text">
                {parseMultiline(topic.explanation).map((line, index, lines) => (
                  <Fragment key={`${topic.id}-line-${index}`}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>

              {Array.isArray(topic.examples) && topic.examples.length > 0 && (
                <div className="mt-4 space-y-4">
                  {topic.examples.map((example, exampleIndex) => {
                    const language =
                      typeof example.language === 'string'
                        ? example.language.trim()
                        : ''
                    const code =
                      typeof example.code === 'string'
                        ? parseMultiline(example.code).join('\n')
                        : ''
                    const exampleExplanation =
                      typeof example.explanation === 'string'
                        ? example.explanation
                        : ''

                    if (!code && !exampleExplanation) return null

                    return (
                      <div
                        key={`${topic.id}-example-${exampleIndex}`}
                        className="rounded-xl border border-[var(--border)] bg-[var(--card-strong)] p-3"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold">
                            Example {exampleIndex + 1}
                          </p>
                          {language && (
                            <span className="rounded-full bg-[var(--bg-soft)] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">
                              {language}
                            </span>
                          )}
                        </div>

                        {code && (
                          <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-3 text-xs text-white md:text-sm">
                            <code>{code}</code>
                          </pre>
                        )}

                        {exampleExplanation && (
                          <p className="mt-2 text-sm muted-text">
                            {parseMultiline(exampleExplanation).map((line, index, lines) => (
                              <Fragment key={`${topic.id}-example-${exampleIndex}-line-${index}`}>
                                {line}
                                {index < lines.length - 1 && <br />}
                              </Fragment>
                            ))}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              <label className="mt-3 inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checked.includes(topic.id)}
                  onChange={() => toggle(topic.id)}
                />
                Mark as completed
              </label>
            </div>
          ))}
        </div>
      ))}

      <Link
        href={`/dashboard/day/${dayNumber}/interview`}
        className={`inline-block rounded-xl px-4 py-2 font-semibold text-white ${recapCompleted ? 'bg-blue-600 hover:opacity-95' : 'bg-gray-400 pointer-events-none'
          }`}
      >
        Continue to Interview
      </Link>
    </div>
  )
}
