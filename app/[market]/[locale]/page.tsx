import { notFound } from 'next/navigation'
import { BentoSection } from '@/components/bento-section'
import { Customers } from '@/components/customers'
import { Faq } from '@/components/faq'
import { FeatureGrid } from '@/components/feature-grid'
import { FinalCta } from '@/components/final-cta'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { OrgSection } from '@/components/org-section'
import { Pricing } from '@/components/pricing'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { getDictionary } from '@/lib/i18n'
import { isLocale, isMarket } from '@/lib/i18n/config'

export default async function Page({
  params,
}: {
  params: Promise<{ market: string; locale: string }>
}) {
  const { market, locale } = await params

  if (!isMarket(market) || !isLocale(locale)) notFound()

  const dict = getDictionary(market, locale)

  return (
    <div className="min-h-screen bg-background">
      <SiteNav dict={dict} market={market} locale={locale} />
      <main>
        <Hero dict={dict} />
        <BentoSection dict={dict} />
        <HowItWorks dict={dict} />
        <FeatureGrid dict={dict} />
        <OrgSection dict={dict} />
        <Customers dict={dict} />
        <Faq dict={dict} />
        <Pricing dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
