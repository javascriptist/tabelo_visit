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

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <BentoSection />
        <HowItWorks />
        <FeatureGrid />
        <OrgSection />
        <Customers />
        <Faq />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
