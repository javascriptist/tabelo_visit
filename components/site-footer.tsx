import { Logo } from '@/components/brand'
import type { Dictionary } from '@/lib/i18n'

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const t = dict.footer

  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 rounded-[2.5rem] bg-card p-6 sm:p-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-pretty text-muted-foreground">
              {t.blurb}
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{t.updatesTitle}</h2>
              <form className="flex w-full max-w-sm items-center gap-2 rounded-full bg-muted p-1.5">
                <label htmlFor="footer-email" className="sr-only">
                  {t.emailLabel}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {t.subscribe}
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {t.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-accent">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.copyrightTemplate.replace('{year}', String(new Date().getFullYear()))}</p>
          <p>{t.locations}</p>
        </div>
      </div>
    </footer>
  )
}
