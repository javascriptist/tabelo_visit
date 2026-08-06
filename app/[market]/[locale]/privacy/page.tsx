import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Logo } from '@/components/brand'
import { getDictionary } from '@/lib/i18n'
import { allVariants, isLocale, isMarket } from '@/lib/i18n/config'
import { PolicyBody } from './policy-body'
import { POLICIES, type PolicyLanguage } from './policy-content'

/**
 * Ported from tabelo_front/app/privacy/page.tsx onto this project's tokens and
 * brand components.
 *
 * The body lives in policy-content.ts in three languages and is switched
 * client-side — see policy-body.tsx for why it is one URL rather than three
 * routes. The UK market still almost certainly needs UK GDPR specifics
 * (lawful basis, ICO, international transfers) that no translation can
 * invent; that gap is unchanged by this.
 */

/**
 * The policy language a reader lands on. `ru` is not a site locale, so it is
 * never an initial value — a Russian speaker reaches it through the switcher.
 */
const policyLanguageFor = (locale: string): PolicyLanguage =>
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

  const policy = POLICIES[policyLanguageFor(locale)]
  return {
    title: policy.metaTitle,
    description: policy.metaDescription,
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { market, locale } = await params
  if (!isMarket(market) || !isLocale(locale)) notFound()

  const dict = getDictionary(market, locale)
  const policy = POLICIES[policyLanguageFor(locale)]
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
          {policy.backHome}
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
        <div className="soft-card p-8 sm:p-12">
          <PolicyBody initialLanguage={policyLanguageFor(locale)} />
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
