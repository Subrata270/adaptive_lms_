'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { getAccessContext } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

const FALLBACK_STUDENT_NAME = 'Student'
const FALLBACK_STUDENT_ID = 'I00A0000'

type UserInfo = {
  name: string
  email: string
  studentId: string
  initials: string
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const showBackButton =
    /^\/dashboard\/day\/[^/]+(?:\/(quiz|recap|interview|scenario))?\/?$/.test(
      pathname
    )
  const router = useRouter()
  const [checkingSession, setCheckingSession] = useState(true)
  const [guardError, setGuardError] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [isAdminView, setIsAdminView] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const profileMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let active = true

    const checkStudentAccess = async () => {
      try {
        const access = await getAccessContext()

        if (!access.user) {
          if (active) router.replace('/login')
          return
        }

        const adminMode = access.role === 'admin'

        if (!adminMode && !access.allowedEmail) {
          await supabase.auth.signOut()
          if (active) router.replace('/login')
          return
        }

        if (active) {
          const email = access.user.email ?? ''
          const meta = access.user.user_metadata as Record<string, string> | undefined
          const fullName = meta?.full_name || meta?.name || ''
          const displayName = adminMode
            ? fullName || email.split('@')[0] || 'Admin'
            : access.allowedEmail?.Student_Name?.trim() || FALLBACK_STUDENT_NAME
          const studentId = adminMode
            ? 'ADMIN'
            : access.allowedEmail?.Student_id?.trim() || FALLBACK_STUDENT_ID
          const initials = displayName
            .split(' ')
            .map((w: string) => w[0] ?? '')
            .join('')
            .toUpperCase()
            .slice(0, 2)

          setIsAdminView(adminMode)
          setUserInfo({ name: displayName, email, studentId, initials })
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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!profileMenuRef.current) return
      if (!profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProfileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleLogout = async () => {
    setIsProfileMenuOpen(false)
    await supabase.auth.signOut()
    router.replace('/')
  }

  const handleAnnouncementBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
      return
    }
    router.push('/dashboard')
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
      <header className="sticky top-0 z-[60] border-b border-[var(--border)] bg-[var(--bg-soft)]">
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
                {isAdminView && (
                  <Link href="/admin" className="nav-btn">
                    Admin Panel
                  </Link>
                )}
              </nav>
            </div>

            {/* Right: theme + profile dropdown */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              {userInfo && (
                <div ref={profileMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-2.5 py-1.5 shadow-[0_8px_16px_rgba(19,58,96,0.1)] transition hover:border-[var(--primary)]"
                    aria-haspopup="menu"
                    aria-expanded={isProfileMenuOpen}
                    aria-label="Open profile menu"
                  >
                    <span className="flex h-8 w-8 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-soft)]">
                      <Image
                        src="/dummy-profile.svg"
                        alt="Student profile"
                        className="h-full w-full object-cover"
                        width={32}
                        height={32}
                      />
                    </span>
                    <span className="hidden max-w-[140px] truncate text-sm font-semibold sm:block">
                      {userInfo.name}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`h-4 w-4 text-[var(--muted)] transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''
                        }`}
                    >
                      <path
                        d="M5.5 7.5L10 12l4.5-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isProfileMenuOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 top-full z-50 mt-2 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_14px_30px_rgba(13,34,58,0.16)]"
                    >
                      <p className="text-sm font-bold">{userInfo.name}</p>
                      <p className="mt-1 break-all text-xs muted-text">{userInfo.email}</p>
                      <p className="mt-1 text-[11px] muted-text">ID: {userInfo.studentId}</p>
                      {!isAdminView && (
                        <Link
                          href="/change-password"
                          onClick={() => setIsProfileMenuOpen(false)}
                          className="mt-3 block w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-center text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                          Change Password
                        </Link>
                      )}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className={`w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] ${
                          isAdminView ? 'mt-3' : 'mt-2'
                        }`}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
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
            {isAdminView && (
              <Link href="/admin" className="nav-btn">
                Admin Panel
              </Link>
            )}
          </nav>
        </div>

        <div className="top-announcement">
          <div className="mx-auto max-w-7xl px-4 py-2 text-sm md:px-6">
            <div className="flex flex-wrap items-center gap-3">
              {showBackButton && (
                <button
                  type="button"
                  onClick={handleAnnouncementBack}
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(8,24,44,0.28)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-[0_12px_24px_rgba(8,24,44,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-sm"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5 sm:h-4 sm:w-4"
                  >
                    <path
                      d="M12.5 4.5L7 10l5.5 5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Back</span>
                </button>
              )}
              <p className="min-w-0 leading-relaxed">
                {isAdminView
                  ? 'Admin preview mode: all day content is unlocked for review and management.'
                  : 'Student Dashboard: Track your day-wise completion and keep learning momentum.'}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">{children}</main>
    </div>
  )
}

