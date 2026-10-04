export interface FooterLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web App Architecture', href: '/#services' },
      { label: '0-to-1 SaaS MVP', href: '/#services' },
      { label: 'Platform Modernization', href: '/#services' },
      { label: 'Performance & Scale', href: '/#services' },
    ],
  },
  {
    title: 'Selected Work',
    links: [
      { label: 'Atlas Cloud Platform', href: '/#work' },
      { label: 'Pulse Real-Time Engine', href: '/#work' },
      { label: 'Architecture RFCs', href: '/#architecture' },
    ],
  },
  {
    title: 'Delivery Process',
    links: [
      { label: 'Architecture Discovery', href: '/services#process' },
      { label: '14-Day Sprint Cadence', href: '/services#process' },
      { label: 'CI/CD & Reliability', href: '/services#process' },
      { label: '100% IP Transfer', href: '/services#process' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'Working Agreement', href: '/#engagement' },
      { label: 'Honesty Standard', href: '/#architecture' },
      { label: 'Founder Discovery Call', href: '/#contact' },
      { label: 'Direct Email', href: 'mailto:info.devtrop@gmail.com' },
    ],
  },
]

export const FOOTER_AVAILABILITY = {
  label: 'Booking Q4 2026 starts',
}
