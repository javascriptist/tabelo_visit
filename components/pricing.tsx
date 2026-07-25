'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/brand'
import type { Dictionary } from '@/lib/i18n'
import { cn } from '@/lib/utils'


export function Pricing({ dict }: { dict: Dictionary }) {
  const [scope, setScope] = useState<'single' | 'multi'>('single')
  const t = dict.pricing

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div
          role="tablist"
          aria-label={t.scopeLabel}
          className="flex items-center gap-1 rounded-full bg-muted p-1"
        >
          {(
            [
              { id: 'single', label: t.single },
              { id: 'multi', label: t.multi },
            ] as const
          ).map((opt) => (
            <button
              key={opt.id}
              role="tab"
              type="button"
              aria-selected={scope === opt.id}
              onClick={() => setScope(opt.id)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                scope === opt.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <p className="-mt-6 text-sm text-muted-foreground">
          {scope === 'single' ? t.singleNote : t.multiNote}
        </p>

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {t.plans.map((plan, planIndex) => {
            const featured = planIndex === 1
            return (
            <article
              key={plan.name}
              className={cn(
                'flex flex-col gap-6 rounded-3xl p-6 sm:p-8',
                featured
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    'rounded-full px-3 py-1.5 text-xs font-medium',
                    featured
                      ? 'bg-primary-foreground/15 text-primary-foreground'
                      : 'bg-card text-muted-foreground',
                  )}
                >
                  {plan.name}
                </span>
                {featured ? (
                  <span className="rounded-full bg-gold px-3 py-1.5 text-xs font-medium text-ink">
                    {t.mostPopular}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-display text-3xl font-semibold">
                  {plan.clock}
                </p>
                <p
                  className={cn(
                    'text-sm',
                    featured
                      ? 'text-primary-foreground/70'
                      : 'text-muted-foreground',
                  )}
                >
                  {plan.blurb}
                </p>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        'mt-0.5 size-4 shrink-0',
                        featured ? 'text-gold' : 'text-sage',
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        'leading-relaxed',
                        featured
                          ? 'text-primary-foreground/85'
                          : 'text-muted-foreground',
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={cn(
                  'flex items-center justify-between gap-3 rounded-full py-2 pr-2 pl-5 text-sm font-medium transition-opacity hover:opacity-90',
                  featured
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-card text-foreground',
                )}
              >
                {t.cta}
                <span
                  className={cn(
                    'grid size-9 place-items-center rounded-full',
                    featured
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary text-primary-foreground',
                  )}
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
