import posthog from 'posthog-js'

function fbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}

export function trackStoreOpen(store: 'apple' | 'android', location: string) {
  // PostHog
  posthog.capture('install_button_clicked', { store, location })
  // Meta Pixel — custom event for granular reporting + standard Lead for optimization
  fbq('trackCustom', 'InstallButtonClicked', { store, location })
  fbq('track', 'Lead', { content_name: `${store}_store`, content_category: location })
}

export function trackSignUp(method?: string) {
  posthog.capture('sign_up_completed', { method })
  fbq('track', 'CompleteRegistration', { method })
}

export function trackStatementUpload() {
  posthog.capture('statement_upload_completed')
  fbq('trackCustom', 'StatementUploadCompleted')
}

export function trackSubscriptionPurchase(value: number, currency = 'USD', plan?: string) {
  posthog.capture('subscription_purchased', { value, currency, plan })
  fbq('track', 'Purchase', { value, currency })
  fbq('trackCustom', 'SubscriptionPurchased', { value, currency, plan })
}

export function trackPageView(url: string) {
  posthog.capture('$pageview', { $current_url: url })
  fbq('track', 'PageView')
}
