'use client'

import { useState } from 'react'

type ThemeToggleProps = {
  className?: string
  darkLabel?: string
  lightLabel?: string
}

export default function ThemeToggle({
  className,
  darkLabel = 'Dark mode',
  lightLabel = 'Light mode',
}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    document.documentElement.classList.toggle('dark', nextDark)
    window.localStorage.setItem('theme', nextDark ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className ? `theme-toggle ${className}` : 'theme-toggle'}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? `Switch to ${lightLabel}` : `Switch to ${darkLabel}`}
    >
      <span className="theme-toggle__thumb" aria-hidden="true">
        {isDark ? (
          <svg
            viewBox="0 0 24 24"
            className="theme-toggle__icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 14.5A7.5 7.5 0 1 1 9.5 6a6 6 0 0 0 8 8.5Z" />
            <path d="m18.7 5.3.5 1 .9.5-.9.5-.5.9-.5-.9-1-.5 1-.5.5-1Z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="theme-toggle__icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4.3" />
            <path d="M12 2.4v2.2M12 19.4v2.2M21.6 12h-2.2M4.6 12H2.4M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6M18.8 18.8l-1.6-1.6M6.8 6.8 5.2 5.2" />
          </svg>
        )}
      </span>
    </button>
  )
}
