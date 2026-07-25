'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/brand'
import { LanguageSwitcher } from '@/components/language-switcher'
import type { Dictionary } from '@/lib/i18n'
import type { Locale, Market } from '@/lib/i18n/config'

export function SiteNav({
  dict,
  market,
  locale,
}: {
  dict: Dictionary
  market: Market
  locale: Locale
}) {
  const [open, setOpen] = useState(false)
  const t = dict.nav

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border/60 bg-card/80 px-4 py-2.5 backdrop-blur-xl sm:px-5"
      >
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">{t.home}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {t.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            market={market}
            locale={locale}
            label={t.languageLabel}
          />
          <a
            href="#top"
            className="hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            {t.login}
          </a>
          <a
            href="#demo"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.bookDemo}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full bg-muted text-foreground md:hidden"
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border/60 bg-card p-3 md:hidden">
          <ul className="flex flex-col">
            {t.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#top"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {t.login}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
