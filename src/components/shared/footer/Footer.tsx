import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL_LINKS,
  FOOTER_AVAILABILITY,
} from "./footerData";

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
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-obsidian text-slate-400 border-t border-white/10">
      <SectionContainer className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label="Devtrop Studio Home"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white font-mono font-bold text-xs tracking-tighter shadow-sm">
                <span className="text-white/80 text-sm mr-0.5">/</span>d
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                devtrop
              </span>
            </Link>

            {/* Mission Statement */}
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              Full-stack web &amp; SaaS engineering studio. We build production-grade
              platforms with uncompromising craftsmanship for ambitious teams.
            </p>

            {/* Direct Contact & Social */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="mailto:founders@devtrop.com"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span>founders@devtrop.com</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/devtrop</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
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
                          className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3 w-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
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

        {/* Divider */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Devtrop Studio. All rights reserved.
          </p>

          {/* Legal Links & Status */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-slate-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Availability Pill */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{FOOTER_AVAILABILITY.label}</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default Footer;
