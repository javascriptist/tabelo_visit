'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Eyebrow } from '@/components/brand'
import type { Dictionary } from '@/lib/i18n'

export function Customers({ dict }: { dict: Dictionary }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const t = dict.customers

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <section id="customers" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="max-w-xl text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
              {t.titleLine1}
              <br className="hidden sm:block" /> {t.titleLine2}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label={t.previous}
              className="grid size-12 place-items-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-muted"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label={t.next}
              className="grid size-12 place-items-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-muted"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {t.cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[320px] w-[85%] shrink-0 snap-start flex-col justify-between gap-8 rounded-3xl bg-secondary p-6 sm:w-[46%] sm:p-8 lg:w-[31%]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-balance">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {card.body}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
