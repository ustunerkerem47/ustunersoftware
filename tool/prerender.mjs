import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const root = new URL('../public/', import.meta.url).pathname;
const SITE = 'https://ustunersoftware.com.tr';

const pages = [
  { path: '/', title: 'Üstüner Software — Yerli mobil uygulamalar: HÜMA ve Defteria',
    desc: "Üstüner Software, Ankara'da yerli mobil uygulamalar geliştiren bağımsız yazılım stüdyosu. HÜMA yerli mesajlaşma uygulaması ve Defteria kalemle not alma uygulaması." },
  { path: '/huma', title: 'HÜMA — Yerli mesajlaşma uygulaması | Üstüner Software',
    desc: 'HÜMA: Türkiye\'de geliştirilen yerli mesajlaşma ve sosyal uygulama. Mesajlaşma, görüntülü ve sesli arama, gruplar. Android için ücretsiz indir.' },
  { path: '/defteria', title: 'Defteria — Kalemle not alma ve PDF üzerine yazma uygulaması | Üstüner Software',
    desc: 'Defteria: tablet ve telefonda kalemle ve klavyeyle not al. Basınç hassasiyetli 10 kalem, PDF üzerine yazma, Türkçe el yazısını metne çevirme, ses kaydıyla eşleşen notlar. Android için ücretsiz.' },
  { path: '/gizlilik/huma', title: 'HÜMA Gizlilik Politikası | Üstüner Software', desc: 'HÜMA uygulamasının gizlilik politikası.' },
  { path: '/gizlilik/defteria', title: 'Defteria Gizlilik Politikası | Üstüner Software', desc: 'Defteria uygulamasının gizlilik politikası.' },
  { path: '/huma/hesap-silme', title: 'HÜMA hesabını silme | Üstüner Software', desc: 'HÜMA hesabını ve verilerini silme talebi.' },
];

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml' };
const template = await readFile(join(root, 'index.html'), 'utf8');
const baseHtml = template.includes('<!--prerender-->') ? null : template;
if (!baseHtml) throw new Error('index.html zaten işlenmiş; önce asıl şablonu geri koy');
await writeFile(new URL('./index.template.html', import.meta.url), baseHtml);

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const body = p === '/index.html' ? baseHtml : await readFile(join(root, p));
    res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end();
  }
}).listen(0);
const port = server.address().port;

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'tr-TR' });

for (const pg of pages) {
  await page.goto(`http://localhost:${port}/#${pg.path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const inner = await page.evaluate(() => document.getElementById('root').innerHTML);
  if (inner.length < 500) throw new Error(`${pg.path} boş göründü`);
  const url = SITE + (pg.path === '/' ? '/' : pg.path + '/');
  const ld = pg.path === '/huma' || pg.path === '/defteria'
    ? { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: pg.path === '/huma' ? 'HÜMA' : 'Defteria',
        operatingSystem: 'Android', applicationCategory: pg.path === '/huma' ? 'CommunicationApplication' : 'ProductivityApplication',
        description: pg.desc, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
        publisher: { '@type': 'Organization', name: 'Üstüner Software', url: SITE } }
    : { '@context': 'https://schema.org', '@type': 'Organization', name: 'Üstüner Software', url: SITE,
        logo: SITE + '/favicon.svg', email: 'ustunersoftware@gmail.com', address: { '@type': 'PostalAddress', addressLocality: 'Ankara', addressCountry: 'TR' } };
  const head = [
    `<title>${esc(pg.title)}</title>`,
    `<meta name="description" content="${esc(pg.desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Üstüner Software" />`,
    `<meta property="og:title" content="${esc(pg.title)}" />`,
    `<meta property="og:description" content="${esc(pg.desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
    `<script>if(!location.hash||location.hash==='#'||location.hash==='#/')history.replaceState(null,'','/#${pg.path}')</script>`,
  ].join('\n    ');
  let html = baseHtml
    .replace(/<title>.*?<\/title>\s*/s, '')
    .replace(/<meta name="description"[^>]*>\s*/s, '')
    .replace(/\.\/(assets|favicon)/g, '/$1')
    .replace('</head>', `    ${head}\n    <!--prerender-->\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${inner}</div>`);
  if (pg.path === '/') html = html.replace(`history.replaceState(null,'','/#/')`, `void 0`);
  const out = pg.path === '/' ? join(root, 'index.html') : join(root, pg.path.slice(1), 'index.html');
  await mkdir(join(out, '..'), { recursive: true });
  await writeFile(out, html);
  console.log('hazır', pg.path, inner.length);
}

await browser.close();
server.close();

const today = new Date().toISOString().slice(0, 10);
await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path + '/'}</loc><lastmod>${today}</lastmod><priority>${p.path === '/' ? '1.0' : p.path.startsWith('/gizlilik') || p.path.includes('silme') ? '0.3' : '0.9'}</priority></url>`).join('\n')}
</urlset>
`);
await writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log('sitemap ve robots hazır');
