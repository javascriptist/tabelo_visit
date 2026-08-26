import { type NextRequest, NextResponse } from 'next/server'
import {
  defaultLocale,
  isLocale,
  marketForHost,
  marketHasSwitcher,
  marketLocales,
} from '@/lib/i18n/config'

/**
 * Maps the request host onto a market, then rewrites to the internal
 * /{market}/{locale} route. Public URLs stay clean:
 *
 *   tabelo.co/          -> /uk/en      (English only, no locale prefix)
 *   tabelo.uz/          -> redirect to /uz
 *   tabelo.uz/uz        -> /uz/uz
 *   tabelo.uz/en        -> /uz/en
 *
 * Rewriting (not redirecting) keeps each domain on its own copy without ever
 * shipping the other market's text, and every variant stays prerendered.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') ?? ''
  const market = marketForHost(host)

  // Single-language market: everything serves the one variant, and any stray
  // locale prefix is redirected away so only one URL is canonical.
  if (!marketHasSwitcher[market]) {
    const locale = defaultLocale[market]
    const segment = pathname.split('/')[1]

    // Strip a stray locale prefix but keep the page: /uz/privacy -> /privacy.
    if (segment && isLocale(segment)) {
      const rest = pathname.slice(segment.length + 1) || '/'
      return NextResponse.redirect(new URL(rest, request.url))
    }

    return NextResponse.rewrite(
      new URL(`/${market}/${locale}${pathname === '/' ? '' : pathname}`, request.url),
    )
  }

  // Multi-language market: the first segment selects the locale.
  const segment = pathname.split('/')[1]

  if (!segment) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale[market]}`, request.url),
    )
  }

  if (isLocale(segment)) {
    // A locale we don't ship yet (ru) must 404 rather than silently fall back
    // to another language the reader did not ask for.
    if (!marketLocales[market].includes(segment)) {
      return NextResponse.next()
    }

    const rest = pathname.slice(segment.length + 1)
    return NextResponse.rewrite(
      new URL(`/${market}/${segment}${rest}`, request.url),
    )
  }

  // Not a locale at all — a page requested without its prefix, e.g. /privacy.
  // Send it to the default locale rather than 404ing.
  return NextResponse.redirect(
    new URL(`/${defaultLocale[market]}${pathname}`, request.url),
  )
}

export const config = {
  // Everything except Next internals, the decks at /slide and /deck, and
  // static assets.
  matcher: [
    '/((?!_next|slide|deck|images|favicon|icon|apple-icon|placeholder).*)',
  ],
}
