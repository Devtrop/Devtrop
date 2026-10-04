interface SectionHeadingProps {
  sectionNumber: string;
  sectionLabel: string;
  headline: string;
  subhead?: string;
  id?: string;
  inverted?: boolean;
}

export function SectionHeading({ sectionNumber, sectionLabel, headline, subhead, id, inverted }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 lg:mb-16">
      {/* Section eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span className={cn("text-xs font-bold uppercase tracking-[0.2em]", inverted ? "text-inverse/60" : "text-muted")}>
          {sectionLabel}
        </span>
        <div className={cn("flex-1 h-px", inverted ? "bg-white/10" : "bg-black/10")} />
      </div>

      {/* Headline */}
      <h2 className={cn(
        "text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]",
        inverted ? "text-inverse" : "text-display"
      )}>
        {headline}
      </h2>

      {/* Subhead */}
      {subhead && (
        <p className={cn(
          "mt-4 text-base sm:text-lg max-w-2xl leading-relaxed",
          inverted ? "text-inverse/70" : "text-muted"
        )}>
          {subhead}
        </p>
      )}
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
