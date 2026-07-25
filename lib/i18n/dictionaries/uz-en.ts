import type { Dictionary } from '../types'

/**
 * Uzbekistan market, English. The `EN` option in the tabelo.uz switcher.
 *
 * This is the UZ market's framing rendered in English — NOT the UK site's copy.
 * Telegram, UZS, the 2022 Uzbek Labour Code and Tashkent all stay; WhatsApp,
 * GBP, UK Working Time Regulations and Islington must never appear here.
 */
export const uzEn: Dictionary = {
  meta: {
    title: 'Tabelo — Workforce management built for restaurants',
    description:
      'Rota, clock-in, timesheets and payroll in one place — in Uzbek, Russian and English. Built for restaurants by Bilig Labs.',
  },

  nav: {
    home: 'Tabelo home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    login: 'Log in',
    bookDemo: 'Book a demo',
    languageLabel: 'Language',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: "Who it's for", href: '#customers' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },

  hero: {
    eyebrow: 'Workforce management for restaurants',
    titleLine1: 'Rota, clock-in and payroll —',
    titleLine2: 'in one place, in your language.',
    body: 'Stop running your restaurant’s schedule on paper and in Telegram groups. Tabelo replaces spreadsheets, group chats and manual payroll math with one system your whole team actually uses.',
    emailLabel: 'Work email',
    emailPlaceholder: 'Your work email',
    submit: 'Book a demo',
    badges: [
      'GPS, QR & NFC clock-in',
      'Uzbek, Russian & English',
      'Aligned to the 2022 Labour Code',
    ],
    clockedIn: 'Bekzod T. clocked in',
    clockedInMeta: '08:02 · NFC',
    exceptionQueue: 'Exception queue',
    toReview: 'to review',
  },

  bento: {
    eyebrow: 'What makes Tabelo different',
    titleLine1: 'One system instead of five,',
    titleLine2: 'built for your market',
    description:
      'Rota, clock-in, timesheets and payroll — replacing paper, Telegram groups and scattered spreadsheets.',
    live: {
      title: 'Know who’s on the floor, in real time',
      body: 'Who clocked in, who was late and who hasn’t arrived yet — all on one screen. Managers no longer track departments separately; every branch sits in one place.',
    },
    demand: {
      title: 'Know your busy nights in advance',
      body: 'Colour-coded demand levels and guest-count estimates let you staff against real demand instead of guesswork — so you avoid both under- and over-staffing.',
    },
    payroll: {
      title: 'Payroll that matches the schedule',
      body: 'Hours calculate automatically from clock-in times, with breaks and overnight shifts handled correctly. Approve the week, lock the period — no number moves afterwards.',
    },
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Three steps, one day',
    steps: [
      {
        title: 'Build the rota',
        body: 'Drag and drop the week by department, and copy last week with a single button.',
      },
      {
        title: 'Staff clock in',
        body: 'By GPS, a QR code at the branch, or an NFC card — no need to even unlock the phone.',
      },
      {
        title: 'Timesheets compute',
        body: 'Breaks and overnight shifts are deducted correctly. Approve the week and export to Excel.',
      },
    ],
    imageAlt: 'Kitchen staff working a shift in a restaurant',
    storiesEyebrow: 'Customer stories',
    storiesBody:
      'We’re onboarding our first restaurants in Tashkent right now. Real feedback and names will live here once they’re ready.',
    storiesCta: 'Become an early customer',
  },

  features: {
    eyebrow: 'Staff actually want to use it',
    titleLine1: 'A tool your team opens',
    titleLine2: 'without being asked',
    description:
      'Gamification, an AI assistant, daily checklists and a genuinely pleasant mobile app — because restaurant staff live on their phones, not at a desk.',
    ranks: {
      title: 'Darajam ranks and points',
      body: 'Five levels: Yangi, Ishonchli, Faol, Tajribali, Usta. Points come from good attendance, punctuality and completed tasks. Redeeming a reward never lowers your rank — points and rank are counted separately.',
    },
    assistant: {
      title: 'Dono opa, your AI assistant',
      body: 'When staff have a question about the menu, a recipe or house rules, they get an answer from Dono opa straight away — no hunting down a manager.',
    },
    checklist: {
      title: 'Opening checklist, done right',
      body: 'Checklists for opening, mid-shift and closing. Photo-required items keep accountability real.',
    },
    languages: {
      title: 'Your whole team, in their own language',
      body: 'Uzbek, Russian and English are built fully into the product — each member of staff can work in their own language, regardless of the business default.',
      samples: [
        { code: 'UZ', label: "O'zbekcha", sample: 'Smenaga yozilish' },
        { code: 'RU', label: 'Русский', sample: 'Отметка на смене' },
        { code: 'EN', label: 'English', sample: 'Clock in to shift' },
      ],
    },
  },

  org: {
    eyebrow: 'Every layer of your team',
    title: 'One system for every layer of your team',
    body: 'Four default roles — Owner, Branch Manager, Department Manager, Staff — or create custom roles when you need precise control.',
    cta: 'Book a demo',
    pillars: [
      {
        title: 'Organisation → Branch → Department → Staff',
        body: 'Tabelo mirrors your restaurant’s real structure, not a generic “company” template.',
      },
      {
        title: 'Hierarchy enforced, not implied',
        body: 'A Department Manager runs only their own department. Branch Managers and owners see everything. Data never leaks.',
      },
      {
        title: 'Ready for multi-branch',
        body: 'Staff, settings, reports, timezone and currency — every branch under a single owner view.',
      },
    ],
  },

  customers: {
    eyebrow: "Who it's for",
    titleLine1: 'Built for restaurants,',
    titleLine2: 'at every size',
    previous: 'Previous',
    next: 'Next',
    cards: [
      {
        title: 'Single restaurant',
        body: 'One branch, a handful of departments and a manager who is also on the floor. Rota, clock-in and timesheets without a back-office team.',
        tags: ['Rota builder', 'GPS clock-in', 'Excel export'],
      },
      {
        title: 'Multi-branch groups',
        body: 'More than one branch? A shared staff pool, branch-specific settings and a single owner view.',
        tags: ['Branch settings', 'Owner overview', 'Branch geofencing'],
      },
      {
        title: 'High-turnover teams',
        body: 'For teams where staff change often — training modules and clear schedules that get a new starter productive faster.',
        tags: ['Training modules', 'Darajam ranks', 'Checklists'],
      },
      {
        title: 'Compliance-minded operators',
        body: 'Working hours and rest periods are monitored against the 2022 Uzbek Labour Code — in the background, without stopping your business.',
        tags: ['Labour Code', 'Audit trail', 'Period locking'],
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    description: 'Everything owners and managers ask us in the first demo call.',
    items: [
      {
        q: 'Does Tabelo work in Uzbek and Russian?',
        a: 'Yes — Uzbek, Russian and English are built fully into the product. Each member of staff can use their own language, regardless of the business default.',
      },
      {
        q: 'How do staff clock in?',
        a: 'By GPS, a QR code at the branch, or an NFC card — no need to even unlock the phone.',
      },
      {
        q: 'What happens if someone forgets to clock out?',
        a: 'The system detects it automatically and flags it for the manager; if it really was forgotten, the shift closes automatically after a threshold you set.',
      },
      {
        q: 'Can it handle shifts that cross midnight?',
        a: 'Yes — overnight shifts (for example 16:00–04:00) are calculated correctly, including breaks and pay.',
      },
      {
        q: 'Does the compliance feature block me from publishing a rota?',
        a: 'No. Tabelo only issues a soft warning — it never blocks you from publishing a rota. The decision is always yours.',
      },
      {
        q: 'Is there a mobile app?',
        a: 'Yes — a full mobile app for iOS and Android.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Priced around what you actually use',
    description:
      'Core features — rota, clock-in, staff and requests — are included for every business. Add-on modules are enabled as you need them.',
    scopeLabel: 'Business size',
    single: 'Single branch',
    multi: 'Multi-branch',
    singleNote: 'One monthly fee per restaurant.',
    multiNote:
      'One organisation fee plus a per-branch fee for each extra location.',
    mostPopular: 'Recommended',
    cta: 'Book a demo for pricing',
    plans: [
      {
        name: 'Start',
        clock: 'GPS clock-in',
        blurb: 'Core control for a single location.',
        features: [
          'Drag-and-drop rota builder',
          'GPS clock-in with branch geofencing',
          'Automated timesheets & Excel export',
          'Day-off requests and approvals',
        ],
      },
      {
        name: 'Grow',
        clock: 'GPS + rotating QR',
        blurb: 'For busy kitchens that need tighter attendance.',
        features: [
          'Everything in Start',
          'Rotating QR codes — no buddy-punching',
          'Demand forecast calendar & weekly cost budget',
          'Checklists, training modules and Darajam ranks',
        ],
      },
      {
        name: 'Scale',
        clock: 'GPS + NFC card tap',
        blurb: 'For multi-branch groups running on real numbers.',
        features: [
          'Everything in Grow',
          'Branded NFC card tap',
          'Custom roles with granular permissions',
          'Dono opa AI assistant (paid add-on)',
        ],
      },
    ],
  },

  finalCta: {
    eyebrow: 'Let’s get started',
    title: 'Get your next rota out of the group chat',
    body: 'A 30-minute call in Uzbek, Russian or English is all it takes to see if Tabelo fits your restaurant.',
    cta: 'Book a demo',
  },

  footer: {
    blurb:
      'Tabelo is workforce management built for restaurants — rota, clock-in, timesheets and payroll, all in one place.',
    updatesTitle: 'Get product updates',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    copyrightTemplate: '© {year} Bilig Labs. Tabelo is a Bilig Labs product.',
    locations: 'Tashkent · Uzbek · Russian · English',
    columns: [
      {
        title: 'Product',
        links: [
          'Rota & scheduling',
          'Clock in / out',
          'Timesheets & payroll',
          'Attendance reports',
        ],
      },
      {
        title: 'Modules',
        links: ['Checklists', 'Darajam ranks', 'Training', 'Dono opa AI'],
      },
      {
        title: 'Company',
        links: ['Bilig Labs', 'Dastro', 'Contact', 'Privacy policy'],
      },
    ],
  },

  mocks: {
    rotaTitle: 'Week 32 · Kitchen & Floor',
    branch: 'Chorsu branch',
    onBudget: 'On budget',
    projectedCost: 'Projected labour cost',
    whosIn: 'Who’s in right now',
    live: 'Live',
    demandTitle: 'Demand forecast · August',
    demandLevels: 'L1–L4',
    demandNote: 'Sat 19 Aug · ~180 guests · Level 4',
    timesheetTitle: 'Timesheet · week 31',
    approvedLocked: 'Approved & locked',
    payrollReady: 'Payroll ready',
    staff: 'Staff',
    hours: 'Hours',
    pay: 'Pay (UZS)',
    checklistTitle: 'Opening checklist',
    checklistMeta: 'Kitchen · 2 of 3 done',
    goodMorning: 'Good morning,',
    todaysShift: 'Today’s shift',
    shiftTime: '12:00 – 20:00 · Floor',
    swipeToClockIn: 'Swipe to clock in',
    donoOpa: 'Dono opa',
    rankLabel: 'Darajam · level 4',
    rankName: 'Tajribali',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    depts: { floor: 'Floor', kitchen: 'Kitchen', hosts: 'Hosts', bar: 'Bar' },
    expectedPrefix: 'Expected',
    currency: 'UZS',
    costValue: '14 820 000',
    payValues: ['3 250 000', '3 780 000', '2 610 000'],
    clockInName: 'Anthony',
    chips: ['GPS', 'NFC', 'On time'],
    rankPoints: '6 420 points',
    rankTarget: '10 000',
    shiftStrength: 'Shift strength 4.2',
    chat: {
      question: 'Are there peanuts in the lagman?',
      answer:
        'No — there are no peanuts in the lagman. The sauce does contain sesame, so do warn the guest about the allergen.',
    },
    checklistItems: [
      'Fridge temperatures logged',
      'Prep area photo',
      'Till float counted',
    ],
    photoBadge: 'photo',
  },
}
