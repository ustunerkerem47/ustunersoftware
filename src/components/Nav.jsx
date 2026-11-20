import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Wordmark } from './Logo.jsx'
import { useLang } from '../i18n.jsx'

export function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang" role="group" aria-label={t.nav.switchTo}>
      {['tr', 'en'].map((l) => (
        <button key={l} className={l === lang ? 'on' : ''} onClick={() => setLang(l)} aria-pressed={l === lang}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  const links = [
    { to: '/huma', label: t.nav.huma },
    { to: '/defteria', label: t.nav.defteria },
    { to: '/#vega', label: t.nav.vega },
    { to: '/#hakkimizda', label: t.nav.about },
    { to: '/#ekip', label: t.nav.team },
    { to: '/#iletisim', label: t.nav.contact },
  ]
  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <div className="nav-in">
        <Link to="/" className="nav-logo" aria-label={t.nav.home}>
          <Wordmark />
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? 'on' : ''}>{l.label}</Link>
          ))}
        </nav>
        <div className="nav-end">
          <LangSwitch />
          <button className="burger" onClick={() => setOpen(!open)} aria-label={open ? t.nav.close : t.nav.open} aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </div>
      <div className="sheet" hidden={!open}>
        {links.map((l, i) => (
          <Link key={l.to} to={l.to} style={{ animationDelay: `${i * 40}ms` }}>{l.label}</Link>
        ))}
      </div>
    </header>
  )
}
