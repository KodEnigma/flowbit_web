import posthog from 'posthog-js'

export function trackStoreOpen(store: 'apple' | 'android', location: string) {
  posthog.capture('install_button_clicked', { store, location })
  if (typeof window !== 'undefined') {
    window.fbq('trackCustom', 'InstallButtonClicked', { store, location })
    window.fbq('track', 'Lead', { content_name: `${store}_store`, content_category: location })
  }
}

export function trackSignUp(method?: string) {
  posthog.capture('sign_up_completed', { method })
  if (typeof window !== 'undefined') {
    window.fbq('track', 'CompleteRegistration', { method })
  }
}

export function trackStatementUpload() {
  posthog.capture('statement_upload_completed')
  if (typeof window !== 'undefined') {
    window.fbq('trackCustom', 'StatementUploadCompleted')
  }
}

export function trackSubscriptionPurchase(value: number, currency = 'USD', plan?: string) {
  posthog.capture('subscription_purchased', { value, currency, plan })
  if (typeof window !== 'undefined') {
    window.fbq('track', 'Purchase', { value, currency })
    window.fbq('trackCustom', 'SubscriptionPurchased', { value, currency, plan })
  }
}

export function trackPageView(url: string) {
  posthog.capture('$pageview', { $current_url: url })
  if (typeof window !== 'undefined') {
    window.fbq('track', 'PageView')
  }
}
