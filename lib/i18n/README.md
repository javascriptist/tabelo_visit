# Market split

Two markets, **not** one site translated three ways. Copy is deliberately forked;
sharing pain-point copy between them is the bug this structure exists to prevent.

|                      | `uk` (tabelo.co / .uk)              | `uz` (tabelo.uz)                |
| -------------------- | ----------------------------------- | ------------------------------- |
| Locales shipped      | `en` only, no switcher              | `uz` (default), `en`            |
| Currency             | GBP                                 | UZS                             |
| Compliance reference | UK Working Time Regulations 1998    | 2022 Uzbek Labour Code          |
| Everyday-tool pain   | Spreadsheets + WhatsApp             | Paper + Telegram                |
| Social proof         | La Petite Auberge, Islington        | Tashkent (onboarding)           |
| FAQ language Q       | Removed — replaced with a UK one    | Kept                            |
| Per-staff languages  | "your kitchen, covered"             | "built for you"                 |

## Rules

1. **Never literal-translate between markets.** `uz-en.ts` is the *uz market in
   English*, not the UK copy. Telegram/UZS/Labour Code/Tashkent stay in it;
   WhatsApp/GBP/Working Time Regulations/Islington must never appear in it.
2. **Compliance wording is capped** at "helps you stay" / "soft warnings".
   Never "guarantees compliance" — the feature nudges, it never blocks.
3. **The per-staff language feature ships on both** sites. It is a real product
   feature (UZ/RU/EN per person, independent of the business default) and is
   distinct from the site's own chrome language.

## Russian is intentionally missing

`ru` is absent from `marketLocales.uz` and from the `content` map in `index.ts`.
It needs its own native pass — not a mechanical translation of the Uzbek. Until
then `tabelo.uz/ru` returns 404 by design rather than falling back to Uzbek.

To ship it: add `ru-ru.ts`, register it in `dictionaries` → `index.ts`, and add
`'ru'` to `marketLocales.uz`. The switcher picks it up automatically.

## How a request resolves

`proxy.ts` maps the `Host` header to a market and rewrites to the internal
`/{market}/{locale}` route. Public URLs stay clean (`tabelo.co/`,
`tabelo.uz/uz`, `tabelo.uz/en`) and every variant is statically prerendered, so
neither market's text is ever shipped to the other's visitors.
