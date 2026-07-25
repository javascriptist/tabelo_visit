import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/brand'
import {
  ChecklistMock,
  DemandCalendarMock,
  TimesheetMock,
} from '@/components/product-mocks'

export function FinalCta() {
  return (
    <section className="px-4 pb-10 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-primary/12 via-accent/8 to-background px-6 pt-16 pb-0 sm:px-12 sm:pt-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Let&apos;s get started</Eyebrow>
          <h2 className="max-w-2xl text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
            Get your next rota out of the group chat
          </h2>
          <p className="max-w-lg leading-relaxed text-pretty text-muted-foreground">
            A 30-minute demo in Uzbek, Russian or English. We&apos;ll set up your
            branches and departments with you and show pricing for your size of
            business.
          </p>
          <a
            href="#demo"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a demo
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div
          aria-hidden="true"
          className="mt-14 grid max-h-[280px] grid-cols-1 gap-4 overflow-hidden opacity-90 [mask-image:linear-gradient(to_bottom,black,transparent)] sm:grid-cols-3"
        >
          <DemandCalendarMock />
          <TimesheetMock />
          <ChecklistMock />
        </div>
      </div>
    </section>
  )
}
