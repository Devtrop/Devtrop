import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionHeading } from "@/components/shared/layout/SectionHeading";
import { WORKING_AGREEMENT } from "@/data/engagement";

export function WorkingAgreement() {
  const { sectionNumber, sectionLabel, headline, subhead, commitments } = WORKING_AGREEMENT;

  return (
    <section className="border-b-4 border-display bg-subtle swiss-dots relative" id="agreement">
      <SectionContainer className="relative z-10 py-20 lg:py-28">
        <SectionHeading
          sectionNumber={sectionNumber}
          sectionLabel={sectionLabel}
          headline={headline}
          subhead={subhead}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-display">
          {commitments.map((item, i) => (
            <div
              key={item.number}
              className={`group p-8 sm:p-10 bg-canvas hover:bg-display transition-colors duration-150 border-display ${
                i < commitments.length - 1 ? "border-b-2" : ""
              } md:border-b-0 ${
                i % 2 !== 1 ? "md:border-r-2" : "md:border-r-0"
              } ${i % 3 !== 2 ? "lg:border-r-2" : "lg:border-r-0"} ${
                i >= 3 ? "lg:border-t-2" : ""
              }`}
            >
              <span className="block text-3xl font-black text-accent tracking-tighter mb-4 group-hover:text-inverse transition-colors duration-150">
                {item.number}
              </span>
              <h3 className="text-base font-black uppercase tracking-wider text-display group-hover:text-inverse transition-colors duration-150">
                {item.title}
              </h3>
              <p className="mt-3 text-xs text-muted leading-relaxed group-hover:text-inverse/70 transition-colors duration-150">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default WorkingAgreement;
