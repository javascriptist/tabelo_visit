import { SectionHeading } from '@/components/brand'
import {
  DemandCalendarMock,
  LiveAttendanceMock,
  TimesheetMock,
} from '@/components/product-mocks'

export function BentoSection() {
  return (
    <section id="features" className="bg-muted/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14">
        <SectionHeading
          eyebrow="What makes Tabelo different"
          title={
            <>
              One system instead of five,
              <br className="hidden sm:block" /> built for your market
            </>
          }
          description="Rota, clock-in, timesheets, payroll and compliance help — replacing a patchwork of paper, Telegram groups and spreadsheets."
        />

        <div className="grid w-full gap-5 lg:grid-cols-2">
          <article className="soft-card flex flex-col gap-8 p-6 sm:p-8 lg:col-span-2 lg:flex-row lg:items-center">
            <div className="w-full max-w-md rounded-3xl bg-muted/70 p-4 sm:p-6">
              <LiveAttendanceMock />
            </div>
            <div className="flex max-w-md flex-col gap-3">
              <h3 className="text-2xl font-semibold">
                Know who&apos;s on the floor, in real time
              </h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                See who&apos;s clocked in across every department right now, and
                who was scheduled but hasn&apos;t shown up. Managers only ever
                see their own department — enforced at the data level, not just
                hidden in the UI.
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-4 sm:p-6">
              <DemandCalendarMock />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">
                Know your busy nights before they surprise you
              </h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                Colour-coded demand levels and guest-count estimates, so you
                schedule against expected demand instead of guesswork — with
                live labour cost against your weekly budget.
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-4 sm:p-6">
              <TimesheetMock />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">
                Payroll that matches the schedule
              </h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                Hours calculate from clock events with breaks and overnight
                shifts handled correctly. Approve a week and the period locks —
                so payroll never runs on data that&apos;s still moving.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
