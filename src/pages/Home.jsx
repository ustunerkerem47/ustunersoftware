
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
const Globe = lazy(() => import('../components/Globe.jsx'))
import { Reveal, Rise } from '../components/Motion.jsx'
import { Phone, Tablet, HumaScreen, DefteriaScreen, Pen } from '../components/Devices.jsx'
import { Status } from '../components/Bits.jsx'
import { Mark } from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'
import { site, joinMail } from '../content/site.js'
import { departments } from '../content/team.js'

export default function Home() {
  const { t, lang } = useLang()
  const h = t.home

  return (
    <>
      <section className="hero">
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
        <div className="hero-fade" />
        <div className="hero-in">
          <Reveal y={12}>
            <span className="eyebrow-pill"><i />{h.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display">
              {h.title1}<span>{h.title2}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lead">{h.lead}</p>
          </Reveal>

          <Reveal delay={0.18} className="btns center">
            <Link className="btn primary" to="/#uygulamalar">
              {h.ctaApps}
            </Link>
            <Link className="btn ghost" to="/#iletisim">
              {h.ctaContact}
            </Link>
          </Reveal>
        </div>
        <div className="hero-cue" aria-hidden="true" />
      </section>

      <section className="tile tile-black" id="uygulamalar">
        <Reveal className="tile-head">
          <small className="kind">{h.huma.kind}</small>
          <h2 className="tile-title">HÜMA</h2>
          <p className="tile-tag">{h.huma.tagline}</p>
          <p className="tile-text">{h.huma.text}</p>

          <div className="btns center">
            <Link className="btn primary" to="/huma">
              {t.common.more}
            </Link>
            <a className="btn ghost" href={site.huma.apk}>
              {t.common.download}
            </a>
          </div>

          <Status kind="live">{h.huma.status}</Status>
        </Reveal>

        <Rise className="stage phones">
          <Phone width={250} className="side left">
            <HumaScreen kind="secret" />
          </Phone>
          <Phone width={300} className="main">
            <HumaScreen kind="list" />
          </Phone>
          <Phone width={250} className="side right">
            <HumaScreen kind="chat" />
          </Phone>
        </Rise>
      </section>

      <section className="tile tile-light">
        <Reveal className="tile-head">
          <small className="kind">{h.defteria.kind}</small>
          <h2 className="tile-title">Defteria</h2>
          <p className="tile-tag">{h.defteria.tagline}</p>
          <p className="tile-text">{h.defteria.text}</p>

          <div className="btns center">
            <Link className="btn dark" to="/defteria">
              {t.common.more}
            </Link>
            <a className="btn ghost-dark" href={site.defteria.apk}>
              {t.common.download}
            </a>
          </div>

          <Status kind="beta" tone="on-light">
            {h.defteria.status}
          </Status>
        </Reveal>

        <Rise className="stage tablet-stage">
          <Tablet width={820}>
            <DefteriaScreen kind="pen" />
          </Tablet>
          <Pen />
        </Rise>
      </section>

      <section className="tile tile-black" id="ala">
        <Reveal className="tile-head">
          <small className="kind">{h.ala.kind}</small>
          <h2 className="tile-title">ALÂ</h2>
          <p className="tile-tag">{h.ala.tagline}</p>
          <p className="tile-text">{h.ala.text}</p>

          <div className="btns center">
            <a className="btn primary" href="/ala/">
              {h.ala.open}
            </a>
            <a className="btn ghost" href="/ala/gizlilik/">
              {h.ala.privacy}
            </a>
          </div>

          <Status kind="live">{h.ala.status}</Status>
        </Reveal>

        <Rise className="stage tablet-stage">
          <a href="/ala/" aria-label="ALÂ">
            <Tablet width={820}>
              <img className="ala-shot" src="/ala/onizleme.webp" alt="ALÂ: elektrik alan deneyi" loading="lazy" width="1800" height="1193" />
            </Tablet>
          </a>
        </Rise>
      </section>

      <section className="duo" id="vega">
        <Reveal className="half half-vega">
          <small className="kind">{h.vega.kind}</small>
          <h3>VEGA</h3>
          <p className="half-tag">{h.vega.tagline}</p>
          <p className="half-text">{h.vega.text}</p>
          <Status kind="dev">{t.status.dev}</Status>

          <div className="hud" aria-hidden="true">
            <i /><i /><i />
            <span className="hud-wave">
              {Array.from({ length: 22 }, (_, k) => (
                <b
                  key={k}
                  style={{ animationDelay: `${(k % 7) * 0.12}s` }}
                />
              ))}
            </span>
            <em>Hey Vega</em>
          </div>
        </Reveal>

        <Reveal className="half half-join" delay={0.08}>
          <small className="kind">{h.join.kind}</small>
          <h3>{h.join.tagline}</h3>
          <p className="half-text">{h.join.text}</p>

          <div className="btns center">
            <a className="btn dark" href={joinMail(h.team.mailSubject)}>
              {h.join.cta}
            </a>
            <Link className="btn ghost-dark" to="/#ekip">
              {t.nav.team}
            </Link>
          </div>

          <div className="join-grid" aria-hidden="true">
            {h.team.roles.map((r) => (
              <span key={r.title}>{r.title}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="about" id="hakkimizda">
        <div className="wrap">
          <Reveal>
            <small className="eyebrow">{h.about.eyebrow}</small>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="section-title">
              {h.about.title}<span>{h.about.title2}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="about-text">{h.about.text}</p>
          </Reveal>

          <div className="values">
            {h.about.values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={0.06 * i}
                className="value"
              >
                <span className="value-n">0{i + 1}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="team" id="ekip">
        <div className="wrap">
          <Reveal className="center-head">
            <small className="eyebrow">{h.team.eyebrow}</small>
            <h2 className="section-title">{h.team.title}</h2>
            <p className="section-lead">{h.team.lead}</p>
          </Reveal>

          <div className="org">
            <Reveal className="org-top">
              <div className="org-node founder">
                <span className="org-av">
                  <Mark size={30} />
                </span>
                <b>{h.team.founder.name}</b>
                <small>{h.team.founder.role}</small>
                <p>{h.team.founder.text}</p>
              </div>
            </Reveal>

            <div className="org-stem" aria-hidden="true" />

            <div className="org-depts">
              {departments.map((d, i) => (
                <Reveal
                  key={d.tr}
                  delay={0.04 * (i % 4)}
                  className="dept"
                >
                  <h4>{d[lang]}</h4>
                  <ul>
                    {d.members.map(([name, tr, en]) => (
                      <li key={name}>
                        <span className="m-av">
                          {name
                            .split(' ')
                            .map((w) => w[0])
                            .join('')
                            .slice(0, 2)}
                        </span>

                        <span className="m-txt">
                          <b>{name}</b>
                          <small>{lang === 'tr' ? tr : en}</small>
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="center-head">
            <a className="btn primary" href={joinMail(h.team.mailSubject)}>
              {h.team.cta}
            </a>
            <a className="mail-link" href={joinMail(h.team.mailSubject)}>
              {site.email}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <Reveal className="center-head">
          <small className="eyebrow">{h.contact.eyebrow}</small>
          <h2 className="section-title">{h.contact.title}</h2>
          <p className="section-lead">{h.contact.text}</p>
          <a className="btn primary big" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </Reveal>
      </section>
    </>
  )
}
