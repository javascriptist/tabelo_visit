import { defaultLocale, type Locale, type Market } from './config'
import { ukEn } from './dictionaries/uk-en'
import { uzEn } from './dictionaries/uz-en'
import { uzUz } from './dictionaries/uz-uz'
import type { Dictionary } from './types'

/**
 * Content is keyed by (market, locale). A missing pair falls back to the
 * market's default locale — never to the other market, which would leak the
 * wrong pain points, currency and compliance regime across the split.
 */
const content: Record<Market, Partial<Record<Locale, Dictionary>>> = {
  uk: { en: ukEn },
  uz: { uz: uzUz, en: uzEn },
  // `ru` is deliberately absent until a native Russian pass lands.
}

export function getDictionary(market: Market, locale: Locale): Dictionary {
  const forMarket = content[market]
  const dict = forMarket[locale] ?? forMarket[defaultLocale[market]]

  if (!dict) {
    throw new Error(`No dictionary for market "${market}"`)
  }

  return dict
}

export function hasDictionary(market: Market, locale: Locale): boolean {
  return Boolean(content[market][locale])
}

export type { Dictionary }
