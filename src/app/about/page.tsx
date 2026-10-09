import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/layout/PageShell'
import { AboutContent } from '@/components/about/AboutContent'
import { SITE_CONFIG } from '@/data/site'

export const metadata: Metadata = {
  title: 'About Devtrop — Engineering Studio Built on Transparency',
  description:
    'Devtrop is a full-stack web and SaaS engineering studio built on the Honesty Standard — no fake metrics, no fabricated testimonials. We ship proof builds you can fork, load-test, and examine.',
  keywords: [
    'about Devtrop',
    'Devtrop engineering studio',
    'who is Devtrop',
    'Devtrop team',
    'software engineering studio Bangladesh',
    'honest software engineering agency',
    'transparent web development agency',
    'full-stack engineers for hire',
    'SaaS engineering team',
    'web development studio about',
    'production-grade engineering studio',
    'no fake metrics web agency',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'Meet the Engineers Behind Your Next Production Build — Devtrop',
    description:
      'No fake metrics. No fabricated testimonials. Devtrop is an engineering studio built on proof builds you can fork, load-test, and examine.',
    url: `${SITE_CONFIG.url}/about`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'About Devtrop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the Engineers Behind Your Next Production Build — Devtrop',
    description:
      'No fake metrics. No fabricated testimonials. Devtrop ships proof builds you can fork and examine.',
    images: ['/og-default.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_CONFIG.url}/about` },
  ],
}

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutContent />
    </PageShell>
  )
}

