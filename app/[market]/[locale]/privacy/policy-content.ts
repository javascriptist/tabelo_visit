/**
 * The privacy policy body, in the three languages the Tabelo Staff app ships.
 *
 * It used to be English on every market and locale, on the reasoning that a
 * machine translation of a legal document is worse than one the reader can
 * fall back on. That holds for marketing copy. It does not hold here: the
 * staff app collects biometric data from people who did not choose to install
 * it, and someone who reads only Russian or only Uzbek could not read what
 * was being collected from them.
 *
 * So all three exist, and `authoritativeNote` says plainly that the English
 * version governs if they ever disagree — which is how the translations can
 * be useful without being load-bearing. THEY HAVE NOT HAD A LEGAL REVIEW.
 */

export const POLICY_LANGUAGES = ['en', 'uz', 'ru'] as const
export type PolicyLanguage = (typeof POLICY_LANGUAGES)[number]

export const POLICY_LANGUAGE_NAMES: Record<PolicyLanguage, string> = {
  en: 'English',
  uz: "O'zbekcha",
  ru: 'Русский',
}

/** A term in bold followed by explanatory text — used inside lists. */
export type ListItem = string | { term: string; text: string }

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'ul'; items: ListItem[] }
  /** A paragraph with the contact email spliced in as a mailto link. */
  | { kind: 'contact'; before: string; after: string }

export type PolicySection = { heading?: string; blocks: Block[] }

export type Policy = {
  title: string
  effectiveDateLabel: string
  authoritativeNote: string
  /**
   * Page chrome lives here too, rather than in the site dictionary. The
   * policy is readable in three languages, one of which the marketing
   * dictionary does not have — and a page that renders its body from here
   * but its heading from there breaks the moment the two disagree.
   */
  backHome: string
  metaTitle: string
  metaDescription: string
  sections: PolicySection[]
}

export const CONTACT_EMAIL = 'mukhammadkodir551@gmail.com'
export const EFFECTIVE_DATE = 'August 6, 2026'

const en: Policy = {
  title: 'Privacy Policy',
  effectiveDateLabel: 'Effective date',
  backHome: 'Back home',
  metaTitle: 'Privacy Policy — Tabelo',
  metaDescription:
    'How Tabelo and the Tabelo Staff app collect, use, and protect your data.',
  authoritativeNote:
    'This policy is also available in Uzbek and Russian. The English version is the authoritative one if the versions ever differ.',
  sections: [
    {
      blocks: [
        {
          kind: 'p',
          text: 'This Privacy Policy explains how Bilig Labs ("Bilig Labs", "we", "us") collects, uses, and protects information through Tabelo, our workforce management platform, including the Tabelo web dashboard and the Tabelo Staff mobile app (together, the "Service"). Tabelo is provided to businesses ("Organisations") to manage their own staff. If you are an employee using Tabelo Staff, your account is created and managed by your employer, who is the data controller for your employment records.',
        },
      ],
    },
    {
      heading: '1. Information We Collect',
      blocks: [
        { kind: 'lead', text: 'Account & profile information' },
        {
          kind: 'p',
          text: 'Name, email address, phone number, date of birth, role, department, and branch/location assignment, provided by you or your Organisation when your account is created.',
        },
        { kind: 'lead', text: 'Attendance & location data' },
        {
          kind: 'p',
          text: "When you clock in or out — by any method (GPS, QR code, NFC tag, or face check-in) — we collect your device's GPS coordinates at that moment to confirm you are at your assigned workplace. This location check happens only at the moment you clock in or out. It is not collected continuously or in the background.",
        },
        { kind: 'lead', text: 'Photos & face data' },
        {
          kind: 'p',
          text: 'If your Organisation enables photo or face check-in, we collect a photo taken at the moment of clocking in. On your first face check-in, that photo is also saved as your reference photo; the app tells you before this happens. Later check-in photos are compared against it using Amazon Rekognition, a third-party facial comparison service, to confirm your identity. This is our own facial comparison feature and is unrelated to Apple Face ID, which never leaves your device and is used only to unlock the app if you switch that on.',
        },
        {
          kind: 'p',
          text: 'Photos are stored on Amazon Web Services and are not publicly accessible: they are served only over short-lived signed links to people authorised to see them. You can delete your reference photo yourself at any time in the app under Settings → Privacy.',
        },
        { kind: 'lead', text: 'NFC tag data' },
        {
          kind: 'p',
          text: 'NFC clock-in reads the unique ID of a physical tag registered by your Organisation at its premises. This does not identify you personally beyond confirming the tag belongs to your workplace.',
        },
        { kind: 'lead', text: 'Work activity' },
        {
          kind: 'p',
          text: 'Shifts, schedules, checklist and task completions, points earned, requests (e.g. time off), and messages you send to our in-app AI assistant, "Dono opa".',
        },
        { kind: 'lead', text: 'Device & usage data' },
        {
          kind: 'p',
          text: 'Standard technical data such as IP address, device/browser type, and app interaction logs, used for security and troubleshooting.',
        },
      ],
    },
    {
      heading: '2. How We Use Your Information',
      blocks: [
        {
          kind: 'ul',
          items: [
            'Verify attendance and prevent clock-ins from outside the workplace.',
            'Operate scheduling, checklists, tasks, requests, and payroll reporting features.',
            'Generate AI-assisted summaries and answers (e.g. daily digests, Dono opa chat).',
            'Maintain the security and integrity of the Service.',
            'Communicate with you about your account or the Service.',
          ],
        },
      ],
    },
    {
      heading: '3. Who We Share Information With',
      blocks: [
        { kind: 'p', text: 'We do not sell your personal information. We share it only with:' },
        {
          kind: 'ul',
          items: [
            {
              term: 'Your Organisation',
              text: 'managers at your employer can see your profile, attendance, and work activity within Tabelo.',
            },
            {
              term: 'Service providers',
              text: 'we rely on to run Tabelo: Amazon Web Services (data hosting and photo storage), Amazon Rekognition (face comparison), and Anthropic, Google and/or OpenAI (processing chat messages to power the Dono opa AI assistant and AI-generated digests). These providers only process data on our behalf.',
            },
            {
              term: 'Legal requirements',
              text: 'if required to comply with applicable law or protect the rights and safety of Bilig Labs or others.',
            },
          ],
        },
      ],
    },
    {
      heading: '4. Data Retention',
      blocks: [
        {
          kind: 'p',
          text: 'We retain personal and attendance data for as long as your account is active, and for a reasonable period afterward as needed for recordkeeping, legal, or payroll purposes, or as directed by your Organisation. You can delete your face reference photo yourself at any time in the app; deleting it stops face comparison immediately and does not affect your attendance history. For deletion of your wider account data, ask your Organisation’s administrator.',
        },
      ],
    },
    {
      heading: '5. Data Security',
      blocks: [
        {
          kind: 'p',
          text: 'We use industry-standard safeguards — including encryption in transit, access controls, signed time-limited links for stored photos, and reputable cloud infrastructure providers — to protect your information. No method of storage or transmission is completely secure, but we work to protect your data appropriately.',
        },
      ],
    },
    {
      heading: '6. Your Rights & Choices',
      blocks: [
        {
          kind: 'contact',
          before:
            'Depending on your location, you may have rights to access, correct, or request deletion of your personal information. Because your account is managed by your Organisation, please start by contacting your workplace administrator. You can also reach us directly at ',
          after: '.',
        },
      ],
    },
    {
      heading: "7. Children's Privacy",
      blocks: [
        {
          kind: 'p',
          text: 'Tabelo is a workplace tool intended for use by employees of our Organisation customers and is not directed at children. We do not knowingly collect data from children. Where an Organisation employs staff below the age of majority, it is that Organisation’s responsibility to obtain any consent its local law requires before enabling face check-in for them.',
        },
      ],
    },
    {
      heading: '8. Changes to This Policy',
      blocks: [
        {
          kind: 'p',
          text: 'We may update this Privacy Policy from time to time. Material changes will be reflected by updating the effective date above.',
        },
      ],
    },
    {
      heading: '9. Contact Us',
      blocks: [
        {
          kind: 'contact',
          before: 'Questions about this policy or your data? Email us at ',
          after: '.',
        },
      ],
    },
  ],
}

const uz: Policy = {
  title: 'Maxfiylik siyosati',
  effectiveDateLabel: 'Kuchga kirgan sana',
  backHome: 'Bosh sahifaga',
  metaTitle: 'Maxfiylik siyosati — Tabelo',
  metaDescription:
    'Tabelo va Tabelo Staff ilovasi ma’lumotlaringizni qanday to‘playdi, ishlatadi va himoya qiladi.',
  authoritativeNote:
    'Ushbu siyosat ingliz va rus tillarida ham mavjud. Matnlar orasida farq bo‘lsa, inglizcha versiya asosiy hisoblanadi.',
  sections: [
    {
      blocks: [
        {
          kind: 'p',
          text: 'Ushbu Maxfiylik siyosati Bilig Labs («Bilig Labs», «biz») Tabelo — bizning xodimlarni boshqarish platformamiz, jumladan Tabelo veb-paneli va Tabelo Staff mobil ilovasi (birgalikda «Xizmat») orqali ma’lumotlarni qanday to‘plashi, ishlatishi va himoya qilishini tushuntiradi. Tabelo korxonalarga («Tashkilotlar») o‘z xodimlarini boshqarish uchun taqdim etiladi. Agar siz Tabelo Staff’dan foydalanayotgan xodim bo‘lsangiz, hisobingiz ish beruvchingiz tomonidan yaratiladi va boshqariladi; mehnat yozuvlaringiz bo‘yicha nazoratchi ham o‘sha.',
        },
      ],
    },
    {
      heading: '1. Qanday ma’lumot to‘playmiz',
      blocks: [
        { kind: 'lead', text: 'Hisob va profil ma’lumotlari' },
        {
          kind: 'p',
          text: 'Ism, elektron pochta, telefon raqami, tug‘ilgan sana, lavozim, bo‘lim va filial biriktiruvi — hisobingiz yaratilganda siz yoki Tashkilotingiz tomonidan kiritiladi.',
        },
        { kind: 'lead', text: 'Davomat va joylashuv ma’lumotlari' },
        {
          kind: 'p',
          text: 'Kelish yoki ketishni belgilaganingizda — qaysi usulda bo‘lishidan qat’i nazar (GPS, QR kod, NFC teg yoki yuz orqali tekshiruv) — ish joyingizda ekaningizni tasdiqlash uchun o‘sha paytdagi GPS koordinatalaringizni to‘playmiz. Bu tekshiruv faqat belgilash pallasida amalga oshiriladi. Doimiy ravishda yoki fonda joylashuv yig‘ilmaydi.',
        },
        { kind: 'lead', text: 'Suratlar va yuz ma’lumotlari' },
        {
          kind: 'p',
          text: 'Agar Tashkilotingiz surat yoki yuz orqali belgilashni yoqsa, belgilash paytida olingan suratni to‘playmiz. Birinchi marta yuz orqali belgilaganingizda o‘sha surat namuna sifatida ham saqlanadi; ilova bu haqda oldindan ogohlantiradi. Keyingi suratlar shu namunaga Amazon Rekognition — uchinchi tomon yuzlarni solishtirish xizmati — yordamida solishtiriladi. Bu bizning o‘z yuz solishtirish funksiyamiz bo‘lib, Apple Face ID bilan bog‘liq emas: Apple Face ID qurilmangizdan chiqmaydi va faqat siz yoqsangiz ilovani ochish uchun ishlatiladi.',
        },
        {
          kind: 'p',
          text: 'Suratlar Amazon Web Services’da saqlanadi va ommaga ochiq emas: ular faqat ko‘rish huquqiga ega shaxslarga qisqa muddatli imzolangan havolalar orqali beriladi. Namuna suratingizni istalgan vaqtda ilovadagi Sozlamalar → Maxfiylik bo‘limida o‘zingiz o‘chirishingiz mumkin.',
        },
        { kind: 'lead', text: 'NFC teg ma’lumotlari' },
        {
          kind: 'p',
          text: 'NFC orqali belgilash Tashkilotingiz o‘z binosida ro‘yxatdan o‘tkazgan jismoniy tegning noyob raqamini o‘qiydi. Bu tegning ish joyingizga tegishli ekanini tasdiqlashdan tashqari sizni shaxsan aniqlamaydi.',
        },
        { kind: 'lead', text: 'Ish faoliyati' },
        {
          kind: 'p',
          text: 'Smenalar, jadvallar, nazorat ro‘yxati va topshiriqlar bajarilishi, to‘plangan ballar, so‘rovlar (masalan, ta’til) va ilovadagi «Dono opa» sun’iy intellekt yordamchisiga yozgan xabarlaringiz.',
        },
        { kind: 'lead', text: 'Qurilma va foydalanish ma’lumotlari' },
        {
          kind: 'p',
          text: 'IP manzil, qurilma/brauzer turi va ilova bilan ishlash jurnallari kabi odatiy texnik ma’lumotlar — xavfsizlik va nosozliklarni bartaraf etish uchun.',
        },
      ],
    },
    {
      heading: '2. Ma’lumotlaringizni qanday ishlatamiz',
      blocks: [
        {
          kind: 'ul',
          items: [
            'Davomatni tasdiqlash va ish joyidan tashqarida belgilanishning oldini olish.',
            'Jadval, nazorat ro‘yxatlari, topshiriqlar, so‘rovlar va ish haqi hisobotlarini ishlatish.',
            'Sun’iy intellekt yordamida xulosalar va javoblar tayyorlash (kunlik xulosa, «Dono opa» suhbati).',
            'Xizmat xavfsizligi va yaxlitligini ta’minlash.',
            'Hisobingiz yoki Xizmat haqida siz bilan bog‘lanish.',
          ],
        },
      ],
    },
    {
      heading: '3. Ma’lumotni kim bilan bo‘lishamiz',
      blocks: [
        {
          kind: 'p',
          text: 'Shaxsiy ma’lumotlaringizni sotmaymiz. Ularni faqat quyidagilar bilan bo‘lishamiz:',
        },
        {
          kind: 'ul',
          items: [
            {
              term: 'Tashkilotingiz',
              text: 'ish beruvchingizdagi rahbarlar Tabelo ichida profilingiz, davomatingiz va ish faoliyatingizni ko‘ra oladi.',
            },
            {
              term: 'Xizmat ko‘rsatuvchilar',
              text: 'Tabelo ishlashi uchun tayanadiganlarimiz: Amazon Web Services (ma’lumot va surat saqlash), Amazon Rekognition (yuzlarni solishtirish) hamda Anthropic, Google va/yoki OpenAI («Dono opa» yordamchisi va sun’iy intellekt xulosalari uchun xabarlarni qayta ishlash). Bu provayderlar ma’lumotni faqat bizning nomimizdan qayta ishlaydi.',
            },
            {
              term: 'Qonuniy talablar',
              text: 'amaldagi qonunga rioya qilish yoki Bilig Labs va boshqalarning huquq va xavfsizligini himoya qilish zarur bo‘lganda.',
            },
          ],
        },
      ],
    },
    {
      heading: '4. Ma’lumotni saqlash muddati',
      blocks: [
        {
          kind: 'p',
          text: 'Shaxsiy va davomat ma’lumotlarini hisobingiz faol bo‘lgan davrda, shuningdek undan keyin hisobot, qonuniy yoki ish haqi maqsadlarida yoxud Tashkilotingiz ko‘rsatmasiga ko‘ra oqilona muddat davomida saqlaymiz. Yuz namunasi suratingizni istalgan vaqtda ilovada o‘zingiz o‘chirishingiz mumkin; o‘chirish yuz solishtirishni darhol to‘xtatadi va davomat tarixingizga ta’sir qilmaydi. Hisobingizning qolgan ma’lumotlarini o‘chirish uchun Tashkilotingiz ma’muriga murojaat qiling.',
        },
      ],
    },
    {
      heading: '5. Ma’lumot xavfsizligi',
      blocks: [
        {
          kind: 'p',
          text: 'Ma’lumotingizni himoya qilish uchun sohada qabul qilingan choralardan foydalanamiz: uzatishda shifrlash, kirish nazorati, saqlangan suratlar uchun muddati cheklangan imzolangan havolalar va obro‘li bulut infratuzilmasi provayderlari. Saqlash yoki uzatishning hech bir usuli mutlaqo xavfsiz emas, ammo biz ma’lumotingizni tegishlicha himoya qilishga harakat qilamiz.',
        },
      ],
    },
    {
      heading: '6. Huquqlaringiz va tanlovingiz',
      blocks: [
        {
          kind: 'contact',
          before:
            'Joylashuvingizga qarab shaxsiy ma’lumotlaringizga kirish, ularni to‘g‘rilash yoki o‘chirishni so‘rash huquqiga ega bo‘lishingiz mumkin. Hisobingiz Tashkilotingiz tomonidan boshqarilgani uchun avval ish joyingiz ma’muriga murojaat qiling. Bizga to‘g‘ridan-to‘g‘ri ham yozishingiz mumkin: ',
          after: '.',
        },
      ],
    },
    {
      heading: '7. Bolalar maxfiyligi',
      blocks: [
        {
          kind: 'p',
          text: 'Tabelo — Tashkilot mijozlarimiz xodimlari uchun mo‘ljallangan ish vositasi bo‘lib, bolalarga qaratilmagan. Biz bolalardan ataylab ma’lumot to‘lamaymiz. Agar Tashkilot voyaga yetmagan xodimlarni ishga olsa, ular uchun yuz orqali belgilashni yoqishdan oldin mahalliy qonun talab qiladigan roziliklarni olish o‘sha Tashkilot zimmasidadir.',
        },
      ],
    },
    {
      heading: '8. Ushbu siyosatdagi o‘zgarishlar',
      blocks: [
        {
          kind: 'p',
          text: 'Ushbu Maxfiylik siyosatini vaqti-vaqti bilan yangilashimiz mumkin. Muhim o‘zgarishlar yuqoridagi kuchga kirish sanasini yangilash orqali aks ettiriladi.',
        },
      ],
    },
    {
      heading: '9. Biz bilan bog‘lanish',
      blocks: [
        {
          kind: 'contact',
          before:
            'Ushbu siyosat yoki ma’lumotlaringiz bo‘yicha savollaringiz bormi? Bizga yozing: ',
          after: '.',
        },
      ],
    },
  ],
}

const ru: Policy = {
  title: 'Политика конфиденциальности',
  effectiveDateLabel: 'Дата вступления в силу',
  backHome: 'На главную',
  metaTitle: 'Политика конфиденциальности — Tabelo',
  metaDescription:
    'Как Tabelo и приложение Tabelo Staff собирают, используют и защищают ваши данные.',
  authoritativeNote:
    'Эта политика также доступна на английском и узбекском языках. При расхождении версий приоритет имеет английская.',
  sections: [
    {
      blocks: [
        {
          kind: 'p',
          text: 'Настоящая Политика конфиденциальности описывает, как Bilig Labs («Bilig Labs», «мы») собирает, использует и защищает информацию через Tabelo — нашу платформу управления персоналом, включая веб-панель Tabelo и мобильное приложение Tabelo Staff (совместно — «Сервис»). Tabelo предоставляется компаниям («Организациям») для управления собственным персоналом. Если вы сотрудник, использующий Tabelo Staff, ваша учётная запись создаётся и управляется вашим работодателем, который является контролёром ваших трудовых данных.',
        },
      ],
    },
    {
      heading: '1. Какую информацию мы собираем',
      blocks: [
        { kind: 'lead', text: 'Учётная запись и профиль' },
        {
          kind: 'p',
          text: 'Имя, адрес электронной почты, номер телефона, дата рождения, должность, отдел и привязка к филиалу — предоставляются вами или вашей Организацией при создании учётной записи.',
        },
        { kind: 'lead', text: 'Данные о посещаемости и местоположении' },
        {
          kind: 'p',
          text: 'Когда вы отмечаете приход или уход — любым способом (GPS, QR-код, NFC-метка или проверка по лицу) — мы собираем GPS-координаты вашего устройства в этот момент, чтобы подтвердить, что вы находитесь на рабочем месте. Эта проверка происходит только в момент отметки. Местоположение не собирается постоянно или в фоновом режиме.',
        },
        { kind: 'lead', text: 'Фотографии и данные лица' },
        {
          kind: 'p',
          text: 'Если ваша Организация включила отметку с фото или по лицу, мы сохраняем фотографию, сделанную в момент отметки. При первой отметке по лицу эта фотография также сохраняется как эталонная; приложение предупреждает об этом заранее. Последующие фотографии сравниваются с ней с помощью Amazon Rekognition — стороннего сервиса сравнения лиц. Это наша собственная функция сравнения лиц, не связанная с Apple Face ID: данные Apple Face ID не покидают ваше устройство и используются только для разблокировки приложения, если вы это включите.',
        },
        {
          kind: 'p',
          text: 'Фотографии хранятся в Amazon Web Services и не находятся в открытом доступе: они выдаются только по кратковременным подписанным ссылкам тем, кто имеет право их видеть. Вы можете в любой момент самостоятельно удалить свою эталонную фотографию в приложении: Настройки → Конфиденциальность.',
        },
        { kind: 'lead', text: 'Данные NFC-метки' },
        {
          kind: 'p',
          text: 'Отметка по NFC считывает уникальный идентификатор физической метки, зарегистрированной вашей Организацией в её помещении. Это не идентифицирует вас лично — лишь подтверждает, что метка принадлежит вашему рабочему месту.',
        },
        { kind: 'lead', text: 'Рабочая активность' },
        {
          kind: 'p',
          text: 'Смены, графики, выполнение чек-листов и задач, начисленные баллы, заявки (например, на отпуск) и сообщения, которые вы отправляете встроенному ИИ-помощнику «Dono opa».',
        },
        { kind: 'lead', text: 'Данные об устройстве и использовании' },
        {
          kind: 'p',
          text: 'Стандартные технические данные: IP-адрес, тип устройства и браузера, журналы взаимодействия с приложением — для безопасности и устранения неполадок.',
        },
      ],
    },
    {
      heading: '2. Как мы используем вашу информацию',
      blocks: [
        {
          kind: 'ul',
          items: [
            'Подтверждение посещаемости и предотвращение отметок вне рабочего места.',
            'Работа графиков, чек-листов, задач, заявок и отчётности по заработной плате.',
            'Формирование сводок и ответов с помощью ИИ (ежедневная сводка, чат «Dono opa»).',
            'Поддержание безопасности и целостности Сервиса.',
            'Связь с вами по вопросам учётной записи или Сервиса.',
          ],
        },
      ],
    },
    {
      heading: '3. С кем мы делимся информацией',
      blocks: [
        {
          kind: 'p',
          text: 'Мы не продаём ваши персональные данные. Мы передаём их только:',
        },
        {
          kind: 'ul',
          items: [
            {
              term: 'Вашей Организации',
              text: 'руководители у вашего работодателя видят ваш профиль, посещаемость и рабочую активность внутри Tabelo.',
            },
            {
              term: 'Поставщикам услуг',
              text: 'на которых мы полагаемся для работы Tabelo: Amazon Web Services (хранение данных и фотографий), Amazon Rekognition (сравнение лиц), а также Anthropic, Google и/или OpenAI (обработка сообщений для помощника «Dono opa» и сводок, созданных ИИ). Эти поставщики обрабатывают данные только от нашего имени.',
            },
            {
              term: 'По требованию закона',
              text: 'если это необходимо для соблюдения применимого законодательства либо защиты прав и безопасности Bilig Labs или иных лиц.',
            },
          ],
        },
      ],
    },
    {
      heading: '4. Срок хранения данных',
      blocks: [
        {
          kind: 'p',
          text: 'Мы храним персональные данные и данные о посещаемости, пока ваша учётная запись активна, а также в течение разумного срока после этого — для целей учёта, соблюдения закона или расчёта заработной платы либо по указанию вашей Организации. Свою эталонную фотографию лица вы можете удалить самостоятельно в приложении в любой момент; удаление немедленно прекращает сравнение по лицу и не влияет на историю посещаемости. Для удаления остальных данных учётной записи обратитесь к администратору вашей Организации.',
        },
      ],
    },
    {
      heading: '5. Безопасность данных',
      blocks: [
        {
          kind: 'p',
          text: 'Для защиты вашей информации мы применяем принятые в отрасли меры: шифрование при передаче, контроль доступа, подписанные ссылки с ограниченным сроком действия для хранимых фотографий и надёжных поставщиков облачной инфраструктуры. Ни один способ хранения или передачи не является абсолютно безопасным, но мы стремимся защищать ваши данные надлежащим образом.',
        },
      ],
    },
    {
      heading: '6. Ваши права и выбор',
      blocks: [
        {
          kind: 'contact',
          before:
            'В зависимости от вашего местонахождения у вас могут быть права на доступ, исправление или удаление персональных данных. Поскольку вашей учётной записью управляет ваша Организация, начните с обращения к администратору по месту работы. Вы также можете написать нам напрямую: ',
          after: '.',
        },
      ],
    },
    {
      heading: '7. Конфиденциальность детей',
      blocks: [
        {
          kind: 'p',
          text: 'Tabelo — рабочий инструмент, предназначенный для сотрудников наших клиентов-Организаций, и не адресован детям. Мы сознательно не собираем данные детей. Если Организация нанимает несовершеннолетних сотрудников, именно она обязана получить согласия, требуемые местным законодательством, прежде чем включать для них отметку по лицу.',
        },
      ],
    },
    {
      heading: '8. Изменения в этой политике',
      blocks: [
        {
          kind: 'p',
          text: 'Мы можем время от времени обновлять настоящую Политику конфиденциальности. Существенные изменения будут отражены обновлением даты вступления в силу выше.',
        },
      ],
    },
    {
      heading: '9. Связаться с нами',
      blocks: [
        {
          kind: 'contact',
          before: 'Вопросы об этой политике или ваших данных? Напишите нам: ',
          after: '.',
        },
      ],
    },
  ],
}

export const POLICIES: Record<PolicyLanguage, Policy> = { en, uz, ru }
