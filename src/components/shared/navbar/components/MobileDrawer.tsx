'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS, AVAILABILITY_STATUS, NAVBAR_CTA } from '../constants'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const PANEL_DURATION = 400 // ms
const LINK_STAGGER = 60 // ms
const LINK_DURATION = 320 // ms

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [linksVisible, setLinksVisible] = useState(false)
  // Height we animate to — measured from the real content
  const [contentHeight, setContentHeight] = useState(0)

  // Measure content height whenever the drawer opens
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
      // Links stagger in once the panel is ~40% open
      const t = setTimeout(() => setLinksVisible(true), PANEL_DURATION * 0.4)
      return () => clearTimeout(t)
    } else {
      setLinksVisible(false)
    }
  }, [isOpen])

  // Keyboard trap & body scroll lock
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const els = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (els.length === 0) return
        const first = els[0],
          last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      const t = setTimeout(
        () => drawerRef.current?.querySelector<HTMLElement>('button, [href]')?.focus(),
        50
      )
      return () => {
        clearTimeout(t)
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <>
      {/*
        Backdrop — fixed, starts below the navbar via --navbar-height.
        z-index 39 keeps it under the sticky header (z-50) so the navbar
        is never dimmed.
      */}
      <div
        className="fixed inset-x-0 bottom-0 lg:hidden"
        style={{
          top: 'var(--navbar-height, 64px)',
          background: 'rgba(0,0,0,0.30)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transitionProperty: 'opacity',
          transitionDuration: `${PANEL_DURATION}ms`,
          transitionTimingFunction: 'ease-in-out',
          zIndex: 39,
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/*
        Panel — in normal document flow, right below the navbar bar.
        max-height: 0 → contentHeight animates the open/close.
        overflow-hidden clips content while the height is transitioning.
      */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className="relative lg:hidden bg-canvas/95 border-b overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
          transitionProperty: 'max-height',
          transitionDuration: `${PANEL_DURATION}ms`,
          transitionTimingFunction: isOpen
            ? 'cubic-bezier(0.4, 0, 0.2, 1)'
            : 'cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 50,
        }}
      >
        {/* Inner content — always rendered so we can measure its height */}
        <div ref={contentRef} className="px-6 pt-5 pb-8">
          {/* Links */}
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={onClose}
                  style={{
                    transitionDelay: linksVisible
                      ? `${i * LINK_STAGGER}ms`
                      : `${(NAV_LINKS.length - 1 - i) * 35}ms`,
                    transitionDuration: `${LINK_DURATION}ms`,
                    transitionProperty: 'transform, opacity',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: linksVisible ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: linksVisible ? 1 : 0,
                    display: 'block',
                  }}
                  className="px-4 py-3 text-base font-bold uppercase tracking-wider text-display hover:bg-display hover:text-inverse transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Status + CTA */}
          <div className="pt-6 border-t-2 border-display mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-display text-xs font-bold uppercase tracking-wider w-fit">
              <span className="h-2 w-2 bg-accent" />
              {AVAILABILITY_STATUS.label}
            </div>
            <Link
              href={NAVBAR_CTA.href}
              onClick={onClose}
              className="w-full text-center bg-display px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-inverse hover:bg-accent transition-colors duration-150"
            >
              {NAVBAR_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
