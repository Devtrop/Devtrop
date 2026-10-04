export interface ProofBuild {
  category: string;
  title: string;
  outcome: string;
  problem: string;
  approach: string;
  deliverables: string[];
  stackTags: string[];
  demoUrl: string;
  repoUrl: string;
}

export const WORK_CONTENT = {
  sectionNumber: "03",
  sectionLabel: "WORK",
  headline: "WEBSITE BUILT TO BE EXAMINED",
  subhead: "Every claim below links to something you can click, fork, or load-test.",
  builds: [
    {
      category: "Multi-Tenant SaaS",
      title: "Atlas: Multi-Tenant SaaS Core",
      outcome: "The risky 20% of every MVP — tenant isolation, entitlements, usage billing — done right.",
      problem: "Most SaaS MVPs defer multi-tenancy, RBAC, and billing. When they bolt it on later, every migration is a rewrite.",
      approach: "Next.js 16 App Router RSC + Server Actions; Postgres row-level security per tenant; role→permission→entitlement RBAC layer; Stripe metered subscriptions with webhook-driven state machine.",
      deliverables: ["Live demo with two seeded tenants", "Public repo", "Lighthouse trace"],
      stackTags: ["Next.js 16", "TypeScript", "PostgreSQL (RLS)", "Stripe", "Playwright"],
      demoUrl: "#work",
      repoUrl: "https://github.com/",
    },
    {
      category: "Real-Time Systems",
      title: "Pulse: Real-Time Edge Telemetry Canvas",
      outcome: "Rendering 10k events/sec without freezing the UI.",
      problem: "Real-time dashboards that handle high event throughput without main-thread jank or memory leaks under sustained load.",
      approach: "WebSocket ingestion into a Web Worker ring buffer; canvas rendering with dirty-rect redraw + requestAnimationFrame backpressure; SSE fallback path.",
      deliverables: ["Live demo streaming synthetic load", "k6 load-test report", "60fps screen trace"],
      stackTags: ["React 19", "WebSockets", "Web Workers", "Canvas 2D"],
      demoUrl: "#work",
      repoUrl: "https://github.com/",
    },
  ] satisfies ProofBuild[],
};
