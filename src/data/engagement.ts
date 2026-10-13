export interface EngagementModel {
  title: string
  audience: string
  description: string
  highlights: string[]
  ctaLabel: string
  isPopular?: boolean
}

// export const ENGAGEMENT_CONTENT = {
//   sectionNumber: '08',
//   sectionLabel: 'ENGAGE',
//   headline: 'COLLABORATION MODELS',
//   subhead: 'Transparent terms. No hidden fees. Pick the structure that fits.',
//   models: [
//     {
//       title: 'Dedicated Engineering Squad',
//       audience: 'Funded startups & scale-ups',
//       description: 'Pod integrated into your Slack/Linear/GitHub with standups & demos.',
//       highlights: [
//         'Monthly retainer, 30-day notice',
//         'SLA response times',
//         'Standups & sprint demos',
//         'Full GitHub org access',
//       ],
//       ctaLabel: 'Deploy a Squad',
//     },
//     {
//       title: 'Fixed-Scope Milestone Build',
//       audience: '0-to-1 MVPs',
//       description: 'RFC + PRD sign-off with milestone payments tied to verified staging demos.',
//       highlights: [
//         '6–8 week delivery window',
//         'Milestone-based payments',
//         '30-day warranty included',
//         '100% IP transfer at close',
//       ],
//       ctaLabel: 'Scope a Project',
//       isPopular: true,
//     },
//     {
//       title: '2-Week Architecture & Code Audit',
//       audience: 'Pre-scale / pre-raise',
//       description:
//         'Query & bottleneck profiling, security/SOC2-readiness review, and a prioritized fix-PR roadmap.',
//       highlights: [
//         'Full codebase audit',
//         'Prioritized fix-PR roadmap',
//         'Executive summary',
//         'Security/SOC2 review',
//       ],
//       ctaLabel: 'Request an Audit',
//     },
//   ] satisfies EngagementModel[],
// }

export const ENGAGEMENT_CONTENT = {
  sectionNumber: '08',
  sectionLabel: 'WORK WITH US',
  headline: 'FIND THE RIGHT WAY TO WORK TOGETHER',
  subhead:
    'Whether you need a complete product, ongoing development, or expert advice, we offer a flexible approach that fits your goals.',
  models: [
    {
      title: 'Ongoing Development Support',
      audience: 'Businesses that need a reliable development team',
      description:
        'Work with our team over time to build new features, improve your website, and keep your digital products moving forward.',
      highlights: [
        'Monthly payment plan',
        'Agreed response times',
        'Regular progress updates and demos',
        'Access to your project files and code',
      ],
      ctaLabel: 'Discuss Ongoing Support',
    },
    {
      title: 'Complete Website or App Development',
      audience: 'Businesses launching a new product',
      description:
        'We plan, build, and launch your website or web application with clear goals, agreed milestones, and transparent pricing.',
      highlights: [
        'Estimated delivery in 6–8 weeks, depending on scope',
        'Payments tied to agreed milestones',
        'Post-launch support as agreed',
        'Ownership terms clearly defined in the contract',
      ],
      ctaLabel: 'Plan Your Project',
      isPopular: true,
    },
    {
      title: 'Website Review & Improvement Plan',
      audience: 'Businesses looking to improve an existing product',
      description:
        'We review your website or application, identify problems and opportunities, and recommend what to fix or improve first.',
      highlights: [
        'Review of your existing website or app',
        'Identification of performance and usability issues',
        'A prioritized improvement plan',
        'Clear recommendations for next steps',
      ],
      ctaLabel: 'Request a Review',
    },
  ] satisfies EngagementModel[],
}

export interface WorkingCommitment {
  number: string
  title: string
  description: string
}

export const WORKING_AGREEMENT = {
  sectionNumber: '07',
  sectionLabel: 'AGREEMENT',
  headline: 'THE WORKING AGREEMENT',
  subhead: 'No black boxes. This is what you can hold us to from week one.',
  commitments: [
    {
      number: '01',
      title: 'Direct engineer access',
      description:
        'You talk to the people writing the code. No account managers, no relayed questions, no junior swap after signature.',
    },
    {
      number: '02',
      title: 'Weekly transparency',
      description:
        'Every week: a working staging build, a recorded walkthrough, and an updated sprint board you can open any hour of any day.',
    },
    {
      number: '03',
      title: 'Shipping on a 14-day metronome',
      description:
        'Sprints end with website on a live URL — not status decks. If a milestone slips, you hear it before the demo, not during it.',
    },
    {
      number: '04',
      title: 'Day-one ownership',
      description:
        'Code lands in your GitHub organization from the first commit. IP transfer at launch is a formality, because it was always yours.',
    },
    {
      number: '05',
      title: '30-day hyper-care',
      description:
        'After launch we stay on: same engineers, priority queue, fixes for anything our code broke — included, not upsold.',
    },
  ] satisfies WorkingCommitment[],
}
