"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS, AVAILABILITY_STATUS, NAVBAR_CTA } from "../constants";
import { Logo } from "./Logo";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "Tab" && drawerRef.current) {
        const els = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (els.length === 0) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      const t = setTimeout(() => drawerRef.current?.querySelector<HTMLElement>("button, [href]")?.focus(), 50);
      return () => { clearTimeout(t); document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeyDown); };
    } else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeyDown); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-obsidian/60" onClick={onClose} aria-hidden="true" />

      {/* Panel — Swiss: sharp edges, thick borders */}
      <div ref={drawerRef} className="fixed inset-x-0 top-0 z-50 flex flex-col bg-canvas border-b-4 border-display px-6 pt-5 pb-8">
        <div className="flex items-center justify-between pb-6 border-b-2 border-display">
          <Logo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border-2 border-display text-display hover:bg-display hover:text-inverse transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links — uppercase, left-aligned */}
        <nav className="flex flex-col py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 text-base font-bold uppercase tracking-wider text-display hover:bg-display hover:text-inverse transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Status + CTA */}
        <div className="pt-4 border-t-2 border-display flex flex-col gap-4">
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
  );
}
