import { CalendarDays, Nfc, Wallet } from 'lucide-react'
import Image from 'next/image'
import { Eyebrow } from '@/components/brand'
import { ClockInMock } from '@/components/product-mocks'

const steps = [
  {
    icon: CalendarDays,
    title: 'Build the rota',
    body: 'Drag and drop the week per department, copy last week in one click, and watch projected labour cost as you go.',
  },
  {
    icon: Nfc,
    title: 'Staff clock in',
    body: 'GPS, rotating QR code, NFC card tap or Face ID — whichever fits your branch. Geofenced, so it only counts on-site.',
  },
  {
    icon: Wallet,
    title: 'Timesheets compute',
    body: 'Breaks, overnight shifts and pay structures are handled automatically. Approve, lock, export to Excel.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.1fr_1fr]">
        <div className="soft-card flex flex-col justify-between gap-10 p-6 sm:p-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="max-w-md text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
              Three steps, one afternoon
            </h2>
          </div>

          <ol className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
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
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative min-h-[400px] flex-1">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image
                src="/images/bourdaincooking.jpg"
                alt="Kitchen staff working a shift in a restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="absolute bottom-5 right-5 hidden w-[196px] rounded-3xl bg-card/85 p-1.5 shadow-[0_20px_44px_-16px_rgba(25,25,35,0.45)] backdrop-blur sm:block">
              <ClockInMock className="max-w-none p-4" />
            </div>
          </div>

          <div className="soft-card flex flex-col gap-4 p-6 sm:p-8">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Customer stories
            </p>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              We&apos;re onboarding our first restaurants right now — in Tashkent
              and in Islington, London. Real quotes and names will live here once
              they&apos;re ready to be named.
            </p>
            <a
              href="#demo"
              className="w-fit rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
            >
              Become an early customer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
