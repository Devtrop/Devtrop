export interface ServicePillar {
  number: string
  title: string
  pitch: string
  deliverables: string[]
}

export const SERVICES_CONTENT = {
  sectionNumber: '04',
  sectionLabel: 'WHAT WE DO',
  headline: 'SOLUTIONS BUILT AROUND YOUR BUSINESS',
  subhead:
    'From your first idea to a growing business, we help you build, improve, and maintain digital products.',
  pillars: [
    {
      number: '01',
      title: 'Websites & Business Applications',
      pitch:
        'We build custom websites and web applications that help you serve customers, manage operations, and grow your business.',
      deliverables: [
        'Customer portals and business dashboards',
        'User accounts and access permissions',
        'Online payments and subscriptions',
        'Live updates and interactive features',
      ],
    },
    {
      number: '02',
      title: 'Turn Your Idea Into a Real Product',
      pitch:
        'Have an idea for a website, app, or online service? We help you turn it into a working product that you can launch, share, and grow.',
      deliverables: [
        'Project planning and feature selection',
        'Clean, consistent, user-friendly design',
        'A working website or app ready to launch',
        'Testing and launch support',
      ],
    },
    {
      number: '03',
      title: 'Website Improvements & Performance',
      pitch:
        'Already have a website or app? We help make it faster, fix existing problems, and improve the experience for your customers.',
      deliverables: [
        'Faster page loading and smoother browsing',
        'Fixes for bugs and existing issues',
        'Modern design and feature improvements',
        'Updates with minimal disruption to your business',
      ],
    },
    {
      number: '04',
      title: 'Hosting, Deployment & Maintenance',
      pitch:
        'We take care of the technical setup behind your website so you can focus on running your business with greater peace of mind.',
      deliverables: [
        'Website setup and online deployment',
        'Reliable hosting and server configuration',
        'Security improvements and regular maintenance',
        'Monitoring, troubleshooting, and ongoing support',
      ],
    },
  ] satisfies ServicePillar[],
}
