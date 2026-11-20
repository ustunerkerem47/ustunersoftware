import { Link } from 'react-router-dom'
import { Wordmark } from './Logo.jsx'
import { useLang } from '../i18n.jsx'
import { site, joinMail } from '../content/site.js'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = 2026
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Wordmark />
            <p>{f.tagline}</p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>{f.apps}</h4>
              <Link to="/huma">HÜMA</Link>
              <Link to="/defteria">Defteria</Link>
              <Link to="/#vega">VEGA</Link>
            </div>
            <div>
              <h4>{f.support}</h4>
              <Link to="/huma/hesap-silme">{f.humaDeletion}</Link>
              <Link to="/defteria/hesap-silme">{f.defteriaDeletion}</Link>
              <a href={joinMail(t.home.team.mailSubject)}>{f.join}</a>
              <Link to="/#iletisim">{f.contact}</Link>
            </div>
            <div>
              <h4>{f.legal}</h4>
              <Link to="/gizlilik/huma">{f.humaPrivacy}</Link>
              <Link to="/gizlilik/defteria">{f.defteriaPrivacy}</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {f.rights}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  )
}
