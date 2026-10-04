/**
 * WhatsAppButton
 * Floating action button fixed at bottom-right.
 * Opens a pre-filled WhatsApp chat on click.
 * Server Component — no client JS required.
 */

import Image from 'next/image'
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp'

const whatsappHref = whatsappUrl(WHATSAPP_MESSAGES.default)

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        group
      "
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        width={48}
        height={48}
        className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
      />

      {/* Tooltip label */}
      <span
        className="
          absolute right-16 hover:text-accent
          whitespace-nowrap
          bg-obsidian border border-hairline
          text-inverse text-xs font-medium tracking-wide uppercase
          px-3 py-1.5
          opacity-0 pointer-events-none
          translate-x-1
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-x-0
          group-focus-visible:opacity-100 group-focus-visible:translate-x-0
        "
        aria-hidden="true"
      >
        WhatsApp
      </span>
    </a>
  )
}
