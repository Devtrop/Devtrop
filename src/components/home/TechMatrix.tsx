"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionHeading } from "@/components/shared/layout/SectionHeading";
import { TECH_MATRIX_CONTENT } from "@/data/tech-matrix";

export function TechMatrix() {
  const { sectionNumber, sectionLabel, headline, subhead, tabs } = TECH_MATRIX_CONTENT;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="border-b-4 border-display" id="architecture">
      <SectionContainer className="py-20 lg:py-28">
        <SectionHeading
          sectionNumber={sectionNumber}
          sectionLabel={sectionLabel}
          headline={headline}
          subhead={subhead}
        />

        {/*
          Tab bar — 2×2 grid on mobile, 4-col on desktop.
          Borders are applied per-cell so no edge ever doubles up.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-display" role="tablist" aria-label="Technology categories">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={[
                "px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-150",
                // right border: left column on mobile (even), first 3 on desktop
                i % 2 === 0 ? "border-r-2 border-display" : "",
                "lg:border-r-0",
                i < 3 ? "lg:border-r-2 lg:border-display" : "",
                // bottom border: top row on mobile (0,1), none on desktop
                i < 2 ? "border-b-2 border-display lg:border-b-0" : "",
                activeTab === tab.id
                  ? "bg-display text-inverse"
                  : "bg-canvas text-display hover:bg-subtle",
              ].filter(Boolean).join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          id={`panel-${activeTabData.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTabData.id}`}
          className="border-2 border-t-0 border-display"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {activeTabData.cards.map((card, i) => (
              <div
                key={card.tool}
                className={`group p-6 sm:p-8 hover:bg-accent transition-colors duration-150 ${
                  i < activeTabData.cards.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-display" : ""
                }`}
              >
                <h4 className="text-base font-black uppercase tracking-tight text-display group-hover:text-inverse transition-colors duration-150">
                  {card.tool}
                </h4>
                <p className="mt-3 text-sm text-muted leading-relaxed group-hover:text-inverse/70 transition-colors duration-150">
                  {card.reason}
                </p>
                <div className="mt-4 pt-4 border-t border-display/10 group-hover:border-inverse/20 transition-colors duration-150">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover:text-inverse transition-colors duration-150">
                    Benchmark
                  </span>
                  <p className="mt-1 text-xs text-display/70 group-hover:text-inverse/80 transition-colors duration-150">
                    {card.benchmark}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TechMatrix;
