import { cn } from '@/lib/utils'

/**
 * The Tabelo wordmark: the word with the smile under it. Black with the purple
 * smile, or all white (`inverse`) on dark backgrounds.
 */
export function Logo({
  className,
  tone = 'default',
}: {
  className?: string
  tone?: 'default' | 'inverse'
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- a small static SVG
    <img
      src={tone === 'inverse' ? '/tabelo-wordmark-white.svg' : '/tabelo-wordmark.svg'}
      alt="Tabelo"
      width={84}
      height={28}
      className={cn('h-7 w-auto shrink-0 self-start select-none', className)}
    />
  )
}

export function Eyebrow({
  children,
  tone = 'default',
  className,
}: {
  children: React.ReactNode
  tone?: 'default' | 'inverse'
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2 text-sm font-medium',
        tone === 'inverse' ? 'text-primary-foreground/80' : 'text-primary',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-block size-1.5 rounded-full',
          tone === 'inverse' ? 'bg-mint' : 'bg-lilac',
        )}
      />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  tone?: 'default' | 'inverse'
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start',
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'max-w-3xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl',
          tone === 'inverse' ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-xl text-base leading-relaxed text-pretty',
            tone === 'inverse'
              ? 'text-ink-foreground/70'
              : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
