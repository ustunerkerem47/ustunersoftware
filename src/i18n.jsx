import { createContext, useContext, useEffect, useState } from 'react'
import { dict } from './content/site.js'
import { legal } from './content/legal.js'

const Ctx = createContext(null)

function initial() {
  if (navigator.webdriver) return 'tr'
  try {
    const s = localStorage.getItem('lang')
    if (s === 'tr' || s === 'en') return s
  } catch {}
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang], l: legal[lang] }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
