import { readFile } from 'node:fs/promises'
import path from 'node:path'

// slide/deck.html is a ~6MB self-contained deck export. Serving it from a route
// handler rather than a page bypasses the root layout entirely, so it gets none
// of the site's fonts, globals.css or analytics — it renders exactly as exported.
// force-static reads it at build time and bakes the response into the output.
export const dynamic = 'force-static'

export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), 'slide', 'deck.html'),
    'utf8',
  )

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
