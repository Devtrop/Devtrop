export interface HeroContent {
  sectionNumber: string
  sectionLabel: string
  headlineWords: string[]
  subhead: string
  primaryCta: { label: string; href: string; helperText: string }
  secondaryCta: { label: string; href: string }
}

export const HERO_CONTENT: HeroContent = {
  sectionNumber: '01',
  sectionLabel: 'SYSTEM',
  headlineWords: ['WE', 'ENGINEER', 'SCALABLE', 'WEBSITES'],
  subhead:
    'Need a website for your business?? But your budget is a little short! Just book a call for free. May be we could be the right choice.',
  primaryCta: {
    label: 'Book a Discovery Call',
    href: '#contact',
    helperText: '30-min architecture review · Direct with lead engineer · No sales pressure',
  },
  secondaryCta: { label: 'Explore Selected Work', href: '#work' },
}

export interface EstimatorOption {
  projectType: string
  speed: string
  timeline: string
  squad: string
  architecture: string
}

export const ESTIMATOR_PROJECT_TYPES = [
  'Build a New Product',
  'Improve an Existing Website or App',
  'Make My Website or App Faster',
] as const

export const ESTIMATOR_SPEEDS = ['Standard', 'Fast-Track'] as const

export const ESTIMATOR_MATRIX: Record<string, Record<string, EstimatorOption>> = {
  'Build a New Product': {
    Standard: {
      projectType: 'Build a New Product',
      speed: 'Standard',
      timeline: '6–8 weeks',
      squad: 'Dedicated Project Team',
      architecture: 'A complete first version with user accounts, payments, and essential features',
    },
    'Fast-Track': {
      projectType: 'Build a New Product',
      speed: 'Fast-Track',
      timeline: '3–4 weeks',
      squad: 'Focused Project Team',
      architecture: 'A faster launch with only the most important features',
    },
  },
  'Improve an Existing Website or App': {
    Standard: {
      projectType: 'Improve an Existing Website or App',
      speed: 'Standard',
      timeline: '6–10 weeks',
      squad: 'Dedicated Project Team',
      architecture: 'Gradual improvements while keeping your existing service running',
    },
    'Fast-Track': {
      projectType: 'Improve an Existing Website or App',
      speed: 'Fast-Track',
      timeline: '2–3 weeks',
      squad: 'Focused Project Team',
      architecture:
        'Review your current setup, plan improvements, and strengthen your development process',
    },
  },
  'Make My Website or App Faster': {
    Standard: {
      projectType: 'Make My Website or App Faster',
      speed: 'Standard',
      timeline: '4–6 weeks',
      squad: 'Dedicated Performance Team',
      architecture:
        'Improve loading speed, database response times, and performance under heavy traffic',
    },
    'Fast-Track': {
      projectType: 'Make My Website or App Faster',
      speed: 'Fast-Track',
      timeline: '2 weeks',
      squad: 'Performance Specialist',
      architecture:
        'Find the biggest performance problems and fix the highest-priority issues first',
    },
  },
}
