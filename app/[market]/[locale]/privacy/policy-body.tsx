'use client'

import { useState } from 'react'

import {
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
  POLICIES,
  POLICY_LANGUAGE_NAMES,
  POLICY_LANGUAGES,
  type Block,
  type PolicyLanguage,
} from './policy-content'

/**
 * All three language versions ship in the page and a tab switches between
 * them, rather than each living at its own URL.
 *
 * The alternative was a `ru` route, which would mean adding Russian to
 * `marketLocales` — and that governs the whole marketing site, whose Russian
 * copy the team has deliberately deferred. The policy is the part a staff
 * member has a right to read in their own language; the landing page is not.
 * One URL also keeps every variant prerendered and keeps the link in the
 * mobile app a constant.
 */
export function PolicyBody({ initialLanguage }: { initialLanguage: PolicyLanguage }) {
  const [language, setLanguage] = useState<PolicyLanguage>(initialLanguage)
  const policy = POLICIES[language]

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          {policy.title}
        </h1>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        {policy.effectiveDateLabel}: {EFFECTIVE_DATE}
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="group">
        {POLICY_LANGUAGES.map((code) => {
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
              {POLICY_LANGUAGE_NAMES[code]}
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">{policy.authoritativeNote}</p>

      <div className="mt-8 space-y-8 text-[14.5px] leading-relaxed">
        {policy.sections.map((section, index) => (
          <section key={section.heading ?? `intro-${index}`}>
            {section.heading && (
              <h2 className="mb-2 text-lg font-semibold">{section.heading}</h2>
            )}
            {section.blocks.map((block, blockIndex) => (
              <BlockView key={blockIndex} block={block} />
            ))}
          </section>
        ))}
      </div>
    </>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'lead':
      return <p className="mb-3 font-medium">{block.text}</p>

    case 'p':
      return <p className="mb-3 text-muted-foreground last:mb-0">{block.text}</p>

    case 'ul':
      return (
        <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
          {block.items.map((item, index) => (
            <li key={index}>
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  <span className="font-medium text-foreground">{item.term}</span>
                  {' — '}
                  {item.text}
                </>
              )}
            </li>
          ))}
        </ul>
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
