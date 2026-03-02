'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAccessContext, normalizeEmail } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const checkExistingSession = async () => {
      const access = await getAccessContext()
      if (!active || !access.user) return

      if (access.role === 'admin') {
        router.replace('/admin')
        return
      }

      if (!access.allowedEmail) {
        await supabase.auth.signOut()
        if (active) {
          setErrorMessage('This email is not allowed to access student dashboard.')
        }
        return
      }

      if (active) router.replace('/dashboard')
    }

    checkExistingSession()

    return () => {
      active = false
    }
  }, [router])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail) {
      setErrorMessage('Email is required.')
      return
    }
    if (!password) {
      setErrorMessage('Password is required.')
      return
    }

    setLoading(true)

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      })

    if (signInError || !signInData.user) {
      setLoading(false)
      setErrorMessage(signInError?.message ?? 'Login failed.')
      return
    }

    const access = await getAccessContext()
    if (!access.user) {
      setLoading(false)
      setErrorMessage('Login failed.')
      return
    }

    if (access.role === 'admin') {
      setLoading(false)
      router.replace('/admin')
      return
    }

    if (!access.allowedEmail) {
      await supabase.auth.signOut()
      setLoading(false)
      setErrorMessage('This email is not allowed to access student dashboard.')
      return
    }

    setLoading(false)
    router.replace('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleLogin}
        className="surface-card-strong w-full max-w-lg space-y-4 p-6 md:p-8 reveal-up"
      >
        <h1 className="text-3xl font-bold">Student Login</h1>
        <p className="text-sm muted-text">
          Login with your allowed email and password.
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

        {errorMessage && (
          <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-2">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="quick-btn w-full disabled:opacity-60"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="flex flex-wrap items-center gap-2 text-sm muted-text">
          <span>New student?</span>
          <Link href="/register" className="nav-btn">
            Register
          </Link>
          <Link href="/change-password" className="nav-btn">
            Change Password
          </Link>
          <Link href="/" className="nav-btn">
            Home
          </Link>
        </div>
      </form>
    </div>
  )
}
