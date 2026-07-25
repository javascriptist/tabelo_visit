import {
  CalendarDays,
  CheckCircle2,
  Fingerprint,
  MapPin,
  MessageCircleHeart,
  Nfc,
  Star,
  Trophy,
} from 'lucide-react'
import type { Dictionary } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type MockProps = { dict: Dictionary; className?: string }

/* ---------------------------------- Rota ---------------------------------- */

const rotaRows: { name: string; role: keyof Dictionary['mocks']['depts']; shifts: (string | null)[] }[] = [
  {
    name: 'Dilnoza A.',
    role: 'floor',
    shifts: ['10–18', '10–18', null, '12–20', '12–20', '16–00', null],
  },
  {
    name: 'Bekzod T.',
    role: 'kitchen',
    shifts: ['08–16', null, '08–16', '08–16', '10–18', '10–18', null],
  },
  {
    name: 'Kamola S.',
    role: 'hosts',
    shifts: [null, '16–00', '16–00', null, '16–04', '16–04', '12–20'],
  },
]

export function RotaMock({ dict, className }: MockProps) {
  return (
    <div className={cn('w-full rounded-2xl bg-card p-4 sm:p-5', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-xl bg-primary/10 text-primary">
            <CalendarDays className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold">{dict.mocks.rotaTitle}</p>
            <p className="text-xs text-muted-foreground">{dict.mocks.branch}</p>
          </div>
        </div>
        <span className="rounded-full bg-sage/10 px-2.5 py-1 text-[11px] font-medium text-sage">
          {dict.mocks.onBudget}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-[84px_repeat(7,minmax(0,1fr))] gap-1.5">
        <span className="sr-only">{dict.mocks.staff}</span>
        {dict.mocks.days.map((d) => (
          <p
            key={d}
            className="text-center text-[10px] font-medium tracking-wide text-muted-foreground uppercase"
          >
            {d}
          </p>
        ))}

        {rotaRows.map((row) => (
          <div key={row.name} className="col-span-8 grid grid-cols-subgrid gap-1.5">
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium">{row.name}</p>
              <p className="truncate text-[10px] text-muted-foreground">
                {dict.mocks.depts[row.role]}
              </p>
            </div>
            {row.shifts.map((shift, i) => (
              <div
                key={`${row.name}-${i}`}
                className={cn(
                  'grid h-9 place-items-center rounded-lg text-[10px] font-medium',
                  shift
                    ? 'bg-primary/10 text-primary'
                    : 'bg-muted text-muted-foreground/40',
                )}
              >
                {shift ? (
                  <span className="flex items-center gap-0.5">
                    {shift}
                    {shift.endsWith('00') || shift.endsWith('04') ? (
                      <span className="rounded bg-gold/25 px-1 text-[8px] text-gold-deep">
                        +1
                      </span>
                    ) : null}
                  </span>
                ) : (
                  '·'
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <p className="text-[11px] text-muted-foreground">{dict.mocks.projectedCost}</p>
        <p className="text-[11px] font-semibold">
          {dict.mocks.costValue}{' '}
          <span className="text-muted-foreground">{dict.mocks.currency}</span>
        </p>
      </div>
    </div>
  )
}

/* --------------------------------- Clock in -------------------------------- */

export function ClockInMock({ dict, className }: MockProps) {
  return (
    <div className={cn('w-full max-w-[260px] rounded-2xl bg-card p-5', className)}>
      <p className="text-xs text-muted-foreground">{dict.mocks.goodMorning}</p>
      <p className="font-display text-lg font-semibold">{dict.mocks.clockInName}</p>

      <div className="mt-4 rounded-2xl bg-primary p-4 text-primary-foreground">
        <p className="text-[11px] text-primary-foreground/70">{dict.mocks.todaysShift}</p>
        <p className="mt-0.5 text-sm font-semibold">{dict.mocks.shiftTime}</p>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-primary-foreground/15 p-1.5">
          <span className="grid size-9 place-items-center rounded-full bg-primary-foreground text-primary">
            <Fingerprint className="size-4" aria-hidden="true" />
          </span>
          <span className="text-xs font-medium">{dict.mocks.swipeToClockIn}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {[MapPin, Nfc, CheckCircle2].map((Icon, i) => (
          <span
            key={dict.mocks.chips[i]}
            className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground"
          >
            <Icon className="size-3" aria-hidden="true" />
            {dict.mocks.chips[i]}
          </span>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------- Live board ------------------------------- */

export function LiveAttendanceMock({ dict, className }: MockProps) {
  const rows = [
    { name: 'Bekzod T.', dept: dict.mocks.depts.kitchen, state: 'in', time: '08:02' },
    { name: 'Kamola S.', dept: dict.mocks.depts.hosts, state: 'break', time: '13:40' },
    {
      name: 'Aziz R.',
      dept: dict.mocks.depts.bar,
      state: 'missing',
      time: `${dict.mocks.expectedPrefix} 12:00`,
    },
  ]
  return (
    <div className={cn('w-full rounded-2xl bg-card p-5', className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{dict.mocks.whosIn}</p>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-sage">
          <span className="size-1.5 animate-pulse rounded-full bg-sage" />
          {dict.mocks.live}
        </span>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {rows.map((row) => (
          <li key={row.name} className="flex items-center gap-3">
            <span
              className={cn(
                'size-8 shrink-0 rounded-full',
                row.state === 'missing' ? 'bg-destructive/15' : 'bg-primary/10',
              )}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium">{row.name}</p>
              <p className="truncate text-[10px] text-muted-foreground">
                {row.dept}
              </p>
            </div>
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[10px] font-medium',
                row.state === 'in' && 'bg-sage/10 text-sage',
                row.state === 'break' && 'bg-gold/20 text-gold-deep',
                row.state === 'missing' && 'bg-destructive/10 text-destructive',
              )}
            >
              {row.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* -------------------------------- Timesheet -------------------------------- */

export function TimesheetMock({ dict, className }: MockProps) {
  const rows = [
    { name: 'Dilnoza A.', hours: '38h 20m', pay: dict.mocks.payValues[0] },
    { name: 'Bekzod T.', hours: '41h 05m', pay: dict.mocks.payValues[1] },
    { name: 'Kamola S.', hours: '32h 45m', pay: dict.mocks.payValues[2] },
  ]
  return (
    <div className={cn('w-full rounded-2xl bg-card p-5', className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">{dict.mocks.timesheetTitle}</p>
          <p className="text-[11px] text-muted-foreground">
            {dict.mocks.approvedLocked}
          </p>
        </div>
        <span className="rounded-full bg-sage/10 px-2.5 py-1 text-[11px] font-medium text-sage">
          {dict.mocks.payrollReady}
        </span>
      </div>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr className="text-[10px] tracking-wide text-muted-foreground uppercase">
            <th className="pb-2 font-medium">{dict.mocks.staff}</th>
            <th className="pb-2 font-medium">{dict.mocks.hours}</th>
            <th className="pb-2 text-right font-medium">{dict.mocks.pay}</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-border">
              <td className="py-2.5 font-medium">{row.name}</td>
              <td className="py-2.5 text-muted-foreground">{row.hours}</td>
              <td className="py-2.5 text-right font-semibold">{row.pay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ----------------------------- Demand forecast ----------------------------- */

const demandLevels = [
  2, 1, 1, 3, 4, 4, 3, 1, 2, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4,
  4, 3, 2, 1,
]

const levelStyles = [
  'bg-muted text-muted-foreground/50',
  'bg-primary/10 text-primary',
  'bg-primary/25 text-primary',
  'bg-gold/30 text-gold-deep',
]

export function DemandCalendarMock({ dict, className }: MockProps) {
  return (
    <div className={cn('w-full rounded-2xl bg-card p-5', className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{dict.mocks.demandTitle}</p>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className={cn('size-2.5 rounded-full', levelStyles[l - 1])}
              aria-hidden="true"
            />
          ))}
          <span className="ml-1 text-[10px] text-muted-foreground">
            {dict.mocks.demandLevels}
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-6 gap-1.5">
        {demandLevels.map((level, i) => (
          <span
            key={i}
            className={cn(
              'grid h-8 place-items-center rounded-lg text-[10px] font-medium',
              levelStyles[level - 1],
            )}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        {dict.mocks.demandNote}
      </p>
    </div>
  )
}

/* --------------------------------- Darajam --------------------------------- */

export function RankMock({ dict, className }: MockProps) {
  return (
    <div className={cn('w-full max-w-[280px] rounded-2xl bg-card p-5', className)}>
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-xl bg-gold/20 text-gold-deep">
          <Trophy className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold">{dict.mocks.rankName}</p>
          <p className="text-[10px] text-muted-foreground">
            {dict.mocks.rankLabel}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{dict.mocks.rankPoints}</span>
          <span>{dict.mocks.rankTarget}</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[64%] rounded-full bg-gold" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={cn(
              'size-3.5',
              s <= 4 ? 'fill-gold text-gold' : 'text-muted',
            )}
            aria-hidden="true"
          />
        ))}
        <span className="ml-1 text-[10px] text-muted-foreground">
          {dict.mocks.shiftStrength}
        </span>
      </div>
    </div>
  )
}

/* -------------------------------- Dono opa -------------------------------- */

export function DonoOpaMock({ dict, className }: MockProps) {
  return (
    <div className={cn('w-full rounded-2xl bg-card p-5', className)}>
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-full bg-accent/15 text-accent">
          <MessageCircleHeart className="size-4" aria-hidden="true" />
        </span>
        <p className="text-sm font-semibold">{dict.mocks.donoOpa}</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-primary px-3 py-2 text-[11px] leading-relaxed text-primary-foreground">
          {dict.mocks.chat.question}
        </p>
        <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-[11px] leading-relaxed text-secondary-foreground">
          {dict.mocks.chat.answer}
        </p>
      </div>
    </div>
  )
}

/* -------------------------------- Checklist -------------------------------- */

export function ChecklistMock({ dict, className }: MockProps) {
  const items = [
    { label: dict.mocks.checklistItems[0], done: true, photo: false },
    { label: dict.mocks.checklistItems[1], done: true, photo: true },
    { label: dict.mocks.checklistItems[2], done: false, photo: false },
  ]
  return (
    <div className={cn('w-full rounded-2xl bg-card p-5', className)}>
      <p className="text-sm font-semibold">{dict.mocks.checklistTitle}</p>
      <p className="text-[11px] text-muted-foreground">
        {dict.mocks.checklistMeta}
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 rounded-xl bg-muted px-3 py-2"
          >
            <CheckCircle2
              className={cn(
                'size-4 shrink-0',
                item.done ? 'text-sage' : 'text-muted-foreground/40',
              )}
              aria-hidden="true"
            />
            <span className="flex-1 text-[11px] font-medium">{item.label}</span>
            {item.photo ? (
              <span className="rounded-full bg-card px-1.5 py-0.5 text-[9px] text-muted-foreground">
                {dict.mocks.photoBadge}
              </span>
            ) : null}
            <span className="text-[10px] font-semibold text-gold-deep">+10</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
