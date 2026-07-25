import { SectionHeading } from '@/components/brand'
import {
  ChecklistMock,
  DonoOpaMock,
  RankMock,
} from '@/components/product-mocks'
import type { Dictionary } from '@/lib/i18n'

export function FeatureGrid({ dict }: { dict: Dictionary }) {
  const t = dict.features

  return (
    <section className="bg-muted/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={
            <>
              {t.titleLine1}
              <br className="hidden sm:block" /> {t.titleLine2}
            </>
          }
          description={t.description}
        />

        <div className="grid w-full gap-5 md:grid-cols-2">
          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex justify-center rounded-3xl bg-muted/70 p-6">
              <RankMock dict={dict} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{t.ranks.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {t.ranks.body}
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-6">
              <DonoOpaMock dict={dict} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{t.assistant.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {t.assistant.body}
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-6">
              <ChecklistMock dict={dict} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{t.checklist.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {t.checklist.body}
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-3 rounded-3xl bg-muted/70 p-6">
              {t.languages.samples.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-[11px] font-semibold text-primary">
                    {lang.code}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium">{lang.label}</p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {lang.sample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{t.languages.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {t.languages.body}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
