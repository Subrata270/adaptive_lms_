import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

const LIST_USERS_PAGE_SIZE = 200
const LIST_USERS_MAX_PAGES = 25

const normalizeEmail = (value: unknown): string =>
  typeof value === 'string' ? value.trim().toLowerCase() : ''

const findAuthUserByEmail = async (
  email: string
): Promise<{ id: string | null; error: string | null }> => {
  const admin = getSupabaseAdmin()
  if (!admin) {
    return { id: null, error: 'Server auth is not configured.' }
  }

  for (let page = 1; page <= LIST_USERS_MAX_PAGES; page += 1) {
    const { data, error } = await admin.auth.admin.listUsers({
      page,
      perPage: LIST_USERS_PAGE_SIZE,
    })

    if (error) {
      return { id: null, error: error.message }
    }

    const users = data.users ?? []
    const foundUser = users.find((user) => normalizeEmail(user.email) === email)
    if (foundUser) {
      return { id: foundUser.id, error: null }
    }

    if (users.length < LIST_USERS_PAGE_SIZE) {
      break
    }
  }

  return { id: null, error: null }
}

export async function POST(request: Request) {
  const admin = getSupabaseAdmin()
  if (!admin) {
    return NextResponse.json(
      { error: 'Server auth is not configured.' },
      { status: 500 }
    )
  }

  let payload: unknown = null
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const normalizedEmail = normalizeEmail(
    (payload as { email?: unknown } | null)?.email
  )
  const password =
    typeof (payload as { password?: unknown } | null)?.password === 'string'
      ? ((payload as { password: string }).password ?? '')
      : ''

  if (!normalizedEmail) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: 'Password must be at least 6 characters.' },
      { status: 400 }
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

  const { id: existingUserId, error: findUserError } =
    await findAuthUserByEmail(normalizedEmail)
  if (findUserError) {
    return NextResponse.json({ error: findUserError }, { status: 500 })
  }
  if (existingUserId) {
    return NextResponse.json(
      { error: 'This email is already registered.' },
      { status: 409 }
    )
  }

  const { data: createdUserData, error: createError } =
    await admin.auth.admin.createUser({
      email: normalizedEmail,
      password,
      email_confirm: true,
    })

  if (createError || !createdUserData.user) {
    return NextResponse.json(
      { error: createError?.message ?? 'Failed to create student user.' },
      { status: 500 }
    )
  }

  const authUserId = createdUserData.user.id

  const { error: profileUpsertError } = await admin
    .from('profiles')
    .upsert({ id: authUserId, role: 'student' }, { onConflict: 'id' })
  if (profileUpsertError) {
    console.error('Failed to upsert student profile during registration', profileUpsertError)
  }

  const { error: usedEmailError } = await admin
    .from('allowed_emails')
    .update({ is_used: true, password })
    .ilike('email', normalizedEmail)
  if (usedEmailError) {
    console.error('Failed to update allowed email usage during registration', usedEmailError)
  }

  return NextResponse.json({
    ok: true,
    message: 'Student user registered successfully.',
  })
}
