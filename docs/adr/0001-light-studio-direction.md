# ADR 0001: Light Studio Canvas Direction

- **Status:** Accepted
- **Date:** 2026-10-02
- **Deciders:** Founding Team, Antigravity, Qoder

## Context
We explored two contrasting aesthetic directions for Devtrop:
1. **Variant 1:** Light Studio Canvas (inspired by Calendly and Uxcel), emphasizing generous whitespace, crisp typography, and subtle hairline borders.
2. **Variant 2:** Architectural Dark Studio (inspired by Linear and Vercel), with deep obsidian surfaces and glowing accent nodes.

## Decision
We standardized on the **Light Studio Canvas** as the primary visual system, with **Deep Obsidian (`#090D16`)** reserved exclusively for the high-contrast Closing CTA section and Footer.

## Consequences
- Single token set anchored on `canvas` (white), `subtle` (slate-50), and `accent` (`blue-600`).
- No dark-mode theme switching complexity at launch.
- Maximizes readability and communicates professional, enterprise-grade clarity rather than a generic dark-mode developer template.
