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
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-card border-b border-hairline py-3.5"
            : "bg-white/80 backdrop-blur-sm border-b border-hairline/60 py-4.5"
        }`}
      >
        <SectionContainer className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-body hover:text-display transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-4">
            {/* Live Availability Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{AVAILABILITY_STATUS.label}</span>
            </div>

            {/* Primary CTA */}
            <Link
              href={NAVBAR_CTA.href}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent-hover active:scale-[0.98] transition-all"
            >
              {NAVBAR_CTA.label}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-hairline text-body hover:text-display hover:bg-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </SectionContainer>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
