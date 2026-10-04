import type { Metadata } from "next";
import { PageShell } from "@/components/shared/layout/PageShell";
import { EngagementModels } from "@/components/home/EngagementModels";
import { ClosingCta } from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute architecture review with the Devtrop lead engineer. Direct, no sales pressure.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <EngagementModels />
      <ClosingCta />
    </PageShell>
  );
}
