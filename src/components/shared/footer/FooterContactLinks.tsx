'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { SOCIAL_LINKS } from './footerData'

export function FooterContactLinks({ email }: { email: string }) {
  return (
    <>
      {/* Email */}
      <a
        href={`mailto:${email}`}
        onClick={() => trackEvent('email_click', { link_location: 'footer' })}
        className="inline-flex items-center gap-2 text-sm text-display font-medium hover:text-accent transition-colors duration-150"
      >
        <Mail className="h-4 w-4" />
        <span>{email}</span>
      </a>

      {/* Social icons */}
      <div className="mt-6 flex items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.platform}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            onClick={() =>
              trackEvent('social_click', {
                platform: social.platform,
                link_location: 'footer',
              })
            }
          >
            <Image
              src={`/icons/${social.platform}.svg`}
              alt={social.label}
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>
    </>
  )
}
