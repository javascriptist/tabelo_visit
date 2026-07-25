/**
 * Two markets, not one site in three languages.
 *
 * Copy is forked by market — pain points, currency, compliance regime and
 * social proof are deliberately NOT shared (a Telegram reference must never
 * reach a UK reader, and vice versa). Language selection lives *inside* the
 * uz market; the uk market is English-only with no switcher.
 */

export const markets = ['uk', 'uz'] as const
export type Market = (typeof markets)[number]

export const locales = ['en', 'uz', 'ru'] as const
export type Locale = (typeof locales)[number]

/** Locales actually shipped per market. `ru` is intentionally absent until a
 *  native Russian pass lands — see lib/i18n/README.md. */
export const marketLocales: Record<Market, readonly Locale[]> = {
  uk: ['en'],
  uz: ['uz', 'en'],
}

export const defaultLocale: Record<Market, Locale> = {
  uk: 'en',
  uz: 'uz',
}

/** The uk market serves one language, so it needs no locale prefix at all. */
export const marketHasSwitcher: Record<Market, boolean> = {
  uk: false,
  uz: true,
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  uz: "O'zbekcha",
  ru: 'Русский',
}

/** Hosts ending in these suffixes are the UK market. Everything else — including
 *  tabelo.uz, localhost and preview deployments — is the uz market. */
const UK_HOST_SUFFIXES = ['.co', '.uk']

export function marketForHost(host: string): Market {
  // strip port, normalise
  const hostname = host.split(':')[0].toLowerCase().replace(/\.$/, '')
  return UK_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix))
    ? 'uk'
    : 'uz'
}

export function isMarket(value: string): value is Market {
  return (markets as readonly string[]).includes(value)
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Every (market, locale) pair that gets statically prerendered. */
export function allVariants(): { market: Market; locale: Locale }[] {
  return markets.flatMap((market) =>
    marketLocales[market].map((locale) => ({ market, locale })),
  )
}
