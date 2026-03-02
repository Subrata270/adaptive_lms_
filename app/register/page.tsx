'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
// import PublicHeader from '@/components/public-header'
import { checkAllowedEmail, normalizeEmail } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail) {
      setErrorMessage('Email is required.')
      return
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.')
      return
    }
    if (password !== confirmPassword) {
      setErrorMessage('Password and confirm password must match.')
      return
    }

    setLoading(true)

    const allowedCheck = await checkAllowedEmail(normalizedEmail)
    if (allowedCheck.error) {
      setLoading(false)
      setErrorMessage(allowedCheck.error)
      return
    }

    if (!allowedCheck.allowed) {
      setLoading(false)
      setErrorMessage('This email is not allowed. Contact admin.')
      return
    }

    const registerResponse = await fetch('/api/auth/student-register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: normalizedEmail, password }),
    })
    const registerBody = (await registerResponse.json().catch(() => null)) as
      | { error?: string }
      | null

    if (!registerResponse.ok) {
      setLoading(false)
      const fallbackError =
        registerResponse.status === 409
          ? 'This email is already registered. Please login or use Forgot Password.'
          : 'Registration failed.'
      setErrorMessage(registerBody?.error ?? fallbackError)
      return
    }

    const { data: signInData } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    })

    if (signInData.session) {
      setLoading(false)
      router.replace('/dashboard')
      return
    }

    setLoading(false)
    setSuccessMessage('Registration completed. Please login.')
  }

  return (
    <div className="min-h-screen">
      {/* <PublicHeader /> */}

      <main className="mx-auto flex max-w-7xl items-center justify-center px-4 py-10 md:px-6 md:py-14">
        <form
          onSubmit={handleRegister}
          className="surface-card-strong w-full max-w-lg space-y-4 p-6 md:p-8"
        >
          <h1 className="text-3xl font-bold">Student Registration</h1>
          <p className="text-sm muted-text">
            Only emails in allowed list can register.
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          {errorMessage && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-2">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded p-2">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="quick-btn w-full disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>

          <p className="text-sm muted-text">
            Already registered?{' '}
            <Link href="/login" className="text-blue-600 underline">
              Login here
            </Link>
          </p>
        </form>
      </main>
    </div>
  )
}
