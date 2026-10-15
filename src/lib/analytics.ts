/**
 * GA4 event tracking helper.
 *
 * Relies on the gtag script initialised in src/app/layout.tsx.
 * Safe to call from any "use client" component — no-ops on the server
 * or when GA4 has not yet loaded.
 *
 * Usage:
 *   trackEvent('whatsapp_click', { link_location: 'hero' })
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string>
): void {
  if (typeof window === 'undefined') return

  const gtag = (
    window as Window & {
      gtag?: (
        command: 'event',
        eventName: string,
        params?: Record<string, string>
      ) => void
    }
  ).gtag

  gtag?.('event', eventName, params)
}
