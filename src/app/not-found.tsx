import Link from 'next/link'
import { SectionContainer } from '@/components/shared/layout/SectionContainer'

export const metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <section className="relative flex-1 flex flex-col overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none" />

      <SectionContainer className="relative z-10 flex-1 flex flex-col justify-center py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Typography */}
          <div className="lg:col-span-7">
            {/* Status label */}
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-6">Error 404</p>

            {/* Giant 404 stacked like the Hero headline */}
            <h1 className="flex flex-col leading-none">
              <span className="block font-black uppercase leading-[0.85] tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-display">
                Page
              </span>
              <span className="block font-black uppercase leading-[0.85] tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-accent">
                Not
              </span>
              <span className="block font-black uppercase leading-[0.85] tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-display">
                Found.
              </span>
            </h1>

            {/* Body copy */}
            <p className="mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
              The page you&apos;re looking for has been moved, deleted, or never existed.
              Double-check the URL or head back to explore what we actually build.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center bg-display px-8 py-4 text-sm font-bold uppercase tracking-wider text-inverse hover:bg-accent transition-colors duration-150"
              >
                Back to Home
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-6 py-4 border-2 border-display text-sm font-bold uppercase tracking-wider text-display hover:bg-display hover:text-inverse transition-colors duration-150"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right — Geometric Composition (mirrors Hero layout) */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md select-none" aria-hidden="true">
              {/* Large outlined circle */}
              <div className="absolute top-[8%] right-[2%] w-[55%] aspect-square rounded-full border-4 border-display swiss-dots" />

              {/* Filled black rectangle */}
              <div className="absolute bottom-[18%] left-[8%] w-[50%] h-[30%] bg-display" />

              {/* Red accent bar — horizontal */}
              <div className="absolute top-[45%] left-0 w-[75%] h-[4px] bg-accent" />

              {/* Small grid square */}
              <div className="absolute top-[5%] left-[12%] w-[28%] aspect-square border-4 border-display swiss-grid-pattern" />

              {/* Red accent circle */}
              <div className="absolute bottom-[8%] right-[12%] w-[18%] aspect-square rounded-full bg-accent" />

              {/* Thin vertical rule */}
              <div className="absolute top-[15%] right-[35%] w-[2px] h-[60%] bg-display/20" />

              {/* Diagonal block */}
              <div className="absolute bottom-[45%] right-[8%] w-[22%] h-[25%] border-2 border-display/30 swiss-diagonal" />

              {/* "404" stamped in the centre of the filled rectangle */}
              <span className="absolute bottom-[18%] left-[8%] w-[50%] h-[30%] flex items-center justify-center font-black text-4xl tracking-tighter text-inverse">
                404
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
