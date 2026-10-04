import Link from 'next/link'
import Image from 'next/image'
import { Mail, ArrowUpRight } from 'lucide-react'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { FOOTER_COLUMNS, FOOTER_AVAILABILITY } from './footerData'

export function Footer() {
  const gmail = 'info.devtrop@gmail.com'

  return (
    <footer className="w-full bg-canvas border-t-4 border-display">
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
              {/* <a
                href="https://github.com/devtrop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-display transition-colors duration-150"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/devtrop</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a> */}
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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default Footer
