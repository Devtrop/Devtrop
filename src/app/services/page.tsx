import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/layout/PageShell'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { ProcessSection } from '@/components/home/ProcessSection'
import { TechMatrix } from '@/components/home/TechMatrix'
import { EngagementModels } from '@/components/home/EngagementModels'
import { ClosingCta } from '@/components/home/ClosingCta'
import { SITE_CONFIG } from '@/data/site'

export const metadata: Metadata = {
  title: 'Services — Full-Stack Web & SaaS Engineering',
  description:
    'Full-stack web and SaaS engineering services: 0-to-1 MVP builds, SaaS platform engineering, application modernization, cloud infrastructure, and DevOps. Delivered in 14-day sprints with 100% IP transfer.',
  keywords: [
    // Service offerings
    'SaaS MVP development services',
    'web application engineering services',
    'platform modernization services',
    'cloud infrastructure DevOps services',
    'application modernization company',
    'code audit service',
    'dedicated engineering squad',
    'full-stack development retainer',
    // Tech-stack specific
    'Next.js TypeScript development services',
    'React web app development',
    'Node.js backend engineering',
    'PostgreSQL database development',
    // Devtrop specific
    'Devtrop services',
    'what does Devtrop build',
    'Devtrop web development services',
    // Intent-based
    'hire web development team',
    'outsource full-stack development',
    '14-day sprint development',
    '0 to 1 product build',
    'MVP web app development',
    'white-label SaaS engineering',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: 'From Zero to Production SaaS — Services Built Around Your Roadmap',
    description:
      '0-to-1 MVP builds, SaaS platform engineering, modernization, cloud infrastructure. Delivered in strict 14-day sprints with 100% IP transfer.',
    url: `${SITE_CONFIG.url}/services`,
    images: [
      { url: '/og-default.png', width: 1200, height: 630, alt: 'Devtrop Engineering Services' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Zero to Production SaaS — Services Built Around Your Roadmap',
    description:
      '0-to-1 MVP builds, SaaS platform engineering, modernization, cloud infrastructure. 14-day sprints, 100% IP transfer.',
    images: ['/og-default.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_CONFIG.url}/services` },
  ],
}

export default function ServicesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesGrid />
      <ProcessSection />
      <TechMatrix />
      <EngagementModels />
      <ClosingCta />
    </PageShell>
  )
}

