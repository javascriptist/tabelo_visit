import { CalendarDays, Nfc, Wallet } from 'lucide-react'
import Image from 'next/image'
import { Eyebrow } from '@/components/brand'
import { ClockInMock } from '@/components/product-mocks'
import type { Dictionary } from '@/lib/i18n'

const icons = [CalendarDays, Nfc, Wallet]

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const t = dict.howItWorks

  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.1fr_1fr]">
        <div className="soft-card flex flex-col justify-between gap-10 p-6 sm:p-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="max-w-md text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <ol className="flex flex-col gap-6">
            {t.steps.map((step, i) => {
              const Icon = icons[i] ?? CalendarDays
              return (
                <li key={step.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold">
                      <span className="mr-2 text-muted-foreground">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative min-h-[400px] flex-1">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image
                src="/images/bourdaincooking.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="absolute bottom-5 right-5 hidden w-[196px] rounded-3xl bg-card/85 p-1.5 shadow-[0_20px_44px_-16px_rgba(25,25,35,0.45)] backdrop-blur sm:block">
              <ClockInMock dict={dict} className="max-w-none p-4" />
            </div>
          </div>

          <div className="soft-card flex flex-col gap-4 p-6 sm:p-8">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {t.storiesEyebrow}
            </p>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              {t.storiesBody}
            </p>
            <a
              href="#demo"
              className="w-fit rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
            >
              {t.storiesCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
