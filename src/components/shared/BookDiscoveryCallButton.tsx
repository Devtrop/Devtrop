'use client'

import { openBooking } from '@/lib/booking'
import { trackEvent } from '@/lib/analytics'

interface BookDiscoveryCallButtonProps {
  /** GA4 link_location value — identifies which section fired the event. */
  location?: string
  className?: string
  label?: string
}

export function BookDiscoveryCallButton({
  location = 'unknown',
  className,
  label = 'Book a Discovery Call',
}: BookDiscoveryCallButtonProps) {
  return (
    <button
      onClick={() => {
        trackEvent('book_call_click', { link_location: location })
        openBooking()
      }}
      className={
        className ??
        'inline-flex items-center bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-inverse hover:bg-accent-hover transition-all duration-150 cursor-pointer touch-manipulation active:scale-95 active:translate-y-0.5 md:active:scale-100 md:active:translate-y-0'
      }
    >
      {label}
    </button>
  )
}
