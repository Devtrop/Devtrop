'use client'

import { Calendar, Mail } from 'lucide-react'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { CONTACT_PAGE_CONTENT } from '@/data/contact'
import { openBooking } from '@/lib/booking'

export function ContactFinalCta() {
  const { headline, accentWord, subhead, primaryCta, secondaryCta } = CONTACT_PAGE_CONTENT.closing

  // Split headline to highlight accent word
  const parts = headline.split(accentWord)

  return (
    <section className="bg-display text-inverse relative overflow-hidden" id="final-cta">
      {/* Subtle blueprint grid pattern on dark obsidian */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-10 pointer-events-none" />

      <SectionContainer className="relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 bg-accent inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-inverse/60">
              {'Devtrop Studio // Engagement Phase'}
            </span>
          </div>

          {/* Large Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-inverse">
            {parts[0]}
            <span className="text-accent">{accentWord}</span>
            {parts[1]}
          </h2>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg text-inverse/70 leading-relaxed max-w-xl">
            {subhead}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-inverse hover:bg-accent-hover transition-colors duration-150 cursor-pointer active:scale-95 active:translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              {primaryCta}
            </button>

            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-inverse/30 text-xs sm:text-sm font-black uppercase tracking-wider text-inverse hover:bg-inverse hover:text-display transition-colors duration-150 cursor-pointer active:scale-95 active:translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {secondaryCta}
            </a>
          </div>

          {/* Technical Trust Guarantee Indicators */}
          <div className="mt-12 pt-8 border-t border-inverse/20 flex flex-wrap gap-6 text-xs font-mono text-inverse/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent" />
              Direct Lead Engineer Architecture Review
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent" />
              Mutual NDA Before Technical Disclosure
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent" />
              Zero Sales Pressure • Actionable Next Steps
            </span>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
