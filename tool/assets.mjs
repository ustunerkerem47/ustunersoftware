import sharp from 'sharp'
import { writeFile, mkdir, readFile } from 'node:fs/promises'
import { chromium } from 'playwright'

const out = new URL('../static/', import.meta.url).pathname
const svg = await readFile(out + 'favicon.svg')
const src = process.argv[2]

const png = (input, size) => sharp(input).resize(size, size).png().toBuffer()
const ico16 = await png(svg, 16), ico32 = await png(svg, 32), ico48 = await png(svg, 48)
const imgs = [ico16, ico32, ico48]
const head = Buffer.alloc(6 + 16 * imgs.length)
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(imgs.length, 4)
let off = head.length
imgs.forEach((b, i) => {
  const s = [16, 32, 48][i], o = 6 + 16 * i
  head.writeUInt8(s, o); head.writeUInt8(s, o + 1); head.writeUInt8(0, o + 2); head.writeUInt8(0, o + 3)
  head.writeUInt16LE(1, o + 4); head.writeUInt16LE(32, o + 6); head.writeUInt32LE(b.length, o + 8); head.writeUInt32LE(off, o + 12)
  off += b.length
})
await writeFile(out + 'favicon.ico', Buffer.concat([head, ...imgs]))
await writeFile(out + 'favicon-32x32.png', ico32)
await writeFile(out + 'favicon-16x16.png', ico16)
await writeFile(out + 'apple-touch-icon.png', await png(src, 180))
await writeFile(out + 'icon-192.png', await png(src, 192))
await writeFile(out + 'icon-512.png', await png(src, 512))
await writeFile(out + 'site.webmanifest', JSON.stringify({
  name: 'Üstüner Software', short_name: 'Üstüner', start_url: '/', display: 'standalone',
  background_color: '#0f1114', theme_color: '#0f1114',
  icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
}, null, 2) + '\n')

const f64 = async (n) => 'data:font/woff2;base64,' + (await readFile(new URL('../node_modules/@fontsource-variable/inter/files/' + n, import.meta.url))).toString('base64')
const font = await f64('inter-latin-ext-wght-normal.woff2')
const font2 = await f64('inter-latin-wght-normal.woff2')
const mark = svg.toString().replace('<svg ', '<svg width="132" height="132" ')
const card = (eyebrow, title, line, accent) => `<!doctype html><html lang="tr"><head><style>
@font-face{font-family:I;src:url(${font2}) format('woff2');font-weight:100 900}
@font-face{font-family:I;src:url(${font}) format('woff2');font-weight:100 900;unicode-range:U+0100-024F,U+1E00-1EFF}
*{margin:0}body{width:1200px;height:630px;background:radial-gradient(circle at 78% 50%,#1d2026 0%,#0f1114 55%,#0b0c0e 100%);font-family:I;color:#f4f3f0;position:relative;overflow:hidden}
.g{position:absolute;right:-170px;top:-60px;width:750px;height:750px;opacity:.16}
.c{position:absolute;left:96px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center}
.e{font-size:22px;letter-spacing:.3em;text-transform:uppercase;color:#c9b07a;font-weight:600;margin-top:44px}
h1{font-size:${title.length > 10 ? 96 : 120}px;letter-spacing:-.045em;line-height:1;font-weight:700;margin-top:14px}
p{font-size:40px;letter-spacing:-.02em;color:#9b9ea6;margin-top:18px;font-weight:550}
.b{position:absolute;left:0;right:0;bottom:0;height:8px;background:#c9b07a}
.m rect:first-child{fill:#15171B}</style></head><body>
<svg class="g" viewBox="-1 -1 2 2" fill="none" stroke="#f1efea" stroke-width=".004">${Array.from({ length: 13 }, (_, i) => { const y = -0.9 + i * 0.15, r = Math.sqrt(1 - y * y); return `<ellipse cx="0" cy="${y}" rx="${r}" ry="${r * 0.18}"/>` }).join('')}${Array.from({ length: 12 }, (_, i) => `<ellipse cx="0" cy="0" rx="${Math.abs(Math.cos(i * Math.PI / 12))}" ry="1"/>`).join('')}</svg>
<div class="c"><div class="m">${mark}</div><div class="e">${eyebrow}</div><h1>${title}</h1><p>${line}</p></div><div class="b"></div></body></html>`

await mkdir(out + 'og', { recursive: true })
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined })
const p = await b.newPage({ viewport: { width: 1200, height: 630 } })
for (const [f, args] of Object.entries({
  'ustuner-software': ['Ankara · Yazılım girişimi', 'Üstüner Software', 'Daha sade yazılım. Daha az kalabalık.'],
  huma: ['Üstüner Software', 'HÜMA', 'Konuşmanın sade hâli.'],
  defteria: ['Üstüner Software', 'Defteria', 'Kalem kâğıt kadar doğal.'],
})) {
  await p.setContent(card(...args), { waitUntil: 'networkidle' })
  await p.waitForTimeout(300)
  await p.screenshot({ path: `${out}og/${f}.png` })
}
await b.close()
console.log('tamam')
