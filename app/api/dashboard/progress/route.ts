import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

const getBearerToken = (request: Request): string | null => {
  const authHeader = request.headers.get('authorization') ?? ''
  if (!authHeader.toLowerCase().startsWith('bearer ')) return null
  return authHeader.slice(7).trim() || null
}

export async function GET(request: Request) {
  const admin = getSupabaseAdmin()
  if (!admin) {
    return NextResponse.json(
      { error: 'Server auth is not configured.' },
      { status: 500 }
    )
  }

  const token = getBearerToken(request)
  if (!token) {
    return NextResponse.json({ error: 'Missing access token.' }, { status: 401 })
  }

  const { data: userData, error: userError } = await admin.auth.getUser(token)
  if (userError || !userData.user) {
    return NextResponse.json(
      { error: userError?.message ?? 'Invalid session.' },
      { status: 401 }
    )
  }

  const user = userData.user

  const { data, error } = await admin
    .from('student_day_progress')
    .select(
      'day_number,recap_completed,interview_completed,scenario_completed,quiz_completed,"Practice Quiz Scores"'
    )
    .eq('student_id', user.id)

  if (error) {
    console.error('Failed to load dashboard progress (API)', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data: data ?? [] })
}

