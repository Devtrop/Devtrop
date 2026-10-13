export interface FaqItem {
  id: string
  number: string
  question: string
  answer: string
  category?: string
}

export interface FaqContent {
  sectionNumber: string
  sectionLabel: string
  headline: string
  subhead: string
  items: FaqItem[]
}

export const FAQ_CONTENT: FaqContent = {
  sectionNumber: '05',
  sectionLabel: 'COMMON QUESTIONS',
  headline: 'FAQ',
  subhead:
    'Everything you need to know about working with Devtrop, from project quality and timelines to ownership and ongoing support.',
  items: [
    {
      id: 'production-vs-prototype',
      number: '01',
      question: 'Will my website or app be ready for real customers?',
      answer:
        'Absolutely. We focus on building reliable, well-tested websites and applications designed for real-world use—not just attractive demos. Before delivery, we check the essential features, fix issues, and make sure everything works as expected.',
    },
    {
      id: 'sprint-cadence-scope-shifts',
      number: '02',
      question: 'What if I want to change something during the project?',
      answer:
        'We understand that ideas can evolve as a project takes shape. We discuss changes with you, explain how they may affect the timeline or budget, and agree on the next steps together. Smaller changes may fit within the original plan, while larger additions may require more time or a revised estimate.',
    },
    {
      id: 'ip-ownership-and-transfer',
      number: '03',
      question: 'Will I own my website and its source code?',
      answer:
        'Yes. Your project ownership is clearly defined in our agreement. We aim to give you control over your website, its source code, and the accounts needed to manage it. Any third-party tools, services, or licenses remain subject to their own terms.',
    },
    {
      id: 'timezone-overlap',
      number: '04',
      question: 'Can we work together if we live in different time zones?',
      answer:
        'Of course. We work with clients remotely and agree on communication times that suit both sides. You will know how to reach us, when to expect updates, and how we will share progress, feedback, and important decisions throughout the project.',
    },
    {
      id: 'in-house-handoff',
      number: '05',
      question: 'Can another developer manage my website later?',
      answer:
        'Absolutely. We want you to have the freedom to choose who works on your project in the future. We can provide the source code, setup instructions, and relevant project documentation to help another developer understand, maintain, and continue building your website or application.',
    },
    {
      id: 'hyper-care-warranty',
      number: '06',
      question: 'What happens if something goes wrong after launch?',
      answer:
        'We want your launch to go smoothly. The post-launch support included in your agreement will explain how long support lasts and what it covers. Depending on your plan, this may include fixing issues related to our work and helping resolve launch-related problems. New features and larger changes can be discussed separately.',
    },
  ],
}
