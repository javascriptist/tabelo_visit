'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/brand'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Start',
    clock: 'GPS clock-in',
    blurb: 'For a single restaurant getting off paper.',
    features: [
      'Drag-and-drop rota builder',
      'GPS clock-in with branch geofencing',
      'Automated timesheets & Excel payroll export',
      'Day-off requests and approvals',
    ],
  },
  {
    name: 'Grow',
    clock: 'GPS + rotating QR',
    blurb: 'For busy kitchens that need tighter attendance.',
    featured: true,
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
      'Branded NFC counter card tap',
      'Custom roles with granular permissions',
      'Dono opa AI assistant (paid add-on)',
    ],
  },
]

export function Pricing() {
  const [scope, setScope] = useState<'single' | 'multi'>('single')

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Priced around what you actually use"
          description="Core features — rota, attendance, staff management and requests — are included for every business. Add-on modules are enabled as you need them."
        />

        <div
          role="tablist"
          aria-label="Business size"
          className="flex items-center gap-1 rounded-full bg-muted p-1"
        >
          {(
            [
              { id: 'single', label: 'Single branch' },
              { id: 'multi', label: 'Multi-branch' },
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
          {scope === 'single'
            ? 'One monthly fee per restaurant.'
            : 'One organisation fee plus a per-branch fee for each extra location.'}
        </p>

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'flex flex-col gap-6 rounded-3xl p-6 sm:p-8',
                plan.featured
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    'rounded-full px-3 py-1.5 text-xs font-medium',
                    plan.featured
                      ? 'bg-primary-foreground/15 text-primary-foreground'
                      : 'bg-card text-muted-foreground',
                  )}
                >
                  {plan.name}
                </span>
                {plan.featured ? (
                  <span className="rounded-full bg-gold px-3 py-1.5 text-xs font-medium text-ink">
                    Most popular
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
                    plan.featured
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
                        plan.featured ? 'text-gold' : 'text-sage',
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        'leading-relaxed',
                        plan.featured
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
                  plan.featured
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-card text-foreground',
                )}
              >
                Book a demo for pricing
                <span
                  className={cn(
                    'grid size-9 place-items-center rounded-full',
                    plan.featured
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary text-primary-foreground',
                  )}
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
