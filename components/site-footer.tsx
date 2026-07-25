import { Logo } from '@/components/brand'

const columns = [
  {
    title: 'Product',
    links: ['Rota & scheduling', 'Clock in / out', 'Timesheets & payroll', 'Attendance reports'],
  },
  {
    title: 'Modules',
    links: ['Checklists', 'Darajam ranks', 'Training', 'Dono opa AI'],
  },
  {
    title: 'Company',
    links: ['Bilig Labs', 'Dastro', 'Contact', 'Privacy policy'],
  },
]

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 rounded-[2.5rem] bg-card p-6 sm:p-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-pretty text-muted-foreground">
              Tabelo is workforce management built for restaurants — rota,
              clock-in, timesheets, payroll and compliance help in one place, in
              your language. A Bilig Labs product.
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">Get product updates</h2>
              <form className="flex w-full max-w-sm items-center gap-2 rounded-full bg-muted p-1.5">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
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
          <p>
            © {new Date().getFullYear()} Bilig Labs. Tabelo is a Bilig Labs
            product.
          </p>
          <p>Tashkent · London · Uzbek, Russian &amp; English</p>
        </div>
      </div>
    </footer>
  )
}
