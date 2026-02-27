'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { getAccessContext } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

type UserInfo = {
  name: string
  email: string
  initials: string
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [checkingSession, setCheckingSession] = useState(true)
  const [guardError, setGuardError] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    let active = true

    const checkStudentAccess = async () => {
      try {
        const access = await getAccessContext()

        if (!access.user) {
          if (active) router.replace('/login')
          return
        }

        if (access.role === 'admin') {
          if (active) router.replace('/admin')
          return
        }

        if (!access.allowedEmail) {
          await supabase.auth.signOut()
          if (active) router.replace('/login')
          return
        }

        if (active) {
          // Extract display name from user metadata or email
          const meta = access.user.user_metadata as Record<string, string> | undefined
          const fullName = meta?.full_name || meta?.name || ''
          const email = access.user.email ?? ''
          const displayName = fullName || email.split('@')[0] || 'Student'
          const initials = displayName
            .split(' ')
            .map((w: string) => w[0] ?? '')
            .join('')
            .toUpperCase()
            .slice(0, 2)

          setUserInfo({ name: displayName, email, initials })
          setGuardError(null)
          setCheckingSession(false)
        }
      } catch (error) {
        console.error('Failed to validate student access', error)
        if (active) {
          setGuardError('Unable to verify your session. Please try again.')
          setCheckingSession(false)
        }
      }
    }

    checkStudentAccess()
    return () => {
      active = false
    }
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/')
  }

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="muted-text">Checking your session...</p>
      </div>
    )
  }

  if (guardError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="surface-card max-w-md p-4 text-sm text-red-700">
          {guardError}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left: logo + nav */}
            <div className="flex items-center gap-5">
              <Link href="/" className="text-lg font-extrabold tracking-wide">
                Student LMS
              </Link>
              <nav className="hidden items-center gap-2 md:flex">
                <Link
                  href="/dashboard"
                  className={`nav-btn ${pathname === '/dashboard' ? 'active' : ''}`}
                >
                  All Days
                </Link>
              </nav>
            </div>

            {/* Right: user info + theme + logout */}
            <div className="flex items-center gap-3">
              {/* User details chip */}
              {userInfo && (
                <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                  {/* Avatar circle */}
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">
                    {userInfo.initials}
                  </div>
                  <div className="hidden sm:block leading-tight">
                    <p className="text-xs font-semibold truncate max-w-[140px]">{userInfo.name}</p>
                    <p className="text-[10px] muted-text truncate max-w-[140px]">{userInfo.email}</p>
                  </div>
                </div>
              )}

              <ThemeToggle />
              <button onClick={handleLogout} className="quick-btn secondary text-sm">
                Logout
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
            <Link
              href="/dashboard"
              className={`nav-btn ${pathname === '/dashboard' ? 'active' : ''}`}
            >
              All Days
            </Link>
            <span
              className="nav-btn pointer-events-none select-none opacity-50"
              aria-disabled="true"
              title="Home is disabled while logged in"
            >
              Home
            </span>
            {/* Show user email on mobile below nav */}
            {userInfo && (
              <span className="ml-auto flex items-center gap-1.5 text-xs muted-text pr-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-[9px] font-bold text-white">
                  {userInfo.initials}
                </span>
                <span className="truncate max-w-[120px]">{userInfo.name}</span>
              </span>
            )}
          </nav>
        </div>

        <div className="top-announcement">
          <div className="mx-auto max-w-7xl px-4 py-2 text-sm md:px-6">
            Student Dashboard: track your day-wise completion and keep learning momentum.
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">{children}</main>
    </div>
  )
}
