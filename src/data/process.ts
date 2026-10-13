export interface ProcessPhase {
  number: string
  title: string
  timeline: string
  narrative: string
  deliverables: string[]
}

export const PROCESS_CONTENT = {
  sectionNumber: '06',
  sectionLabel: 'HOW WE WORK',
  headline: 'FROM IDEA TO LAUNCH',
  subhead: 'A clear process, regular updates, and no surprises along the way.',
  phases: [
    {
      number: '01',
      title: 'Planning & Strategy',
      timeline: 'Week 1',
      narrative:
        'We learn about your business, understand your goals, and agree on what to build before development begins.',
      deliverables: [
        'A clear project plan',
        'Agreed features and priorities',
        'A design direction for your project',
      ],
    },
    {
      number: '02',
      title: 'Building Your Product',
      timeline: 'Throughout Development',
      narrative:
        'We bring your ideas to life and share working previews so you can see the progress and give feedback along the way.',
      deliverables: [
        'Working previews of your website or app',
        'Regular progress updates',
        'Opportunities to review and share feedback',
      ],
    },
    {
      number: '03',
      title: 'Testing & Refinement',
      timeline: 'Throughout Development',
      narrative:
        'We check that everything works as expected, fix problems, and refine the experience before your product goes live.',
      deliverables: [
        'Feature and functionality checks',
        'Bug fixes and improvements',
        'Final quality checks before launch',
      ],
    },
    {
      number: '04',
      title: 'Launch & Ongoing Support',
      timeline: 'Launch Day & Beyond',
      narrative:
        'We help get your product online, hand over the necessary files and access, and provide support according to your agreement.',
      deliverables: [
        'Your website or app launched online',
        'Project files and handover documentation',
        'Post-launch support as agreed',
      ],
    },
  ] satisfies ProcessPhase[],
}
