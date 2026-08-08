/**
 * Support page content, in the three languages the Tabelo Staff app ships.
 *
 * Same reasoning as privacy/policy-content.ts: this is the audience that uses
 * the staff app, and someone who reads only Uzbek or only Russian needs to be
 * able to get help too. Kept independent rather than importing the privacy
 * page's Block type — an FAQ page wants a question/answer block that a legal
 * document does not, and the two are likely to diverge further.
 */

export const SUPPORT_LANGUAGES = ['en', 'uz', 'ru'] as const
export type SupportLanguage = (typeof SUPPORT_LANGUAGES)[number]

export const SUPPORT_LANGUAGE_NAMES: Record<SupportLanguage, string> = {
  en: 'English',
  uz: "O'zbekcha",
  ru: 'Русский',
}

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'faq'; question: string; answer: string }
  | { kind: 'contact'; before: string; after: string }

export type SupportSection = { heading: string; blocks: Block[] }

export type Support = {
  title: string
  intro: string
  backHome: string
  metaTitle: string
  metaDescription: string
  contactLabel: string
  privacyLinkLabel: string
  sections: SupportSection[]
}

export const CONTACT_EMAIL = 'mukhammadkodir551@gmail.com'

const en: Support = {
  title: 'Support',
  intro:
    'This page is for staff using the Tabelo Staff app. If you have a question about your pay, shifts or employment, please contact your workplace administrator first — they manage your account and can usually answer faster than we can.',
  backHome: 'Back home',
  metaTitle: 'Support — Tabelo',
  metaDescription: 'Help with the Tabelo Staff app: getting started, clocking in, your data, and how to contact us.',
  contactLabel: 'Still stuck? Email us',
  privacyLinkLabel: 'Read our Privacy Policy',
  sections: [
    {
      heading: 'Getting started',
      blocks: [
        {
          kind: 'faq',
          question: "I don't have a login — how do I get one?",
          answer:
            'There is no sign-up in the app. Your employer creates your account when they add you to their team, and gives you your login details. Ask your manager or workplace administrator.',
        },
        {
          kind: 'faq',
          question: "I forgot my password, or can't log in",
          answer:
            "Contact your workplace administrator — they can reset your password from their dashboard. If you're logged in and want to change your password yourself, go to Settings → Change password.",
        },
      ],
    },
    {
      heading: 'Clocking in and out',
      blocks: [
        {
          kind: 'faq',
          question: 'Why can\'t I clock in?',
          answer:
            "Check that location is turned on for Tabelo Staff and that you're at your workplace — most clock-in methods confirm your GPS position first. If your branch uses NFC or QR, make sure you're tapping or scanning the right tag or code. If it still doesn't work, tell us what happened using the contact details below.",
        },
        {
          kind: 'faq',
          question: 'What clock-in methods does the app support?',
          answer:
            'GPS, QR code, NFC tag, or face check-in — whichever your workplace has turned on. You will only see the one your branch uses.',
        },
      ],
    },
    {
      heading: 'Face check-in and your data',
      blocks: [
        {
          kind: 'faq',
          question: 'How does face check-in work?',
          answer:
            "If your workplace uses it, your first face check-in saves that photo as your reference image — the app tells you this before the camera opens. Later check-ins are compared against it to confirm it's you.",
        },
        {
          kind: 'faq',
          question: 'Can I delete my face data?',
          answer: 'Yes, at any time — go to Settings → Privacy → My face data → Delete.',
        },
        {
          kind: 'faq',
          question: 'Why does the app need my location?',
          answer:
            'Only to confirm you are at your workplace at the moment you clock in or out. Location is never collected in the background or continuously.',
        },
      ],
    },
    {
      heading: 'Notifications and language',
      blocks: [
        {
          kind: 'faq',
          question: 'How do I change what I get notified about?',
          answer: 'Settings → Notifications, where push and in-app alerts can be turned on or off separately for each type.',
        },
        {
          kind: 'faq',
          question: 'How do I change the app language?',
          answer: 'Settings → Language. Tabelo Staff is available in Uzbek, Russian and English.',
        },
      ],
    },
    {
      heading: 'Report a problem',
      blocks: [
        {
          kind: 'p',
          text: "Found a bug, or something isn't working the way it should? Email us and include: your organisation's name, roughly what you were doing when it happened, and a screenshot if you have one — that's usually enough for us to find it quickly.",
        },
        {
          kind: 'contact',
          before: 'Email ',
          after: '.',
        },
      ],
    },
  ],
}

const uz: Support = {
  title: 'Yordam',
  intro:
    "Ushbu sahifa Tabelo Staff ilovasidan foydalanuvchi xodimlar uchun. Ish haqi, smenalar yoki ish faoliyatingiz haqida savolingiz bo'lsa, avval ish joyingiz ma'muriga murojaat qiling — hisobingizni ular boshqaradi va odatda bizdan tezroq javob bera olishadi.",
  backHome: 'Bosh sahifaga',
  metaTitle: 'Yordam — Tabelo',
  metaDescription: "Tabelo Staff ilovasi bo'yicha yordam: ishni boshlash, belgilanish, ma'lumotlaringiz va biz bilan bog'lanish.",
  contactLabel: "Hali ham yordam kerakmi? Bizga yozing",
  privacyLinkLabel: 'Maxfiylik siyosatini oʻqish',
  sections: [
    {
      heading: 'Ishni boshlash',
      blocks: [
        {
          kind: 'faq',
          question: "Hisobim yo'q — qanday olsam bo'ladi?",
          answer:
            "Ilovada ro'yxatdan o'tish yo'q. Ish beruvchingiz sizni jamoasiga qo'shganda hisobingizni yaratadi va kirish ma'lumotlarini beradi. Rahbaringiz yoki ish joyingiz ma'muriga murojaat qiling.",
        },
        {
          kind: 'faq',
          question: "Parolimni unutdim yoki kira olmayapman",
          answer:
            "Ish joyingiz ma'muriga murojaat qiling — ular parolingizni o'z panelidan tiklashi mumkin. Agar hisobingizga kirgan bo'lsangiz va parolni o'zingiz o'zgartirmoqchi bo'lsangiz: Sozlamalar → Parolni o'zgartirish.",
        },
      ],
    },
    {
      heading: 'Kelish va ketishni belgilash',
      blocks: [
        {
          kind: 'faq',
          question: "Nega belgilay olmayapman?",
          answer:
            "Tabelo Staff uchun joylashuv yoqilganini va ish joyingizda ekaningizni tekshiring — ko'pchilik usullar avval GPS joylashuvingizni tasdiqlaydi. Agar filialingiz NFC yoki QR ishlatsa, to'g'ri teg yoki kodni bosayotganingizga ishonch hosil qiling. Baribir ishlamasa, quyidagi aloqa orqali nima bo'lganini yozib yuboring.",
        },
        {
          kind: 'faq',
          question: 'Ilova qanday belgilash usullarini qo\'llab-quvvatlaydi?',
          answer:
            "GPS, QR kod, NFC teg yoki yuz orqali tekshiruv — ish joyingiz qaysi birini yoqqan bo'lsa, faqat o'shani ko'rasiz.",
        },
      ],
    },
    {
      heading: "Yuz orqali belgilash va ma'lumotlaringiz",
      blocks: [
        {
          kind: 'faq',
          question: 'Yuz orqali belgilash qanday ishlaydi?',
          answer:
            "Agar ish joyingiz buni ishlatsa, birinchi marta yuz orqali belgilaganingizda o'sha surat namuna sifatida saqlanadi — ilova bu haqda kamera ochilishidan oldin ogohlantiradi. Keyingi belgilanishlar sizligingizni tasdiqlash uchun shu namuna bilan solishtiriladi.",
        },
        {
          kind: 'faq',
          question: "Yuz ma'lumotlarimni o'chira olamanmi?",
          answer: "Ha, istalgan vaqtda — Sozlamalar → Maxfiylik → Yuz ma'lumotlarim → O'chirish.",
        },
        {
          kind: 'faq',
          question: 'Nega ilovaga joylashuvim kerak?',
          answer:
            'Faqat kelish yoki ketishni belgilagan paytingizda ish joyingizda ekaningizni tasdiqlash uchun. Joylashuv hech qachon fonda yoki doimiy ravishda yig\'ilmaydi.',
        },
      ],
    },
    {
      heading: 'Bildirishnomalar va til',
      blocks: [
        {
          kind: 'faq',
          question: 'Qaysi bildirishnomalarni olishimni qanday o\'zgartiraman?',
          answer: "Sozlamalar → Bildirishnomalar — har bir turi uchun push va ilova ichidagi ogohlantirishlarni alohida yoqish yoki o'chirish mumkin.",
        },
        {
          kind: 'faq',
          question: 'Ilova tilini qanday o\'zgartiraman?',
          answer: "Sozlamalar → Til. Tabelo Staff o'zbek, rus va ingliz tillarida mavjud.",
        },
      ],
    },
    {
      heading: 'Muammo haqida xabar berish',
      blocks: [
        {
          kind: 'p',
          text: "Xato topdingizmi yoki nimadir kerakdek ishlamayaptimi? Bizga yozing va quyidagilarni qo'shing: tashkilotingiz nomi, nima qilayotganingiz taxminan, va agar bo'lsa skrinshot — bu odatda muammoni tezda topishimiz uchun yetarli.",
        },
        {
          kind: 'contact',
          before: 'Yozing: ',
          after: '.',
        },
      ],
    },
  ],
}

const ru: Support = {
  title: 'Поддержка',
  intro:
    'Эта страница для сотрудников, использующих приложение Tabelo Staff. Если у вас вопрос о зарплате, сменах или трудоустройстве, сначала обратитесь к администратору вашего рабочего места — он управляет вашей учётной записью и обычно может ответить быстрее нас.',
  backHome: 'На главную',
  metaTitle: 'Поддержка — Tabelo',
  metaDescription: 'Помощь по приложению Tabelo Staff: начало работы, отметка прихода, ваши данные и связь с нами.',
  contactLabel: 'Всё ещё нужна помощь? Напишите нам',
  privacyLinkLabel: 'Читать Политику конфиденциальности',
  sections: [
    {
      heading: 'Начало работы',
      blocks: [
        {
          kind: 'faq',
          question: 'У меня нет логина — как его получить?',
          answer:
            'В приложении нет регистрации. Ваш работодатель создаёт учётную запись, когда добавляет вас в свою команду, и выдаёт данные для входа. Обратитесь к своему руководителю или администратору.',
        },
        {
          kind: 'faq',
          question: 'Забыл(а) пароль или не могу войти',
          answer:
            'Обратитесь к администратору вашего рабочего места — он может сбросить пароль из своей панели. Если вы уже вошли и хотите сменить пароль сами: Настройки → Изменить пароль.',
        },
      ],
    },
    {
      heading: 'Отметка прихода и ухода',
      blocks: [
        {
          kind: 'faq',
          question: 'Почему я не могу отметиться?',
          answer:
            'Проверьте, что для Tabelo Staff включено определение местоположения и что вы находитесь на рабочем месте — большинство способов отметки сначала проверяют GPS. Если ваш филиал использует NFC или QR, убедитесь, что вы прикладываете или сканируете правильную метку или код. Если не помогает — напишите нам, что произошло, по контактам ниже.',
        },
        {
          kind: 'faq',
          question: 'Какие способы отметки поддерживает приложение?',
          answer:
            'GPS, QR-код, NFC-метка или проверка по лицу — какой включён на вашем рабочем месте, тот вы и увидите.',
        },
      ],
    },
    {
      heading: 'Проверка по лицу и ваши данные',
      blocks: [
        {
          kind: 'faq',
          question: 'Как работает проверка по лицу?',
          answer:
            'Если ваше рабочее место это использует, при первой отметке по лицу это фото сохраняется как эталонное — приложение предупреждает об этом до открытия камеры. Последующие отметки сравниваются с ним, чтобы подтвердить, что это вы.',
        },
        {
          kind: 'faq',
          question: 'Могу ли я удалить данные своего лица?',
          answer: 'Да, в любой момент — Настройки → Конфиденциальность → Мои данные лица → Удалить.',
        },
        {
          kind: 'faq',
          question: 'Зачем приложению моё местоположение?',
          answer:
            'Только чтобы подтвердить, что вы на рабочем месте в момент отметки прихода или ухода. Местоположение никогда не собирается в фоне или постоянно.',
        },
      ],
    },
    {
      heading: 'Уведомления и язык',
      blocks: [
        {
          kind: 'faq',
          question: 'Как изменить, о чём мне приходят уведомления?',
          answer: 'Настройки → Уведомления — push- и внутренние уведомления можно включать и выключать отдельно для каждого типа.',
        },
        {
          kind: 'faq',
          question: 'Как изменить язык приложения?',
          answer: 'Настройки → Язык. Tabelo Staff доступен на узбекском, русском и английском.',
        },
      ],
    },
    {
      heading: 'Сообщить о проблеме',
      blocks: [
        {
          kind: 'p',
          text: 'Нашли ошибку или что-то работает не так? Напишите нам и укажите: название вашей организации, что примерно вы делали в этот момент, и скриншот, если есть — обычно этого достаточно, чтобы быстро разобраться.',
        },
        {
          kind: 'contact',
          before: 'Напишите: ',
          after: '.',
        },
      ],
    },
  ],
}

export const SUPPORT: Record<SupportLanguage, Support> = { en, uz, ru }
