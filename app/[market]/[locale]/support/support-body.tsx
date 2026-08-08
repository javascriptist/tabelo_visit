'use client'

import { useState } from 'react'

import {
  CONTACT_EMAIL,
  SUPPORT,
  SUPPORT_LANGUAGE_NAMES,
  SUPPORT_LANGUAGES,
  type Block,
  type SupportLanguage,
} from './support-content'

/**
 * Same reasoning as PolicyBody in ../privacy: one URL with a language
 * switcher rather than a `ru` route, since a `ru` route would mean adding
 * Russian to marketLocales, which governs the whole marketing site's
 * deliberately-deferred Russian copy. This page's audience is staff-app
 * users specifically, not general site visitors.
 */
export function SupportBody({
  initialLanguage,
  privacyHref,
}: {
  initialLanguage: SupportLanguage
  privacyHref: string
}) {
  const [language, setLanguage] = useState<SupportLanguage>(initialLanguage)
  const support = SUPPORT[language]

  return (
    <>
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        {support.title}
      </h1>

      <div className="mt-5 flex flex-wrap gap-2" role="group">
        {SUPPORT_LANGUAGES.map((code) => {
          const active = code === language
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              aria-pressed={active}
              className={
                active
                  ? 'rounded-full bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background'
                  : 'rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground'
              }
            >
              {SUPPORT_LANGUAGE_NAMES[code]}
            </button>
          )
        })}
      </div>

      <p className="mt-6 text-[14.5px] leading-relaxed text-muted-foreground">
        {support.intro}
      </p>

      <div className="mt-8 space-y-8 text-[14.5px] leading-relaxed">
        {support.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 text-lg font-semibold">{section.heading}</h2>
            <div className="space-y-4">
              {section.blocks.map((block, index) => (
                <BlockView key={index} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-6 text-[14.5px]">
        <p className="text-muted-foreground">
          {support.contactLabel}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mt-2">
          <a href={privacyHref} className="text-primary underline">
            {support.privacyLinkLabel}
          </a>
        </p>
      </div>
    </>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p':
      return <p className="text-muted-foreground">{block.text}</p>

    case 'faq':
      return (
        <div className="soft-card border border-border/60 p-4">
          <p className="font-medium">{block.question}</p>
          <p className="mt-1.5 text-muted-foreground">{block.answer}</p>
        </div>
      )

    case 'contact':
      return (
        <p className="text-muted-foreground">
          {block.before}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
            {CONTACT_EMAIL}
          </a>
          {block.after}
        </p>
      )
  }
}
