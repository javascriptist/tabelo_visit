'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/brand'
import type { Dictionary } from '@/lib/i18n'

export function Faq({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0)
  const t = dict.faq

  return (
    <section id="faq" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-muted/70 px-4 py-16 sm:px-10 sm:py-24">
        <div className="flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />

          <ul className="flex w-full max-w-3xl flex-col gap-3">
            {t.items.map((faq, i) => {
              const isOpen = open === i
              return (
                <li key={faq.q} className="overflow-hidden rounded-3xl bg-card">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7"
                    >
                      <span className="font-display text-base font-semibold sm:text-lg">
                        {faq.q}
                      </span>
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-foreground">
                        {isOpen ? (
                          <Minus className="size-4" aria-hidden="true" />
                        ) : (
                          <Plus className="size-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  {isOpen ? (
                    <p className="px-5 pb-6 text-sm leading-relaxed text-pretty text-muted-foreground sm:px-7">
                      {faq.a}
                    </p>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
