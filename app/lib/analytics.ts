import posthog from 'posthog-js'

export function trackEvent(event: string, properties: Record<string, unknown> = {}) {
  posthog.capture(event, properties)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, properties)
  }
}

export function trackStoreOpen(store: 'apple' | 'android', location: string) {
  trackEvent('store_link_clicked', { store, location })
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { content_name: `${store}_store`, content_category: location })
  }
}

export function trackPageView(url: string) {
  posthog.capture('$pageview', { $current_url: url })
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}
