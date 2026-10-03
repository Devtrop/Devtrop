# ADR 0003: Adopt `src/` Layout and Modular Component Architecture

- **Status:** Accepted
- **Date:** 2026-10-03
- **Deciders:** Founder, Antigravity, Qoder
- **Consulted:** Reference Repo (`ZiauddinJim/suresale-frontend`)

---

## Context

The initial scaffolding in `docs/HOMEPAGE_DESIGN_PLAN.md` assumed root-level directories (`app/`, `components/`, `content/`, `lib/`, `types/`).
In analyzing the reference architecture of `suresale-frontend`, the studio standardized on the modern Next.js `src/` layout with modular separation:
- `src/app/`: Next.js App Router (route groups, layout, globals.css)
- `src/components/ui/`: Atomic design system primitives (shadcn-compatible)
- `src/components/shared/`: Shared layout islands (`navbar/`, `footer/`, `layout/`, `motion/`)
- `src/data/`: Strongly typed content layer
- `src/features/`: Domain-sliced modules (`estimator/`, `booking/`, etc.)
- `src/hooks/`, `src/lib/`, `src/types/`, `src/config/`: Decoupled utilities and contracts

## Decision

1. **Adopt `src/` as the single canonical source root.**
   All application code lives in `src/`. `tsconfig.json` defines `@/*` -> `./src/*`.
2. **Component Path Updates:**
   - Navbar lives at `src/components/shared/navbar/` (Server `Navbar.tsx` + Client `NavbarClient.tsx`).
   - Footer lives at `src/components/shared/footer/` (Server `Footer.tsx` + `footerData.ts`).
   - Container primitive lives at `src/components/shared/layout/SectionContainer.tsx`.
   - Homepage section renderers live at `src/components/home/`.
3. **Decoupled Content Path:**
   - Content files live in `src/data/*.ts`.
4. **No Phantom SaaS Surfaces:**
   - Marketing studio scope does not create dummy authentication `(auth)` or portal `(portal)` routes. Keep clean, purposeful architecture.

## Consequences

- Clean separation between framework configs in project root and source code in `src/`.
- Zero ambiguity for IDEs and AI pair programmers across Cursor, Qoder, and Antigravity.
- `AGENTS.md` and `docs/HOMEPAGE_DESIGN_PLAN.md` updated to reflect this resolution.
