import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

const normalizeEmail = (value: unknown): string =>
  typeof value === 'string' ? value.trim().toLowerCase() : ''

type ProfileRoleRow = {
  role: string | null
}

type AllowedEmailRow = {
  email: string
  is_used: boolean | null
  Student_Name: string | null
  Student_id: string | null
}

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
  const normalizedEmail = normalizeEmail(user.email)

  const [{ data: profileData, error: profileError }, { data: allowedData, error: allowedError }] =
    await Promise.all([
      admin.from('profiles').select('role').eq('id', user.id).maybeSingle(),
      normalizedEmail
        ? admin
            .from('allowed_emails')
            .select('*')
            .ilike('email', normalizedEmail)
            .maybeSingle()
        : Promise.resolve({ data: null, error: null } as const),
    ])

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 })
  }
  if (allowedError) {
    return NextResponse.json({ error: allowedError.message }, { status: 500 })
  }

  const profile = (profileData as ProfileRoleRow | null) ?? null
  const allowedEmail = (allowedData as AllowedEmailRow | null) ?? null

  let role = profile?.role ?? null

  if (role !== 'admin' && allowedEmail) {
    const { error: profileUpsertError } = await admin
      .from('profiles')
      .upsert({ id: user.id, role: 'student' }, { onConflict: 'id' })
    if (profileUpsertError) {
      console.error('Failed to upsert student profile during access check', profileUpsertError)
    } else {
      role = 'student'
    }

    if (!allowedEmail.is_used) {
      const { error: usedEmailError } = await admin
        .from('allowed_emails')
        .update({ is_used: true })
        .ilike('email', normalizedEmail)
      if (usedEmailError) {
        console.error('Failed to update allowed email usage during access check', usedEmailError)
      }
    }
  }

  return NextResponse.json({
    role,
    normalizedEmail,
    allowedEmail,
  })
}
