'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { parseDayNumber } from '@/lib/helpers'
import { DayCacheProvider } from '@/lib/dayCache'

/**
 * This layout wraps all four day-section pages:
 *   recap / interview / scenario / quiz
 *
 * DayCacheProvider is mounted once per day route.
 * All child pages read from the shared cache instead of issuing their own
 * API calls, so navigating back and forth between sections is instant.
 */
export default function DayLayout({ children }: { children: React.ReactNode }) {
    const params = useParams<{ dayNumber: string }>()
    const dayNumber = useMemo(() => parseDayNumber(params.dayNumber), [params.dayNumber])

    // If dayNumber is invalid, just render children — they handle the error state
    if (dayNumber === null) {
        return <>{children}</>
    }

    return (
        <DayCacheProvider dayNumber={dayNumber}>
            {children}
        </DayCacheProvider>
    )
}
