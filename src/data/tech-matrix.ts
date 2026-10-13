export interface TechCard {
  tool: string
  reason: string
  benchmark: string
}

export interface TechTab {
  id: string
  label: string
  cards: TechCard[]
}

export const TECH_MATRIX_CONTENT = {
  sectionNumber: '07',
  sectionLabel: 'OUR APPROACH',
  headline: 'THE TECHNOLOGY BEHIND YOUR SUCCESS',
  subhead:
    'We choose the right tools to make your website fast, reliable, secure, and ready to grow.',
  tabs: [
    {
      id: 'frontend',
      label: 'Website Experience',
      cards: [
        {
          tool: 'Fast, Responsive Websites',
          reason: 'Pages are designed to load quickly and work smoothly across devices.',
          benchmark: 'Performance tested across desktop and mobile',
        },
        {
          tool: 'Smooth Navigation',
          reason: 'Clear layouts and seamless page transitions help visitors find what they need.',
          benchmark: 'A consistent experience across your website',
        },
        {
          tool: 'Reliable Features',
          reason: 'Forms, buttons, and interactive features are checked to work as expected.',
          benchmark: 'Essential features tested before launch',
        },
      ],
    },
    {
      id: 'backend',
      label: 'Business Functionality',
      cards: [
        {
          tool: 'Connected Features',
          reason: "Your website's forms, accounts, payments, and other features work together.",
          benchmark: 'Features checked across complete user journeys',
        },
        {
          tool: 'Reliable Processing',
          reason:
            'Important tasks can be handled in the background without slowing down the experience.',
          benchmark: 'Background tasks monitored and tested',
        },
        {
          tool: 'Live Updates',
          reason: 'Where needed, information can update without users having to refresh the page.',
          benchmark: 'Real-time features tested for responsiveness',
        },
      ],
    },
    {
      id: 'database',
      label: 'Data & Security',
      cards: [
        {
          tool: 'Organized, Reliable Data',
          reason: 'Business information is stored consistently and handled with care.',
          benchmark: 'Data handling and access rules reviewed',
        },
        {
          tool: 'Faster Data Access',
          reason:
            'Frequently needed information can be delivered faster for a smoother experience.',
          benchmark: 'Key data operations tested for performance',
        },
        {
          tool: 'Ready for Growth',
          reason: 'The system is designed to handle increasing activity as your business grows.',
          benchmark: 'Performance tested against agreed usage needs',
        },
      ],
    },
    {
      id: 'devops',
      label: 'Hosting & Reliability',
      cards: [
        {
          tool: 'Reliable Deployment',
          reason:
            'Your website can be launched and updated through a consistent, repeatable process.',
          benchmark: 'Deployment process tested before release',
        },
        {
          tool: 'Safer Updates',
          reason: 'Changes are reviewed and checked before reaching your live website.',
          benchmark: 'Automated checks included where appropriate',
        },
        {
          tool: 'Ongoing Monitoring',
          reason: 'Where included, monitoring helps identify problems and guide improvements.',
          benchmark: 'Monitoring and performance goals agreed per project',
        },
      ],
    },
  ] satisfies TechTab[],
}
