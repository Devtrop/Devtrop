export interface HeroContent {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: {
    label: string;
    href: string;
    helperText: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const HERO_CONTENT: HeroContent = {
  eyebrow: "Full-Stack Web & SaaS Engineering Studio",
  headline: "We engineer scalable web applications and SaaS platforms for ambitious teams.",
  subhead:
    "From zero-to-one product architectures to high-concurrency cloud systems. We partner with funded startups to ship production-grade software with uncompromising craftsmanship.",
  primaryCta: {
    label: "Book a Discovery Call",
    href: "#contact",
    helperText: "30-minute architecture review • Direct with lead engineer • No sales pressure",
  },
  secondaryCta: {
    label: "Explore Selected Work ↓",
    href: "#work",
  },
};
