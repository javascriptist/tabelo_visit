import { SectionHeading } from '@/components/brand'
import {
  ChecklistMock,
  DonoOpaMock,
  RankMock,
} from '@/components/product-mocks'

export function FeatureGrid() {
  return (
    <section className="bg-muted/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Staff actually want to use it"
          title={
            <>
              A tool your team opens
              <br className="hidden sm:block" /> without being asked
            </>
          }
          description="Gamification, a friendly AI assistant, daily checklists and a genuinely pleasant mobile app — because restaurant staff live on their phones, not at a desk."
        />

        <div className="grid w-full gap-5 md:grid-cols-2">
          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex justify-center rounded-3xl bg-muted/70 p-6">
              <RankMock />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Darajam ranks and points</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                Five levels from Yangi to Usta, earned through good attendance,
                punctuality and completed tasks. Redeeming a reward never costs
                someone their rank.
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-6">
              <DonoOpaMock />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Ask Dono opa anything</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                A built-in AI assistant trained on your own menu, recipes and
                house rules — so staff get answers instantly instead of hunting
                down a manager mid-service.
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="rounded-3xl bg-muted/70 p-6">
              <ChecklistMock />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                Opening checklist, done right
              </h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                Start, mid and end-of-shift templates with photo-required items
                and points on completion, targeted by department and role.
              </p>
            </div>
          </article>

          <article className="soft-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-3 rounded-3xl bg-muted/70 p-6">
              {[
                { code: 'UZ', label: "O'zbekcha", sample: 'Smenaga yozilish' },
                { code: 'RU', label: 'Русский', sample: 'Отметка на смене' },
                { code: 'EN', label: 'English', sample: 'Clock in to shift' },
              ].map((lang) => (
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
              <h3 className="text-xl font-semibold">
                Your whole team, in their own language
              </h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                Uzbek, Russian and English throughout the product — built in from
                the start, with a per-person language preference regardless of
                the business default.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
