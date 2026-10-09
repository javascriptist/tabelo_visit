import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Logo } from '@/components/brand'
import { getDictionary } from '@/lib/i18n'
import { allVariants, isLocale, isMarket } from '@/lib/i18n/config'
import { BlockView } from '../privacy/policy-body'
import { TERMS, TERMS_EFFECTIVE_DATE } from './terms-content'

/**
 * Same shell as ../privacy/page.tsx. The body is English on every market and
 * locale — see terms-content.ts for why.
 */

type Params = { market: string; locale: string }

export function generateStaticParams() {
  return allVariants().map(({ market, locale }) => ({ market, locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { market, locale } = await params
  if (!isMarket(market) || !isLocale(locale)) return {}

  return {
    title: TERMS.metaTitle,
    description: TERMS.metaDescription,
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { market, locale } = await params
  if (!isMarket(market) || !isLocale(locale)) notFound()

  const dict = getDictionary(market, locale)
  const home = `/${locale}`

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-8">
        <Link href={home}>
          <Logo />
          <span className="sr-only">{dict.nav.home}</span>
        </Link>
        <Link
          href={home}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {TERMS.backHome}
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
        <div className="soft-card p-8 sm:p-12">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {TERMS.title}
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            {TERMS.effectiveDateLabel}: {TERMS_EFFECTIVE_DATE}
          </p>

          <div className="mt-8 space-y-8 text-[14.5px] leading-relaxed">
            {TERMS.sections.map((section, index) => (
              <section key={section.heading ?? `intro-${index}`}>
                {section.heading && (
                  <h2 className="mb-2 text-lg font-semibold">{section.heading}</h2>
                )}
                {section.blocks.map((block, blockIndex) => (
                  <BlockView key={blockIndex} block={block} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between text-xs text-muted-foreground">
          <p>
            {dict.footer.copyrightTemplate.replace(
              '{year}',
              String(new Date().getFullYear()),
            )}
          </p>
          <Link href={home} className="transition-colors hover:text-foreground">
            tabelo
          </Link>
        </div>
      </footer>
    </div>
  )
}
