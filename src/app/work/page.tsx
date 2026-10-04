import type { Metadata } from "next";
import { PageShell } from "@/components/shared/layout/PageShell";
import { CaseStudies } from "@/components/home/CaseStudies";
import { WorkingAgreement } from "@/components/home/WorkingAgreement";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Proof builds and selected work from Devtrop — Atlas multi-tenant SaaS platform and Pulse real-time analytics dashboard.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <CaseStudies />
      <WorkingAgreement />
    </PageShell>
  );
}
