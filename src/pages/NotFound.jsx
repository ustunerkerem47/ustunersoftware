import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="notfound">
      <h1 className="display">404</h1>
      <h2>{t.notFound.title}</h2>
      <p>{t.notFound.text}</p>
      <Link className="btn primary" to="/">{t.common.back}</Link>
    </section>
  )
}
