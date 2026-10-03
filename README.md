# Devtrop — Full-Stack Web & SaaS Engineering Studio

Devtrop is a full-stack web and SaaS engineering studio homepage and client engagement platform built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

---

## 📚 Essential Documentation

Before contributing or modifying components, consult the canonical documentation:

- **[Project Structure & Architecture Guide](docs/PROJECT_STRUCTURE_GUIDE.md)**: Deep dive into the `src/` directory layout, module responsibilities, mandatory rules, and good practices.
- **[Homepage Design & Implementation Plan](docs/HOMEPAGE_DESIGN_PLAN.md)**: The single source of truth for section architecture, copywriting contracts, design tokens, and acceptance criteria.
- **[Architecture Decision Records (ADRs)](docs/adr/)**: Context and rationale behind architectural choices:
  - [ADR 0001: Light Studio Direction](docs/adr/0001-light-studio-direction.md)
  - [ADR 0002: Proof Builds & Honesty Standard](docs/adr/0002-proof-builds-honesty-standard.md)
  - [ADR 0003: Adopt `src/` Layout](docs/adr/0003-adopt-src-layout.md)
- **[AI Agent Hub (AGENTS.md)](AGENTS.md)**: Universal instructions for AI coding assistants (Antigravity, Qoder, Claude Code, Cursor).

---

## 🛠️ Stack & Conventions

- **Framework:** Next.js 16.3.6 (App Router with Turbopack)
- **UI Runtime:** React 19.2.8
- **Styling:** Tailwind CSS v4 (`@theme` in `src/app/globals.css`)
- **Package Manager:** `pnpm` (v11+)
- **TypeScript:** Strict Mode with `@/*` mapped to `./src/*`

---

## 🚀 Development

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server (http://localhost:3000)
pnpm build      # Run Next.js production build & type check
pnpm lint       # Run ESLint validation
```

---

## 🛡️ Non-Negotiable Coding Rules

1. **The Honesty Standard:** Never invent fake client logos, fabricated metrics, or fictitious testimonials. We ship verifiable Proof Builds (Atlas & Pulse) and defensible commitments.
2. **Tailwind v4 Design Tokens:** Never inline arbitrary hex colors in component classes. Use defined theme tokens (`bg-accent`, `text-display`, `text-body`, `border-hairline`, `bg-obsidian`).
3. **Decoupled Content Layer:** Do not hardcode literal marketing copy inside component JSX. All text imports from strongly typed files in `src/data/*.ts`.
4. **Server Components by Default:** Keep components server-rendered. Only add `"use client"` for active state islands.
5. **Zero-LCP Script Policy:** Third-party scripts (e.g. Calendly) are loaded lazily on user click via `src/lib/booking.ts`. Zero third-party bytes on initial page load.
