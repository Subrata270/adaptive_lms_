import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

const normalizeEmail = (value: unknown): string =>
  typeof value === 'string' ? value.trim().toLowerCase() : ''

type ProfileRoleRow = {
  role: string | null
}

const getBearerToken = (request: Request): string | null => {
  const authHeader = request.headers.get('authorization') ?? ''
  if (!authHeader.toLowerCase().startsWith('bearer ')) return null
  return authHeader.slice(7).trim() || null
}

export async function POST(request: Request) {
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
  const normalizedEmail = normalizeEmail(user.email)
  if (!normalizedEmail) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  let payload: unknown = null
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const newPassword =
    typeof (payload as { newPassword?: unknown } | null)?.newPassword === 'string'
      ? ((payload as { newPassword: string }).newPassword ?? '')
      : ''
  if (newPassword.length < 6) {
    return NextResponse.json(
      { error: 'New password must be at least 6 characters.' },
      { status: 400 }
    )
  }

  const { data: profileData } = await admin
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()
  const profile = (profileData as ProfileRoleRow | null) ?? null
  if (profile?.role === 'admin') {
    return NextResponse.json(
      { error: 'Admin password cannot be changed from student flow.' },
      { status: 403 }
    )
  }

  const { data: allowedEmail, error: allowedError } = await admin
    .from('allowed_emails')
    .select('email')
    .ilike('email', normalizedEmail)
    .maybeSingle()

  if (allowedError) {
    return NextResponse.json({ error: allowedError.message }, { status: 500 })
  }
  if (!allowedEmail) {
    return NextResponse.json(
      { error: 'This email is not allowed. Contact admin.' },
      { status: 403 }
    )
  }

  const { error: updateAuthError } = await admin.auth.admin.updateUserById(user.id, {
    password: newPassword,
    email_confirm: true,
  })
  if (updateAuthError) {
    return NextResponse.json({ error: updateAuthError.message }, { status: 500 })
  }

  const { error: updateAllowedError } = await admin
    .from('allowed_emails')
    .update({ password: newPassword, is_used: true })
    .ilike('email', normalizedEmail)

  if (updateAllowedError) {
    return NextResponse.json({ error: updateAllowedError.message }, { status: 500 })
  }

  return NextResponse.json({
    ok: true,
    message: 'Password updated successfully.',
  })
}
