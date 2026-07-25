import { ArrowRight, Building2, Layers, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { Eyebrow } from '@/components/brand'
import type { Dictionary } from '@/lib/i18n'

const icons = [Layers, ShieldCheck, Building2]

export function OrgSection({ dict }: { dict: Dictionary }) {
  const t = dict.org

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 sm:px-12 sm:py-24">
        <Image
          src="/images/dark-texture.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink"
        />

        <div className="relative flex flex-col items-center gap-6 text-center">
          <Eyebrow tone="inverse">{t.eyebrow}</Eyebrow>
          <h2 className="max-w-2xl text-4xl leading-[1.05] font-semibold text-balance text-ink-foreground sm:text-6xl">
            {t.title}
          </h2>
          <p className="max-w-lg leading-relaxed text-pretty text-ink-foreground/70">
            {t.body}
          </p>
          <a
            href="#demo"
            className="mt-2 flex items-center gap-2 rounded-full bg-ink-foreground px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            {t.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
          {t.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? Layers
            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="grid size-10 place-items-center rounded-2xl bg-ink-foreground/10 text-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-ink-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-ink-foreground/60">
                  {pillar.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
