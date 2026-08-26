import { readFile } from 'node:fs/promises'
import path from 'node:path'

// The short cut of the deck served at /slide: same design, 14 screens instead
// of 18. Served from a route handler for the same reason /slide is — it bypasses
// the root layout entirely, so the bundle renders exactly as exported.
// force-static reads it at build time and bakes the response into the output.
export const dynamic = 'force-static'

export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), 'slide', 'deck-compact.html'),
    'utf8',
  )

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
