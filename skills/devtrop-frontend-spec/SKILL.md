---
name: devtrop-frontend-spec
description: Devtrop homepage design & implementation spec. Use for ANY work on homepage sections, components, marketing copy, design tokens, booking/Calendly flow, SEO, or styling in this repo. Enforces docs/HOMEPAGE_DESIGN_PLAN.md as single source of truth and its §6 Definition of Done before claiming complete.
---

# Devtrop Frontend Engineering & Design Skill

This skill guides any AI agent or human developer working on the Devtrop frontend. It enforces architecture standards, design consistency, and zero-drift implementation.

---

## 1. Single Source of Truth

- **Master Specification:** Always read [`docs/HOMEPAGE_DESIGN_PLAN.md`](../../docs/HOMEPAGE_DESIGN_PLAN.md) before writing any frontend code.
- **Do not invent or improvise:** Section layout, copywriting, interaction logic, and acceptance criteria are strictly defined in the spec.
- **Architecture Decisions:** Check [`docs/adr/`](../../docs/adr/) for context on why specific technical decisions were made.

---

## 2. Hard Non-Negotiable Rules

1. **The Honesty Standard:** Never write fabricated clients ("NovaHealth"), fake metrics ("+74% query speedup"), or fake testimonials. Use **Proof Builds** (Atlas & Pulse) and the **Working Agreement**.
2. **Design Tokens via Tailwind v4 `@theme`:** All color, typography, and surface tokens live in `app/globals.css`. Zero arbitrary hex codes in components (`bg-accent`, `text-display`, `border-hairline` only).
3. **Decoupled Content Layer:** Never hardcode literal marketing copy inside component JSX. All text imports from strongly typed files in `content/*.ts`.
4. **Server Components by Default:** Only add `"use client"` when state or event listeners are required (Navbar, ScopeEstimator, TechMatrix, BookACall).
5. **Zero-LCP Script Policy:** Calendly is never loaded on initial pageview. Load it lazily on click via `lib/booking.ts` with a `mailto:` fallback.

---

## 3. Build Sequence & Verification

When implementing, follow the verified build order from §6 of the spec:
1. Tokens (`globals.css`) + Primitives (`components/ui/`) + `content/types.ts`
2. Navbar (`components/navigation/Navbar.tsx`) + Footer (`components/navigation/Footer.tsx`)
3. Hero (`components/hero/Hero.tsx`) + Scope Estimator (`components/hero/ScopeEstimator.tsx`)
4. Trust Bar (`components/proof/TrustBar.tsx`) + Services Grid (`components/services/ServicesGrid.tsx`) + Process (`components/process/EngineeringProcess.tsx`)
5. Tech Matrix (`components/architecture/TechMatrix.tsx`)
6. Proof Builds (`components/work/CaseStudies.tsx`)
7. Closing CTA Banner (`components/cta/ClosingBanner.tsx`) + Booking (`lib/booking.ts`)
8. SEO & Performance Audit (`app/layout.tsx`, `app/opengraph-image.tsx`, Lighthouse ≥ 95)

---

## 4. Definition of Done (DoD)

Before declaring any section or feature complete:
- [ ] Semantic HTML (`<section id="...">`, `<h2>`, accessible button labels).
- [ ] No arbitrary color/typography hex values in classes.
- [ ] Copy imported from `content/`, matching the spec verbatim.
- [ ] Honesty check: `grep -r PLACEHOLDER content/ app/` returns zero hits before merging to production.
- [ ] Zero CLS verified on mobile (375px) and desktop (1280px).
- [ ] `pnpm lint` and `pnpm build` pass with zero errors.
