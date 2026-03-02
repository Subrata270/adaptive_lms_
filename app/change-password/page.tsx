'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { checkAllowedEmail, normalizeEmail } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

export default function ChangePasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChangePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail) {
      setErrorMessage('Email is required.')
      return
    }
    if (!currentPassword) {
      setErrorMessage('Current password is required.')
      return
    }
    if (newPassword.length < 6) {
      setErrorMessage('New password must be at least 6 characters.')
      return
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password must match.')
      return
    }
    if (newPassword === currentPassword) {
      setErrorMessage('New password must be different from current password.')
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

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password: currentPassword,
      })

    if (signInError || !signInData.session) {
      setLoading(false)
      setErrorMessage(signInError?.message ?? 'Invalid current password.')
      return
    }

    const response = await fetch('/api/auth/student-change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${signInData.session.access_token}`,
      },
      body: JSON.stringify({ newPassword }),
    })

    const body = (await response.json().catch(() => null)) as
      | { error?: string; message?: string }
      | null

    if (!response.ok) {
      setLoading(false)
      setErrorMessage(body?.error ?? 'Unable to change password.')
      return
    }

    await supabase.auth.signOut()
    setLoading(false)
    setSuccessMessage('Password changed successfully. Redirecting to login...')

    setTimeout(() => {
      router.replace('/login')
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleChangePassword}
        className="surface-card-strong w-full max-w-lg space-y-4 p-6 md:p-8"
      >
        <h1 className="text-3xl font-bold">Change Password</h1>
        <p className="text-sm muted-text">
          Change password directly without email reset links.
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
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
          required
        />

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
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
          {loading ? 'Changing password...' : 'Change Password'}
        </button>

        <p className="text-sm muted-text">
          Back to{' '}
          <Link href="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
