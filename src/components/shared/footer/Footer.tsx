import Link from 'next/link'
import Image from 'next/image'
import { Mail, ArrowUpRight } from 'lucide-react'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { FOOTER_COLUMNS, FOOTER_AVAILABILITY, SOCIAL_LINKS, type SocialLink } from './footerData'
import { env } from '@/lib/env'

/* ─── Inline SVG icons (no bundle bloat) ─────────────────── */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function SocialIcon({ platform, className }: { platform: SocialLink['platform']; className?: string }) {
  if (platform === 'facebook') return <FacebookIcon className={className} />
  if (platform === 'instagram') return <InstagramIcon className={className} />
  return <LinkedInIcon className={className} />
}

export function Footer() {
  const gmail = env.GMAIL_INFO

  return (
    <footer className="w-full bg-canvas border-t-2 border-display">
      <SectionContainer className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Image Logo */}
            <Link
              href="/"
              className="group flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Devtrop Studio Home"
            >
              <Image
                src="/devtrop_logo_transparent_bg_resized.png"
                alt="Devtrop Logo"
                width={220}
                height={48}
                className="w-auto h-7 md:h-8 hover:opacity-90 transition-opacity duration-150"
              />
            </Link>

            {/* Mission */}
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              Full-stack web &amp; SaaS engineering studio. Production-grade platforms with
              uncompromising craftsmanship for ambitious teams.
            </p>

            {/* Contact */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={`mailto:${gmail}`}
                className="inline-flex items-center gap-2 text-sm text-display font-medium hover:text-accent transition-colors duration-150"
              >
                <Mail className="h-4 w-4" />
                <span>{gmail}</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group inline-flex items-center justify-center w-9 h-9 border-2 border-display text-display hover:bg-display hover:text-inverse transition-colors duration-150"
                >
                  <SocialIcon platform={social.platform} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-display mb-4 pb-2 border-b-2 border-display">
                  {col.title}
                </h3>
                <ul className="flex flex-col space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors duration-150"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3 w-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted hover:text-accent transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 pt-6 border-t-2 border-display flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted font-medium tracking-wider">
            &copy; {new Date().getFullYear()} Devtrop
          </p>

          {/* Availability */}
          <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-display text-xs font-bold uppercase tracking-wider text-display">
            <span className="h-2 w-2 bg-accent" />
            <span>{FOOTER_AVAILABILITY.label}</span>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
