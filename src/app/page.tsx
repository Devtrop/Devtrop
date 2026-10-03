import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { HERO_CONTENT } from "@/data/hero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-body">
      {/* Basic Navbar */}
      <Navbar />

      {/* Main Scaffold Preview Area */}
      <main className="flex-1 flex flex-col justify-center py-20 lg:py-28">
        <SectionContainer>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Studio Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent border border-blue-200/60 text-xs font-mono font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{HERO_CONTENT.eyebrow}</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-display leading-[1.1]">
              {HERO_CONTENT.headline}
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              {HERO_CONTENT.subhead}
            </p>

            {/* Architecture Scaffold Status Card */}
            <div className="pt-8 max-w-xl mx-auto">
              <div className="rounded-2xl border border-hairline bg-subtle p-6 text-left shadow-card">
                <div className="flex items-center justify-between pb-3 border-b border-hairline">
                  <span className="text-xs font-mono font-semibold text-display uppercase tracking-wider">
                    Scaffold Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Structure Synchronized
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono text-body">
                  <div className="p-2.5 rounded-lg bg-white border border-hairline">
                    <span className="text-display font-semibold block">src/ Pattern</span>
                    <span>App Router &amp; Modular Features</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-hairline">
                    <span className="text-display font-semibold block">Components</span>
                    <span>Navbar &amp; Footer Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      {/* Basic Footer */}
      <Footer />
    </div>
  );
}
