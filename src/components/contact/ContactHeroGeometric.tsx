'use client'

import { useState } from 'react'

export function ContactHeroGeometric() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100)
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100)
    setMousePos({ x, y })
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 50, y: 50 })
      }}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-square max-w-[440px] mx-auto border-2 border-display bg-canvas p-6 select-none shadow-[8px_8px_0_0_var(--color-display)] transition-all duration-300"
      aria-hidden="true"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-60 pointer-events-none" />

      {/* Outer corner registration marks */}
      <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest text-muted">
        SEC.00 // COMM-LINK
      </div>
      <div className="absolute top-2 right-2 font-mono text-[9px] uppercase tracking-widest text-muted">
        SYS.2026 // PROD
      </div>
      <div className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest text-muted">
        23.8103°N / 90.4125°E
      </div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
        {isHovered ? `POS [${mousePos.x}, ${mousePos.y}]` : 'LIVE // READY'}
      </div>

      {/* SVG Technical Blueprint Composition */}
      <svg
        viewBox="0 0 360 360"
        className="w-full h-full relative z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diag-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="8" y2="8" stroke="#000000" strokeWidth="0.75" strokeOpacity="0.25" />
          </pattern>
          <pattern id="dot-pattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#000000" fillOpacity="0.3" />
          </pattern>
        </defs>

        {/* Central calibration circles */}
        <circle
          cx="180"
          cy="180"
          r="140"
          fill="none"
          stroke="#000000"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
        />
        <circle
          cx="180"
          cy="180"
          r="105"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
        />
        <circle
          cx="180"
          cy="180"
          r="70"
          fill="none"
          stroke="#000000"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Diagonal textured quadrant */}
        <path
          d="M 180 75 A 105 105 0 0 1 285 180 L 180 180 Z"
          fill="url(#diag-pattern)"
          stroke="#000000"
          strokeWidth="1"
        />

        {/* Precision Crosshairs */}
        <line x1="18" y1="180" x2="342" y2="180" stroke="#000000" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="180" y1="18" x2="180" y2="342" stroke="#000000" strokeWidth="1" strokeOpacity="0.7" />

        {/* Tick marks on axes */}
        {[60, 100, 140, 220, 260, 300].map((pos) => (
          <g key={pos}>
            <line x1={pos} y1="176" x2={pos} y2="184" stroke="#000000" strokeWidth="1.5" />
            <line x1="176" y1={pos} x2="184" y2={pos} stroke="#000000" strokeWidth="1.5" />
          </g>
        ))}

        {/* Geometric solid block - neo-brutalist black square */}
        <rect
          x="65"
          y="195"
          width="75"
          height="75"
          fill="#000000"
          className="transition-transform duration-300"
        />

        {/* Dot pattern block */}
        <rect
          x="215"
          y="205"
          width="65"
          height="65"
          fill="url(#dot-pattern)"
          stroke="#000000"
          strokeWidth="1"
        />

        {/* Orange Accent Elements */}
        {/* Horizontal orange focus rail */}
        <line x1="40" y1="110" x2="240" y2="110" stroke="var(--color-accent)" strokeWidth="3" />

        {/* Orange focal node circle */}
        <circle
          cx="240"
          cy="110"
          r="8"
          fill="var(--color-accent)"
        />
        <circle
          cx="240"
          cy="110"
          r="16"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeDasharray="3 3"
          className="animate-[spin_10s_linear_infinite]"
        />

        {/* Small solid orange block */}
        <rect
          x="195"
          y="65"
          width="16"
          height="16"
          fill="var(--color-accent)"
        />

        {/* Rotated structural diamond */}
        <rect
          x="162"
          y="162"
          width="36"
          height="36"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          transform="rotate(45 180 180)"
        />

        {/* Center cross dot */}
        <circle cx="180" cy="180" r="3.5" fill="var(--color-accent)" />

        {/* Technical Callout Lines */}
        <polyline
          points="240,110 290,70 330,70"
          fill="none"
          stroke="#000000"
          strokeWidth="1"
        />
        <text
          x="292"
          y="64"
          fontFamily="monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#000000"
          letterSpacing="1"
        >
          SIG.01
        </text>

        <polyline
          points="140,270 170,300 240,300"
          fill="none"
          stroke="#000000"
          strokeWidth="1"
        />
        <text
          x="175"
          y="312"
          fontFamily="monospace"
          fontSize="8"
          fontWeight="bold"
          fill="var(--color-muted)"
          letterSpacing="1"
        >
          NODE_LATENCY: &lt;24HR
        </text>
      </svg>
    </div>
  )
}
