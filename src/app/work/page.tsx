import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/layout/PageShell'
import { CaseStudies } from '@/components/home/CaseStudies'
import { WorkingAgreement } from '@/components/home/WorkingAgreement'
import { SITE_CONFIG } from '@/data/site'

export const metadata: Metadata = {
  title: 'Work — Live Builds & Case Studies',
  description:
    'Live builds from Devtrop: Uparzo multi-tenant e-commerce SaaS, Feletrip hotel booking marketplace, and Biponiq multi-vendor storefront builder. Every claim links to a production site you can open right now.',
  keywords: [
    // Portfolio intent
    'Devtrop portfolio',
    'Devtrop case studies',
    'Devtrop projects',
    'web development case study',
    'software engineering portfolio',
    // Case study names
    'Uparzo multi-tenant ecommerce SaaS',
    'Feletrip hotel booking marketplace',
    'Biponiq multi-vendor storefront builder',
    // Technical keywords from the builds
    'Next.js marketplace portfolio',
    'Prisma PostgreSQL SaaS case study',
    'multi-tenant architecture example',
    'SSLCommerz payment integration',
    'SaaS storefront builder portfolio',
    'hotel booking platform Next.js',
    'vendor payout marketplace system',
    // Social proof signals
    'live production web apps portfolio',
    'open source case studies web development',
    'real web development projects',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/work`,
  },
  openGraph: {
    title: 'Real Builds, Running in Production — Devtrop',
    description:
      'Uparzo: multi-tenant e-commerce SaaS with custom domains and subscription billing. Feletrip: hotel booking marketplace with vendor payouts. Both live.',
    url: `${SITE_CONFIG.url}/work`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Devtrop Live Builds' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Builds, Running in Production — Devtrop',
    description:
      'Uparzo: multi-tenant e-commerce SaaS. Feletrip: hotel booking marketplace with vendor payouts. Open both in a new tab.',
    images: ['/og-default.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_CONFIG.url}/work` },
  ],
}

export default function WorkPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudies />
      <WorkingAgreement />
    </PageShell>
  )
}

