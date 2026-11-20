import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter'
import '@fontsource/caveat/500.css'
import './styles.css'
import { LangProvider } from './i18n.jsx'
import App from './App.jsx'

if (location.hash.startsWith('#/')) {
  history.replaceState(null, '', location.hash.slice(1) || '/')
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <App />
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
)
