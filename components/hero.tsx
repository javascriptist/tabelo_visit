import { ArrowRight, Fingerprint } from 'lucide-react'
import Image from 'next/image'
import { Eyebrow } from '@/components/brand'
import { RotaMock } from '@/components/product-mocks'
import type { Dictionary } from '@/lib/i18n'

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero

  return (
    <section id="top" className="relative overflow-hidden px-4 pt-14 pb-28 sm:px-6 sm:pt-20 sm:pb-36">
      {/* Soft indigo wash behind the product mock. The box is narrower than the
          asset's aspect ratio, so object-cover crops into the glow on its right
          edge rather than shrinking the whole frame down to a faint sliver.
          The radial mask dissolves every box edge into the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[760px] w-[62%] [mask-image:radial-gradient(115%_95%_at_100%_28%,black_38%,transparent_78%)] sm:w-[52%]"
      >
        <Image
          src="/images/hero.avif"
          alt=""
          fill
          priority
          sizes="(min-width: 640px) 52vw, 62vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>{t.eyebrow}</Eyebrow>

          <h1 className="max-w-xl font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl">
            {t.titleLine1}
            <br className="hidden sm:block" /> {t.titleLine2}
          </h1>

          <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
            {t.body}
          </p>

          <form
            id="demo"
            className="flex w-full max-w-md flex-col gap-2 rounded-full bg-card p-1.5 shadow-[0_2px_4px_rgba(74,59,140,0.04),0_14px_32px_-12px_rgba(74,59,140,0.18)] sm:flex-row sm:items-center"
          >
            <label htmlFor="hero-email" className="sr-only">
              {t.emailLabel}
            </label>
            <input
              id="hero-email"
              type="email"
              required
              placeholder={t.emailPlaceholder}
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.submit}
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>

          {/* No interpunct separators: the badge strings differ per market and
              wrap at different points, which would orphan a leading "·" at the
              start of a line. Gap alone reads cleanly at every width. */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {t.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        {/* Product mock cluster */}
        <div className="relative">
          <div className="rounded-3xl bg-card/70 p-2 shadow-[0_2px_4px_rgba(74,59,140,0.04),0_30px_60px_-24px_rgba(74,59,140,0.28)] backdrop-blur">
            <RotaMock dict={dict} />
          </div>

          <div className="animate-float-soft absolute -bottom-10 -left-6 hidden items-center gap-3 rounded-full bg-card py-2.5 pr-5 pl-2.5 shadow-[0_18px_40px_-16px_rgba(74,59,140,0.3)] sm:flex">
            <span className="grid size-9 place-items-center rounded-full bg-sage/12 text-sage">
              <Fingerprint className="size-4" aria-hidden="true" />
            </span>
            <span className="text-xs">
              <span className="font-semibold">{t.clockedIn}</span>
              <span className="ml-1.5 text-muted-foreground">
                {t.clockedInMeta}
              </span>
            </span>
          </div>

          {/* Sits clear of the rota card's own header badge — translated labels
              are wider than the English ones and used to collide with it. */}
          <div className="absolute -top-16 -right-3 hidden max-w-[220px] rounded-2xl bg-card px-4 py-3 shadow-[0_16px_36px_-14px_rgba(74,59,140,0.3)] md:block">
            <p className="text-[10px] text-muted-foreground">
              {t.exceptionQueue}
            </p>
            <p className="font-display text-lg font-semibold">
              2{' '}
              <span className="text-sm font-medium text-muted-foreground">
                {t.toReview}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
