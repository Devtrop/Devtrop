import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/layout/PageShell'
import { CaseStudies } from '@/components/home/CaseStudies'
import { WorkingAgreement } from '@/components/home/WorkingAgreement'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Proof builds from Devtrop — Atlas multi-tenant SaaS core with Postgres RLS and Stripe billing, and Pulse real-time edge telemetry rendering 10k events/sec. Every claim links to something you can fork or load-test.',
  keywords: [
    'Devtrop proof builds',
    'multi-tenant SaaS example',
    'Next.js SaaS case study',
    'real-time dashboard React',
    'open source SaaS starter',
    'web app portfolio',
    'software engineering case study',
  ],
  alternates: {
    canonical: 'https://devtrop.com/work',
  },
  openGraph: {
    title: 'Real Builds. Real Code. Fork It, Load-Test It, Ship It — Devtrop',
    description:
      'Atlas: multi-tenant SaaS with Postgres RLS & Stripe. Pulse: real-time canvas rendering 10k events/sec. Every claim is verifiable.',
    url: 'https://devtrop.com/work',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Devtrop Proof Builds' }],
  },
  twitter: {
    title: 'Real Builds. Real Code. Fork It, Load-Test It, Ship It — Devtrop',
    description:
      'Atlas: multi-tenant SaaS with Postgres RLS & Stripe. Pulse: 10k events/sec real-time canvas. Fork them, load-test them.',
    images: ['/og-default.png'],
  },
}

export default function WorkPage() {
  return (
    <PageShell>
      <CaseStudies />
      <WorkingAgreement />
    </PageShell>
  )
}
