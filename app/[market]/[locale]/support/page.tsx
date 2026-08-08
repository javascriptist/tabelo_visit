import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Logo } from '@/components/brand'
import { getDictionary } from '@/lib/i18n'
import { allVariants, isLocale, isMarket } from '@/lib/i18n/config'
import { SupportBody } from './support-body'
import { SUPPORT, type SupportLanguage } from './support-content'

/**
 * Modelled on ../privacy/page.tsx: this is the Support URL App Store Connect
 * requires and links to from app reviews, and the same staff-app audience
 * that needs the privacy policy in their own language needs help in it too.
 * See support-body.tsx for why it is one URL with a switcher.
 */

/** `ru` is not a site locale, so it is never an initial value — reached via the switcher. */
const supportLanguageFor = (locale: string): SupportLanguage =>
  locale === 'uz' ? 'uz' : 'en'

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

  const support = SUPPORT[supportLanguageFor(locale)]
  return {
    title: support.metaTitle,
    description: support.metaDescription,
  }
}

export default async function SupportPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { market, locale } = await params
  if (!isMarket(market) || !isLocale(locale)) notFound()

  const dict = getDictionary(market, locale)
  const support = SUPPORT[supportLanguageFor(locale)]
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
          {support.backHome}
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
        <div className="soft-card p-8 sm:p-12">
          <SupportBody
            initialLanguage={supportLanguageFor(locale)}
            privacyHref={`/${market}/${locale}/privacy`}
          />
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
