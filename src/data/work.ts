export interface ProofBuild {
  category: string;
  title: string;
  outcome: string;
  problem: string;
  approach: string;
  deliverables: string[];
  stackTags: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  featured: boolean;
}

export const WORK_CONTENT = {
  sectionNumber: "03",
  sectionLabel: "WORK",
  headline: "WEBSITE BUILT TO BE EXAMINED",
  subhead:
    "Every claim below links to something live: a production app you can open in a new tab right now.",
  builds: [
    {
      category: "Multi-Tenant SaaS",
      title: "Uparzo: Multi-Tenant E-Commerce SaaS",
      outcome:
        "A live platform where merchants spin up branded storefronts, connect custom domains, and sell without writing code.",
      problem:
        "Small merchants in Bangladesh are stuck between DIY page builders and enterprise commerce suites. Neither gives them a real storefront, subscription billing, and courier integration out of the box.",
      approach:
        "Give merchants the full commerce stack from day one: each store is its own tenant with subdomain and custom-domain support, so the brand feels like their own. Subscription plans and Stripe/SSLCommerz billing handle the money side, orders hand off to Pathao courier automatically, and a Next.js storefront on an Express + Prisma PostgreSQL backend, with Redis and BullMQ for background jobs, keeps everything fast as the store count grows.",
      deliverables: [
        "Live production site at uparzo.com",
        "Merchant and super-admin dashboards",
        "Source in the RiseTogetherBD GitHub org",
      ],
      stackTags: [
        "Next.js",
        "TypeScript",
        "Express",
        "PostgreSQL (Prisma)",
        "Redis + BullMQ",
        "Stripe",
      ],
      image: "/work-uparzo-v2.png",
      imageAlt:
        "Screenshot of the Uparzo homepage showing the hero and merchant dashboard preview",
      liveUrl: "https://uparzo.com",
      featured: true,
    },
    {
      category: "Travel Marketplace",
      title: "Feletrip: Hotel & Travel Booking Marketplace",
      outcome:
        "A working bookings marketplace: hotels, rooms, deals, reviews, and vendor payouts running in production.",
      problem:
        "Travellers want verified hotels and deals in one place; hotel vendors need listings, booking management, and a payout path. Bolt-on marketplace logic breaks at the first migration.",
      approach:
        "Model the marketplace from the start: hotels, rooms, bookings, reviews, and deals share one Prisma schema on PostgreSQL, so availability and pricing stay consistent everywhere. Travellers search on a Next.js frontend with Leaflet maps and date-range booking, vendors manage their listings from a dedicated dashboard, and SSLCommerz payments with a commission and vendor-withdrawal model move the money the way a real marketplace needs.",
      deliverables: [
        "Live production site at feletrip.com",
        "Vendor commission and withdrawal flow",
        "Source in the RiseTogetherBD GitHub org",
      ],
      stackTags: [
        "Next.js",
        "React",
        "Express",
        "PostgreSQL (Prisma)",
        "Redis",
        "Leaflet",
      ],
      image: "/work-feletrip-v2.png",
      imageAlt:
        "Screenshot of the Feletrip homepage showing the welcome banner and special deals section",
      liveUrl: "https://www.feletrip.com",
      featured: true,
    },
    {
      category: "Multi-Vendor Marketplace",
      title: "Biponiq: Multi-Vendor Storefront Builder",
      outcome:
        "A Shopify-style SaaS where each vendor gets a branded storefront on their own subdomain or custom domain, plus the tools to run it.",
      problem:
        "Vendors in Bangladesh want an online shop without building software, but off-the-shelf builders miss local payments, cash-on-delivery, and courier handoff.",
      approach:
        "A storefront builder designed around local commerce: vendors pick a template, connect a domain, and edit pages without code. Checkout supports SSLCommerz and cash-on-delivery with local courier integration, and the money economy (vendor cashouts, affiliate payouts, subscription and visitor packages) runs on the same Express + Prisma PostgreSQL backend with Redis and BullMQ handling background work. A Gemini-powered chatbot answers shopper questions inside every store.",
      deliverables: [
        "Live production site at biponiq.com",
        "Admin, vendor, and affiliate dashboards",
        "Source in the RiseTogetherBD GitHub org",
      ],
      stackTags: [
        "Next.js",
        "TypeScript",
        "Express",
        "PostgreSQL (Prisma)",
        "Redis + BullMQ",
        "Gemini AI",
      ],
      image: "/work-biponiq.png",
      imageAlt:
        "Screenshot of the Biponiq homepage showing the Bengali hero copy and vendor store dashboard preview",
      liveUrl: "https://biponiq.com",
      featured: false,
    },
  ] satisfies ProofBuild[],
};
