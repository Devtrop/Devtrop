import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionHeading } from "@/components/shared/layout/SectionHeading";
import { WORK_CONTENT } from "@/data/work";

export function CaseStudies() {
  const { sectionNumber, sectionLabel, headline, subhead, builds } = WORK_CONTENT;

  return (
    <section className="border-b-4 border-display" id="work">
      <SectionContainer className="py-20 lg:py-28">
        <SectionHeading
          sectionNumber={sectionNumber}
          sectionLabel={sectionLabel}
          headline={headline}
          subhead={subhead}
        />

        <div className="space-y-0">
          {builds.map((build, i) => (
            <div
              key={build.title}
              className={`grid grid-cols-1 lg:grid-cols-2 border-2 border-display ${i > 0 ? "border-t-0" : ""}`}
            >
              {/* Visual / Architecture diagram side */}
              <div
                className={`relative p-8 sm:p-12 bg-subtle swiss-grid-pattern flex items-center justify-center min-h-[280px] border-b-2 lg:border-b-0 border-display ${
                  i % 2 === 1 ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
                }`}
              >
                {/* Abstract architecture diagram */}
                <div className="relative w-full max-w-xs aspect-square">
                  {i === 0 ? (
                    /* Atlas — multi-tenant grid */
                    <>
                      <div className="absolute inset-[10%] border-4 border-display" />
                      <div className="absolute top-[10%] left-[10%] w-1/2 h-1/2 border-r-2 border-b-2 border-display/40" />
                      <div className="absolute bottom-[10%] right-[10%] w-[30%] aspect-square bg-accent" />
                      <div className="absolute top-[15%] left-[15%] w-[25%] aspect-square bg-display" />
                      <div className="absolute top-[45%] left-[35%] text-xs font-black uppercase tracking-widest text-display/30">
                        RLS
                      </div>
                    </>
                  ) : (
                    /* Pulse — real-time flow */
                    <>
                      <div className="absolute top-[20%] left-[5%] w-[40%] h-[3px] bg-accent" />
                      <div className="absolute top-[40%] left-[15%] w-[60%] h-[3px] bg-display" />
                      <div className="absolute top-[60%] left-[10%] w-[50%] h-[3px] bg-accent/50" />
                      <div className="absolute top-[80%] left-[20%] w-[40%] h-[3px] bg-display/30" />
                      <div className="absolute top-[10%] right-[10%] w-[30%] aspect-square rounded-full border-4 border-display" />
                      <div className="absolute bottom-[15%] right-[15%] w-[20%] aspect-square bg-accent" />
                    </>
                  )}
                </div>
              </div>

              {/* Content side */}
              <div className={`p-8 sm:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Category */}
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {build.category}
                </span>

                <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tighter text-display leading-tight">
                  {build.title}
                </h3>

                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {build.outcome}
                </p>

                {/* Problem & Approach */}
                <div className="mt-6 space-y-4">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-display">The Problem</span>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{build.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-display">The Approach</span>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{build.approach}</p>
                  </div>
                </div>

                {/* Stack tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {build.stackTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border-2 border-display/20 text-xs font-bold uppercase tracking-wider text-display">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">
                  <Link
                    href={build.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-display px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-inverse hover:bg-accent transition-colors duration-150"
                  >
                    View Repo <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CaseStudies;
