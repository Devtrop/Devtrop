# Devtrop — AI Agent Hub & Project Instructions

> **Universal Router:** This file is read by all AI agents and IDE assistants (Antigravity, Qoder, Claude Code, Cursor, Codex, Copilot). It points to canonical project rules and skills.

---

## 1. Project Overview & Pinned Stack

- **Project:** Devtrop — Full-Stack Web & SaaS Engineering Studio Homepage
- **Framework:** Next.js 16.3.6 (App Router)
- **UI Runtime:** React 19.2.8
- **Styling:** Tailwind CSS v4 (`@theme` in `src/app/globals.css`)
- **Package Manager:** `pnpm` (v11+)
- **Language:** TypeScript 5 (Strict Mode)
- **Directory Layout:** Canonical `src/` directory layout (per ADR 0003)

---

## 2. Master Specification & Project Skills

Before modifying, creating, or designing any components, copy, or styles:
1. **Read the Master Plan:** [`docs/HOMEPAGE_DESIGN_PLAN.md`](docs/HOMEPAGE_DESIGN_PLAN.md) is the single source of truth for section architecture, copywriting, and interaction contracts.
2. **Execute Project Skill:** Review [`skills/devtrop-frontend-spec/SKILL.md`](skills/devtrop-frontend-spec/SKILL.md) (also at [`.agents/skills/devtrop-frontend-spec/SKILL.md`](.agents/skills/devtrop-frontend-spec/SKILL.md)).
3. **Check Architecture Decisions:** Review [`docs/adr/`](docs/adr/) for context on why decisions were made (notably ADR 0001, ADR 0002, and ADR 0003).
4. **Follow Project Structure Guide:** Review [`docs/PROJECT_STRUCTURE_GUIDE.md`](docs/PROJECT_STRUCTURE_GUIDE.md) for canonical directory and file responsibilities.

---

## 3. Hard Non-Negotiable Coding Rules

1. **The Honesty Standard:** Never invent fake client logos, fabricated metrics, or fictitious testimonials. We ship **Proof Builds** (Atlas & Pulse) and the **Working Agreement**.
2. **Tailwind v4 Design Tokens:** Never inline arbitrary hex colors in component classes. Use defined theme tokens: `bg-accent`, `text-display`, `text-body`, `border-hairline`.
3. **Decoupled Content Layer:** Do not hardcode literal marketing copy inside component JSX. All text imports from strongly typed files in `src/data/*.ts`.
4. **Server Components by Default:** Keep components server-rendered. Only add `"use client"` for active state islands (Navbar, ScopeEstimator, TechMatrix, BookACall).
5. **Zero-LCP Script Policy:** Calendly is loaded lazily on user click via `src/lib/booking.ts`. Zero third-party bytes on initial page load.

---

## 4. Key Commands

```bash
pnpm dev       # Start local development server (http://localhost:3000)
pnpm build     # Verify static production build
pnpm lint      # Run ESLint validation
```

---

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
