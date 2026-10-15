'use client'

import { Mail } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function ClosingCtaEmailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      onClick={() => trackEvent('email_click', { link_location: 'closing_cta' })}
      className="inline-flex items-center gap-2 px-6 py-4 border-2 border-inverse/30 text-sm font-bold uppercase tracking-wider text-inverse hover:bg-inverse hover:text-display duration-150 transition-all cursor-pointer active:scale-95 active:translate-y-1 md:active:scale-100 md:active:translate-y-0"
    >
      <Mail className="h-4 w-4" />
      Email Founders Directly
    </a>
  )
}
