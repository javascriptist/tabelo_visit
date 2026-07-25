import Image from 'next/image'
import { ArrowRight, Fingerprint } from 'lucide-react'
import { Eyebrow } from '@/components/brand'
import { RotaMock } from '@/components/product-mocks'

export function Hero() {
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
          <Eyebrow>Workforce management for restaurants</Eyebrow>

          <h1 className="max-w-xl font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl">
            Rota, clock-in and payroll — in one place, in your language.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
            Stop running your restaurant&apos;s schedule on paper and Telegram.
            Tabelo replaces spreadsheets, group chats and manual payroll math
            with one system your whole team actually uses.
          </p>

          <form
            id="demo"
            className="flex w-full max-w-md flex-col gap-2 rounded-full bg-card p-1.5 shadow-[0_2px_4px_rgba(74,59,140,0.04),0_14px_32px_-12px_rgba(74,59,140,0.18)] sm:flex-row sm:items-center"
          >
            <label htmlFor="hero-email" className="sr-only">
              Work email
            </label>
            <input
              id="hero-email"
              type="email"
              required
              placeholder="Your work email"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <li>Uzbek · Russian · English</li>
            <li aria-hidden="true">·</li>
            <li>GPS, QR &amp; NFC clock-in</li>
            <li aria-hidden="true">·</li>
            <li>iOS &amp; Android</li>
          </ul>
        </div>

        {/* Product mock cluster */}
        <div className="relative">
          <div className="rounded-3xl bg-card/70 p-2 shadow-[0_2px_4px_rgba(74,59,140,0.04),0_30px_60px_-24px_rgba(74,59,140,0.28)] backdrop-blur">
            <RotaMock />
          </div>

          <div className="animate-float-soft absolute -bottom-10 -left-6 hidden items-center gap-3 rounded-full bg-card py-2.5 pr-5 pl-2.5 shadow-[0_18px_40px_-16px_rgba(74,59,140,0.3)] sm:flex">
            <span className="grid size-9 place-items-center rounded-full bg-sage/12 text-sage">
              <Fingerprint className="size-4" aria-hidden="true" />
            </span>
            <span className="text-xs">
              <span className="font-semibold">Bekzod T. clocked in</span>
              <span className="ml-1.5 text-muted-foreground">08:02 · NFC</span>
            </span>
          </div>

          <div className="absolute -top-6 -right-3 hidden rounded-2xl bg-card px-4 py-3 shadow-[0_16px_36px_-14px_rgba(74,59,140,0.3)] md:block">
            <p className="text-[10px] text-muted-foreground">Exception queue</p>
            <p className="font-display text-lg font-semibold">
              2{' '}
              <span className="text-sm font-medium text-muted-foreground">
                to review
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
