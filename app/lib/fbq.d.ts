interface FacebookPixel {
  (command: 'init', pixelId: string, options?: Record<string, unknown>): void
  (command: 'track', event: string, parameters?: Record<string, unknown>): void
  (command: 'trackCustom', event: string, parameters?: Record<string, unknown>): void
  (command: 'consent', action: 'grant' | 'revoke'): void
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  push: (...args: unknown[]) => void
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq: FacebookPixel
    _fbq: FacebookPixel
  }
}

export {}
