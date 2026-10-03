'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'
import { NAV_LINKS, AVAILABILITY_STATUS, NAVBAR_CTA } from './constants'
import { Logo } from './components/Logo'
import { MobileDrawer } from './components/MobileDrawer'

export function NavbarClient() {
  // Initialise directly from the current scroll position — avoids a setState
  // call inside an effect. The lazy initialiser runs once on mount only.
  // typeof window guard keeps SSR safe (Next.js renders on the server too).
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 20
  )
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number | null = null

    function onScroll() {
      // Cancel any pending frame before scheduling a new one —
      // prevents queuing multiple reads per frame during fast scrolling.
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        // Gate setState so it only fires when the boolean actually changes —
        // avoids re-rendering the navbar on every single scroll tick.
        const scrolled = window.scrollY > 20
        setIsScrolled((prev) => (prev === scrolled ? prev : scrolled))
        rafId = null
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  // Sync --navbar-height immediately on mount, then keep it updated via
  // ResizeObserver so the MobileDrawer backdrop always starts below the bar.
  useEffect(() => {
    if (!barRef.current) return
    const setHeight = (el: Element) => {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${el.getBoundingClientRect().height}px`
      )
    }
    setHeight(barRef.current)
    const ro = new ResizeObserver(([entry]) => setHeight(entry.target))
    ro.observe(barRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="relative">
      {/*
        IMPORTANT: padding and border-width are fixed and never change on scroll.
        Animating layout properties (padding, border-width, height) causes CLS
        and the "jumpy" feeling. Only color/opacity are transitioned here.
        The scrolled state adds a bottom shadow via opacity so the visual
        change is GPU-composited and has zero layout impact.
      */}
      <div ref={barRef} className="w-full bg-canvas/95 border-b-2 border-display py-4">
        {/* Scroll shadow — opacity only, no layout impact */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-display transition-opacity duration-200"
          style={{ opacity: isScrolled ? 1 : 0 }}
        />

        <SectionContainer className="flex items-center justify-between">
          {/* Brand */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-xs font-bold uppercase tracking-[0.15em] text-display overflow-hidden"
              >
                <span className="block transition-transform duration-150 ease-linear group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span className="absolute inset-0 flex items-center text-accent translate-y-full transition-transform duration-150 ease-linear group-hover:translate-y-0">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 border-2 border-display text-xs font-bold uppercase tracking-wider text-display">
              <span className="h-2 w-2 bg-accent" />
              <span>{AVAILABILITY_STATUS.label}</span>
            </div>

            <Link
              href={NAVBAR_CTA.href}
              className="hidden sm:inline-flex items-center justify-center bg-display px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-inverse hover:bg-accent transition-colors duration-150"
            >
              {NAVBAR_CTA.label}
            </Link>

            {/* Hamburger → X morphing button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="flex lg:hidden h-10 w-10 items-center justify-center border-2 border-display text-display hover:bg-display hover:text-inverse transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className="block h-0.5 w-full bg-current origin-center transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isMobileMenuOpen
                      ? 'translateY(7px) rotate(45deg)'
                      : 'translateY(0) rotate(0deg)',
                  }}
                />
                <span
                  className="block h-0.5 w-full bg-current transition-[opacity,transform] duration-300 ease-in-out"
                  style={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    transform: isMobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                  }}
                />
                <span
                  className="block h-0.5 w-full bg-current origin-center transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isMobileMenuOpen
                      ? 'translateY(-7px) rotate(-45deg)'
                      : 'translateY(0) rotate(0deg)',
                  }}
                />
              </span>
            </button>
          </div>
        </SectionContainer>
      </div>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  )
}
