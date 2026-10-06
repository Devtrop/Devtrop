'use client'

import { openBooking } from '@/lib/booking'

export function BookDiscoveryCallButton() {
  return (
    <button
      type="button"
      onClick={() => openBooking()}
      className="inline-flex items-center bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-inverse hover:bg-accent-hover transition-colors duration-150 cursor-pointer"
    >
      Book a Discovery Call
    </button>
  )
}
