# Devtrop Project Architecture & Directory Structure Guide

> **Audience:** Core engineering team, collaborators, and AI agents working on Devtrop.  
> **Status:** Canonical Living Document (Synchronized with ADR 0001, ADR 0002, and ADR 0003).  
> **Pinned Stack:** Next.js 16.3 (App Router) • React 19.2 • Tailwind CSS v4 • TypeScript 5 (Strict) • pnpm 11+.

---

## 1. Architectural Philosophy

Devtrop is architected as an **Enterprise Multi-Page Engineering Studio Platform** using a modular, layered structure inside the `src/` directory.

### Core Principles
1. **Multi-Page Ready:** Supports both the high-converting homepage (`/`) and dedicated sub-pages (`/services`, `/work`, `/about`, `/contact`).
2. **Server-First Mindset:** Pages and layouts are React Server Components by default to maximize performance, LCP, and SEO. Interactive client state is isolated into client islands (`"use client"`).
3. **Decoupled Content Layer (`src/data/`):** Marketing copy and case studies live in strongly typed data files, separate from layout JSX.
4. **Tailored to Devtrop:** Contains only the architectural layers Devtrop requires—no classifieds, automotive, or marketplace clutter from reference codebases.

---

## 2. Complete Directory Map

```text
devtrop/
├── .agents/                    # AI Agent skills & IDE automation definitions
├── docs/                       # Project specifications, ADRs, screenshots
│   ├── adr/                    # Architecture Decision Records (0001, 0002, 0003)
│   ├── screenshots/            # Reference UX/UI screenshots (Calendly, Workable, etc.)
│   ├── HOMEPAGE_DESIGN_PLAN.md # Master design & copywriting specification
│   └── PROJECT_STRUCTURE_GUIDE.md # This architecture guide
├── public/                     # Static assets (images, SVGs)
├── src/                        # Single source root (path alias: @/* -> ./src/*)
│   ├── actions/                # Next.js Server Actions (contact & estimation dispatches)
│   │   ├── contact.action.ts
│   │   └── estimate.action.ts
│   ├── app/                    # Next.js App Router (multi-page routes, layout, global CSS)
│   │   ├── about/page.tsx      # /about page
│   │   ├── contact/page.tsx    # /contact page
│   │   ├── services/page.tsx   # /services page
│   │   ├── work/page.tsx       # /work (Case Studies) page
│   │   ├── error.tsx           # Client error boundary
│   │   ├── favicon.ico         # Studio favicon
│   │   ├── globals.css         # Tailwind v4 @theme tokens + sticky header offset
│   │   ├── layout.tsx          # Root layout with Geist font & metadataBase
│   │   ├── loading.tsx         # Streaming loading fallback
│   │   ├── not-found.tsx       # Custom 404 handler
│   │   └── page.tsx            # Studio homepage
│   ├── components/             # UI component layer
│   │   ├── about/              # About page components (AboutHero.tsx, TeamSection.tsx)
│   │   ├── contact/            # Contact page components (ContactForm.tsx, ContactInfo.tsx)
│   │   ├── home/               # Homepage section blocks (Hero, Estimator, ServicesGrid, etc.)
│   │   ├── services/           # Services page components (ServicesList.tsx, ServiceDetail.tsx)
│   │   ├── shared/             # Cross-cutting layout components
│   │   │   ├── footer/         # Obsidian Dark Footer (Server Component)
│   │   │   ├── layout/         # SectionContainer.tsx, SectionHeading.tsx, SectionBadge.tsx
│   │   │   ├── motion/         # FadeIn.tsx, FadeUp.tsx (with reduced-motion support)
│   │   │   └── navbar/         # Sticky Frosted Header (Server wrapper + Client island)
│   │   ├── ui/                 # Headless atomic primitives (button, card, badge, dialog, input)
│   │   └── work/               # Work/Portfolio components (CaseStudyGrid.tsx, CaseStudyDetail.tsx)
│   ├── config/                 # Environment and site config (env.ts, site.ts)
│   ├── constants/              # System-wide constants (navigation.ts, routes.ts)
│   ├── context/                # React Context providers (ThemeContext.tsx)
│   ├── data/                   # The Decoupled Content Layer (typed marketing & case study copy)
│   │   ├── engagement.ts       # Collaboration models
│   │   ├── hero.ts             # Hero copy & CTAs
│   │   ├── process.ts          # Delivery phases
│   │   ├── proof.ts            # Defensible metrics & commitments
│   │   ├── services.ts         # Core service pillars
│   │   ├── site.ts             # Site metadata, URLs, brand info
│   │   ├── tech-matrix.ts      # Architecture tech stack definitions
│   │   └── work.ts             # Case studies & proof builds
│   ├── hooks/                  # Custom React hooks (use-mobile.ts, useScrollPosition.ts)
│   ├── lib/                    # Core utilities and client helpers
│   │   ├── booking.ts          # Zero-LCP Calendly popup loader + mailto fallback
│   │   ├── formatters.ts       # Number, currency, and date formatters
│   │   └── utils.ts            # Canonical cn() helper (clsx + tailwind-merge)
│   ├── schemas/                # Zod validation schemas (contact.schema.ts, estimate.schema.ts)
│   ├── services/               # Data-access & external client wrappers (sharedFetch.ts, contact.service.ts)
│   ├── store/                  # Global client state management (estimator.store.ts)
│   └── types/                  # TypeScript interface definitions (content.ts, site.ts, index.ts)
├── components.json             # shadcn/ui configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration with @/* -> ./src/*
└── AGENTS.md                   # Universal router for AI coding assistants
```

---

## 3. Directory Breakdown & Responsibilities

### 3.1 `src/actions/` (Next.js Server Actions)
- **Purpose:** Next.js Server Actions (`"use server"`) for mutations, contact inquiries, and estimation requests.
- **Files:** `contact.action.ts`, `estimate.action.ts`.
- **Best Practices:** Always validate incoming payloads with Zod schemas from `src/schemas/`.

### 3.2 `src/app/` (Multi-Page App Router)
- **Purpose:** Multi-page routing, root shell, metadata, and styling.
- **Routes:**
  - `/`: Main homepage.
  - `/services`: Dedicated capabilities, architecture reviews, and sprint models.
  - `/work`: In-depth case studies and Proof Builds (Atlas & Pulse).
  - `/about`: Studio engineering philosophy, working agreement, and founding team.
  - `/contact`: Direct discovery call scheduling and contact inquiry forms.
  - `layout.tsx`: Root shell configuring Google Geist fonts, `metadataBase`, and global layout.
  - `globals.css`: Tailwind CSS v4 `@theme` design tokens and sticky header anchor offset.

### 3.3 `src/components/` (UI Layer)
- **`src/components/ui/`:** Headless atomic design system primitives (`button.tsx`, `card.tsx`, `badge.tsx`, `dialog.tsx`, `input.tsx`, `textarea.tsx`).
- **`src/components/shared/`:** Persistent layout components:
  - `navbar/`: Sticky header Server wrapper (`Navbar.tsx`), Client island (`NavbarClient.tsx`), brand `Logo.tsx`, and accessible `MobileDrawer.tsx`.
  - `footer/`: Obsidian dark contrast anchor (`Footer.tsx`) with typed `footerData.ts`.
  - `layout/`: `SectionContainer.tsx` (standard `max-w-6xl` responsive wrapper), `SectionHeading.tsx`, `SectionBadge.tsx`.
  - `motion/`: Motion wrappers (`FadeIn.tsx`, `FadeUp.tsx`) honoring `motion-reduce`.
- **`src/components/home/`:** Homepage section renderers (`Hero.tsx`, `ScopeEstimator.tsx`, `ProofBar.tsx`, etc.).
- **`src/components/services/`, `work/`, `about/`, `contact/`:** Dedicated view components for multi-page routes.

### 3.4 `src/data/` (The Decoupled Content Layer)
- **Purpose:** The single source of truth for all marketing copy, case studies, and content dictionaries.
- **Files:** `site.ts`, `hero.ts`, `services.ts`, `work.ts`, `process.ts`, `proof.ts`, `tech-matrix.ts`, `engagement.ts`.
- **Rule:** Components NEVER contain literal marketing copy; they import from `src/data/`.

### 3.5 `src/lib/` (Utilities & Integrations)
- **`utils.ts`:** Canonical `cn()` helper combining `clsx` and `tailwind-merge`.
- **`booking.ts`:** Zero-LCP Calendly popup widget loader with mailto fallback per spec §4.1.
- **`formatters.ts`:** Currency, timeline, and date formatters.

### 3.6 `src/config/`, `src/constants/`, `src/context/`
- **`src/config/`:** Runtime environment variables (`env.ts`) and global site configs (`site.ts`).
- **`src/constants/`:** Application-wide immutable route definitions (`routes.ts`) and navigation configurations (`navigation.ts`).
- **`src/context/`:** React Context providers (`ThemeContext.tsx`).

### 3.7 `src/hooks/`, `src/schemas/`, `src/services/`, `src/store/`, `src/types/`
- **`src/hooks/`:** Custom React hooks (`use-mobile.ts`, `useScrollPosition.ts`).
- **`src/schemas/`:** Zod runtime validation schemas (`contact.schema.ts`, `estimate.schema.ts`).
- **`src/services/`:** Data-access and external HTTP client wrappers (`sharedFetch.ts`, `contact.service.ts`).
- **`src/store/`:** Client state management with Zustand (`estimator.store.ts`).
- **`src/types/`:** Global TypeScript interfaces (`content.ts`, `site.ts`, `index.ts`).

---

## 4. Engineering Standards & Verification

- **Honesty Standard:** Only real, verifiable Proof Builds (Atlas & Pulse) and defensible commitments.
- **Tailwind v4 Token Discipline:** Use defined theme tokens (`bg-accent`, `text-display`, `text-body`, `border-hairline`, `bg-obsidian`). No arbitrary hex in JSX.
- **Verification Commands:**
  ```bash
  pnpm build     # Next.js production build (Turbopack) & type check
  pnpm lint      # ESLint validation
  ```
