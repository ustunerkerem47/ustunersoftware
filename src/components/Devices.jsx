const Ico = {
  back: <path d="M15 5l-7 7 7 7" />,
  search: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>,
  chat: <path d="M4 6h16v10H9l-5 4z" />,
  people: <><circle cx="9" cy="9" r="3.5" /><path d="M3 19c.8-3.2 3.2-5 6-5s5.2 1.8 6 5" /><path d="M16 5.5a3.2 3.2 0 010 6.4M18 14c1.6.6 2.6 2.4 3 5" /></>,
  feed: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M4 15l5-4 4 3 3-2 4 3" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></>,
  cam: <><rect x="3" y="7" width="13" height="10" rx="2" /><path d="M16 11l5-3v8l-5-3" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  play: <path d="M8 5l11 7-11 7z" />,
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  pen: <path d="M4 20l4-1 11-11-3-3L5 16z" />,
  marker: <path d="M5 19l3-1 9-9-2-2-9 9zM14 6l4 4" />,
  eraser: <path d="M4 16l8-8 6 6-5 5H8zM13 19h7" />,
  lasso: <><ellipse cx="12" cy="10" rx="7" ry="5" strokeDasharray="2 2.5" /><path d="M8 14c-1 3 0 5 2 6" /></>,
  text: <path d="M5 6h14M12 6v13" />,
  image: <><rect x="4" y="5" width="16" height="14" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 17l5-4 4 3 3-2 4 3" /></>,
  undo: <path d="M9 7L4 12l5 5M4 12h11a5 5 0 010 10" />,
}

export function I({ n, className }) {
  return (
    <svg className={`ico ${className || ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {Ico[n]}
    </svg>
  )
}

export function Phone({ children, width = 300, className = '' }) {
  return (
    <div className={`phone ${className}`} style={{ '--w': `${width}px` }}>
      <div className="phone-screen">
        <div className="phone-status"><span>9:41</span><span className="phone-island" /><span className="phone-bat" /></div>
        {children}
      </div>
    </div>
  )
}

export function Tablet({ children, width = 760, className = '' }) {
  return (
    <div className={`tablet ${className}`} style={{ '--w': `${width}px` }}>
      <div className="tablet-screen">{children}</div>
    </div>
  )
}

const Av = ({ n, c }) => <span className="av" style={{ background: c }}>{n}</span>

function Tabs({ on = 0 }) {
  const items = [['chat', 'Sohbetler'], ['people', 'Kişiler'], ['feed', 'Akış'], ['gear', 'Ayarlar']]
  return (
    <div className="h-tabs">
      {items.map(([n, l], i) => (
        <span key={n} className={i === on ? 'on' : ''}><I n={n} />{l}</span>
      ))}
    </div>
  )
}

function Bar({ title, sub, av, c, right, lock }) {
  return (
    <div className="h-bar">
      <I n="back" />
      <Av n={av} c={c} />
      <div className="h-bar-t">
        <b>{lock && <I n="lock" className="tiny" />}{title}</b>
        <small>{sub}</small>
      </div>
      <div className="h-bar-r">{right}</div>
    </div>
  )
}

function Input() {
  return (
    <div className="h-input">
      <I n="plus" />
      <span>Mesaj</span>
      <I n="mic" />
    </div>
  )
}

const Wave = ({ n = 26, seed = 3 }) => (
  <span className="wave">
    {Array.from({ length: n }, (_, i) => (
      <i key={i} style={{ height: `${25 + ((i * seed * 37) % 70)}%` }} />
    ))}
  </span>
)

export function HumaScreen({ kind }) {
  if (kind === 'list') {
    const rows = [
      ['E', '#7d6b4f', 'Elif', 'Yarın 10’da kütüphanede?', '21:04', 2],
      ['M', '#3c4a5c', 'Mert', 'Sesli mesaj · 0:24', '20:51', 0],
      ['A', '#56473d', 'Ankara Lisesi 11-B', 'Deniz: Ödevi gönderdim', '20:12', 5],
      ['Z', '#45525a', 'Zeynep', 'Fotoğraf', '19:40', 0],
      ['H', '#2a2a2a', 'Hüma AI', 'Özet hazır.', '18:05', 0],
      ['K', '#5a4c62', 'Kerem', 'Tamamdır, akşam bakarım', 'Dün', 0],
    ]
    return (
      <div className="h-scr">
        <div className="h-head">
          <b>Sohbetler</b>
          <span className="h-pill"><I n="search" />Ara</span>
        </div>
        <div className="h-list">
          {rows.map(([a, c, n, m, t, u]) => (
            <div className="h-row" key={n}>
              <Av n={a} c={c} />
              <div className="h-row-m"><b>{n}</b><small>{m}</small></div>
              <div className="h-row-r"><small>{t}</small>{u ? <em>{u}</em> : null}</div>
            </div>
          ))}
        </div>
        <Tabs />
      </div>
    )
  }
  if (kind === 'chat') {
    return (
      <div className="h-scr">
        <Bar title="Elif" sub="çevrimiçi" av="E" c="#7d6b4f" right={<><I n="phone" /><I n="cam" /></>} />
        <div className="h-msgs">
          <div className="day">Bugün</div>
          <p className="in">Fizik notlarını atabilir misin?</p>
          <p className="out">Tabii, fotoğrafını çektim</p>
          <div className="out photo"><span /></div>
          <p className="in voice"><I n="play" /><Wave seed={5} /><small>0:18</small></p>
          <div className="in poll">
            <b>Yarın nerede çalışalım?</b>
            <span><i style={{ width: '64%' }} />Kütüphane<small>64%</small></span>
            <span><i style={{ width: '36%' }} />Kafe<small>36%</small></span>
          </div>
          <p className="out">Kütüphane olsun, 10’da oradayım</p>
        </div>
        <Input />
      </div>
    )
  }
  if (kind === 'secret') {
    return (
      <div className="h-scr">
        <Bar title="Mert" sub="gizli sohbet" av="M" c="#3c4a5c" lock />
        <div className="h-msgs">
          <div className="h-e2e"><I n="lock" />Bu sohbetteki mesajlar uçtan uca şifreli. Yalnızca siz ve Mert okuyabilir.</div>
          <p className="in">Doğum günü sürprizi için plan hazır mı?</p>
          <p className="out">Evet, cumartesi 19:00</p>
          <p className="in">Kimseye söylemiyorum, söz</p>
          <p className="out">Süper, pastayı ben alırım</p>
          <p className="in voice"><I n="play" /><Wave seed={9} /><small>0:11</small></p>
          <p className="in">Adresi de buradan atarım, kimse görmesin</p>
          <p className="out">Tamam, bekliyorum</p>
        </div>
        <Input />
      </div>
    )
  }
  if (kind === 'call') {
    return (
      <div className="h-scr h-call">
        <div className="h-call-top">
          <small>Görüntülü arama · 03:24</small>
          <b>Mert</b>
        </div>
        <div className="h-call-av"><span>M</span></div>
        <div className="h-self" />
        <div className="h-call-btns">
          <span><I n="mic" /></span>
          <span><I n="cam" /></span>
          <span className="end"><I n="phone" /></span>
        </div>
      </div>
    )
  }
  if (kind === 'ai') {
    return (
      <div className="h-scr">
        <Bar title="Ankara Lisesi 11-B" sub="32 üye" av="A" c="#56473d" />
        <div className="h-msgs">
          <p className="in"><small className="who">Deniz</small>Proje teslimi cuma mı pazartesi mi?</p>
          <p className="in"><small className="who">Ece</small>Hoca pazartesi dedi ama emin değilim</p>
          <p className="out">@hüma son konuşmaları özetler misin?</p>
          <div className="h-ai">
            <b><I n="spark" />Hüma AI</b>
            <ul>
              <li>Proje teslimi pazartesi, saat 09:00.</li>
              <li>Sunumu Deniz ve Ece hazırlıyor.</li>
              <li>Cuma 15:00’te kütüphanede buluşma var.</li>
            </ul>
          </div>
        </div>
        <Input />
      </div>
    )
  }
  return null
}

function Toolbar() {
  return (
    <div className="d-tool">
      <span className="d-tool-l"><I n="back" /><b>Fizik — 11. sınıf</b></span>
      <span className="d-tool-c">
        <I n="undo" />
        <span className="on"><I n="pen" /></span>
        <I n="marker" />
        <I n="eraser" />
        <I n="lasso" />
        <I n="text" />
        <I n="image" />
        <span className="dots"><i style={{ background: '#1d1a17' }} /><i style={{ background: '#2f5d8a' }} /><i style={{ background: '#b4472f' }} /><i style={{ background: '#d39a69' }} /></span>
      </span>
      <span className="d-tool-r"><I n="mic" /></span>
    </div>
  )
}

function Page({ children, className = '' }) {
  return <div className={`d-page ${className}`}>{children}</div>
}

export function DefteriaScreen({ kind }) {
  if (kind === 'pen') {
    return (
      <div className="d-scr">
        <Toolbar />
        <Page>
          <div className="hw h1">Newton’un hareket yasaları</div>
          <div className="hw">1. Eylemsizlik: cisim, kuvvet yoksa</div>
          <div className="hw">&nbsp;&nbsp;&nbsp;durumunu korur.</div>
          <div className="hw">2. <span className="blue">F = m · a</span></div>
          <div className="hw">3. Etki = tepki</div>
          <svg className="sketch" viewBox="0 0 300 160" fill="none" stroke="#1d1a17" strokeWidth="2.4" strokeLinecap="round">
            <rect x="96" y="58" width="80" height="54" rx="4" />
            <path d="M176 85h92M256 76l12 9-12 9" stroke="#b4472f" />
            <path d="M96 85H20M32 76l-12 9 12 9" stroke="#2f5d8a" />
            <path d="M10 130h290" />
          </svg>
          <div className="hw note red">F₁ &gt; F₂ → sağa hızlanır</div>
        </Page>
      </div>
    )
  }
  if (kind === 'pdf') {
    return (
      <div className="d-scr">
        <Toolbar />
        <Page className="pdf">
          <div className="pdf-h">Ünite 3 · Kuvvet ve Hareket</div>
          {[92, 88, 95, 70, 0, 90, 84, 93, 60].map((w, i) =>
            w ? <span key={i} className={`ln ${i === 2 ? 'hl' : ''} ${i === 6 ? 'ul' : ''}`} style={{ width: `${w}%` }} /> : <br key={i} />
          )}
          <div className="hw margin">sınavda çıkar!</div>
          <svg className="circle" viewBox="0 0 120 60" fill="none" stroke="#b4472f" strokeWidth="2.4"><ellipse cx="60" cy="30" rx="56" ry="25" /></svg>
        </Page>
      </div>
    )
  }
  if (kind === 'ocr') {
    return (
      <div className="d-scr">
        <Toolbar />
        <Page>
          <div className="lasso-box">
            <div className="hw">Momentum, kütle ile</div>
            <div className="hw">hızın çarpımıdır.</div>
          </div>
          <div className="ocr-card">
            <small>Metne çevir</small>
            <p>Momentum, kütle ile hızın çarpımıdır.</p>
            <span>Kopyala</span><span className="on">Sayfaya ekle</span>
          </div>
          <div className="hw dim">p = m · v</div>
        </Page>
      </div>
    )
  }
  if (kind === 'audio') {
    return (
      <div className="d-scr">
        <Toolbar />
        <div className="d-audio">
          <span className="play"><I n="play" /></span>
          <Wave n={48} seed={7} />
          <small>12:48 / 40:00</small>
        </div>
        <Page>
          <div className="hw dimmed">Enerji korunur.</div>
          <div className="hw lit">Potansiyel → kinetik enerji</div>
          <div className="hw dimmed">Sürtünme ısıya dönüşür.</div>
        </Page>
      </div>
    )
  }
  return null
}

export function Pen() {
  return <span className="stylus" aria-hidden="true" />
}
