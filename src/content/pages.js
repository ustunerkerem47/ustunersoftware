export const pages = [
  {
    path: '/',
    og: 'og/ustuner-software.png',
    tr: { title: 'Üstüner Software — Daha sade yazılım', desc: 'Üstüner Software, Ankara’dan bir yazılım girişimi. HÜMA mesajlaşma uygulaması ve Defteria not uygulamasını geliştiriyoruz.' },
    en: { title: 'Üstüner Software — Simpler software', desc: 'Üstüner Software is a software startup from Ankara, building the HÜMA messaging app and the Defteria notes app.' },
  },
  {
    path: '/huma',
    og: 'og/huma.png',
    tr: { title: 'HÜMA — Yerli mesajlaşma uygulaması | Üstüner Software', desc: 'HÜMA: sohbetler, gizli sohbetler, sesli ve görüntülü aramalar, topluluklar ve Hüma AI. Android için ücretsiz indirin.' },
    en: { title: 'HÜMA — Messaging app | Üstüner Software', desc: 'HÜMA: chats, secret chats, voice and video calls, communities and Hüma AI. Free for Android.' },
  },
  {
    path: '/defteria',
    og: 'og/defteria.png',
    tr: { title: 'Defteria — Kalemle not alma ve PDF üzerine yazma | Üstüner Software', desc: 'Defteria: tablet ve telefonda kalemle not alın, PDF’lerin üzerine yazın, Türkçe el yazınızı metne çevirin. Ücretsiz ve reklamsız.' },
    en: { title: 'Defteria — Handwritten notes and PDF markup | Üstüner Software', desc: 'Defteria: write with a pen on tablets and phones, mark up PDFs and turn Turkish handwriting into text. Free and ad-free.' },
  },
  {
    path: '/gizlilik/huma', og: 'og/huma.png', legal: 'humaPrivacy', low: true,
    tr: { title: 'HÜMA Gizlilik Politikası | Üstüner Software', desc: 'HÜMA uygulamasının gizlilik politikası.' },
    en: { title: 'HÜMA Privacy Policy | Üstüner Software', desc: 'Privacy policy of the HÜMA app.' },
  },
  {
    path: '/gizlilik/defteria', og: 'og/defteria.png', legal: 'defteriaPrivacy', low: true,
    tr: { title: 'Defteria Gizlilik Politikası | Üstüner Software', desc: 'Defteria uygulamasının gizlilik politikası.' },
    en: { title: 'Defteria Privacy Policy | Üstüner Software', desc: 'Privacy policy of the Defteria app.' },
  },
  {
    path: '/huma/hesap-silme', og: 'og/huma.png', legal: 'humaDeletion', low: true,
    tr: { title: 'HÜMA hesabını silme | Üstüner Software', desc: 'HÜMA hesabınızı ve verilerinizi silme adımları.' },
    en: { title: 'Delete your HÜMA account | Üstüner Software', desc: 'How to delete your HÜMA account and data.' },
  },
  {
    path: '/defteria/hesap-silme', og: 'og/defteria.png', legal: 'defteriaDeletion', low: true,
    tr: { title: 'Defteria hesap ve veri silme | Üstüner Software', desc: 'Defteria hesabınızı ve bulut verilerinizi silme adımları.' },
    en: { title: 'Delete your Defteria account | Üstüner Software', desc: 'How to delete your Defteria account and cloud data.' },
  },
]

export const pageFor = (path) => pages.find((p) => p.path === path)
