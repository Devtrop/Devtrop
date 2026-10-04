import type { Metadata } from "next";
import { PageShell } from "@/components/shared/layout/PageShell";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechMatrix } from "@/components/home/TechMatrix";
import { EngagementModels } from "@/components/home/EngagementModels";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web and SaaS engineering services — product engineering, platform architecture, tech strategy, and more.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesGrid />
      <TechMatrix />
      <EngagementModels />
    </PageShell>
  );
}
