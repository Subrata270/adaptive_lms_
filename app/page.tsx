'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { getAccessContext } from '@/lib/auth'

export default function HomePage() {
  const router = useRouter()
  const [checkingSession, setCheckingSession] = useState(true)

  useEffect(() => {
    let active = true

    const redirectLoggedInUsers = async () => {
      try {
        const access = await getAccessContext()
        if (!active) return

        if (!access.user) {
          setCheckingSession(false)
          return
        }

        if (access.role === 'admin') {
          router.replace('/admin')
          return
        }

        if (access.allowedEmail) {
          router.replace('/dashboard')
          return
        }

        setCheckingSession(false)
      } catch (error) {
        console.error('Failed to verify home access', error)
        if (active) setCheckingSession(false)
      }
    }

    redirectLoggedInUsers()
    return () => {
      active = false
    }
  }, [router])

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="muted-text">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-[var(--home-text)] bg-[linear-gradient(135deg,var(--home-bg-start),var(--home-bg-mid),var(--home-bg-end))]">
      <header className="border-b border-[color:var(--home-border)] px-6 py-4 backdrop-blur-lg md:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <h1 className="text-xl font-semibold tracking-wide">Adaptive LMS</h1>


          <ThemeToggle />
        </div>
      </header>

      <section className="flex min-h-[85vh] items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[var(--home-label)]">
            Build Job-Ready Skills
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Designed to transform you into a{' '}
            <span className="text-[var(--home-highlight)]">highly skilled software professional</span>
          </h2>

          <p className="mb-10 text-lg text-[var(--home-muted)]">
            Learn day by day, and track your
            progress with a clean dashboard.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-[var(--home-primary)] px-6 py-3 font-medium shadow-lg shadow-indigo-500/20 transition hover:bg-[var(--home-primary-hover)]"
            >
              Student Register
            </Link>

            <Link
              href="/login"
              className="rounded-xl bg-[var(--home-glass)] px-6 py-3 font-medium text-[var(--home-text)] transition hover:bg-[var(--home-glass-hover)]"
            >
              Student Login
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl bg-[var(--home-success)] px-6 py-3 font-medium shadow-lg shadow-emerald-500/20 transition hover:bg-[var(--home-success-hover)]"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--home-border)] py-6 text-center text-sm text-[var(--home-muted)]">
        (c) 2026 Adaptive LMS. All rights reserved.
      </footer>
    </div>
  )
}
