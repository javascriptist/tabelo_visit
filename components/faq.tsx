'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/brand'

const faqs = [
  {
    q: 'Does Tabelo work in Uzbek and Russian?',
    a: 'Yes — Uzbek, Russian and English are built into the product from the start, not bolted on afterwards. Each person picks their own language, regardless of what the business default is set to.',
  },
  {
    q: 'How do staff clock in?',
    a: 'GPS as standard, with rotating QR codes and NFC card tap available depending on your plan. Face ID and photo verification are also supported. Every branch has its own configurable GPS radius, so clock-ins only register on-site.',
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
    a: 'Never. Compliance in Tabelo is a soft nudge: it flags a possible rest-period or hours issue based on the 2022 Uzbek Labour Code, but you stay in control of your own business.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'Yes — iOS and Android, with an iOS home-screen widget for upcoming shifts. Clock-in, rota, checklists, requests, training and ranks all work from the phone in your pocket.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-muted/70 px-4 py-16 sm:px-10 sm:py-24">
        <div className="flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything owners and managers ask us in the first demo call."
          />

          <ul className="flex w-full max-w-3xl flex-col gap-3">
            {faqs.map((faq, i) => {
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
