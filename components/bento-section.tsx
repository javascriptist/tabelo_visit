import { SectionHeading } from '@/components/brand'
import {
  DemandCalendarMock,
  LiveAttendanceMock,
  TimesheetMock,
} from '@/components/product-mocks'
import type { Dictionary } from '@/lib/i18n'

export function BentoSection({ dict }: { dict: Dictionary }) {
  const t = dict.bento

  return (
    <section id="features" className="bg-muted/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={
            <>
              {t.titleLine1}
              {t.titleLine2 ? (
                <>
                  <br className="hidden sm:block" /> {t.titleLine2}
                </>
              ) : null}
            </>
          }
          description={t.description}
        />

        <div className="grid w-full gap-5 lg:grid-cols-2">
          <article className="soft-card flex flex-col gap-8 p-6 sm:p-8 lg:col-span-2 lg:flex-row lg:items-center">
            <div className="w-full max-w-md rounded-3xl bg-muted/70 p-4 sm:p-6">
              <LiveAttendanceMock dict={dict} />
            </div>
            <div className="flex max-w-md flex-col gap-3">
              <h3 className="text-2xl font-semibold">{t.live.title}</h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                {t.live.body}
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-4 sm:p-6">
              <DemandCalendarMock dict={dict} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">{t.demand.title}</h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                {t.demand.body}
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-4 sm:p-6">
              <TimesheetMock dict={dict} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">{t.payroll.title}</h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                {t.payroll.body}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
