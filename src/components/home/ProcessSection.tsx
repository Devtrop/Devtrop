import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionHeading } from "@/components/shared/layout/SectionHeading";
import { PROCESS_CONTENT } from "@/data/process";

export function ProcessSection() {
  const { sectionNumber, sectionLabel, headline, subhead, phases } = PROCESS_CONTENT;

  return (
    <section className="border-b-4 border-display bg-subtle swiss-diagonal relative" id="process">
      <SectionContainer className="relative z-10 py-20 lg:py-28">
        <SectionHeading
          sectionNumber={sectionNumber}
          sectionLabel={sectionLabel}
          headline={headline}
          subhead={subhead}
        />

        {/* Process pipeline — horizontal on lg, vertical on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`group relative p-8 border-2 border-display bg-canvas hover:bg-display transition-colors duration-150 ${
                i < phases.length - 1 ? "lg:border-r-0" : ""
              } ${i > 0 ? "border-t-0 lg:border-t-2" : ""}`}
            >
              {/* Phase number — large */}
              <span className="block text-4xl font-black text-accent tracking-tighter mb-4 group-hover:text-inverse transition-colors duration-150">
                {phase.number}
              </span>

              {/* Phase title */}
              <h3 className="text-sm font-black uppercase tracking-wider text-display leading-snug group-hover:text-inverse transition-colors duration-150">
                {phase.title}
              </h3>

              {/* Timeline badge */}
              <span className="inline-block mt-3 px-3 py-1 border-2 border-display/30 text-xs font-bold uppercase tracking-wider text-muted group-hover:border-inverse/30 group-hover:text-inverse/70 transition-colors duration-150">
                {phase.timeline}
              </span>

              {/* Narrative */}
              <p className="mt-4 text-xs text-muted leading-relaxed group-hover:text-inverse/70 transition-colors duration-150">
                {phase.narrative}
              </p>

              {/* Deliverables */}
              <div className="mt-6 pt-4 border-t border-display/10 group-hover:border-inverse/20 transition-colors duration-150">
                {phase.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-block mr-2 mb-2 px-2 py-1 text-xs font-medium text-display/70 border border-display/20 group-hover:text-inverse/80 group-hover:border-inverse/30 transition-colors duration-150"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Connector arrow on desktop */}
              {i < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-[13px] w-6 h-6 bg-display rotate-45 transform -translate-y-1/2 z-10 group-hover:bg-accent transition-colors duration-150" />
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default ProcessSection;
