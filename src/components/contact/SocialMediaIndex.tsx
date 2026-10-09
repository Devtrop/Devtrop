import { ArrowUpRight } from 'lucide-react'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { CONTACT_PAGE_CONTENT, type SocialPlatform } from '@/data/contact'

function SocialPlatformIcon({
  platform,
  className,
}: {
  platform: SocialPlatform
  className?: string
}) {
  switch (platform) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
  }
}

export function SocialMediaIndex() {
  const { label, headline, subhead, items } = CONTACT_PAGE_CONTENT.social

  return (
    <section className="relative border-b-4 border-display bg-canvas" id="social-index">
      <SectionContainer className="py-16 lg:py-24">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 bg-accent inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted">
              {label} &bull; 03
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-display leading-tight">
            {headline}
          </h2>

          <p className="mt-4 text-base text-muted leading-relaxed max-w-xl">
            {subhead}
          </p>
        </div>

        {/* Technical Editorial Social Index — 4 Bordered Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-display bg-canvas">
          {items.map((item, index) => {
            const isLastDesktop = index === items.length - 1
            const isRightBorderSm = index % 2 === 0
            const isFirstRowSm = index < 2

            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative p-6 sm:p-8 flex flex-col justify-between min-h-[260px] lg:min-h-[280px] transition-colors duration-200 hover:bg-display ${
                  !isLastDesktop ? 'lg:border-r-2 lg:border-display' : ''
                } ${isRightBorderSm ? 'sm:border-r-2 sm:border-display' : 'sm:border-r-0'} ${
                  index < items.length - 1 ? 'border-b-2 border-display' : 'border-b-0'
                } ${isFirstRowSm ? 'sm:border-b-2 sm:border-display lg:border-b-0' : 'sm:border-b-0'}`}
              >
                {/* Top: Index Number & Diagonal Arrow */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-black tracking-widest text-muted group-hover:text-accent transition-colors duration-150">
                    {item.number}
                  </span>
                  <span className="p-1.5 border border-display/20 group-hover:border-inverse/30 group-hover:bg-accent transition-all duration-150">
                    <ArrowUpRight className="h-4 w-4 text-display group-hover:text-inverse group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                  </span>
                </div>

                {/* Bottom: Icon Badge, Network Name & Technical Handle */}
                <div className="mt-8 flex flex-col items-start">
                  <div className="mb-5 w-11 h-11 border-2 border-display bg-canvas group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-200">
                    <SocialPlatformIcon
                      platform={item.platform}
                      className="w-5 h-5 text-display group-hover:text-inverse transition-colors duration-200"
                    />
                  </div>

                  <span className="block text-xl sm:text-2xl font-black uppercase tracking-tight text-display group-hover:text-inverse transition-colors duration-150">
                    {item.name}
                  </span>
                  <span className="block mt-1.5 font-mono text-xs text-muted group-hover:text-inverse/60 transition-colors duration-150">
                    {item.handle}
                  </span>
                </div>

                {/* Bottom Orange Accent Border Reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}
