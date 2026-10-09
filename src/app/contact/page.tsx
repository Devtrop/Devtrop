import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/layout/PageShell'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactInquirySection } from '@/components/contact/ContactInquirySection'
import { ContactFinalCta } from '@/components/contact/ContactFinalCta'
import { SITE_CONFIG } from '@/data/site'

export const metadata: Metadata = {
  title: "Contact — Let's Build Something That Works",
  description:
    'Contact Devtrop, a full-stack web and SaaS engineering studio. Inquire about 0→1 SaaS builds, web platforms, and modernization. Direct engineering conversations, response within 1 business day.',
  keywords: [
    'contact Devtrop',
    'hire SaaS engineers',
    'book architecture review',
    'full-stack engineering studio',
    'Dhaka Bangladesh software studio',
    'web platform modernization',
    '0 to 1 SaaS MVP development',
    'Devtrop inquiry',
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
    title: "Contact Devtrop — Let's Build Something That Works",
    description:
      'Have a product idea, an existing platform that needs modernization, or a scaling challenge? Talk directly with our engineering team.',
    url: `${SITE_CONFIG.url}/contact`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Contact Devtrop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Devtrop — Let's Build Something That Works",
    description:
      'Direct engineering conversations. Inquire about 0→1 SaaS, web platforms, and platform modernization.',
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

      {/* 01: Hero Section */}
      <ContactHero />

      {/* 02: Inquiry & Engineering Form Section (includes Direct Channels & Social Icons) */}
      <ContactInquirySection />

      {/* 03: Final Obsidian Closing Banner CTA */}
      <ContactFinalCta />
    </PageShell>
  )
}
