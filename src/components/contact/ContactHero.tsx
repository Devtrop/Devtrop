import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { CONTACT_PAGE_CONTENT } from '@/data/contact'

export function ContactHero() {
  const {  headline, subhead } = CONTACT_PAGE_CONTENT.hero

  return (
    <section className="relative min-h-[30vh] flex items-center border-b-4 border-display bg-canvas overflow-hidden py-10 sm:py-12 lg:py-14">
      {/* Background Swiss grid pattern — signature Devtrop texture */}
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none opacity-60" />

      <SectionContainer className="relative z-10 w-full">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-display leading-[0.95]">
          {headline.replace('DEVTROP', '')}
          <span className="text-accent">DEVTROP</span>
        </h1>

        {/* Subhead */}
        <p className="mt-3 text-sm sm:text-base text-muted font-normal max-w-2xl leading-relaxed">
          {subhead}
        </p>
      </SectionContainer>
    </section>
  )
}
