const tr = {
  humaPrivacy: {
    eyebrow: 'HÜMA',
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 21 Kasım 2026',
    intro: 'Bu metin, HÜMA’yı (web uygulaması ve Android uygulaması) kullandığınızda hangi bilgilerin toplandığını, nasıl kullanıldığını ve nasıl silebileceğinizi anlatır. HÜMA, Kerem Üstüner tarafından Üstüner Software adıyla geliştirilir (Ankara, Türkiye). HÜMA’yı kullanmak için en az 13 yaşında olmalısınız.',
    sections: [
      { h: 'Topladığımız bilgiler', blocks: [
        { table: { head: ['Bilgi', 'Neden', 'Kimler görür'], rows: [
          ['Ad soyad, takma ad, profil fotoğrafı, “hakkında” yazısı', 'Profiliniz ve sizi bulabilmeleri için', 'HÜMA kullanıcıları'],
          ['E-posta, telefon numarası', 'Giriş yapmak ve hesabınızı korumak; ayarlarda izin verirseniz numaranız ya da e-postanızla bulunabilmeniz için', 'Kimse görmez'],
          ['Doğum tarihi', 'Yaş sınırını kontrol etmek', 'Kimse görmez'],
          ['Mesajlar, fotoğraflar, videolar, sesli mesajlar, dosyalar, anketler', 'Sohbetlerin çalışması için', 'Yalnızca sohbetteki kişiler'],
          ['Konum (yalnızca siz paylaşırsanız)', 'Konum mesajı ve canlı konum', 'Yalnızca o sohbetteki kişiler'],
          ['Hikâyeler', '24 saat boyunca paylaşmak', 'Birebir sohbet ettiğiniz kişiler; 24 saat sonra silinir'],
          ['Akış gönderileri, yorumlar, beğeniler, takip ettikleriniz', 'Akış özelliği', 'HÜMA kullanıcıları; kaydettiğiniz gönderileri yalnızca siz görürsünüz'],
          ['Günün Oyunu sonuçları, seri, altın ve elmas bakiyesi', 'Oyun ve ödül sistemi', 'Kimse görmez; sonucunuzu sohbette paylaşırsanız sohbettekiler görür'],
          ['Topluluk ve kanal mesajları', 'Topluluklar özelliği', 'O topluluğun üyeleri'],
          ['Son görülme, okundu bilgisi, yazıyor durumu', 'Sohbet durumunu göstermek; ayarlardan kapatabilirsiniz', 'Sohbet ettiğiniz kişiler'],
          ['Bildirim anahtarı (cihaz kimliği değildir)', 'Size bildirim gönderebilmek', 'Kimse görmez'],
        ] } },
        'Bilgilerinizi satmayız ve reklam için kullanmayız. Şu an uygulamada reklam gösterilmiyor; ileride reklam eklenirse bu sayfa güncellenir. Elmas ve altın gerçek paraya çevrilmez, satılmaz.',
      ] },
      { h: 'Gizli sohbetler', blocks: [
        'Gizli sohbetlerdeki mesajlar sizin cihazınızda şifrelenir ve yalnızca karşınızdaki kişinin cihazında açılır. Sunucuda sadece şifreli hâli durur; HÜMA dahil kimse okuyamaz. Normal sohbetler uçtan uca şifreli değildir; aktarım sırasında şifrelenir ve sunucuda saklanır.',
      ] },
      { h: 'Aramalar', blocks: [
        'Sesli ve görüntülü aramalar mümkün olduğunda doğrudan cihazlar arasında kurulur. Bağlantı kurulamazsa ve grup görüşmelerinde ses ve görüntü Cloudflare sunucularından geçer. Aramalar kaydedilmez.',
      ] },
      { h: 'Hüma AI', blocks: [
        'Hüma AI’ya yazdıklarınız; özet, çeviri ya da cevap önerisi istediğinizde seçtiğiniz sohbetin mesajları; bir sohbette @hüma yazdığınızda o sohbetin son mesajları ve yazıya çevirmek istediğiniz sesli mesajlar, cevap üretmek için Groq’a gönderilir. Bu veriler model eğitmek için kullanılmaz. Gizli sohbetlerde Hüma AI kullanılamaz. Hüma AI’nın uygunsuz bir cevabını sohbet içinden şikâyet edebilirsiniz.',
      ] },
      { h: 'Hizmet sağlayıcılar', blocks: [
        { ul: [
          '**Google Firebase:** hesap, veritabanı ve bildirimler',
          '**Cloudinary:** fotoğraf, video, ses ve dosyaların saklanması',
          '**Netlify ve Cloudflare:** web sitesi, sunucu işlevleri ve arama bağlantıları',
          '**Groq:** Hüma AI özellikleri',
        ] },
        'Bu hizmetler verileri yalnızca HÜMA’nın çalışması için işler. Sunucular Türkiye dışında olabilir; bu nedenle verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu’na (KVKK) uygun şekilde yurt dışına aktarılabilir. Yasal bir zorunluluk olduğunda yetkili kamu kurumlarıyla paylaşılabilir.',
      ] },
      { h: 'Uygulama izinleri', blocks: [
        { ul: [
          '**Kamera ve mikrofon:** fotoğraf ve video çekmek, sesli mesaj ve aramalar için',
          '**Konum:** yalnızca konum paylaştığınızda',
          '**Bildirimler:** yeni mesaj ve arama bildirimleri',
          '**Rehber:** yalnızca Kişiler sekmesini kullandığınızda, rehberinizdeki HÜMA kullanıcılarını göstermek için',
          '**Parmak izi / yüz tanıma:** uygulama kilidi için; biyometrik veri cihazınızdan çıkmaz',
        ] },
      ] },
      { h: 'Güvenlik ve kurallar', blocks: [
        'Taciz, nefret söylemi, şiddet, spam, cinsel içerik ve çocukları tehlikeye atan her türlü içerik yasaktır. Kişileri, mesajları ve gönderileri uygulama içinden şikâyet edebilir ve engelleyebilirsiniz. Kuralları çiğneyen hesaplar kapatılabilir.',
      ] },
      { h: 'Verilerinizi silme', blocks: [
        'Hesabınızı istediğiniz an **Ayarlar → Hesabı sil** ile silebilirsiniz. Profiliniz, telefon numaranız, takma adınız, gönderileriniz, hikâyeleriniz ve takip bilgileriniz hemen silinir. Gönderdiğiniz sohbet mesajları karşı tarafın sohbet geçmişinde “Silinmiş hesap” adıyla kalabilir; bunları silmek isterseniz silmeden önce mesajlarınızı tek tek “Herkesten sil” ile kaldırabilirsiniz. Uygulamaya giremiyorsanız [hesap silme sayfasındaki](/huma/hesap-silme) adımları izleyin.',
      ] },
      { h: 'Haklarınız', blocks: [
        'KVKK’nın 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, bilgi isteme, düzeltilmesini ya da silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Başvurunuzu {email} adresine gönderebilirsiniz.',
      ] },
      { h: 'Çocuklar', blocks: [
        'HÜMA 13 yaşından küçükler için değildir. 13 yaşından küçük birinin hesap açtığını fark edersek hesabı sileriz.',
      ] },
      { h: 'Değişiklikler', blocks: [
        'Bu politika değişirse bu sayfayı güncelleriz ve tarihini değiştiririz. Önemli değişiklikleri uygulama içinden de duyururuz.',
      ] },
      { h: 'İletişim', blocks: ['Sorularınız ve talepleriniz için: {email}'] },
    ],
  },
  humaDeletion: {
    eyebrow: 'HÜMA',
    title: 'Hesabınızı silme',
    updated: 'HÜMA hesabınızı ve verilerinizi nasıl silersiniz',
    intro: 'Bu sayfa, Üstüner Software tarafından geliştirilen HÜMA uygulamasındaki hesabınızı ve verilerinizi nasıl silebileceğinizi anlatır.',
    sections: [
      { h: 'Uygulamadan silme', blocks: [
        { ol: ['HÜMA’yı açın ve giriş yapın.', 'Alttan **Ayarlar**’a dokunun.', 'En alttaki **Hesabı sil**’e dokunun.', 'Şifrenizi yazıp onaylayın.'] },
      ] },
      { h: 'Uygulamaya giremiyorsanız', blocks: [
        'Hesabınıza kayıtlı e-posta adresinden {email} adresine **“HÜMA hesap silme”** konulu bir e-posta gönderin ve takma adınızı yazın. Talebinizi doğrulayıp en geç 30 gün içinde yerine getiririz.',
      ] },
      { h: 'Neler silinir', blocks: [
        { ul: [
          'Profiliniz: ad soyad, takma ad, fotoğraf, “hakkında” yazısı',
          'Telefon numaranız, doğum tarihiniz ve giriş bilgileriniz',
          'Akış gönderileriniz, hikâyeleriniz, takip bilgileriniz',
          'Gizli sohbet anahtarlarınız',
          'Topluluk üyelikleriniz ve Hüma AI sohbet geçmişiniz',
        ] },
      ] },
      { h: 'Neler kalabilir', blocks: [
        { ul: [
          'Başkalarına gönderdiğiniz sohbet mesajları, onların sohbet geçmişinde “Silinmiş hesap” adıyla kalır. Silmeden önce bunları “Herkesten sil” ile kaldırabilirsiniz.',
          'Hakkınızda yapılmış kötüye kullanım şikâyetleri güvenlik amacıyla saklanabilir.',
          'Yedeklerde kalan kopyalar en geç 30 gün içinde kendiliğinden silinir.',
        ] },
      ] },
    ],
  },
  defteriaPrivacy: {
    eyebrow: 'Defteria',
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 21 Kasım 2026',
    intro: 'Defteria, Kerem Üstüner tarafından Üstüner Software adıyla geliştirilen bir not alma uygulamasıdır (Ankara, Türkiye). Bu sayfa, uygulamanın hangi bilgileri neden kullandığını ve bunları nasıl kontrol edebileceğinizi açıklar.',
    sections: [
      { h: 'Kısaca', blocks: [
        'Hesap açmadan kullandığınızda notlarınız sadece cihazınızda kalır ve hiçbir bilginiz bize gelmez. Hesap açarsanız notlarınız, cihazlarınız arasında eşitlenmek için sunucumuzda saklanır. Reklam yoktur; verileriniz satılmaz ve reklam için kullanılmaz.',
      ] },
      { h: '1. Hesapsız kullanım', blocks: [
        'Defterler, sayfalar, çizimler, metinler, içe aktarılan PDF’ler ve ses kayıtları yalnızca cihazınızın uygulama klasöründe saklanır. Bu durumda bize hiçbir kişisel veri ulaşmaz.',
      ] },
      { h: '2. Üstüner Hesabı ile eşitleme (isteğe bağlı)', blocks: [
        'Notlarınızı birden fazla cihazda kullanmak için Üstüner Hesabı ya da Google ile giriş yapabilirsiniz. Üstüner Hesabı, HÜMA uygulamasıyla ortak kullanılan hesaptır. Bu durumda:',
        { ul: [
          '**Hesap bilgileri:** e-posta adresiniz, adınız ve hesap kimliğiniz. Giriş ve hesap güvenliği Google Firebase Authentication hizmetiyle sağlanır.',
          '**Eşitlenen içerik:** defterleriniz, sayfalarınız, çizimleriniz, metin kutularınız, etiket ve klasör bilgileriniz. Bunlar şifreli bağlantıyla (HTTPS) Cloudflare altyapısındaki sunucumuza gönderilir ve yalnızca sizin hesabınızla erişilebilir.',
          '**Eşitlenmeyenler:** içe aktardığınız PDF dosyaları ve ses kayıtları sunucuya gönderilmez, sadece eklendikleri cihazda kalır.',
        ] },
      ] },
      { h: '3. El yazısı tanıma', blocks: [
        'El yazınızı metne çevirme özelliği Google ML Kit ile cihazınızın üzerinde çalışır. İlk kullanımda Türkçe tanıma modeli Google’dan bir kez indirilir; el yazınız tanınmak için bir sunucuya gönderilmez.',
      ] },
      { h: '4. Mikrofon', blocks: [
        'Mikrofon izni sadece siz ses kaydı başlattığınızda kullanılır. Kayıtlar yalnızca cihazınızda saklanır.',
      ] },
      { h: '5. Paylaştığımız taraflar', blocks: [
        'Verileriniz satılmaz ve reklam için kullanılmaz. Yalnızca hizmeti çalıştırmak için şu altyapı sağlayıcıları kullanılır: Google (Firebase Authentication, ML Kit modeli) ve Cloudflare (eşitleme sunucusu). Uygulamada reklam, analiz veya takip aracı yoktur.',
      ] },
      { h: '6. Saklama ve silme', blocks: [
        'Hesabınız açık olduğu sürece eşitlenen notlarınız saklanır. İstediğiniz zaman silebilirsiniz:',
        { ul: [
          '**Uygulamada:** Kütüphane → hesap simgesi → **Hesabı ya da bulut verilerini sil**. Silme işlemi hemen yapılır.',
          '**Uygulamaya erişemiyorsanız:** [hesap silme sayfasındaki](/defteria/hesap-silme) adımlarla bize yazın; talebiniz en geç 30 gün içinde yerine getirilir.',
        ] },
      ] },
      { h: '7. Çocuklar', blocks: [
        'Defteria’nın hesap ve eşitleme özellikleri 13 yaşından küçük çocuklara yönelik değildir ve bu yaştaki çocuklardan bilerek kişisel veri toplanmaz.',
      ] },
      { h: '8. Haklarınız', blocks: [
        '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verilerinize erişme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Talepleriniz için: {email}',
      ] },
      { h: '9. Değişiklikler', blocks: [
        'Bu politika değişirse güncel hâli bu sayfada, tarihiyle birlikte yayınlanır.',
      ] },
    ],
  },
  defteriaDeletion: {
    eyebrow: 'Defteria',
    title: 'Hesap ve veri silme',
    updated: 'Defteria hesabınızı ve bulut verilerinizi nasıl silersiniz',
    intro: 'Defteria’da Üstüner Hesabı ile eşitlediğiniz notları ya da hesabınızın tamamını silebilirsiniz. Cihazınızdaki notlar, siz uygulamayı silmedikçe silinmez.',
    sections: [
      { h: 'Uygulamadan silme (hemen)', blocks: [
        { ol: [
          'Defteria’yı açın, kütüphanenin sağ üstündeki hesap / bulut simgesine dokunun.',
          '**Hesabı ya da bulut verilerini sil**’e dokunun.',
          'Seçin: **Sadece buluttaki Defteria notlarım** (sunucudaki bütün defterleriniz silinir, hesabınız kalır) ya da **Üstüner Hesabımı tamamen sil** (hesabınız ve sunucudaki bütün notlarınız kalıcı olarak silinir).',
          'Onaylayın. Silme işlemi hemen yapılır ve geri alınamaz.',
        ] },
        'Hesabınız aynı zamanda bir HÜMA hesabıysa Defteria notlarınız hemen silinir; hesabın kendisini HÜMA’daki hesap silme bölümünden ya da [HÜMA hesap silme sayfasından](/huma/hesap-silme) silebilirsiniz.',
      ] },
      { h: 'Uygulamaya erişemiyorsanız', blocks: [
        '{email} adresine, hesabınızın e-posta adresinden **“Defteria hesap silme”** konulu bir e-posta gönderin. Kimliğinizi doğruladıktan sonra hesabınız ve sunucudaki bütün notlarınız en geç 30 gün içinde silinir.',
      ] },
      { h: 'Neler silinir', blocks: [
        { ul: [
          'Hesap bilgileriniz (e-posta, ad, hesap kimliği), tam silme seçildiğinde',
          'Sunucuda eşitlenen bütün defterler, sayfalar, çizimler, metinler ve klasör bilgileri',
        ] },
        'Sunucuda tutulan başka bir veri yoktur; yedeklerde kalan kopyalar da 30 gün içinde silinir.',
      ] },
    ],
  },
}

const en = {
  humaPrivacy: {
    eyebrow: 'HÜMA',
    title: 'Privacy Policy',
    updated: 'Last updated: November 21, 2026',
    intro: 'This page explains what information is collected when you use HÜMA (the web app and the Android app), how it is used and how you can delete it. HÜMA is developed by Kerem Üstüner under the name Üstüner Software (Ankara, Türkiye). You must be at least 13 years old to use HÜMA.',
    sections: [
      { h: 'Information we collect', blocks: [
        { table: { head: ['Information', 'Why', 'Who can see it'], rows: [
          ['Full name, nickname, profile photo, “about” text', 'Your profile, and so people can find you', 'HÜMA users'],
          ['Email, phone number', 'Signing in and protecting your account; if you allow it in settings, so people can find you by number or email', 'No one'],
          ['Date of birth', 'Checking the minimum age', 'No one'],
          ['Messages, photos, videos, voice messages, files, polls', 'So chats work', 'Only the people in the chat'],
          ['Location (only if you share it)', 'Location messages and live location', 'Only the people in that chat'],
          ['Stories', 'Sharing for 24 hours', 'People you chat with one-to-one; deleted after 24 hours'],
          ['Feed posts, comments, likes, who you follow', 'The feed feature', 'HÜMA users; only you see posts you save'],
          ['Daily Game results, streak, gold and gem balance', 'The game and reward system', 'No one; if you share a result in a chat, people in that chat see it'],
          ['Community and channel messages', 'The communities feature', 'Members of that community'],
          ['Last seen, read receipts, typing status', 'Showing chat status; you can turn this off in settings', 'People you chat with'],
          ['Notification token (not a device ID)', 'Sending you notifications', 'No one'],
        ] } },
        'We do not sell your information or use it for advertising. There are no ads in the app right now; if ads are added later, this page will be updated. Gems and gold cannot be turned into real money and are not sold.',
      ] },
      { h: 'Secret chats', blocks: [
        'Messages in secret chats are encrypted on your device and can only be opened on the other person’s device. The server only keeps the encrypted version; no one, including HÜMA, can read them. Normal chats are not end-to-end encrypted; they are encrypted in transit and stored on the server.',
      ] },
      { h: 'Calls', blocks: [
        'Voice and video calls connect directly between devices when possible. If a direct connection fails, and in group calls, audio and video pass through Cloudflare servers. Calls are never recorded.',
      ] },
      { h: 'Hüma AI', blocks: [
        'What you write to Hüma AI; the messages of a chat you choose when you ask for a summary, translation or reply suggestion; the latest messages of a chat when you type @hüma in it; and voice messages you want transcribed are sent to Groq to generate a reply. This data is not used to train models. Hüma AI cannot be used in secret chats. You can report an inappropriate Hüma AI reply from inside the chat.',
      ] },
      { h: 'Service providers', blocks: [
        { ul: [
          '**Google Firebase:** accounts, database and notifications',
          '**Cloudinary:** storing photos, videos, audio and files',
          '**Netlify and Cloudflare:** website, server functions and call connections',
          '**Groq:** Hüma AI features',
        ] },
        'These services process data only so that HÜMA can work. Their servers may be outside Türkiye, so your data may be transferred abroad in line with the Turkish Personal Data Protection Law No. 6698 (KVKK). We may share data with authorities when the law requires it.',
      ] },
      { h: 'App permissions', blocks: [
        { ul: [
          '**Camera and microphone:** taking photos and videos, voice messages and calls',
          '**Location:** only when you share your location',
          '**Notifications:** new message and call notifications',
          '**Contacts:** only when you use the Contacts tab, to show which of your contacts use HÜMA',
          '**Fingerprint / face unlock:** for the app lock; biometric data never leaves your device',
        ] },
      ] },
      { h: 'Safety and rules', blocks: [
        'Harassment, hate speech, violence, spam, sexual content and anything that puts children at risk are not allowed. You can report and block people, messages and posts inside the app. Accounts that break the rules may be closed.',
      ] },
      { h: 'Deleting your data', blocks: [
        'You can delete your account at any time with **Settings → Delete account**. Your profile, phone number, nickname, posts, stories and follow data are deleted immediately. Chat messages you sent may stay in the other person’s chat history under the name “Deleted account”; if you want them gone, remove them one by one with “Delete for everyone” before deleting your account. If you cannot open the app, follow the steps on the [account deletion page](/huma/hesap-silme).',
      ] },
      { h: 'Your rights', blocks: [
        'Under Article 11 of KVKK, you have the right to learn whether your data is processed, ask for information about it, ask for it to be corrected or deleted, and object to processing. You can send your request to {email}.',
      ] },
      { h: 'Children', blocks: [
        'HÜMA is not for children under 13. If we find that someone under 13 has opened an account, we delete it.',
      ] },
      { h: 'Changes', blocks: [
        'If this policy changes, we update this page and its date. We also announce important changes inside the app.',
      ] },
      { h: 'Contact', blocks: ['For questions and requests: {email}'] },
    ],
  },
  humaDeletion: {
    eyebrow: 'HÜMA',
    title: 'Delete your account',
    updated: 'How to delete your HÜMA account and data',
    intro: 'This page explains how to delete your account and data in HÜMA, an app developed by Üstüner Software.',
    sections: [
      { h: 'Delete in the app', blocks: [
        { ol: ['Open HÜMA and sign in.', 'Tap **Settings** at the bottom.', 'Tap **Delete account** at the very bottom.', 'Enter your password and confirm.'] },
      ] },
      { h: 'If you cannot open the app', blocks: [
        'From the email address registered to your account, send an email to {email} with the subject **“HÜMA account deletion”** and include your nickname. We will verify your request and complete it within 30 days at the latest.',
      ] },
      { h: 'What is deleted', blocks: [
        { ul: [
          'Your profile: full name, nickname, photo, “about” text',
          'Your phone number, date of birth and sign-in details',
          'Your feed posts, stories and follow data',
          'Your secret chat keys',
          'Your community memberships and Hüma AI chat history',
        ] },
      ] },
      { h: 'What may remain', blocks: [
        { ul: [
          'Chat messages you sent to others stay in their chat history under the name “Deleted account”. You can remove them with “Delete for everyone” before deleting your account.',
          'Abuse reports made about you may be kept for safety reasons.',
          'Copies in backups are deleted automatically within 30 days at the latest.',
        ] },
      ] },
    ],
  },
  defteriaPrivacy: {
    eyebrow: 'Defteria',
    title: 'Privacy Policy',
    updated: 'Last updated: November 21, 2026',
    intro: 'Defteria is a note-taking app developed by Kerem Üstüner under the name Üstüner Software (Ankara, Türkiye). This page explains what information the app uses, why, and how you can control it.',
    sections: [
      { h: 'In short', blocks: [
        'If you use the app without an account, your notes stay only on your device and no information reaches us. If you create an account, your notes are stored on our server so they can sync between your devices. There are no ads; your data is never sold or used for advertising.',
      ] },
      { h: '1. Using without an account', blocks: [
        'Notebooks, pages, drawings, text, imported PDFs and audio recordings are stored only in the app folder on your device. In this case, no personal data reaches us.',
      ] },
      { h: '2. Syncing with an Üstüner Account (optional)', blocks: [
        'To use your notes on more than one device, you can sign in with an Üstüner Account or Google. The Üstüner Account is the same account you use in HÜMA. In this case:',
        { ul: [
          '**Account information:** your email address, name and account ID. Sign-in and account security are provided by Google Firebase Authentication.',
          '**Synced content:** your notebooks, pages, drawings, text boxes, tags and folders. They are sent over an encrypted connection (HTTPS) to our server on Cloudflare and can only be accessed with your account.',
          '**Not synced:** imported PDF files and audio recordings are not sent to the server; they stay on the device where you added them.',
        ] },
      ] },
      { h: '3. Handwriting recognition', blocks: [
        'Turning your handwriting into text works on your device with Google ML Kit. On first use, the Turkish recognition model is downloaded from Google once; your handwriting is never sent to a server for recognition.',
      ] },
      { h: '4. Microphone', blocks: [
        'The microphone permission is used only when you start an audio recording. Recordings are stored only on your device.',
      ] },
      { h: '5. Who we share data with', blocks: [
        'Your data is never sold or used for advertising. Only these infrastructure providers are used to run the service: Google (Firebase Authentication, ML Kit model) and Cloudflare (sync server). The app has no ads, analytics or tracking tools.',
      ] },
      { h: '6. Storage and deletion', blocks: [
        'Your synced notes are kept as long as your account is open. You can delete them at any time:',
        { ul: [
          '**In the app:** Library → account icon → **Delete account or cloud data**. Deletion happens immediately.',
          '**If you cannot open the app:** write to us following the steps on the [account deletion page](/defteria/hesap-silme); your request will be completed within 30 days at the latest.',
        ] },
      ] },
      { h: '7. Children', blocks: [
        'Defteria’s account and sync features are not intended for children under 13, and we do not knowingly collect personal data from children of that age.',
      ] },
      { h: '8. Your rights', blocks: [
        'Under the Turkish Personal Data Protection Law No. 6698, you have the right to access your data and to ask for it to be corrected or deleted. For requests: {email}',
      ] },
      { h: '9. Changes', blocks: [
        'If this policy changes, the current version will be published on this page with its date.',
      ] },
    ],
  },
  defteriaDeletion: {
    eyebrow: 'Defteria',
    title: 'Account and data deletion',
    updated: 'How to delete your Defteria account and cloud data',
    intro: 'In Defteria, you can delete the notes you synced with your Üstüner Account, or your whole account. Notes on your device are not deleted unless you uninstall the app.',
    sections: [
      { h: 'Delete in the app (immediately)', blocks: [
        { ol: [
          'Open Defteria and tap the account / cloud icon at the top right of the library.',
          'Tap **Delete account or cloud data**.',
          'Choose: **Only my Defteria notes in the cloud** (all your notebooks on the server are deleted, your account stays) or **Delete my Üstüner Account completely** (your account and all your notes on the server are permanently deleted).',
          'Confirm. Deletion happens immediately and cannot be undone.',
        ] },
        'If your account is also a HÜMA account, your Defteria notes are deleted immediately; you can delete the account itself in HÜMA or on the [HÜMA account deletion page](/huma/hesap-silme).',
      ] },
      { h: 'If you cannot open the app', blocks: [
        'From your account’s email address, send an email to {email} with the subject **“Defteria account deletion”**. After we verify your identity, your account and all your notes on the server will be deleted within 30 days at the latest.',
      ] },
      { h: 'What is deleted', blocks: [
        { ul: [
          'Your account information (email, name, account ID), when you choose full deletion',
          'All notebooks, pages, drawings, text and folder data synced to the server',
        ] },
        'No other data is kept on the server; copies in backups are also deleted within 30 days.',
      ] },
    ],
  },
}

export const legal = { tr, en }
