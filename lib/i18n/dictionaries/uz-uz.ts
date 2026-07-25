import type { Dictionary } from '../types'

/**
 * Uzbekistan market, Uzbek. The default variant on tabelo.uz.
 *
 * Market framing: paper + Telegram as the everyday-tool pain point, UZS,
 * the 2022 Uzbek Labour Code, Tashkent social proof. The per-staff language
 * feature is framed as home-market pride ("built for you"), not as the
 * inclusion differentiator it is on the UK site.
 */
export const uzUz: Dictionary = {
  meta: {
    title: 'Tabelo — restoranlar uchun xodimlarni boshqarish tizimi',
    description:
      'Smena jadvali, ishga kelish va oylik maosh — bir joyda, o‘z tilingizda. Restoranlar uchun Bilig Labs tomonidan yaratilgan.',
  },

  nav: {
    home: 'Tabelo bosh sahifasi',
    openMenu: 'Menyuni ochish',
    closeMenu: 'Menyuni yopish',
    login: 'Kirish',
    bookDemo: 'Demo band qiling',
    languageLabel: 'Til',
    links: [
      { label: 'Imkoniyatlar', href: '#features' },
      { label: 'Qanday ishlaydi', href: '#how-it-works' },
      { label: 'Kimlar uchun', href: '#customers' },
      { label: 'Savollar', href: '#faq' },
      { label: 'Narxlar', href: '#pricing' },
    ],
  },

  hero: {
    eyebrow: 'Restoranlar uchun xodimlarni boshqarish',
    titleLine1: 'Smena jadvali, ishga kelish va oylik maosh —',
    titleLine2: 'bir joyda, o‘z tilingizda.',
    body: 'Restoraningiz jadvalini qog‘ozda va Telegram guruhida yuritishni bas qiling. Tabelo Excel jadvallari, guruh chatlari va qo‘lda hisoblangan oylik maoshni butun jamoangiz haqiqatan ham foydalanadigan yagona tizim bilan almashtiradi.',
    emailLabel: 'Ish elektron pochtangiz',
    emailPlaceholder: 'Ish elektron pochtangiz',
    submit: 'Demo band qiling',
    badges: [
      'GPS, QR va NFC orqali ishga kelish',
      'O‘zbek, rus va ingliz tillarida',
      '2022-yil Mehnat kodeksiga moslashtirilgan',
    ],
    clockedIn: 'Bekzod T. ishga keldi',
    clockedInMeta: '08:02 · NFC',
    exceptionQueue: 'Ko‘rib chiqilishi kerak',
    toReview: 'ta murojaat',
  },

  bento: {
    eyebrow: 'Tabelo nimasi bilan farq qiladi',
    titleLine1: 'Beshta dastur o‘rniga bitta tizim,',
    titleLine2: 'aynan sizning bozoringiz uchun',
    description:
      'Smena jadvali, ishga kelish, tabel va oylik maosh — qog‘oz, Telegram guruhlari va tarqoq jadvallar o‘rniga.',
    live: {
      title: 'Hozir kim ishda — real vaqtda ko‘ring',
      body: 'Kim ishga keldi, kim kechikdi va kim hali kelmagani — barchasi bir ekranda. Menejerlarga endi bo‘lim bo‘yicha alohida kuzatib yurishning hojati yo‘q — barcha filiallar bitta joyda.',
    },
    demand: {
      title: 'Talabni oldindan bilib oling',
      body: 'Rangli talab darajalari va mehmonlar soni bo‘yicha baholash orqali xodimlarni haqiqiy talabga mos rejalashtiring — taxmin qilish o‘rniga. Kam yoki ortiqcha xodim yollashdan qoching.',
    },
    payroll: {
      title: 'Jadvalga mos oylik maosh',
      body: 'Soatlar ishga kelish vaqtidan avtomatik hisoblanadi, tanaffuslar va kechayu-kunduz smenalar to‘g‘ri hisobga olinadi. Haftani tasdiqlang, davrni yoping — hech qanday raqam keyin o‘zgarmaydi.',
    },
  },

  howItWorks: {
    eyebrow: 'Qanday ishlaydi',
    title: 'Uch qadam, bir kunda',
    steps: [
      {
        title: 'Jadvalni tuzing',
        body: 'Haftalik jadvalni bo‘lim bo‘yicha torting-tashlang, oldingi haftani bir tugma bilan nusxalang.',
      },
      {
        title: 'Xodimlar ishga keladi',
        body: 'GPS, filialdagi QR-kod yoki NFC karta orqali — telefonni qulfdan chiqarish shart emas.',
      },
      {
        title: 'Tabel avtomatik hisoblanadi',
        body: 'Tanaffuslar va kechayu-kunduz smenalar to‘g‘ri ayiriladi. Haftani tasdiqlang, Excel’ga chiqaring.',
      },
    ],
    imageAlt: 'Restoran oshxonasida smenada ishlayotgan xodimlar',
    storiesEyebrow: 'Mijozlar tarixi',
    storiesBody:
      'Toshkentdagi birinchi restoranlarimizni hozir ulab bormoqdamiz. Ular tayyor bo‘lgach, real fikr-mulohazalar va ismlar shu yerda bo‘ladi.',
    storiesCta: 'Ilk mijozlardan biri bo‘ling',
  },

  features: {
    eyebrow: 'Xodimlar o‘zi foydalangisi keladi',
    titleLine1: 'Jamoangiz o‘zi',
    titleLine2: 'ochadigan vosita',
    description:
      'O‘yin elementlari, sun’iy intellekt yordamchi, kundalik ro‘yxatlar va chinakam qulay mobil ilova — chunki restoran xodimlari stol ortida emas, telefonda yashaydi.',
    ranks: {
      title: 'Darajam — daraja va ballar',
      body: 'Besh daraja: Yangi, Ishonchli, Faol, Tajribali, Usta. Yaxshi ishga kelish, vaqtida kelish va vazifalarni bajarish orqali ball to‘planadi. Mukofotni almashtirish darajangizni pasaytirmaydi — ball va daraja alohida hisoblanadi.',
    },
    assistant: {
      title: 'Dono opa — sun’iy intellekt yordamchi',
      body: 'Xodimlar menyu, retsept yoki ish qoidalari haqida savol berishsa, Dono opadan darhol javob olishadi — menejerni qidirib yurishning hojati yo‘q.',
    },
    checklist: {
      title: 'Ochilish ro‘yxati, to‘g‘ri bajarilgan',
      body: 'Ochilish, smena o‘rtasi va yopilish uchun ro‘yxatlar. Fotosurat talab qilinadigan bandlar orqali javobgarlik ta’minlanadi.',
    },
    languages: {
      title: 'Butun jamoangiz, o‘z tilida',
      body: 'O‘zbek, rus va ingliz tillari dastur ichiga to‘liq kiritilgan — har bir xodim o‘z tilida ishlatishi mumkin, biznesning standart tilidan qat’i nazar.',
      samples: [
        { code: 'UZ', label: "O'zbekcha", sample: 'Smenaga yozilish' },
        { code: 'RU', label: 'Русский', sample: 'Отметка на смене' },
        { code: 'EN', label: 'English', sample: 'Clock in to shift' },
      ],
    },
  },

  org: {
    eyebrow: 'Jamoangizning har bir darajasi',
    title: 'Jamoangizning har bir darajasi uchun bitta tizim',
    body: 'To‘rtta standart rol — Egasi, Filial menejeri, Bo‘lim menejeri, Xodim — yoki aniq nazorat kerak bo‘lganda maxsus rollar yarating.',
    cta: 'Demo band qiling',
    pillars: [
      {
        title: 'Tashkilot → Filial → Bo‘lim → Xodim',
        body: 'Tabelo restoraningiz haqiqiy tuzilishini aks ettiradi, umumiy “kompaniya” shabloni emas.',
      },
      {
        title: 'Ierarxiya kuchaytirilgan, taklif qilinmagan',
        body: 'Bo‘lim menejeri faqat o‘z bo‘limini boshqaradi. Filial menejerlari va egalar hammasini ko‘radi. Ma’lumot hech qachon oshkor bo‘lmaydi.',
      },
      {
        title: 'Ko‘p filialli biznes uchun tayyor',
        body: 'Xodimlar, sozlamalar, hisobotlar va vaqt zonasi/valyuta — barcha filiallar bitta egasi ko‘rinishida.',
      },
    ],
  },

  customers: {
    eyebrow: 'Kimlar uchun',
    titleLine1: 'Restoranlar uchun,',
    titleLine2: 'har qanday hajmda',
    previous: 'Oldingi',
    next: 'Keyingi',
    cards: [
      {
        title: 'Yakka restoran',
        body: 'Bitta filial, bir nechta bo‘lim va o‘zi ham zalda ishlaydigan menejer. Orqa ofis jamoasisiz jadval, ishga kelish va tabel.',
        tags: ['Jadval tuzuvchi', 'GPS orqali ishga kelish', 'Excelga chiqarish'],
      },
      {
        title: 'Ko‘p filialli guruhlar',
        body: 'Bir nechta filialingiz bormi? Umumiy xodimlar bazasi, filialga xos sozlamalar, bitta egalar ko‘rinishi.',
        tags: ['Filial sozlamalari', 'Egalar ko‘rinishi', 'Filial geozonasi'],
      },
      {
        title: 'Yuqori aylanmali jamoalar',
        body: 'Tez-tez xodim almashadigan jamoalar uchun — yangi xodimni tezroq ishga tayyorlaydigan o‘quv modullari va aniq jadvallar.',
        tags: ['O‘quv modullari', 'Darajam darajalari', 'Ro‘yxatlar'],
      },
      {
        title: 'Muvofiqlikka e’tibor beruvchi operatorlar',
        body: '2022-yil Mehnat kodeksi asosida ish soatlari va dam olish vaqtlari kuzatiladi — orqa fonda, biznesingizni to‘xtatmasdan.',
        tags: ['Mehnat kodeksi', 'Audit izi', 'Davrni yopish'],
      },
    ],
  },

  faq: {
    eyebrow: 'Savol-javoblar',
    title: 'Ko‘p beriladigan savollar',
    description:
      'Egalar va menejerlar birinchi demo suhbatida so‘raydigan barcha savollar.',
    items: [
      {
        q: 'Tabelo o‘zbek va rus tillarida ishlaydimi?',
        a: 'Ha — o‘zbek, rus va ingliz tillari dastur ichiga to‘liq kiritilgan. Har bir xodim o‘z tilidan foydalanishi mumkin, biznesning standart tilidan qat’i nazar.',
      },
      {
        q: 'Xodimlar qanday ishga keladi?',
        a: 'GPS, filialdagi QR-kod yoki NFC karta orqali — telefonni qulfdan chiqarish shart emas.',
      },
      {
        q: 'Xodim ishdan chiqishni unutib qo‘ysa nima bo‘ladi?',
        a: 'Tizim buni avtomatik aniqlaydi va menejerga ko‘rsatadi; agar chindan ham unutilgan bo‘lsa, belgilangan vaqtdan keyin avtomatik yopiladi.',
      },
      {
        q: 'Yarim tunni kesib o‘tuvchi smenalarni boshqara oladimi?',
        a: 'Ha — kechayu-kunduz smenalar (masalan, 16:00–04:00) to‘g‘ri hisoblanadi, jumladan tanaffus va oylik maosh.',
      },
      {
        q: 'Muvofiqlik funksiyasi jadval e’lon qilishimga to‘sqinlik qiladimi?',
        a: 'Yo‘q. Tabelo faqat yumshoq ogohlantirish beradi — jadvalni e’lon qilishga hech qachon to‘sqinlik qilmaydi. Qaror doim sizda.',
      },
      {
        q: 'Mobil ilova bormi?',
        a: 'Ha — iOS va Android uchun to‘liq mobil ilova mavjud.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Narxlar',
    title: 'Haqiqatan ham ishlatadigan narsangiz uchun narx',
    description:
      'Asosiy funksiyalar — jadval, ishga kelish, xodimlar va so‘rovlar — har bir biznes uchun bepul kiritilgan. Qo‘shimcha imkoniyatlar kerak bo‘lganda yoqiladi.',
    scopeLabel: 'Biznes hajmi',
    single: 'Bitta filial',
    multi: 'Ko‘p filial',
    singleNote: 'Har bir restoran uchun oylik yagona to‘lov.',
    multiNote:
      'Tashkilot uchun bitta to‘lov, ustiga har bir qo‘shimcha manzil uchun filial to‘lovi.',
    mostPopular: 'Tavsiya etiladi',
    cta: 'Narx uchun demo band qiling',
    plans: [
      {
        name: 'Start',
        clock: 'GPS orqali ishga kelish',
        blurb: 'Bitta joylashuv uchun asosiy nazorat.',
        features: [
          'Torting-tashlang jadval tuzuvchi',
          'Filial geozonasi bilan GPS orqali ishga kelish',
          'Avtomatik tabel va Excelga chiqarish',
          'Dam olish so‘rovlari va tasdiqlash',
        ],
      },
      {
        name: 'Grow',
        clock: 'GPS + aylanuvchi QR',
        blurb: 'Ishga kelishni qattiqroq nazorat qilishi kerak bo‘lgan gavjum oshxonalar uchun.',
        features: [
          'Startdagi hamma narsa',
          'Aylanuvchi QR kodlar — birov uchun belgilash yo‘q',
          'Talab prognozi kalendari va haftalik xarajat byudjeti',
          'Ro‘yxatlar, o‘quv modullari va Darajam darajalari',
        ],
      },
      {
        name: 'Scale',
        clock: 'GPS + NFC karta',
        blurb: 'Haqiqiy raqamlar asosida ishlaydigan ko‘p filialli guruhlar uchun.',
        features: [
          'Growdagi hamma narsa',
          'Brendlangan NFC karta',
          'Batafsil ruxsatlarga ega maxsus rollar',
          'Dono opa sun’iy intellekt yordamchisi (pullik qo‘shimcha)',
        ],
      },
    ],
  },

  finalCta: {
    eyebrow: 'Keling, boshlaymiz',
    title: 'Keyingi jadvalingizni guruh chatidan chiqaring',
    body: 'O‘zbek, rus yoki ingliz tilida 30 daqiqalik qo‘ng‘iroq — Tabelo restoraningizga mos kelishini ko‘rish uchun yetarli.',
    cta: 'Demo band qiling',
  },

  footer: {
    blurb:
      'Tabelo — restoranlar uchun xodimlarni boshqarish tizimi: jadval, ishga kelish, tabel va oylik maosh, barchasi bir joyda.',
    updatesTitle: 'Mahsulot yangiliklarini oling',
    emailLabel: 'Elektron pochta manzili',
    emailPlaceholder: 'Elektron pochtangizni kiriting',
    subscribe: 'Obuna bo‘lish',
    copyrightTemplate: '© {year} Bilig Labs. Tabelo — Bilig Labs mahsuloti.',
    locations: 'Toshkent · O‘zbek · Rus · Ingliz',
    columns: [
      {
        title: 'Mahsulot',
        links: [
          'Jadval va rejalashtirish',
          'Ishga kelish / ketish',
          'Tabel va oylik maosh',
          'Davomat hisobotlari',
        ],
      },
      {
        title: 'Modullar',
        links: ['Ro‘yxatlar', 'Darajam darajalari', 'O‘qish', 'Dono opa AI'],
      },
      {
        title: 'Kompaniya',
        links: ['Bilig Labs', 'Dastro', 'Aloqa', 'Maxfiylik siyosati'],
      },
    ],
  },

  mocks: {
    rotaTitle: '32-hafta · Oshxona va Zal',
    branch: 'Chorsu filiali',
    onBudget: 'Byudjet ichida',
    projectedCost: 'Mehnat xarajati prognozi',
    whosIn: 'Hozir kim ishda',
    live: 'Jonli',
    demandTitle: 'Talab prognozi · Avgust',
    demandLevels: 'L1–L4',
    demandNote: '19-avgust, shanba · ~180 mehmon · 4-daraja',
    timesheetTitle: 'Tabel · 31-hafta',
    approvedLocked: 'Tasdiqlangan va yopilgan',
    payrollReady: 'Maoshga tayyor',
    staff: 'Xodim',
    hours: 'Soat',
    pay: 'Maosh (UZS)',
    checklistTitle: 'Ochilish ro‘yxati',
    checklistMeta: 'Oshxona · 3 tadan 2 tasi bajarildi',
    goodMorning: 'Xayrli tong,',
    todaysShift: 'Bugungi smena',
    shiftTime: '12:00 – 20:00 · Zal',
    swipeToClockIn: 'Belgilash uchun suring',
    donoOpa: 'Dono opa',
    rankLabel: 'Darajam · 4-daraja',
    rankName: 'Tajribali',
    days: ['Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan', 'Yak'],
    depts: { floor: 'Zal', kitchen: 'Oshxona', hosts: 'Kutib olish', bar: 'Bar' },
    expectedPrefix: 'Kutilmoqda',
    currency: 'UZS',
    costValue: '14 820 000',
    payValues: ['3 250 000', '3 780 000', '2 610 000'],
    clockInName: 'Anvar',
    chips: ['GPS', 'NFC', 'Vaqtida'],
    rankPoints: '6 420 ball',
    rankTarget: '10 000',
    shiftStrength: 'Smena ko\u2018rsatkichi 4.2',
    chat: {
      question: 'Lag\u2018mon ichida yeryong\u2018oq bormi?',
      answer:
        'Yo\u2018q \u2014 lag\u2018monda yeryong\u2018oq yo\u2018q. Ammo sous tarkibida kunjut bor, allergiya haqida mehmonni ogohlantiring.',
    },
    checklistItems: [
      'Muzlatgich harorati qayd etildi',
      'Tayyorlash joyi fotosurati',
      'Kassa jamg\u2018armasi sanaldi',
    ],
    photoBadge: 'foto',
  },
}
