import type { Metadata } from "next";
import { PageShell } from "@/components/shared/layout/PageShell";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devtrop is a full-stack web and SaaS engineering studio. We partner with ambitious product teams to ship production-grade software.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}
