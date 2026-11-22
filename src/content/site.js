
export const site = {
  name: 'Üstüner Software',
  url: 'https://ustunersoftware.com.tr',
  email: 'ustunersoftware@gmail.com',
  huma: { apk: '/indir/huma', play: '' },
  defteria: { apk: '/indir/defteria', play: '' },
}

export const joinMail = (subject) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`

const tr = {
  lang: 'tr',
  nav: {
    home: 'Ana sayfa',
    huma: 'HÜMA',
    defteria: 'Defteria',
    vega: 'VEGA',
    about: 'Hakkımızda',
    team: 'Ekip',
    contact: 'İletişim',
    open: 'Menüyü aç',
    close: 'Menüyü kapat',
    switchTo: 'Switch to English',
  },
  common: {
    more: 'Daha fazla bilgi',
    download: "Android'e indirin",
    downloadApk: 'APK indir',
    playSoon: "Google Play'e hazırlanıyor",
    play: "Google Play'de açın",
    version: 'Sürüm',
    size: 'Boyut',
    updated: 'Güncellendi',
    mb: 'MB',
    openRole: 'Açık rol',
    back: 'Ana sayfaya dönün',
  },
  status: {
    live: 'Yayında',
    beta: 'Deneme sürümü',
    dev: 'Geliştiriliyor',
    planned: 'Planlanıyor',
    research: 'Araştırılıyor',
    preparing: 'Hazırlanıyor',
    testing: 'Kapalı testte',
  },
  home: {
    eyebrow: 'Üstüner Software · Ankara',
    title1: 'Daha sade yazılım.',
    title2: 'Daha az kalabalık.',
    lead: 'Her gün kullanacağınız uygulamaları kendimiz tasarlıyor, kendimiz geliştiriyoruz. Hedefimiz, hepsini kendi altyapımızda çalıştırmak.',
    ctaApps: 'Uygulamaları keşfedin',
    ctaContact: 'Bize yazın',
    huma: {
      kind: 'Mesajlaşma ve sosyal',
      tagline: 'Konuşmanın sade hâli.',
      text: 'Sohbetler, aramalar, topluluklar ve Hüma AI. Hepsi tek ve sade bir uygulamada.',
      status: "Android · Google Play'e hazırlanıyor",
    },
    defteria: {
      kind: 'Not ve çizim',
      tagline: 'Kalem kâğıt kadar doğal.',
      text: 'Kalemle yazın, PDF’lerin üzerine not alın, el yazınızı metne çevirin. Ücretsiz ve reklamsız.',
      status: "Android'de deneme sürümü",
    },
    vega: {
      kind: 'Masaüstü yapay zekâ asistanı',
      tagline: 'Bilgisayarınız, sesinizle.',
      text: 'Sesli ve yazılı komutlarla bilgisayarı yöneten bir asistan üzerinde çalışıyoruz.',
    },
    join: {
      kind: 'Ekip',
      tagline: 'Birlikte geliştirelim.',
      text: 'Yazılım, tasarım, sosyal medya ve moderasyonda yeni ekip arkadaşları arıyoruz.',
      cta: 'Başvurun',
    },
    about: {
      eyebrow: 'Hakkımızda',
      title: 'Küçük bir ekip.',
      title2: 'Uzun bir yol.',
      text: 'Üstüner Software, Kerem Üstüner’in kurduğu ve kendi ekibiyle uygulamalar geliştirdiği bir yazılım girişimi. Fikirden tasarıma, koddan yayına kadar her adımı kendimiz atıyoruz. Ankara’da başladık; insanların her gün gerçekten kullandığı uygulamalar yapmak istiyoruz.',
      values: [
        {
          title: 'Sadelik',
          text: 'Gereksiz kalabalık yok. Her ekran tek bir işi iyi yapmalı.',
        },
        {
          title: 'Gizliliğe saygı',
          text: 'Sadece gereken veriyi isteriz. Verileri satmayız, reklam için kullanmayız.',
        },
        {
          title: 'Bağımsız altyapı',
          text: 'Uzun vadeli hedefimiz, uygulamalarımızı kendi altyapımız üzerinde çalıştırmak.',
        },
      ],
    },
    team: {
      eyebrow: 'Ekip',
      title: 'Ekip şeması',
      lead: 'Kurucumuz ve birlikte çalışan ekibimiz. Ekibe katılmak isterseniz bize yazın.',
      founder: {
        name: 'Kerem Üstüner',
        role: 'Kurucu · Genel Koordinatör',
        text: 'Ürün, yazılım ve tasarım',
      },
      roles: [
        { title: 'Yazılım', text: 'Uygulama ve sunucu geliştirme' },
        { title: 'Tasarım', text: 'Arayüz, ikon ve marka' },
        { title: 'Sosyal medya ve büyüme', text: 'Tanıtım ve topluluk' },
        { title: 'Moderasyon', text: 'HÜMA topluluğunun güvenliği' },
      ],
      cta: 'Ekip büyüyor, katılın',
      mailSubject: 'Üstüner Software ekibine katılmak istiyorum',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Destek, öneri veya iş birliği',
      text: 'Uygulamalarımızla ilgili her konuda bize e-posta ile ulaşabilirsiniz.',
    },
  },
  footer: {
    tagline: 'Ankara’dan bir yazılım girişimi.',
    apps: 'Uygulamalar',
    support: 'Destek',
    legal: 'Yasal',
    humaPrivacy: 'HÜMA Gizlilik Politikası',
    defteriaPrivacy: 'Defteria Gizlilik Politikası',
    humaDeletion: 'HÜMA hesap silme',
    defteriaDeletion: 'Defteria hesap silme',
    contact: 'İletişim',
    join: 'Ekibe katılın',
    rights: 'Üstüner Software',
  },
  app: {
    nowEyebrow: 'Uygulamada',
    moreTitle: 'Ve daha fazlası.',
    roadmapEyebrow: 'Yol haritası',
    roadmapTitle: 'Sırada ne var',
    notesEyebrow: 'Sürüm notları',
    notesTitle: 'Neler değişti',
    installEyebrow: 'Kurulum',
    installTitle: 'APK nasıl kurulur',
    installNote: 'Google Play sürümü yayınlandığında güncellemeleri doğrudan Google Play’den alabileceksiniz.',
    install: [
      {
        title: 'İndirin',
        text: 'Bu sayfadaki indirme butonuna dokunun. Dosya telefonunuzun İndirilenler klasörüne iner.',
      },
      {
        title: 'İzin verin',
        text: 'Android sorarsa tarayıcınız için “Bu kaynaktan yüklemeye izin ver” seçeneğini açın.',
      },
      {
        title: 'Yükleyin',
        text: 'İndirilen dosyaya dokunun ve “Yükle” deyin. Yeni bir sürümü de aynı şekilde, üstüne kurarsınız.',
      },
      {
        title: 'Açın',
        text: 'Uygulamayı açın ve kullanmaya başlayın.',
      },
    ],
    trustEyebrow: 'Güven',
    trustTitle: 'Gizlilik ve hesabınız',
    privacy: 'Gizlilik Politikası',
    deletion: 'Hesap silme',
    box: 'Android için indirin',
    boxNote: 'Ücretsiz · Reklamsız',
  },
  huma: {
    kind: 'Mesajlaşma ve sosyal uygulama',
    tagline: 'Konuşmanın sade hâli.',
    text: 'Herkes için sade, hızlı ve güvenilir bir mesajlaşma uygulaması. Türkiye’den dünyaya.',
    status: "Android · Google Play'e hazırlanıyor",
    features: [
      {
        key: 'chat',
        eyebrow: 'Sohbetler',
        title: 'Yazışmak, olması gerektiği kadar kolay.',
        text: 'Fotoğraf, video, sesli mesaj, dosya, anket ve konum gönderin. İnsanlar sizi telefon numaranızla değil, takma adınızla bulur.',
      },
      {
        key: 'secret',
        eyebrow: 'Gizli sohbetler',
        title: 'Sadece siz ve karşınızdaki.',
        text: 'Gizli sohbetlerdeki mesajlar cihazınızda şifrelenir ve yalnızca karşınızdaki kişinin cihazında açılır. Sunucuda sadece şifreli hâli durur.',
      },
      {
        key: 'call',
        eyebrow: 'Aramalar',
        title: 'Sesli ve görüntülü arama.',
        text: 'Birebir ve grup aramaları, mümkün olduğunda doğrudan cihazlar arasında kurulur. Aramalar kaydedilmez.',
      },
      {
        key: 'ai',
        eyebrow: 'Hüma AI',
        title: 'İçinde bir yapay zekâ asistanı.',
        text: 'Uzun bir sohbetin özetini alın, mesajları çevirin ya da cevap önerisi isteyin. Bir sohbette @hüma yazmanız yeterli. Gizli sohbetlerde kullanılmaz.',
      },
    ],
    more: [
      {
        title: 'Akış ve hikâyeler',
        text: 'Fotoğraf ve videolarınızı akışta paylaşın, 24 saatlik hikâyeler ekleyin.',
      },
      {
        title: 'Topluluklar ve kanallar',
        text: 'Topluluklar için ortak odalar ve tek yönlü duyuru kanalları.',
      },
      {
        title: 'Günün Oyunu',
        text: 'Her gün iki dakikalık yeni bir bulmaca: Günün Kelimesi, Bağlantılar ve şehir soruları.',
      },
      {
        title: 'Kişiler',
        text: 'Rehberinizdeki HÜMA kullanıcılarını görün, diğerlerini tek dokunuşla davet edin.',
      },
      {
        title: 'Uygulama kilidi',
        text: 'HÜMA’yı parmak izi ya da yüz tanıma ile kilitleyin. Biyometrik veri cihazınızdan çıkmaz.',
      },
      {
        title: 'Koyu tema',
        text: 'Siyah-beyaz, göz yormayan ve sade bir arayüz.',
      },
    ],
    roadmap: [
      {
        title: 'Google Play sürümü',
        text: 'HÜMA’yı Google Play’den indirip güncelleyebileceksiniz.',
        status: 'preparing',
      },
      {
        title: 'İnternetsiz SMS',
        text: 'Şebeke varken internet yoksa mesajınız SMS olarak gider.',
        status: 'planned',
      },
      {
        title: 'Şebekesiz mesajlaşma',
        text: 'İnternet ve sinyal olmadığında da yakındaki cihazlar üzerinden mesajlaşma.',
        status: 'research',
      },
    ],
    notes: [
      {
        version: '2.9.0',
        date: '20 Kasım 2026',
        items: ['Zamanlanmış mesajlar', 'Kendinize mesaj gönderme'],
      },
      {
        version: '2.8.0',
        date: '20 Kasım 2026',
        items: ['Uygulama içi duyurular', 'HÜMA+ üyelerine Günün Oyunu ayrıcalıkları'],
      },
      {
        version: '2.7.3',
        date: '20 Kasım 2026',
        items: ['Günün Oyunu için yeni soru paketi'],
      },
    ],
  },
  defteria: {
    kind: 'Not ve çizim uygulaması',
    tagline: 'Kalem kâğıt kadar doğal.',
    text: 'Tablet ve telefon için ücretsiz ve reklamsız bir not uygulaması. Kalemle de, klavyeyle de.',
    status: "Android'de deneme sürümü",
    features: [
      {
        key: 'pen',
        eyebrow: 'Kalemle yazma',
        title: 'Kâğıda yazar gibi.',
        text: 'Basınç hassasiyetli kalemler, farklı çizgi tipleri, silgi modları ve S Pen yan tuşu desteği. Defter sayfaları alt alta akar.',
      },
      {
        key: 'pdf',
        eyebrow: 'PDF',
        title: 'PDF’lerin üzerine yazın.',
        text: 'Ders notlarını ve belgeleri doğrudan işaretleyin, altını çizin, sonra PDF olarak dışa aktarın.',
      },
      {
        key: 'ocr',
        eyebrow: 'El yazısı tanıma',
        title: 'El yazınız, metne dönüşsün.',
        text: 'Türkçe el yazınız cihazınızda metne çevrilir ve el yazılarınızın içinde arama yapabilirsiniz. Hiçbir sunucuya gönderilmez.',
      },
      {
        key: 'audio',
        eyebrow: 'Ses kaydı',
        title: 'Dersi kaydedin, notla eşleşsin.',
        text: 'Ders sırasında ses kaydı alın. Kaydı dinlerken o anda yazdığınız notlar öne çıkar.',
      },
    ],
    more: [
      {
        title: 'Kement ve şekiller',
        text: 'Yazdıklarınızı seçip taşıyın, büyütün. Basılı tutunca çizdiğiniz şekil düzelir.',
      },
      {
        title: 'Klasörler ve etiketler',
        text: 'Defterlerinizi klasörlere ayırın, etiketlerle hızlıca bulun.',
      },
      {
        title: 'Eşitleme',
        text: 'İsterseniz Üstüner Hesabı ya da Google ile giriş yapın, notlarınız cihazlarınız arasında eşitlensin.',
      },
      {
        title: 'Yedekleme',
        text: 'Bütün notlarınızı tek dosyada yedekleyin ve geri yükleyin.',
      },
      {
        title: 'Görseller',
        text: 'Sayfalara fotoğraf ve görsel ekleyin, doğrudan sayfaya yazın.',
      },
      {
        title: 'Deftere özel ayarlar',
        text: 'Sayfa rengi, tam ekran ve her defter için ayrı ayarlar.',
      },
    ],
    roadmap: [
      {
        title: 'Google Play sürümü',
        text: 'Defteria şu anda Google Play’de kapalı testte.',
        status: 'testing',
      },
      {
        title: 'Birlikte düzenleme',
        text: 'Arkadaşlarınızla aynı deftere aynı anda yazın; HÜMA ile davet edin, sesli sohbet edin.',
        status: 'planned',
      },
      {
        title: 'Yapay zekâ',
        text: 'Notlarınızı özetleme ve düzenleme, her gün ücretsiz bir kullanım hakkıyla.',
        status: 'planned',
      },
      {
        title: 'iPad ve bilgisayar',
        text: 'Defteria’yı iPad’de ve bilgisayarda da kullanabilmeniz için çalışıyoruz.',
        status: 'planned',
      },
    ],
    notes: [
      {
        version: '1.0.30',
        date: '16 Kasım 2026',
        items: [
          'Daha akıcı kaydırma',
          'Bazı PDF sayfalarının açılmaması sorunu giderildi',
          'El yazısının içinde arama',
          'Kalem ve kement iyileştirmeleri',
        ],
      },
      {
        version: '1.0.28',
        date: '14 Kasım 2026',
        items: [
          'Google ile giriş',
          'Daha hızlı çizim',
          'Yeni çizgi tipleri ve silgi modları',
          'Kementle büyütme',
          'Görsel ekleme ve sayfaya doğrudan yazı',
          'Tam ekran ve deftere özel ayarlar',
        ],
      },
      {
        version: '1.0.24',
        date: '8 Kasım 2026',
        items: [
          'Üstüner Hesabı ile giriş ve otomatik eşitleme',
          'Bütün notları yedekleme ve geri yükleme',
          'S Pen yan tuşu desteği',
          'Sayfa rengi ve aşağı çekince yeni sayfa',
        ],
      },
      {
        version: '1.0.16',
        date: '7 Kasım 2026',
        items: [
          'Yeni araç çubuğu ve renk skalası',
          'Basılı tutunca şekil düzeltme',
          'Alt alta akan sayfalar',
          'Daha hızlı PDF açılışı',
        ],
      },
      {
        version: '1.0',
        date: '5 Kasım 2026',
        items: [
          'İlk sürüm: kalemle yazma, el yazısı tanıma, ses kaydı eşleşmesi, kement, klasörler ve etiketler',
        ],
      },
    ],
  },
  notFound: {
    title: 'Sayfa bulunamadı',
    text: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.',
  },
}

const en = {
  lang: 'en',
  nav: {
    home: 'Home',
    huma: 'HÜMA',
    defteria: 'Defteria',
    vega: 'VEGA',
    about: 'About',
    team: 'Team',
    contact: 'Contact',
    open: 'Open menu',
    close: 'Close menu',
    switchTo: 'Türkçeye geç',
  },
  common: {
    more: 'Learn more',
    download: 'Download for Android',
    downloadApk: 'Download APK',
    playSoon: 'Coming to Google Play',
    play: 'Open in Google Play',
    version: 'Version',
    size: 'Size',
    updated: 'Updated',
    mb: 'MB',
    openRole: 'Open role',
    back: 'Back to home',
  },
  status: {
    live: 'Live',
    beta: 'Beta',
    dev: 'In development',
    planned: 'Planned',
    research: 'In research',
    preparing: 'In progress',
    testing: 'In closed testing',
  },
  home: {
    eyebrow: 'Üstüner Software · Ankara',
    title1: 'Simpler software.',
    title2: 'Less clutter.',
    lead: 'We design and build the apps you use every day ourselves. Our goal is to run all of them on our own infrastructure.',
    ctaApps: 'Explore the apps',
    ctaContact: 'Write to us',
    huma: {
      kind: 'Messaging and social',
      tagline: 'Conversation, simplified.',
      text: 'Chats, calls, communities and Hüma AI. All in one simple app.',
      status: 'Android · Coming to Google Play',
    },
    defteria: {
      kind: 'Notes and drawing',
      tagline: 'As natural as pen and paper.',
      text: 'Write with a pen, take notes on PDFs and turn your handwriting into text. Free and ad-free.',
      status: 'Beta on Android',
    },
    vega: {
      kind: 'Desktop AI assistant',
      tagline: 'Your computer, by voice.',
      text: 'We are working on an assistant that controls your computer with voice and text commands.',
    },
    join: {
      kind: 'Team',
      tagline: 'Build it with us.',
      text: 'We are looking for new teammates in software, design, social media and moderation.',
      cta: 'Apply',
    },
    about: {
      eyebrow: 'About',
      title: 'A small team.',
      title2: 'A long road.',
      text: 'Üstüner Software is a software startup founded by Kerem Üstüner, building apps with his own team. We take every step ourselves, from the idea and design to the code and the release. We started in Ankara, and we want to make apps people really use every day.',
      values: [
        {
          title: 'Simplicity',
          text: 'No clutter. Every screen should do one job well.',
        },
        {
          title: 'Respect for privacy',
          text: 'We only ask for the data we need. We never sell it or use it for ads.',
        },
        {
          title: 'Independent infrastructure',
          text: 'Our long-term goal is to run our apps on our own infrastructure.',
        },
      ],
    },
    team: {
      eyebrow: 'Team',
      title: 'Team chart',
      lead: 'Our founder and the team working together. If you would like to join the team, write to us.',
      founder: {
        name: 'Kerem Üstüner',
        role: 'Founder · General Coordinator',
        text: 'Product, software and design',
      },
      roles: [
        { title: 'Software', text: 'App and server development' },
        { title: 'Design', text: 'Interface, icons and brand' },
        { title: 'Social media and growth', text: 'Promotion and community' },
        { title: 'Moderation', text: 'Keeping the HÜMA community safe' },
      ],
      cta: 'The team is growing. Join us',
      mailSubject: 'I would like to join the Üstüner Software team',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Support, ideas or partnerships',
      text: 'You can reach us by email about any of our apps.',
    },
  },
  footer: {
    tagline: 'A software startup from Ankara.',
    apps: 'Apps',
    support: 'Support',
    legal: 'Legal',
    humaPrivacy: 'HÜMA Privacy Policy',
    defteriaPrivacy: 'Defteria Privacy Policy',
    humaDeletion: 'HÜMA account deletion',
    defteriaDeletion: 'Defteria account deletion',
    contact: 'Contact',
    join: 'Join the team',
    rights: 'Üstüner Software',
  },
  app: {
    nowEyebrow: 'In the app',
    moreTitle: 'And more.',
    roadmapEyebrow: 'Roadmap',
    roadmapTitle: 'What is next',
    notesEyebrow: 'Release notes',
    notesTitle: 'What changed',
    installEyebrow: 'Installation',
    installTitle: 'How to install the APK',
    installNote: 'When the Google Play version is released, you will get updates directly from Google Play.',
    install: [
      {
        title: 'Download',
        text: 'Tap the download button on this page. The file goes to your phone’s Downloads folder.',
      },
      {
        title: 'Allow',
        text: 'If Android asks, turn on “Allow from this source” for your browser.',
      },
      {
        title: 'Install',
        text: 'Tap the downloaded file and choose “Install”. You install new versions the same way, over the old one.',
      },
      {
        title: 'Open',
        text: 'Open the app and start using it.',
      },
    ],
    trustEyebrow: 'Trust',
    trustTitle: 'Privacy and your account',
    privacy: 'Privacy Policy',
    deletion: 'Account deletion',
    box: 'Download for Android',
    boxNote: 'Free · No ads',
  },
  huma: {
    kind: 'Messaging and social app',
    tagline: 'Conversation, simplified.',
    text: 'A simple, fast and reliable messaging app for everyone. From Türkiye to the world.',
    status: 'Android · Coming to Google Play',
    features: [
      {
        key: 'chat',
        eyebrow: 'Chats',
        title: 'Messaging as easy as it should be.',
        text: 'Send photos, videos, voice messages, files, polls and your location. People find you by your nickname, not your phone number.',
      },
      {
        key: 'secret',
        eyebrow: 'Secret chats',
        title: 'Just you and the other person.',
        text: 'Messages in secret chats are encrypted on your device and can only be opened on the other person’s device. The server only keeps the encrypted version.',
      },
      {
        key: 'call',
        eyebrow: 'Calls',
        title: 'Voice and video calls.',
        text: 'One-to-one and group calls connect directly between devices when possible. Calls are never recorded.',
      },
      {
        key: 'ai',
        eyebrow: 'Hüma AI',
        title: 'An AI assistant inside.',
        text: 'Get a summary of a long chat, translate messages or ask for a reply suggestion. Just type @hüma in a chat. It is not available in secret chats.',
      },
    ],
    more: [
      {
        title: 'Feed and stories',
        text: 'Share photos and videos in the feed and add 24-hour stories.',
      },
      {
        title: 'Communities and channels',
        text: 'Shared rooms for communities and one-way announcement channels.',
      },
      {
        title: 'Daily Game',
        text: 'A new two-minute puzzle every day: Word of the Day, Connections and city questions.',
      },
      {
        title: 'Contacts',
        text: 'See which of your contacts use HÜMA and invite the others with one tap.',
      },
      {
        title: 'App lock',
        text: 'Lock HÜMA with your fingerprint or face. Biometric data never leaves your device.',
      },
      {
        title: 'Dark theme',
        text: 'A simple black-and-white interface that is easy on the eyes.',
      },
    ],
    roadmap: [
      {
        title: 'Google Play version',
        text: 'You will be able to download and update HÜMA from Google Play.',
        status: 'preparing',
      },
      {
        title: 'SMS without internet',
        text: 'When you have signal but no internet, your message is sent as an SMS.',
        status: 'planned',
      },
      {
        title: 'Messaging without a network',
        text: 'Messaging through nearby devices, even with no internet and no signal.',
        status: 'research',
      },
    ],
    notes: [
      {
        version: '2.9.0',
        date: 'November 20, 2026',
        items: ['Scheduled messages', 'Send messages to yourself'],
      },
      {
        version: '2.8.0',
        date: 'November 20, 2026',
        items: ['In-app announcements', 'Daily Game perks for HÜMA+ members'],
      },
      {
        version: '2.7.3',
        date: 'November 20, 2026',
        items: ['New question pack for the Daily Game'],
      },
    ],
  },
  defteria: {
    kind: 'Notes and drawing app',
    tagline: 'As natural as pen and paper.',
    text: 'A free, ad-free notes app for tablets and phones. With a pen or a keyboard.',
    status: 'Beta on Android',
    features: [
      {
        key: 'pen',
        eyebrow: 'Pen writing',
        title: 'Just like writing on paper.',
        text: 'Pressure-sensitive pens, different line types, eraser modes and S Pen side button support. Notebook pages flow one under another.',
      },
      {
        key: 'pdf',
        eyebrow: 'PDF',
        title: 'Write on your PDFs.',
        text: 'Mark up lecture notes and documents directly, underline them, then export them as PDF.',
      },
      {
        key: 'ocr',
        eyebrow: 'Handwriting recognition',
        title: 'Turn your handwriting into text.',
        text: 'Your Turkish handwriting is turned into text on your device, and you can search inside your handwritten notes. Nothing is sent to a server.',
      },
      {
        key: 'audio',
        eyebrow: 'Audio recording',
        title: 'Record the class, linked to your notes.',
        text: 'Record audio during class. When you listen back, the notes you wrote at that moment are highlighted.',
      },
    ],
    more: [
      {
        title: 'Lasso and shapes',
        text: 'Select what you wrote, move it and resize it. Hold at the end of a stroke and your shape is cleaned up.',
      },
      {
        title: 'Folders and tags',
        text: 'Organize notebooks in folders and find them quickly with tags.',
      },
      {
        title: 'Sync',
        text: 'If you want, sign in with an Üstüner Account or Google and your notes sync across your devices.',
      },
      {
        title: 'Backup',
        text: 'Back up all your notes in one file and restore them.',
      },
      {
        title: 'Images',
        text: 'Add photos and images to pages, and type directly on the page.',
      },
      {
        title: 'Per-notebook settings',
        text: 'Page color, full screen and separate settings for each notebook.',
      },
    ],
    roadmap: [
      {
        title: 'Google Play version',
        text: 'Defteria is currently in closed testing on Google Play.',
        status: 'testing',
      },
      {
        title: 'Real-time collaboration',
        text: 'Write in the same notebook with friends at the same time; invite them with HÜMA and talk by voice.',
        status: 'planned',
      },
      {
        title: 'AI',
        text: 'Summarize and organize your notes, with a free daily allowance.',
        status: 'planned',
      },
      {
        title: 'iPad and computer',
        text: 'We are working to bring Defteria to iPad and computers too.',
        status: 'planned',
      },
    ],
    notes: [
      {
        version: '1.0.30',
        date: 'November 16, 2026',
        items: [
          'Smoother scrolling',
          'Fixed some PDF pages not opening',
          'Search inside handwriting',
          'Pen and lasso improvements',
        ],
      },
      {
        version: '1.0.28',
        date: 'November 14, 2026',
        items: [
          'Sign in with Google',
          'Faster drawing',
          'New line types and eraser modes',
          'Resize with the lasso',
          'Add images and type directly on the page',
          'Full screen and per-notebook settings',
        ],
      },
      {
        version: '1.0.24',
        date: 'November 8, 2026',
        items: [
          'Sign in with an Üstüner Account and automatic sync',
          'Back up and restore all notes',
          'S Pen side button support',
          'Page color and pull down for a new page',
        ],
      },
      {
        version: '1.0.16',
        date: 'November 7, 2026',
        items: [
          'New toolbar and color palette',
          'Hold to clean up shapes',
          'Pages that flow one under another',
          'Faster PDF opening',
        ],
      },
      {
        version: '1.0',
        date: 'November 5, 2026',
        items: [
          'First release: pen writing, handwriting recognition, linked audio recording, lasso, folders and tags',
        ],
      },
    ],
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for may have moved or may never have existed.',
  },
}

export const dict = { tr, en }
