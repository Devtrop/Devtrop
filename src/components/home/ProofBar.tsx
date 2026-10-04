import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { PROOF_CONTENT } from '@/data/proof'

export function ProofBar() {
  const { sectionNumber, sectionLabel, badgeLabel, techBadges, commitments } = PROOF_CONTENT

  return (
    <section className="border-b-4 border-display bg-subtle swiss-dots relative" id="ecosystem">
      <SectionContainer className="relative z-10 py-16 lg:py-20">
        {/* Section number */}


        {/* Badge label */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">{badgeLabel}</p>

        {/* Tech badges — monochrome, Swiss rectangles */}
        <div className="flex flex-wrap gap-2 mb-12">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 border-2 border-display/20 text-xs font-bold uppercase tracking-wider text-display hover:border-display hover:bg-display hover:text-inverse transition-colors duration-150"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Commitment tiles — 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-display">
          {commitments.map((tile, i) => {
            const cols = 4
            const mobileCols = 2
            // Show right border when the item is NOT the last in its row.
            // On mobile (2-col): items at index 0,2 (even) get right border.
            // On desktop (4-col): items at index 0,1,2 get right border.
            const mobileRightBorder = i % mobileCols !== mobileCols - 1
            const desktopRightBorder = i % cols !== cols - 1

            return (
              <div
                key={tile.value}
                className={[
                  'group p-6 sm:p-8 hover:bg-display transition-colors duration-150',
                  mobileRightBorder ? 'border-r-2 border-display' : '',
                  // On desktop override with the 4-col logic
                  desktopRightBorder ? 'lg:border-r-2 lg:border-display' : 'lg:border-r-0',
                  // Row dividers: bottom border on first row in each breakpoint
                  i < mobileCols ? 'border-b-2 border-display' : '',
                  i < cols ? 'lg:border-b-0' : '',
                ].join(' ')}
              >
                <span className="block text-3xl sm:text-4xl font-black text-display tracking-tighter group-hover:text-inverse transition-colors duration-150">
                  {tile.value}
                </span>
                <span className="block mt-2 text-xs text-muted leading-relaxed group-hover:text-inverse/70 transition-colors duration-150">
                  {tile.label}
                </span>
              </div>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}

export default ProofBar
