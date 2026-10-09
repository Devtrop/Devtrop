import { ArrowUpRight } from 'lucide-react'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { CONTACT_PAGE_CONTENT } from '@/data/contact'

export function DirectContactGrid() {
  const { label, headline, subhead, cards } = CONTACT_PAGE_CONTENT.directContact

  return (
    <section className="relative border-b-4 border-display bg-subtle" id="direct-contact">
      <SectionContainer className="py-16 lg:py-24">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 bg-accent inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted">
              {label} &bull; 02
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-display leading-tight">
            {headline}
          </h2>

          <p className="mt-4 text-base text-muted leading-relaxed max-w-xl">
            {subhead}
          </p>
        </div>

        {/* 4-Column Bordered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-display bg-canvas">
          {cards.map((card, index) => {
            const isLastDesktop = index === cards.length - 1
            const isLastMobileRow = index >= 2

            return (
              <a
                key={card.label}
                href={card.href}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noreferrer' : undefined}
                className={`group relative p-6 sm:p-8 lg:p-6 xl:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-[230px] transition-all duration-150 hover:bg-display ${
                  !isLastDesktop ? 'lg:border-r-2 lg:border-display' : ''
                } ${index % 2 === 0 ? 'sm:border-r-2 sm:border-display lg:border-r-2' : ''} ${
                  index < 2 ? 'border-b-2 border-display lg:border-b-0' : ''
                } ${!isLastMobileRow ? 'sm:border-b-2 sm:border-display lg:border-b-0' : ''}`}
              >
                {/* Card Top: Micro-label & Arrow */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted group-hover:text-inverse/70 transition-colors">
                      {card.label}
                    </span>
                    {card.label === 'RESPONSE' && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    )}
                  </div>

                  <span className="p-1 border border-display/20 group-hover:border-inverse/40 group-hover:bg-accent group-hover:text-inverse transition-all duration-150">
                    <ArrowUpRight className="h-4 w-4 text-display group-hover:text-inverse group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Card Bottom: Large Typography Title & Detail */}
                <div className="mt-8 flex-1 flex flex-col justify-end">
                  <span
                    className={`block font-black text-display group-hover:text-inverse transition-colors duration-150 tracking-tight leading-snug ${
                      card.label === 'EMAIL'
                        ? 'text-base sm:text-lg lg:text-[15px] xl:text-lg 2xl:text-xl break-all sm:break-normal'
                        : 'text-xl sm:text-2xl font-black'
                    }`}
                  >
                    {card.title}
                  </span>
                  {card.detail && (
                    <span className="block mt-2 font-mono text-xs text-muted group-hover:text-inverse/60 transition-colors duration-150">
                      {card.detail}
                    </span>
                  )}
                </div>

                {/* Bottom Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
              </a>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}
