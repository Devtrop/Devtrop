"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { NAV_LINKS, AVAILABILITY_STATUS, NAVBAR_CTA } from "./constants";
import { Logo } from "./components/Logo";
import { MobileDrawer } from "./components/MobileDrawer";

export function NavbarClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full transition-all duration-150 ease-linear ${
          isScrolled
            ? "bg-canvas border-b-4 border-display py-3"
            : "bg-canvas border-b-2 border-display py-4"
        }`}
      >
        <SectionContainer className="flex items-center justify-between">
          {/* Brand */}
          <Logo />

          {/* Desktop Navigation — uppercase Swiss labels */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-xs font-bold uppercase tracking-[0.15em] text-display overflow-hidden"
              >
                {/* Default text */}
                <span className="block transition-transform duration-150 ease-linear group-hover:-translate-y-full">
                  {link.label}
                </span>
                {/* Red hover text slides up from below */}
                <span className="absolute inset-0 flex items-center text-accent translate-y-full transition-transform duration-150 ease-linear group-hover:translate-y-0">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Availability (Optional)*/}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 border-2 border-display text-xs font-bold uppercase tracking-wider text-display">
              <span className="h-2 w-2 bg-accent" />
              <span>{AVAILABILITY_STATUS.label}</span>
            </div>

            {/* CTA — Swiss black rectangle */}
            <Link
              href={NAVBAR_CTA.href}
              className="hidden sm:inline-flex items-center justify-center bg-display px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-inverse hover:bg-accent transition-colors duration-150"
            >
              {NAVBAR_CTA.label}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex lg:hidden h-10 w-10 items-center justify-center border-2 border-display text-display hover:bg-display hover:text-inverse transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </SectionContainer>
      </div>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
