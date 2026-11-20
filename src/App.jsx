import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Huma from './pages/Huma.jsx'
import Defteria from './pages/Defteria.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import { pages, pageFor } from './content/pages.js'
import { useLang } from './i18n.jsx'

function Head() {
  const { pathname, hash } = useLocation()
  const { lang } = useLang()
  useEffect(() => {
    const p = pageFor(pathname.replace(/\/$/, '') || '/')
    if (p) {
      document.title = p[lang].title
      document.querySelector('meta[name="description"]')?.setAttribute('content', p[lang].desc)
    }
  }, [pathname, lang])
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <Head />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/huma" element={<Huma />} />
          <Route path="/defteria" element={<Defteria />} />
          {pages.filter((p) => p.legal).map((p) => (
            <Route key={p.path} path={p.path} element={<Legal doc={p.legal} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
