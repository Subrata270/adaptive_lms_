import type { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type AllowedEmailRow = {
  email: string
  is_used: boolean | null
  Student_Name: string | null
  Student_id: string | null
}

export type AccessContext = {
  user: User | null
  role: string | null
  normalizedEmail: string
  allowedEmail: AllowedEmailRow | null
}

export const normalizeEmail = (value: string | null | undefined): string =>
  (value ?? '').trim().toLowerCase()

type AccessContextApiResponse = {
  role: string | null
  normalizedEmail: string
  allowedEmail: AllowedEmailRow | null
}

type AllowedEmailCheck = {
  allowed: boolean
  isUsed: boolean
  error: string | null
}

const emptyAccessContext: AccessContext = {
  user: null,
  role: null,
  normalizedEmail: '',
  allowedEmail: null,
}

export const getAccessContext = async (): Promise<AccessContext> => {
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
  if (sessionError) {
    console.error('Failed to read current session', sessionError)
  }

  const session = sessionData.session
  if (!session?.access_token || !session.user) {
    return emptyAccessContext
  }

  const normalized = normalizeEmail(session.user.email)

  try {
    const response = await fetch('/api/auth/access-context', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
      cache: 'no-store',
    })

    const body = (await response.json().catch(() => null)) as
      | (AccessContextApiResponse & { error?: string })
      | null

    if (!response.ok) {
      console.error('Access context API failed', body?.error ?? response.statusText)
      return {
        user: session.user,
        role: null,
        normalizedEmail: normalized,
        allowedEmail: null,
      }
    }

    return {
      user: session.user,
      role: body?.role ?? null,
      normalizedEmail: body?.normalizedEmail ?? normalized,
      allowedEmail: body?.allowedEmail ?? null,
    }
  } catch (error) {
    console.error('Failed to fetch access context', error)
    return {
      user: session.user,
      role: null,
      normalizedEmail: normalized,
      allowedEmail: null,
    }
  }
}

export const checkAllowedEmail = async (
  email: string
): Promise<AllowedEmailCheck> => {
  const normalized = normalizeEmail(email)
  if (!normalized) {
    return { allowed: false, isUsed: false, error: 'Email is required.' }
  }

  try {
    const response = await fetch('/api/auth/allowed-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: normalized }),
    })

    const body = (await response.json().catch(() => null)) as
      | { allowed?: boolean; isUsed?: boolean; error?: string }
      | null

    if (!response.ok) {
      return {
        allowed: false,
        isUsed: false,
        error: body?.error ?? 'Unable to validate allowed email.',
      }
    }

    return {
      allowed: Boolean(body?.allowed),
      isUsed: Boolean(body?.isUsed),
      error: null,
    }
  } catch (error) {
    console.error('Allowed email check failed', error)
    return {
      allowed: false,
      isUsed: false,
      error: 'Unable to validate allowed email.',
    }
  }
}

export const ensureDayProgressRow = async (
  studentId: string,
  dayNumber: number
): Promise<void> => {
  if (!Number.isFinite(dayNumber) || dayNumber <= 0) return

  const { error } = await supabase.from('student_day_progress').upsert(
    {
      student_id: studentId,
      day_number: dayNumber,
    },
    { onConflict: 'student_id,day_number' }
  )

  if (error) {
    console.error('Failed to initialize day progress row', error)
  }
}
