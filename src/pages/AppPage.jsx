import { Link } from 'react-router-dom'
import { Reveal, Rise } from '../components/Motion.jsx'
import { DownloadBox, Status } from '../components/Bits.jsx'
import { useLang } from '../i18n.jsx'

export default function AppPage({ app, name, Device, renderScreen, heroScreen, light, deletion }) {
  const { t } = useLang()
  const c = t[app]
  const a = t.app
  return (
    <div className={`app-page ${app}`}>
      <section className={`tile app-hero ${light ? 'tile-light' : 'tile-black'}`}>
        <Reveal className="tile-head">
          <small className="kind">{c.kind}</small>
          <h1 className="tile-title xl">{name}</h1>
          <p className="tile-tag">{c.tagline}</p>
          <p className="tile-text">{c.text}</p>
          <Status kind={app === 'huma' ? 'live' : 'beta'} tone={light ? 'on-light' : ''}>{c.status}</Status>
        </Reveal>
        <Reveal delay={0.1} className="dl-wrap"><DownloadBox app={app} light={light} /></Reveal>
        <Rise className={`stage ${Device.kind}`}>
          <Device.C width={Device.big}>{renderScreen(heroScreen)}</Device.C>
        </Rise>
      </section>

      {c.features.map((f, i) => (
        <section key={f.key} className={`feature ${i % 2 ? 'rev' : ''} ${light ? (i % 2 ? 'tone-cream' : 'tone-black') : (i % 2 ? 'tone-ink' : 'tone-black')}`}>
          <div className="feature-in">
            <Reveal className="feature-text">
              <small className="kind">{f.eyebrow}</small>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </Reveal>
            <Rise className={`feature-dev ${Device.kind}`} from={90} scaleFrom={0.94}>
              <Device.C width={Device.small}>{renderScreen(f.key)}</Device.C>
            </Rise>
          </div>
        </section>
      ))}

      <section className="more tone-black">
        <div className="wrap">
          <Reveal><h2 className="section-title">{a.moreTitle}</h2></Reveal>
          <div className="grid3">
            {c.more.map((m, i) => (
              <Reveal key={m.title} delay={0.04 * i} className="card">
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap tone-ink">
        <div className="wrap">
          <Reveal className="center-head">
            <small className="eyebrow">{a.roadmapEyebrow}</small>
            <h2 className="section-title">{a.roadmapTitle}</h2>
          </Reveal>
          <div className="road">
            {c.roadmap.map((r, i) => (
              <Reveal key={r.title} delay={0.05 * i} className="road-item">
                <Status kind={r.status}>{t.status[r.status]}</Status>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="notes tone-black" id="surum-notlari">
        <div className="wrap narrow">
          <Reveal>
            <small className="eyebrow">{a.notesEyebrow}</small>
            <h2 className="section-title">{a.notesTitle}</h2>
          </Reveal>
          <ol className="notes-list">
            {c.notes.map((n) => (
              <Reveal as="li" key={n.version}>
                <div className="notes-v"><b>{n.version}</b><small>{n.date}</small></div>
                <ul>{n.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="install tone-ink" id="kurulum">
        <div className="wrap">
          <Reveal className="center-head">
            <small className="eyebrow">{a.installEyebrow}</small>
            <h2 className="section-title">{a.installTitle}</h2>
          </Reveal>
          <ol className="steps">
            {a.install.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.05 * i}>
                <span className="step-n">{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="install-box"><DownloadBox app={app} /></Reveal>
          <p className="install-note">{a.installNote}</p>
        </div>
      </section>

      <section className="trust tone-black">
        <div className="wrap">
          <Reveal className="center-head">
            <small className="eyebrow">{a.trustEyebrow}</small>
            <h2 className="section-title">{a.trustTitle}</h2>
            <div className="btns center">
              <Link className="btn ghost" to={`/gizlilik/${app}`}>{a.privacy}</Link>
              <Link className="btn ghost" to={deletion}>{a.deletion}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
