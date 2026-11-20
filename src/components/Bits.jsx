import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import releases from '../data/releases.json'
import { useLang } from '../i18n.jsx'
import { site } from '../content/site.js'

export function Rich({ text }) {
  const parts = text.replace(/\{email\}/g, `[${site.email}](mailto:${site.email})`).split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((p, i) => {
    if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (m) return m[2].startsWith('/') ? <Link key={i} to={m[2]}>{m[1]}</Link> : <a key={i} href={m[2]}>{m[1]}</a>
    return <Fragment key={i}>{p}</Fragment>
  })
}

export function Status({ kind, children, tone }) {
  return <span className={`status ${tone || ''}`}><i className={`dot ${kind}`} />{children}</span>
}

export function fmtDate(iso, lang) {
  return new Date(iso + 'T12:00:00').toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function DownloadBox({ app, light }) {
  const { t, lang } = useLang()
  const r = releases[app]
  const mb = (r.size / 1048576).toFixed(r.size > 50 * 1048576 ? 0 : 1).replace('.', lang === 'tr' ? ',' : '.')
  return (
    <div className={`dl ${light ? 'light' : ''}`}>
      <div className="dl-meta">
        <div><small>{t.common.version}</small><b>{r.version}</b></div>
        <div><small>{t.common.size}</small><b>{mb} {t.common.mb}</b></div>
        <div><small>{t.common.updated}</small><b>{fmtDate(r.date, lang)}</b></div>
      </div>
      <div className="dl-btns">
        <a className="btn primary" href={site[app].apk}>{t.common.downloadApk}</a>
        {site[app].play
          ? <a className="btn ghost" href={site[app].play}>{t.common.play}</a>
          : <span className="btn ghost off">{t.common.playSoon}</span>}
      </div>
      <small className="dl-note">{t.app.boxNote}</small>
    </div>
  )
}
