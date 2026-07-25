import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { notFound } from 'next/navigation'
import {
  allVariants,
  isLocale,
  isMarket,
  type Locale,
  type Market,
} from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n'
import '../../globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _manrope = Manrope({ subsets: ['latin'] })

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

  const dict = getDictionary(market, locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    generator: 'v0.app',
    icons: {
      icon: [
        { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF8F4',
}

export default async function MarketLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<Params>
}) {
  const { market, locale } = await params

  if (!isMarket(market) || !isLocale(locale)) notFound()

  return (
    <html lang={locale} className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

export type { Market, Locale }
