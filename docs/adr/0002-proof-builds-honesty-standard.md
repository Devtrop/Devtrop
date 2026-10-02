# ADR 0002: Proof Builds Strategy & Working Agreement

- **Status:** Accepted
- **Date:** 2026-10-02
- **Deciders:** Founding Team, Antigravity, Qoder

## Context
As a newly launching engineering agency, Devtrop does not yet have public client case studies or verified testimonials. Early planning drafts contained placeholder case studies ("NovaHealth", "Kinetix") and fictional founder quotes. For an engineering studio targeting CTOs, VPEs, and technical founders, publishing fabricated testimonials or unverifiable metrics directly violates the studio's anti-AI/anti-slop standard and constitutes a fatal credibility risk.

## Decision
1. **Quarantine all fabricated content:** No fake logos, fake founder quotes, or fictitious metrics will ever ship to production.
2. **Launch with Proof Builds:** Feature two real, inspectable, open-source concept applications:
   - **Atlas:** Multi-Tenant Next.js 16 SaaS Core (RSC, Postgres RLS, Stripe metered billing, Playwright isolation tests).
   - **Pulse:** Real-Time Edge Telemetry Canvas (60fps Canvas 2D rendering under 10k events/sec WebSocket load).
3. **Launch with the Working Agreement:** Section 08 ships with an explicit 5-point Client Working Agreement outlining contractual commitments (Direct Engineer Access, Weekly Transparency, 14-Day Metronome, Day-One IP Ownership, 30-Day Hyper-Care).
4. **Data-Driven Social Proof Transition:** When real client testimonials are collected, `content/testimonials.ts` seamlessly renders them without redesigning the section.

## Consequences
- Every link on the homepage is clickable, inspectable, and verifiable by technical buyers.
- Turns the studio's newness into an asset (radical transparency) rather than hiding it behind fabricated claims.
