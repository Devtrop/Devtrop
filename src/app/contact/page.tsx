import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/layout/PageShell'
import { EngagementModels } from '@/components/home/EngagementModels'
import { ClosingCta } from '@/components/home/ClosingCta'
import { SITE_CONFIG } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact — Book a Free Architecture Review',
  description:
    "Book a free 30-minute architecture review with Devtrop's lead engineer. Direct access, no sales pressure. We give architecture advice even if we don't work together.",
  keywords: [
    'contact Devtrop',
    'hire Devtrop',
    'book a discovery call Devtrop',
    'hire full-stack engineers Bangladesh',
    'software engineering consultation',
    'web development inquiry',
    'SaaS development contact',
    'free architecture review',
    'talk to a web developer',
    'start a web project',
    'custom software development inquiry',
    'Next.js developer for hire',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: 'Talk to the Engineer Who Will Actually Build Your Product — Devtrop',
    description:
      "30-minute architecture review. Direct with the lead engineer. No sales pressure. We give advice even if we don't work together.",
    url: `${SITE_CONFIG.url}/contact`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Contact Devtrop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talk to the Engineer Who Will Actually Build Your Product — Devtrop',
    description: '30-minute architecture review. Direct with the lead engineer. No sales pressure.',
    images: ['/og-default.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_CONFIG.url}/contact` },
  ],
}

export default function ContactPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EngagementModels />
      <ClosingCta />
    </PageShell>
  )
}

