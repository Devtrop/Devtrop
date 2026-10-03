import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { PROOF_CONTENT } from "@/data/proof";

export function ProofBar() {
  const { sectionNumber, sectionLabel, badgeLabel, techBadges, commitments } = PROOF_CONTENT;

  return (
    <section className="border-b-4 border-display bg-subtle swiss-dots relative" id="ecosystem">
      <SectionContainer className="relative z-10 py-16 lg:py-20">
        {/* Section number */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-accent font-black text-sm tracking-widest">{sectionNumber}.</span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{sectionLabel}</span>
          <div className="flex-1 h-px bg-black/10" />
        </div>

        {/* Badge label */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
          {badgeLabel}
        </p>

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
          {commitments.map((tile, i) => (
            <div
              key={tile.value}
              className={`group p-6 sm:p-8 ${i < commitments.length - 1 ? "border-r-2 border-display" : ""} hover:bg-display transition-colors duration-150`}
            >
              <span className="block text-3xl sm:text-4xl font-black text-display tracking-tighter group-hover:text-inverse transition-colors duration-150">
                {tile.value}
              </span>
              <span className="block mt-2 text-xs text-muted leading-relaxed group-hover:text-inverse/70 transition-colors duration-150">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default ProofBar;
