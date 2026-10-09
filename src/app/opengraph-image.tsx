import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/data/site'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Devtrop — Full-Stack Web & SaaS Engineering Studio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern - right side decoration */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '55%',
            height: '100%',
            background:
              'repeating-linear-gradient(135deg, rgba(99,102,241,0.08) 0px, rgba(99,102,241,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(45deg, rgba(99,102,241,0.08) 0px, rgba(99,102,241,0.08) 1px, transparent 1px, transparent 40px)',
            display: 'flex',
          }}
        />

        {/* Left gradient fade over grid */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '60%',
            height: '100%',
            background: 'linear-gradient(to right, #0a0a0a 60%, transparent)',
            display: 'flex',
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 165,
            width: 6,
            height: 200,
            background: '#6366f1',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 104,
            paddingRight: 80,
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Brand */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-4px',
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            DEVTROP
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 400,
              letterSpacing: '0px',
              marginBottom: 28,
            }}
          >
            Full-Stack Web &amp; SaaS Engineering Studio
          </div>

          {/* Divider */}
          <div
            style={{
              width: 500,
              height: 1,
              background: 'rgba(255,255,255,0.12)',
              marginBottom: 20,
              display: 'flex',
            }}
          />

          {/* URL */}
          <div
            style={{
              fontSize: 22,
              color: '#6366f1',
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '1px',
            }}
          >
            {SITE_CONFIG.url.replace('https://', '')}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
