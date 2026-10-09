import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { CONTACT_PAGE_CONTENT } from '@/data/contact'

export function ContactHero() {
  const { label, headline, subhead } = CONTACT_PAGE_CONTENT.hero

  return (
    <section className="relative min-h-[30vh] flex items-center border-b-4 border-display bg-canvas overflow-hidden py-10 sm:py-12 lg:py-14">
      {/* Background Swiss grid pattern — signature Devtrop texture */}
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none opacity-60" />

      {/* Architectural corner registration marks */}
      <div className="absolute top-3 left-4 hidden sm:block font-mono text-[10px] text-muted/40 uppercase tracking-widest select-none pointer-events-none">
        + 23.8103° N // 90.4125° E &bull; DHAKA HQ
      </div>
      <div className="absolute top-3 right-4 hidden sm:block font-mono text-[10px] text-muted/40 uppercase tracking-widest select-none pointer-events-none">
        CH-01 // ENGINEERING DIRECT
      </div>

      <SectionContainer className="relative z-10 w-full">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-2 w-2 bg-accent inline-block" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted">
            {label}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-display leading-[0.95]">
          {headline.replace('DEVTROP', '')}
          <span className="text-accent">DEVTROP.</span>
        </h1>

        {/* Subhead */}
        <p className="mt-3 text-sm sm:text-base text-muted font-normal max-w-2xl leading-relaxed">
          {subhead}
        </p>
      </SectionContainer>
    </section>
  )
}
