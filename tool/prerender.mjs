import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { chromium } from 'playwright'
import { pages } from '../src/content/pages.js'

const root = new URL('../dist/', import.meta.url).pathname
const SITE = 'https://ustunersoftware.com.tr'
const base = await readFile(join(root, 'index.html'), 'utf8')
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json', '.ico': 'image/x-icon' }

const server = createServer(async (req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  try {
    const body = extname(p) ? await readFile(join(root, p)) : base
    res.writeHead(200, { 'content-type': types[extname(p)] || 'text/html' })
    res.end(body)
  } catch {
    res.writeHead(404); res.end()
  }
}).listen(0)
const port = server.address().port

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'tr-TR', reducedMotion: 'reduce' })

for (const pg of pages) {
  await page.goto(`http://localhost:${port}${pg.path}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  const inner = await page.evaluate(() => {
    document.querySelectorAll('.globe').forEach((g) => (g.innerHTML = ''))
    document.querySelectorAll('[style*="opacity"]').forEach((el) => {
      el.style.opacity = ''
      el.style.transform = ''
    })
    return document.getElementById('root').innerHTML
  })
  if (inner.length < 1500) throw new Error(`${pg.path} boş göründü`)
  const url = SITE + (pg.path === '/' ? '/' : pg.path)
  const { title, desc } = pg.tr
  const app = pg.path === '/huma' ? 'HÜMA' : pg.path === '/defteria' ? 'Defteria' : null
  const ld = app
    ? { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: app, operatingSystem: 'Android',
        applicationCategory: app === 'HÜMA' ? 'CommunicationApplication' : 'ProductivityApplication',
        description: desc, url, image: `${SITE}/${pg.og}`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
        publisher: { '@type': 'Organization', name: 'Üstüner Software', url: SITE } }
    : { '@context': 'https://schema.org', '@type': 'Organization', name: 'Üstüner Software', url: SITE,
        logo: `${SITE}/icon-512.png`, email: 'ustunersoftware@gmail.com', founder: { '@type': 'Person', name: 'Kerem Üstüner' },
        address: { '@type': 'PostalAddress', addressLocality: 'Ankara', addressCountry: 'TR' } }
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Üstüner Software" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/${pg.og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta property="og:locale:alternate" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${SITE}/${pg.og}" />`,
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  ].join('\n    ')
  const html = base
    .replace(/<title>.*?<\/title>\s*/s, '')
    .replace(/<meta name="description"[^>]*>\s*/s, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${inner}</div>`)
  const out = pg.path === '/' ? join(root, 'index.html') : join(root, pg.path.slice(1), 'index.html')
  await mkdir(join(out, '..'), { recursive: true })
  await writeFile(out, html)
  console.log('hazır', pg.path, inner.length)
}

await browser.close()
server.close()

const today = new Date().toISOString().slice(0, 10)
await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.path === '/' ? '1.0' : p.low ? '0.3' : '0.9'}</priority></url>`).join('\n')}
</urlset>
`)
await writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log('sitemap ve robots hazır')
