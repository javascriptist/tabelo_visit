import type { Dictionary } from '../types'

/**
 * UK market, English. Written for a UK reader from scratch.
 *
 * Deliberately does NOT mention: Telegram, UZS, the Uzbek Labour Code, or
 * Tashkent. Pain points are spreadsheets + WhatsApp; compliance references the
 * UK Working Time Regulations 1998; the only named customer is the real one.
 * Compliance wording stays at "helps you stay" / "soft warnings" — never
 * "guarantees compliance".
 */
export const ukEn: Dictionary = {
  meta: {
    title: 'Tabelo — Workforce management built for restaurants',
    description:
      'Rota, clock-in, timesheets and payroll in one place. Built for independent restaurants. Live in Islington, London.',
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
    titleLine1: 'Rota, clock-in, and payroll —',
    titleLine2: 'finally in one place.',
    body: 'Stop running your rota on a spreadsheet and chasing shift swaps over WhatsApp. Tabelo brings scheduling, clock-in, and payroll into one system your whole team actually opens.',
    emailLabel: 'Work email',
    emailPlaceholder: 'Your work email',
    submit: 'Book a demo',
    badges: [
      'GPS, QR & NFC clock-in',
      'Built for independent restaurants',
      'Live in Islington, London',
    ],
    clockedIn: 'Bekzod T. clocked in',
    clockedInMeta: '08:02 · NFC',
    exceptionQueue: 'Exception queue',
    toReview: 'to review',
  },

  bento: {
    eyebrow: 'What makes Tabelo different',
    titleLine1: 'One system instead of five',
    titleLine2: null,
    description:
      'Rota, clock-in, timesheets and payroll — replacing a patchwork of spreadsheets, WhatsApp groups, and manual payroll runs.',
    live: {
      title: 'Know who’s on the floor, in real time',
      body: 'See who’s clocked in across every department right now, and who was scheduled but hasn’t shown up. Managers only ever see their own department — enforced at the data level, not just hidden in the UI.',
    },
    demand: {
      title: 'Know your busy nights before they surprise you',
      body: 'Colour-coded demand levels and guest-count estimates, so you schedule against expected demand instead of guesswork — with live labour cost against your weekly budget.',
    },
    payroll: {
      title: 'Payroll that matches the schedule',
      body: 'Hours calculate from clock events with breaks and overnight shifts handled correctly. Approve a week and the period locks — so payroll never runs on data that’s still moving.',
    },
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Three steps, one afternoon',
    steps: [
      {
        title: 'Build the rota',
        body: 'Drag and drop the week per department, copy last week in one click, and watch projected labour cost as you go.',
      },
      {
        title: 'Staff clock in',
        body: 'GPS, rotating QR code, NFC card tap or Face ID — whichever fits your restaurant. Geofenced, so it only counts on-site.',
      },
      {
        title: 'Timesheets compute',
        body: 'Breaks, overnight shifts and pay structures are handled automatically. Approve, lock, export to Excel.',
      },
    ],
    imageAlt: 'Kitchen staff working a shift in a restaurant',
    storiesEyebrow: 'First customer',
    storiesBody:
      'We’re live with La Petite Auberge in Islington, London. Real quotes and results will live here as more restaurants come on board.',
    storiesCta: 'Become an early customer',
  },

  features: {
    eyebrow: 'Staff actually want to use it',
    titleLine1: 'A tool your team opens',
    titleLine2: 'without being asked',
    description:
      'Gamification, a friendly AI assistant, daily checklists and a genuinely pleasant mobile app — because restaurant staff live on their phones, not at a desk.',
    ranks: {
      title: 'Darajam ranks and points',
      body: 'Five levels from Yangi to Usta, earned through good attendance, punctuality and completed tasks. Redeeming a reward never costs someone their rank.',
    },
    assistant: {
      title: 'Ask Dono opa anything',
      body: 'A built-in AI assistant trained on your own menu, recipes and house rules — so staff get answers instantly instead of hunting down a manager mid-service.',
    },
    checklist: {
      title: 'Opening checklist, done right',
      body: 'Start, mid and end-of-shift templates with photo-required items and points on completion, targeted by department and role.',
    },
    languages: {
      title: 'Your kitchen, your languages',
      body: 'Not every member of staff is most comfortable in English. Tabelo lets each person use the app in Uzbek, Russian, or English — whatever they actually speak, regardless of what the rest of the team uses.',
      samples: [
        { code: 'UZ', label: "O'zbekcha", sample: 'Smenaga yozilish' },
        { code: 'RU', label: 'Русский', sample: 'Отметка на смене' },
        { code: 'EN', label: 'English', sample: 'Clock in to shift' },
      ],
    },
  },

  org: {
    eyebrow: 'Every layer of your team',
    title: 'One system, from owner to opening shift',
    body: 'Four default roles — Owner, Branch Manager, Department Manager, Staff — plus custom roles with granular permissions when you need finer control.',
    cta: 'Book a demo',
    pillars: [
      {
        title: 'Organisation → Branch → Department → Staff',
        body: 'Tabelo mirrors how a real restaurant is structured, not a generic company template. Kitchen, Floor, Hosts, Bar, Back of house — each with its own manager.',
      },
      {
        title: 'Hierarchy enforced, not implied',
        body: 'A Department Manager only sees their own department. Owners and Branch Managers see everything. Enforced at the data level, so nothing leaks.',
      },
      {
        title: 'Made for multi-site',
        body: 'Shared staff pool, per-site settings, GPS radius, clock method and currency — with one owner view across every location.',
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
        body: 'One site, a handful of departments and a manager who is also on the floor. Rota, clock-in and timesheets without a back-office team.',
        tags: ['Rota builder', 'GPS clock-in', 'Excel payroll export'],
      },
      {
        title: 'Multi-site groups',
        body: 'Shared staff pool across locations, per-site settings, and one owner view over every rota, cost and exception queue.',
        tags: ['Per-site settings', 'Owner overview', 'Site geofencing'],
      },
      {
        title: 'High-turnover teams',
        body: 'Onboarding, training modules and ranks that make a new starter productive fast — and give them a reason to stay past month three.',
        tags: ['Training modules', 'Darajam ranks', 'Checklists'],
      },
      {
        title: 'Compliance-minded operators',
        body: 'Built-in awareness of UK Working Time Regulations — soft warnings that help you stay on the right side of rest-break and working-hours rules, without ever blocking you from publishing a rota. You’re always in control.',
        tags: ['Working time rules', 'Audit trail', 'Period locking'],
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    description: 'Everything owners and managers ask us in the first demo call.',
    items: [
      {
        q: 'Does Tabelo work for a single independent restaurant, or only chains?',
        a: 'Both. Tabelo scales from a single site to multi-branch groups — most of our early customers are independent restaurants, not chains.',
      },
      {
        q: 'How do staff clock in?',
        a: 'GPS as standard, with rotating QR codes and NFC card tap available depending on your plan. Face ID and photo verification are also supported. Every site has its own configurable GPS radius, so clock-ins only register on-site.',
      },
      {
        q: 'What happens if someone forgets to clock out?',
        a: 'The shift closes automatically after a threshold you configure, and the entry is flagged for manager review in the exception queue rather than silently over- or under-paying anyone.',
      },
      {
        q: 'Can it handle shifts that cross midnight?',
        a: 'Yes. A 16:00–04:00 shift is handled correctly everywhere — duration, break allocation and pay — and shows a clear "+1" badge on the schedule so a late-night shift is never mistaken for an empty day.',
      },
      {
        q: 'Does the compliance feature block me from publishing a rota?',
        a: 'Never. Compliance in Tabelo is a soft nudge: it flags a possible rest-break or working-hours issue based on the UK Working Time Regulations 1998, but you stay in control of your own business.',
      },
      {
        q: 'Is there a mobile app?',
        a: 'Yes — iOS and Android, with an iOS home-screen widget for upcoming shifts. Clock-in, rota, checklists, requests, training and ranks all work from the phone in your pocket.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Priced around what you actually use',
    description:
      'Core features — rota, attendance, staff management and requests — are included for every business. Add-on modules are enabled as you need them.',
    scopeLabel: 'Business size',
    single: 'Single site',
    multi: 'Multi-site',
    singleNote: 'One monthly fee per restaurant.',
    multiNote: 'One organisation fee plus a per-site fee for each extra location.',
    mostPopular: 'Most popular',
    cta: 'Book a demo for pricing',
    plans: [
      {
        name: 'Start',
        clock: 'GPS clock-in',
        blurb: 'For a single restaurant getting off spreadsheets.',
        features: [
          'Drag-and-drop rota builder',
          'GPS clock-in with site geofencing',
          'Automated timesheets & Excel payroll export',
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
        blurb: 'For multi-site groups running on real numbers.',
        features: [
          'Everything in Grow',
          'Branded NFC counter card tap',
          'Custom roles with granular permissions',
          'Dono opa AI assistant (paid add-on)',
        ],
      },
    ],
  },

  finalCta: {
    eyebrow: 'Let’s get started',
    title: 'Get your next rota out of the group chat',
    body: 'A 30-minute call in English is all it takes to see if Tabelo fits your restaurant.',
    cta: 'Book a demo',
  },

  footer: {
    blurb:
      'Tabelo is workforce management for restaurants — rota, clock-in, timesheets, and payroll, all in one place.',
    updatesTitle: 'Get product updates',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    copyrightTemplate: '© {year} Bilig Labs. Tabelo is a Bilig Labs product.',
    locations: 'London · Multi-language staff support',
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
    branch: 'Islington site',
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
    pay: 'Pay (GBP)',
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
    currency: 'GBP',
    costValue: '4 180',
    payValues: ['460', '493', '393'],
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
