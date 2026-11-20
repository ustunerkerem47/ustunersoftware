import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { Rich } from '../components/Bits.jsx'

function Block({ b }) {
  if (typeof b === 'string') return <p><Rich text={b} /></p>
  if (b.ul) return <ul>{b.ul.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ul>
  if (b.ol) return <ol>{b.ol.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ol>
  if (b.table) return (
    <div className="table-wrap">
      <table>
        <thead><tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{b.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
  return null
}

export default function Legal({ doc }) {
  const { l, t } = useLang()
  const d = l[doc]
  return (
    <article className="legal">
      <div className="wrap narrow">
        <Link className="legal-back" to={doc.startsWith('huma') ? '/huma' : '/defteria'}>← {d.eyebrow}</Link>
        <h1>{d.title}</h1>
        <p className="legal-date">{d.updated}</p>
        <p className="legal-intro"><Rich text={d.intro} /></p>
        {d.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.blocks.map((b, i) => <Block key={i} b={b} />)}
          </section>
        ))}
        <p className="legal-foot">Üstüner Software · ustunersoftware.com.tr · <Link to="/">{t.common.back}</Link></p>
      </div>
    </article>
  )
}
