import { readFile, writeFile } from 'node:fs/promises'

const file = new URL('../src/data/releases.json', import.meta.url)
const data = JSON.parse(await readFile(file, 'utf8'))
const day = (d) => new Date(d).toISOString().slice(0, 10)

async function huma() {
  const base = 'https://huma.ustunersoftware.com.tr'
  const v = await fetch(base + '/version.json', { cache: 'no-store' }).then((r) => r.json())
  const head = await fetch(base + '/app/huma.apk', { method: 'HEAD' })
  const size = Number(head.headers.get('content-length')) || data.huma.size
  const lm = head.headers.get('last-modified')
  const changed = v.version !== data.huma.version
  return {
    version: v.version,
    size,
    date: changed ? day(lm || Date.now()) : data.huma.date,
  }
}

async function defteria() {
  const headers = { accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  const list = await fetch('https://api.github.com/repos/ustunerkerem47/ustunersoftware/releases?per_page=30', { headers }).then((r) => r.json())
  const rel = list
    .filter((r) => r.tag_name.startsWith('defteria-v') && r.assets.some((a) => a.name.endsWith('.apk')))
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))[0]
  const apk = rel.assets.find((a) => a.name.endsWith('.apk'))
  return { version: rel.tag_name.replace('defteria-v', ''), size: apk.size, date: day(rel.published_at) }
}

for (const [key, fn] of Object.entries({ huma, defteria })) {
  try {
    data[key] = await fn()
    console.log(key, data[key])
  } catch (e) {
    console.log(key, 'eski bilgi kaldı:', e.message)
  }
}

await writeFile(file, JSON.stringify(data, null, 2) + '\n')
