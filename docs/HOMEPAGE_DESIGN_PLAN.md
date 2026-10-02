# Devtrop Homepage — Canonical Design & Implementation Spec (v2)

> **Status:** Single source of truth. Supersedes the original master plan, the "Visual Design System Showcase", and "Variant 2" (all visual mock renders were discarded — nothing in this spec derives from them).
> **Stack pinned by this repo:** Next.js 16.3 (App Router) • React 19.2 • Tailwind CSS v4 • TypeScript 5 strict.
> **How to use:** Each section lists *purpose → content contract → interactions → acceptance criteria*. Copy marked **[PLACEHOLDER]** is fabricated sample content: it may be used to build and review layouts, but **must be replaced with real, verifiable content before launch**. Launch-blocking unknowns are collected in §8.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Design System (Tailwind v4 Tokens)](#2-design-system-tailwind-v4-tokens)
3. [Content Architecture](#3-content-architecture)
4. [Global Contracts (apply to every section)](#4-global-contracts)
5. [Section Blueprints 01–11](#5-section-blueprints)
6. [Build Order & Definition of Done](#6-build-order--definition-of-done)
7. [Coding Standards](#7-coding-standards)
8. [Open Questions — Founder Input Required](#8-open-questions--founder-input-required)

---

## 1. Design Philosophy

**Positioning:** Devtrop is a full-stack web & SaaS engineering studio selling *engineering judgment*, not marketing services. The homepage's single job: convert a technical evaluator (founder, CTO, VPE) into a booked discovery call.

**The honesty rule (replaces the old "Anti-AI Standard").** The previous plan banned "AI slop" aesthetics while shipping invented clients, fake "+74%" metrics, and "Verified YC Alumni" badges for a studio with zero clients. That is the one thing that can actually hurt us: a technical buyer who checks a claim and finds it fabricated never comes back. So:

1. **Every number on the page must be defensible.** Either it describes *our own work* (a metric we measured on a build we can show), or it is a *commitment in our contract* ("100% IP transfer", "14-day sprint cadence"), or it doesn't appear.
2. **No social proof until proof exists.** Testimonial slots ship only when filled with real, attributable quotes. Until then the section is replaced by substance (§5.08).
3. **Show craft, don't assert it.** Interactive elements (scope estimator, tech matrix, live code) *are* the portfolio. A working, well-built widget out-persuades any adjective.
4. **Restraint in visuals:** light canvas, tight typographic hierarchy, 1px hairline borders, soft shadows, generous whitespace. One dark statement section (Closing CTA) as the contrast anchor. No neon, no glow, no floating 3D orbs.

---

## 2. Design System (Tailwind v4 Tokens)

Tailwind v4 configures tokens in CSS via `@theme` — **not** a `tailwind.config.js`, and not raw `:root` variables consumed by hand. All tokens below go in `app/globals.css`.

### 2.1 Color — one accent, no contradictions

The old plan shipped two brand blues (`#006BFF` in the token table, `#2563EB` in the "design system" doc) while its own coding standards told developers to "use standard Tailwind tokens". **Resolution: use Tailwind's built-in palette everywhere.** Zero arbitrary hex values in components; the accent is `blue-600`.

```css
@import "tailwindcss";

@theme {
  /* Canvas & surfaces */
  --color-canvas: var(--color-white);        /* primary background          */
  --color-subtle: var(--color-slate-50);     /* alternating sections        */
  --color-obsidian: #090D16;                 /* dark CTA banner + footer    */

  /* Text */
  --color-display: var(--color-slate-900);
  --color-body: var(--color-slate-600);
  --color-muted: var(--color-slate-400);
  --color-inverse: var(--color-slate-50);

  /* Accent (single source) */
  --color-accent: var(--color-blue-600);     /* #2563EB — CTAs, links       */
  --color-accent-hover: var(--color-blue-700);
  --color-accent-soft: var(--color-blue-50); /* pill/tag fills              */
  --color-status: var(--color-emerald-500);  /* live status, verification   */

  /* Structure */
  --color-hairline: var(--color-slate-200);
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05);
  --shadow-lift: 0 10px 25px -5px rgb(15 23 42 / 0.08), 0 8px 10px -6px rgb(15 23 42 / 0.04);

  /* Type */
  --font-sans: var(--font-geist-sans);       /* loaded via next/font in layout */
  --font-mono: var(--font-geist-mono);
}
```

Usage in components: `bg-accent hover:bg-accent-hover text-display border-hairline` etc. If a value can't be expressed with these tokens, the design is wrong — not the token list.

### 2.2 Typography scale

| Role | Classes |
| :-- | :-- |
| Display H1 | `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1] text-display` |
| Section H2 | `text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-tight text-display` |
| Card H3 | `text-xl sm:text-2xl font-semibold tracking-[-0.015em] text-display` |
| Lead / subhead | `text-lg sm:text-xl text-body leading-relaxed` |
| Body | `text-base text-body` |
| Eyebrow | `font-mono text-xs uppercase tracking-wider font-medium text-muted` |
| Mono badge | `font-mono text-xs text-body bg-accent-soft rounded-full px-2.5 py-1` |

Max measure for running text: `max-w-prose` (≈65ch).

### 2.3 Shared primitives (`components/ui/`)

- `<Button variant="primary|secondary|ghost">` — the three button recipes (cobalt fill / white+hairline / text-only), `rounded-xl px-6 py-3 text-sm font-medium`, `active:scale-[0.98]`, `transition-all duration-200`.
- `<SectionHeading eyebrow title subhead id>` — enforces the eyebrow→H2→subhead rhythm identically in all sections.
- `<Pill status|tag>` — emerald status pill (`bg-emerald-50 text-emerald-700 border-emerald-200`) and neutral mono tag.
- `<Card>` — `bg-white rounded-2xl border border-hairline shadow-card hover:shadow-lift hover:border-slate-300 transition-all duration-300`.
- `<Container>` — `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`. Section vertical rhythm is `py-20 lg:py-28` (120px desktop).

---

## 3. Content Architecture

The old plan welded copy into component prompts — impossible to edit copy without touching components, and it let contradictions (§ accent color, three different testimonial casts) creep between docs. **All copy lives in typed data files; components are pure renderers.**

```
content/
  site.ts          # brand, nav links, footer columns, legal, contact/calendly URLs
  hero.ts          # headline, subhead, CTAs, estimator option matrix
  proof.ts         # ecosystem badges, engineering commitments
  work.ts          # case studies / proof builds  [PLACEHOLDER until real]
  services.ts      # 4 pillars + deliverable checklists
  process.ts       # 4 delivery phases
  tech-matrix.ts   # 4 tabs × 3 stack cards each (full content, all tabs)
  testimonials.ts  # empty array until real quotes exist (§5.08)
  engagement.ts    # 3 collaboration models
```

Rules:
- Every file exports `satisfies`-checked types from `content/types.ts`. A missing required field (e.g. a case study without `sourceUrl` proving the metric) is a **type error**, making fabricated content structurally visible.
- Components never contain literal marketing copy.
- Metrics in data carry their provenance: `metric: { value: string; basis: 'measured' | 'contractual' | 'target'; evidence?: string }`. Only `measured` values may render inside "impact" badges; `contractual` renders under "How we work"; `target` never renders as a number-as-proof.

---

## 4. Global Contracts

These were referenced but never specified in the old plan. Every section depends on them.

### 4.1 Booking: one `BookACall` path, no ad-hoc modals
- `lib/booking.ts` exports `openBooking(prefill?: ScopePrefill)`. Every booking button site-wide calls it.
- **Script loading (deliberately *not* `next/script`):** `beforeInteractive` is root-layout-only and ships third-party JS on every pageview; `afterInteractive`/`lazyOnload` still download the widget unconditionally. Instead, **no script exists in the React tree at all**:
  1. First `openBooking()` call injects `<script src="https://assets.calendly.com/assets/external/widget.js">` into `document.head`, guarded by a module-level `Promise` singleton (repeat clicks reuse it).
  2. On load → `window.Calendly.initPopupWidget({ url })` with `NEXT_PUBLIC_CALENDLY_URL` + prefill params. Ambient `preconnect` hints for `assets.calendly.com`/`calendly.com` in `app/layout.tsx` metadata keep the click-time fetch warm.
  3. `window.Calendly` typed in `types/calendly.d.ts`; `window` never touched outside `lib/booking.ts`.
- **Why:** zero third-party bytes on initial load (no LCP/TBT impact) and **no hydration surface** — the classic React 19/Next 16 mismatch comes from conditionally rendering `<Script>` client-side, which we never do.
- **Prefill contract:** `ScopePrefill = { projectType, speed, estimatedTimeline }` → URL-encoded into the event's `notes` param (cap 500 chars).
- **Fallback (required):** unset env var, script load failure >5s, or missing `window.Calendly` → swap to `mailto:founders@devtrop.com?subject=Discovery+Call&body=<prefill summary>`. Site is never dead; failure invisible.

### 4.2 Navigation & anchors
- Section ids: `#work`, `#services`, `#process`, `#architecture`, `#engagement`, `#contact`.
- Smooth scrolling via CSS `scroll-behavior: smooth` + `scroll-margin-top: 88px` on sections (sticky-header offset). No JS scroll libraries.
- Navbar hides on scroll-down / reveals on scroll-up past 200px; always shows shadow after 20px.

### 4.3 Motion policy
- Decorative motion: `transition-all duration-200/300` on interactive states only. Scroll-reveal animations: **none at launch** (cheap to add later, cheap to regret now — they fight Core Web Vitals and look AI-generated when generic).
- All animated indicators (status pulse, tab fades) must respect `@media (prefers-reduced-motion: reduce)` — pulse becomes static dot.

### 4.4 SEO & metadata
- `app/layout.tsx`: `metadata` export with title template (`"%s | Devtrop"`), description, OpenGraph, Twitter card, `metadataBase` = `https://devtrop.com`.
- `app/sitemap.ts` + `app/robots.ts`.
- One hand-built OG image (`app/opengraph-image.tsx` via `next/og`, wordmark + tagline on obsidian) — no screenshot of the mockups.
- Single `<h1>` on the page (Hero). Every section starts with `<h2>`. JSON-LD `ProfessionalService` in the root layout.

### 4.5 Imagery
- No stock photos, no AI-generated "dashboard" art (that path is how the discarded renders got gibberish text). UI previews are either **real screenshots of real builds** (lazy-loaded `<Image>`, explicit width/height) or **honest CSS/SVG diagrams** (architecture flows, node graphs). Case-study visual artifacts must depict what the text claims.

### 4.6 Performance budget
- Lighthouse ≥ 95 mobile on the homepage (it's the product demo). Zero client JS in sections that don't need interactivity (Server Components by default; `"use client"` only for `useState`/`useEffect` islands: Navbar, Estimator, TechMatrix tabs, BookACall). No icon-font, no analytics on first-party load beyond one deferred script.

---

## 5. Section Blueprints

Order and structure kept from the original plan (it was sound). Copy retained where honest; fabricated proof replaced or quarantined as `[PLACEHOLDER]`.

---

### 01 — Sticky Frosted Header · `components/navigation/Navbar.tsx` *(client)*

- **Layout:** Container; left wordmark `devtrop` (geometric mark + `font-bold tracking-tight text-xl`); center links `Services #services · Selected Work #work · Our Process #process · Tech Stack #architecture`; right status pill + CTA.
- **Status pill:** `● Available for new projects` — **real availability, updated by hand or from a data field. The old "Q2/Q3" hardcoded quarter is already stale at launch.**
- **CTA:** `Book a Call` → `openBooking()`.
- **Style:** `sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-hairline`; shadow after 20px scroll (§4.2).
- **Mobile:** hamburger → slide-down panel, `aria-expanded`, focus trap, closes on route/anchor change.
- **Accept:** keyboard navigable; anchor lands with header offset; no layout shift.

---

### 02 — Hero + Interactive Scope Estimator · `components/hero/Hero.tsx` *(server)* + `ScopeEstimator.tsx` *(client)*

- **Left column:**
  - Eyebrow pill: `● Full-Stack Web & SaaS Engineering Studio`
  - H1: **"We engineer scalable web applications and SaaS platforms for ambitious teams."**
  - Subhead: *"From zero-to-one product architectures to high-concurrency cloud systems. We partner with funded startups to ship production-grade software with uncompromising craftsmanship."*
  - Primary CTA `Book a Discovery Call` + helper line *"30-minute architecture review • Direct with lead engineer • No sales pressure"*.
  - Secondary `Explore Selected Work ↓` → `#work`.
- **Right column — Scope Estimator** (the interactive proof; kept from the original plan, and now actually specified — the old plan showed one static output with no logic):

  | Project type \ Speed | Standard (8-week) | Rapid (4-week) |
  | :-- | :-- | :-- |
  | **0-to-1 SaaS MVP** | 6–8 wks · Lead + 2 FE/BE · Next.js 16 + Postgres + Stripe | 3–4 wks · Lead + 1 · Next.js 16 + Supabase, scope-cut to one core loop |
  | **Platform Modernization** | 6–10 wks · Lead + 2 · Incremental migration, zero-downtime cutovers | 2–3 wks · Lead · Audit + migration RFC + CI hardening (no feature work) |
  | **Scale & Performance** | 4–6 wks · Lead + 1 perf eng · Caching layer, query tuning, load testing | 2 wks · Lead · Profiling engagement + prioritized fix PRs |

  - Output panel: *Estimated timeline · Delivery squad · Typical architecture · `Schedule call for this scope →`* (calls `openBooking(currentSelection)`).
  - Copy under widget: *"Indicative estimates — your real scope gets confirmed after the architecture review."* (Protects the estimator from becoming a quote we're held to.)
  - Interaction: segmented toggles, 200ms crossfade on output change, fully keyboard-operable (`role="radiogroup"`).
  - **Mobile (375px):** widget stacks below the H1 block, single column. The two option groups render as full-width segmented `radiogroup`s (vertical, 44px min touch targets) — never a horizontal scroller. The 3×2 matrix is *not* a table on mobile: output renders as stacked `label → value` rows (timeline, squad, architecture), so no cell ever truncates. Output panel reserves fixed height (`min-h-[7.5rem]`, content-sized on desktop) so option changes crossfade in place — **zero CLS at any viewport**. `aria-live="polite"` on the output.
- **Accept:** LCP element is the H1; estimator ships < 6KB client JS; every combination in the matrix renders sensible copy.

---

### 03 — Ecosystem & Commitments Bar · `components/proof/TrustBar.tsx` *(server)*

- **Label:** `BUILT WITH INDUSTRY-STANDARD OPEN SOURCE & CLOUD ECOSYSTEMS`
- **Badges (real — these are the tools we actually use):** Next.js · React · TypeScript · PostgreSQL · AWS · Vercel · Supabase · Tailwind CSS. Official logo SVGs (e.g. `simple-icons`), monochrome `text-slate-400 hover:text-slate-600`. **No "Stripe/Partner" framing — they're tools, not endorsements.**
- **Four commitment tiles — every claim must be something a one-person studio can honor today** (old set included uptime/latency SLAs with no customers to serve):
  1. `100%` — *Code & IP ownership, always transferred* (contractual)
  2. `14-Day` — *Sprint cadence: working software on a staging URL* (contractual)
  3. `Type-safe` — *End-to-end TypeScript, strict mode, tests in CI* (practice)
  4. `Lighthouse ≥ 95` — *Performance budget on every build we ship* (target we enforce on ourselves)
- **Accept:** passes the "would a CTO call this unverifiable?" test — nothing on this bar is a number we can't stand behind from day one.

---

### 04 — Selected Work · `components/work/CaseStudies.tsx` *(server)*

**The old plan's NovaHealth (+74%, 250k patients) and Kinetix (10x ingestion) case studies are invented. They do not ship.** Two honest paths, in order of preference:

- **Path A — Real client work:** any past/present engagement you can name, with the client's written OK, metrics you actually measured, and a screenshot of the real UI.
- **Path B — Proof Builds (launch default):** build 1–2 small, real, *open-source* artifacts this month and present them as what they are:
  - **Proof Build A — "Atlas: Multi-Tenant SaaS Core."** *Problem statement:* the risky 20% of every MVP — tenant isolation, entitlements, usage billing — done right. *Architecture:* Next.js 16 App Router RSC + Server Actions; Postgres row-level security per tenant (policies in migration, tested); role→permission→entitlement RBAC layer; Stripe metered subscriptions with webhook-driven state machine; Playwright suite covering cross-tenant isolation attempts. *Stack tags:* Next.js 16 · TypeScript strict · PostgreSQL (RLS) · Stripe · Playwright. *Evidence bundle:* live demo with two seeded tenants (one free/one "pro"), public repo, Lighthouse trace, isolation test report.
  - **Proof Build B — "Pulse: Real-Time Edge Telemetry Canvas."** *Problem statement:* rendering 10k events/sec without freezing the UI — the exact class of claim fake case studies abuse. *Architecture:* WebSocket ingestion into a Web Worker ring buffer (zero main-thread parse); canvas rendering with dirty-rect redraw + `requestAnimationFrame` backpressure (drop-sample strategy, honestly labeled on-screen); SSE fallback path. *Stack tags:* React 19 · WebSockets · Web Workers · Canvas 2D. *Evidence bundle:* live demo streaming synthetic load, k6/autocannon load-test report in `/docs`, screen-recorded 60fps trace, repo.
  - **Scope guardrails:** each ≤2–3 focused days; demo hosting on Vercel free tier; both link from Section 04 cards *and* the TechMatrix; no marketing sites, no auth-provider lock-in, everything forkable.

**Card contract (both paths):** `category · title · one-line outcome · The Problem · The Approach · Deliverables (3) · stack tags · link(s) that prove it (demo/repo/case study)`. Alternating split layout; visual = real screenshot or CSS/SVG architecture diagram (§4.5).

- Section copy: eyebrow `SELECTED WORK`, H2 **"Software built to be examined"**, subhead *"Every claim below links to something you can click, fork, or load-test."* — this turns the studio's newness into the differentiator (transparency) instead of hiding it (fake logos).
- **Accept:** no card exists without a working evidence link. `[PLACEHOLDER]` content is greppable (`grep -r PLACEHOLDER content/`) and CI-blocked on `main` (§6).

---

### 05 — Core Engineering Pillars · `components/services/ServicesGrid.tsx` + `ServiceCard.tsx` *(server)*

Kept as-is from the original deck — this copy describes capabilities, not fake outcomes. 2×2 grid (4-col ≥`xl`), Lucide icon, H3, elevator pitch, 4-item deliverable checklist with subtle check icons, `Card` hover lift.

1. **Full-Stack Web & SaaS Platforms** — *"End-to-end multi-tenant web applications engineered for long-term scalability from day one."* — Multi-tenant org architecture & RBAC · Stripe usage-based billing · Next.js App Router hybrid rendering · Realtime sync (WS/SSE).
2. **Rapid 0-to-1 Product Engineering** — *"Validated concepts into investor-ready, production-grade MVPs in 6–8 weeks."* — Architecture + schema + PRD · Design system in strict TS · CI/CD with ephemeral previews · API + test suites.
3. **Application Modernization & Optimization** — *"Eliminating technical debt and query latency without operational downtime."* — Monolith decomposition · Zero-downtime migrations · Core Web Vitals remediation · React 19/TS migrations.
4. **Cloud Infrastructure & DevOps** — *"Resilient cloud foundations for continuous delivery and compliance."* — IaC (Terraform/CDK) · Docker + GH Actions · Observability (Datadog/Prometheus) · Security hardening/OWASP.

*(Note: "95+ Lighthouse" survives here because it is a performance budget scoped per engagement, not an unverifiable universal stat.)*

---

### 06 — Engineering Standard / Process · `components/process/EngineeringProcess.tsx` *(server)*

Kept. 4-step horizontal pipeline (desktop) / vertical stack (mobile), hairline connector, numbered steps 01–04, each: phase name, timeline badge, narrative, deliverables pill.

1. **Technical Specification & Architecture RFC** — *Sprint 0 (Week 1)* — blueprints, ERDs, API contracts before production code. → `Signed-off RFC • Sprint backlog • Design tokens`
2. **Bi-Weekly Agile Deployments** — *Weeks 2–8* — working features on live staging URLs every 14 days + recorded walkthroughs. → `Staging URLs • Loom walkthroughs • Retro summaries`
3. **Automated Testing & Security Gates** — *Continuous* — Playwright E2E, Vitest coverage, static analysis on every PR. → `Passing gates • Zero critical vulns • Audit reports`
4. **Production Handoff & Hyper-Care** — *Launch + 30 days* — IP transfer, docs, team onboarding, 30-day support. → `Repo transfer • Architecture docs • 30-day warranty`

---

### 07 — Interactive Tech Matrix · `components/architecture/TechMatrix.tsx` *(client)*

Kept (Zendesk-style tab switcher was the plan's best structural idea) — but the old plan only ever wrote content for the active tab. **All four tabs are specified in `content/tech-matrix.ts`; a tab with fewer than 3 complete cards doesn't render.** Each card: tool, *why chosen*, one defensible benchmark. Benchmarks below cite public, checkable sources or are phrased qualitatively — the old "40% bundle reduction" with no measurement is gone.

- **Frontend & Edge:** React Server Components (zero-bundle data fetching, streamed UI) · Next.js App Router (layouts, parallel routes, edge caching) · TypeScript strict (schema→UI type safety).
- **Distributed Backend:** Node/Edge functions + Server Actions (colocation, no API-layer drift) · Queue-based async (BullMQ/SQS — durability under spikes) · WebSockets/SSE (server-authoritative realtime).
- **Databases & Caching:** PostgreSQL (RLS multi-tenancy, transactional integrity) · Redis (sub-ms read layer, rate limiting) · Connection pooling + query plans (pgBouncer, EXPLAIN-driven tuning).
- **Cloud & DevOps:** IaC Terraform/CDK (reviewable, reproducible envs) · GitHub Actions (same pipeline from PR to prod) · Observability Prometheus/Grafana/Datadog (SLOs defined per launch).

- Interaction: `role="tablist"`, arrow-key tab navigation, content swap with 150ms opacity transition, deep-linkable via `?tab=` (optional).

---

### 08 — Social Proof → **"How We Work" (launch substitute)** · `components/proof/HowWeWork.tsx` *(server)*

**The fabricated testimonials (Alex Rivera/Rachel Sterling/Marcus Vance/Sarah Chen — the docs cycled through four fake casts) are deleted.** Publishing invented endorsements, with "Verified" badges, for a studio with no clients is defamation-adjacent false advertising and the fastest way to lose the exact technical audience we're targeting.

- **Launch content — a "Working agreement" section (`content/site.ts#workingAgreement`):**
  - Eyebrow: `OUR COMMITMENT`
  - H2: **"The working agreement — standard on every engagement"**
  - Subhead: *"No black boxes. This is what you can hold us to from week one."*
  1. **Direct engineer access** — *"You talk to the people writing the code. No account managers, no relayed questions, no junior swap after signature."*
  2. **Weekly transparency** — *"Every week: a working staging build, a recorded walkthrough, and an updated sprint board you can open any hour of any day."*
  3. **Shipping on a 14-day metronome** — *"Sprints end with software on a live URL — not status decks. If a milestone slips, you hear it before the demo, not during it."*
  4. **Day-one ownership** — *"Code lands in your GitHub organization from the first commit. IP transfer at launch is a formality, because it was always yours."*
  5. **30-day hyper-care** — *"After launch we stay on: same engineers, priority queue, fixes for anything our code broke — included, not upsold."*
- **Real testimonials pipeline (tracked in §8):** after each engagement's 30-day hyper-care, request a quote with permission scope (name, title, company, LinkedIn URL). `content/testimonials.ts` renders this section instead of "Working agreement" when `testimonials.length > 0` — the swap is data-driven, no redesign needed. Card contract when real: quote (specific praise, not adjectives) · name · role · company · **link to the person's real profile**.

---

### 09 — Transparent Collaboration Models · `components/engagement/EngagementModels.tsx` *(server)*

Kept — structure is strong. 3 cards, middle highlighted `Most popular for MVPs`:

1. **Dedicated Engineering Squad** — *Funded startups & scale-ups* — pod integrated into your Slack/Linear/GitHub · standups & demos · monthly retainer, 30-day notice · SLA response times. → `Deploy a Squad`
2. **Fixed-Scope Milestone Build** — *0-to-1 MVPs* — RFC + PRD sign-off · milestone payments tied to verified staging demos · 6–8 week delivery window · 30-day warranty. → `Scope a Project`
3. **2-Week Architecture & Code Audit** — *Pre-scale / pre-raise* — query & bottleneck profiling · security/SOC2-readiness review · prioritized fix-PR roadmap · executive summary. → `Request an Audit`

**Change from old plan:** buttons go to `openBooking()` with the model as prefill — the old plan's "Deploy a Squad →" had no defined destination. Pricing policy (display ranges vs "on request") is an open question (§8).

---

### 10 — Closing CTA Banner · `components/cta/ClosingBanner.tsx` *(server)* + shared `BookACall`

- Obsidian block (`bg-obsidian rounded-3xl`), inverse type, `id="contact"`.
- H2: **"Ready to turn your product roadmap into production-grade software?"** · subhead as in old deck.
- Primary `Book a Discovery Call` (accent fill) → `openBooking()`; secondary `Email Founders Directly` (`mailto:` fallback always visible).
- Trust pills — only the true ones: `● Direct call with the lead engineer` · `● Mutual NDA before details` · `● Architecture advice even if we don't work together`. (Dropped `SOC2 Compliant Workflows` — we don't have a SOC2 posture to claim yet.)

---

### 11 — Enterprise Footer · `components/navigation/Footer.tsx` *(server)*

- Kept structure: wordmark + mission tagline + 4 columns (Services / Work / Process / Company) + legal bar.
- **Status pill change:** the old `● All Systems Operational` implies a monitored production fleet we don't operate. Launch version: `● Now booking Q4 2026 starts` (same data field as navbar availability) — or a real status link once we host client apps worth monitoring.
- Column links point at real anchors/pages only — `Equinox B2B Marketplace` (a client that doesn't exist) is gone; Work column links to §5.04 proof builds.
- Legal bar: `© 2026 Devtrop` · Privacy/Terms (either real pages or removed — no dead links) · GitHub/LinkedIn/X with real profile URLs.

---

## 6. Build Order & Definition of Done

**Build order** (each step independently shippable; the old 5-person branch protocol is replaced by this sequence since it's one dev + agents):

1. Tokens + primitives + `content/` types with all copy loaded (§§2–3)
2. Navbar + Footer + section skeletons (anchors work end-to-end)
3. Hero + Estimator (the craft demo)
4. TrustBar + ServicesGrid + Process (pure server components, fast)
5. TechMatrix (client island)
6. Work/Proof Builds content sprint — *blocking for §5.04 launch*
7. ClosingBanner + `lib/booking.ts` Calendly wiring + fallback
8. SEO pass: metadata, OG image, sitemap, JSON-LD, Lighthouse ≥95 audit
9. Content honesty sweep: `grep -r PLACEHOLDER content/ app/` → zero hits; every metric has `basis` + working `evidence` link

**Definition of Done per section:** semantic `<section id>` + `<h2>`; renders with JS disabled (client islands degrade to static content); keyboard accessible; no arbitrary hex; copy from `content/` only; mobile (375px) + desktop (1280px) reviewed in a real browser.

---

## 7. Coding Standards

1. **Server Components by default.** `"use client"` only for: Navbar, ScopeEstimator, TechMatrix, BookACall. TrustBar, CaseStudies, ServicesGrid, Process, HowWeWork, Engagement, ClosingBanner, Footer stay server-only.
2. **No literal marketing copy in components** — everything from `content/` (§3).
3. **No arbitrary color/typography values** in class names; if blocked, fix the token set (§2.1), don't inline hex. One-off layout heights (e.g. min-h-[7.5rem] for zero-CLS crossfade) are permissible.
4. **Strict exported interfaces** for all component props and content shapes.
5. **Accessibility:** `aria-label` on icon-only buttons, `role="radiogroup"/"tablist"` on interactive switchers, visible focus rings (`ring-2 ring-blue-300`), landmarks (`header/nav/main/footer`).
6. **Next.js 16 specifics:** before writing any App Router code, consult `node_modules/next/dist/docs/` (per AGENTS.md) — this version has breaking changes vs. common training-data assumptions.

---

## 8. Open Questions — Founder Input Required (launch blockers)

| # | Question | Blocks |
| :-- | :-- | :-- |
| 1 | Calendly URL + founders' contact email | §4.1, every CTA |
| 2 | Real GitHub / LinkedIn / X profile URLs | Footer, proof links |
| 3 | Confirm Atlas + Pulse as the launch Proof Builds and assign build window (§5.04 Path B) | Section 04 |
| 4 | Any past client work that can be named with permission (§5.04 Path A) | Section 04 |
| 5 | Availability string policy — manual edit or data-driven? Which quarter? | Navbar/Footer pill |
| 6 | Pricing: display ranges on engagement cards or "on request"? | Section 09 |
| 7 | Privacy/Terms pages: real content, template, or omit links entirely? | Footer |
| 8 | Variant decision recorded: **this spec standardizes on the light studio direction** (V1 structure, dark obsidian only for the CTA banner). Confirm, since V2 is now discarded. | Whole doc |
