/** The content contract every (market, locale) variant must satisfy. */
export type Dictionary = {
  meta: { title: string; description: string }

  nav: {
    home: string
    openMenu: string
    closeMenu: string
    login: string
    bookDemo: string
    languageLabel: string
    links: { label: string; href: string }[]
  }

  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    body: string
    emailLabel: string
    emailPlaceholder: string
    submit: string
    badges: string[]
    clockedIn: string
    clockedInMeta: string
    exceptionQueue: string
    toReview: string
  }

  bento: {
    eyebrow: string
    titleLine1: string
    titleLine2: string | null
    description: string
    live: { title: string; body: string }
    demand: { title: string; body: string }
    payroll: { title: string; body: string }
  }

  howItWorks: {
    eyebrow: string
    title: string
    steps: { title: string; body: string }[]
    imageAlt: string
    storiesEyebrow: string
    storiesBody: string
    storiesCta: string
  }

  features: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    description: string
    ranks: { title: string; body: string }
    assistant: { title: string; body: string }
    checklist: { title: string; body: string }
    languages: {
      title: string
      body: string
      samples: { code: string; label: string; sample: string }[]
    }
  }

  org: {
    eyebrow: string
    title: string
    body: string
    cta: string
    pillars: { title: string; body: string }[]
  }

  customers: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    previous: string
    next: string
    cards: { title: string; body: string; tags: string[] }[]
  }

  faq: {
    eyebrow: string
    title: string
    description: string
    items: { q: string; a: string }[]
  }

  pricing: {
    eyebrow: string
    title: string
    description: string
    scopeLabel: string
    single: string
    multi: string
    singleNote: string
    multiNote: string
    mostPopular: string
    cta: string
    plans: {
      name: string
      clock: string
      blurb: string
      features: string[]
    }[]
  }

  finalCta: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }

  footer: {
    blurb: string
    updatesTitle: string
    emailLabel: string
    emailPlaceholder: string
    subscribe: string
    /** Contains a literal {year} placeholder — the whole dictionary crosses the
     *  server/client boundary, so this must stay serialisable (no functions). */
    copyrightTemplate: string
    locations: string
    columns: { title: string; links: string[] }[]
  }

  /**
   * Illustrative product-mock chrome. Currency and the money figures differ by
   * market — UZS amounts must never appear on the UK site, and vice versa.
   */
  mocks: {
    rotaTitle: string
    branch: string
    onBudget: string
    projectedCost: string
    whosIn: string
    live: string
    demandTitle: string
    demandLevels: string
    demandNote: string
    timesheetTitle: string
    approvedLocked: string
    payrollReady: string
    staff: string
    hours: string
    pay: string
    checklistTitle: string
    checklistMeta: string
    goodMorning: string
    todaysShift: string
    shiftTime: string
    swipeToClockIn: string
    donoOpa: string
    rankLabel: string
    rankName: string
    /** Seven short day labels, Monday first. */
    days: string[]
    /** Department labels used across the rota and attendance mocks. */
    depts: { floor: string; kitchen: string; hosts: string; bar: string }
    expectedPrefix: string
    currency: string
    costValue: string
    /** Three pay figures, aligned to the three timesheet rows. */
    payValues: string[]
    clockInName: string
    chips: string[]
    rankPoints: string
    rankTarget: string
    shiftStrength: string
    /** Dono opa sample exchange — shown in the staff's own language. */
    chat: { question: string; answer: string }
    checklistItems: string[]
    photoBadge: string
  }
}
