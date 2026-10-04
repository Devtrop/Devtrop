import { PageShell } from "@/components/shared/layout/PageShell";
import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <ProofBar />
      <ServicesGrid />
      <CaseStudies />
      <ClosingCta />
    </PageShell>
  );
}
