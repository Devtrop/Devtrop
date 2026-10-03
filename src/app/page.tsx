import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";
import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechMatrix } from "@/components/home/TechMatrix";
import { WorkingAgreement } from "@/components/home/WorkingAgreement";
import { EngagementModels } from "@/components/home/EngagementModels";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-body">
      <Navbar />
      
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <ProofBar />
        <CaseStudies />
        <ServicesGrid />
        <ProcessSection />
        <TechMatrix />
        <WorkingAgreement />
        <EngagementModels />
        <ClosingCta />
      </main>

      <Footer />
    </div>
  );
}
