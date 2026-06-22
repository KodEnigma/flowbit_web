'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function PostHogPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return
    let url = window.origin + pathname
    if (searchParams.toString()) url += `?${searchParams.toString()}`
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || process.env.VITE_POSTHOG_KEY
    if (!key) return
    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ||
        process.env.VITE_POSTHOG_HOST ||
        'https://us.i.posthog.com',
      // Pageviews are captured manually below via route-change detection,
      // since the App Router's client-side navigation doesn't reliably
      // trigger posthog-js's built-in history listener.
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      // Attach $referrer / $initial_referrer / utm_* to a persistent person
      // profile for every visitor, not just signed-up users, so acquisition
      // channel can be queried across the whole funnel.
      person_profiles: 'always',
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageview />
      </Suspense>
      {children}
    </PHProvider>
  )
}
