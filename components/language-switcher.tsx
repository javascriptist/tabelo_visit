'use client'

import Link from 'next/link'
import { localeNames, type Locale, type Market, marketLocales } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

/**
 * Only rendered for markets that ship more than one locale — the uk market has
 * no switcher at all, decided server-side by the market rewrite rather than in
 * the browser, so no other market's copy is ever sent to a visitor.
 *
 * Public hrefs are locale-prefixed (`/uz`, `/en`); the market segment is
 * internal and added by middleware.
 */
export function LanguageSwitcher({
  market,
  locale,
  label,
  className,
}: {
  market: Market
  locale: Locale
  label: string
  className?: string
}) {
  const available = marketLocales[market]

  if (available.length < 2) return null

  return (
    <div
      aria-label={label}
      className={cn(
        'hidden items-center gap-0.5 rounded-full bg-muted p-0.5 sm:flex',
        className,
      )}
    >
      {available.map((code) => {
        const active = code === locale
        return (
          <Link
            key={code}
            href={`/${code}`}
            hrefLang={code}
            aria-current={active ? 'true' : undefined}
            title={localeNames[code]}
            className={cn(
              'rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors',
              active
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {code.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}
