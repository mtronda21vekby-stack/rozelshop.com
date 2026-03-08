export type Locale = 'ru' | 'en'

type NavItem = {
  label: string
  href: string
}

type HighlightItem = {
  title: string
  text: string
}

type CollectionItem = {
  slug: string
  title: string
  description: string
}

type JournalItem = {
  title: string
  category: string
  excerpt: string
}

export type ProductCategory = 'outerwear' | 'evening' | 'capsule'

export type ProductItem = {
  slug: string
  collection: string
  category: ProductCategory
  badge: string
  title: string
  subtitle: string
  description: string
  price: string
  material: string
  details: string[]
}

type SiteContent = {
  brand: string
  domain: string
  navigation: NavItem[]
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: {
      label: string
      href: string
    }
    secondaryCta: {
      label: string
      href: string
    }
    sideTopLabel: string
    sideTopText: string
    sideBottomLabel: string
    sideBottomText: string
  }
  home: {
    introEyebrow: string
    introTitle: string
    collectionsEyebrow: string
    collectionsTitle: string
    viewAllLabel: string
    productsEyebrow: string
    productsTitle: string
    productsLinkLabel: string
    featuredEyebrow: string
    featuredTitle: string
    featuredText: string
    featuredCta: string
  }
  highlights: HighlightItem[]
  collectionsPage: {
    eyebrow: string
    title: string
    description: string
  }
  collections: CollectionItem[]
  productsPage: {
    eyebrow: string
    title: string
    description: string
    tabs: {
      all: string
      outerwear: string
      evening: string
      capsule: string
    }
    featuredTitle: string
    featuredText: string
  }
  products: ProductItem[]
  productPage: {
    backLabel: string
    detailsTitle: string
    materialLabel: string
    collectionLabel: string
    ctaPrimary: string
    ctaSecondary: string
  }
  housePage: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  journalPage: {
    eyebrow: string
    title: string
  }
  journal: JournalItem[]
  contactPage: {
    eyebrow: string
    title: string
    emailLabel: string
    presenceLabel: string
    email: string
    city: string
  }
  privacyPage: {
    eyebrow: string
    title: string
    text: string
  }
  termsPage: {
    eyebrow: string
    title: string
    text: string
  }
  footer: {
    description: string
    navigationTitle: string
    servicesTitle: string
    copyright: string
  }
}

const content: Record<Locale, SiteContent> = {
  ru: {
    brand: 'ROZEL',
    domain: 'rozelshop.com',
    navigation: [
      { label: 'Дом моды', href: '/house' },
      { label: 'Коллекции', href: '/collections' },
      { label: 'Журнал', href: '/journal' },
      { label: 'Контакты', href: '/contact' }
    ],
    hero: {
      eyebrow: 'Maison ROZEL',
      title: 'Современный модный дом, построенный на точности, силуэте и сдержанности.',
      description:
        'ROZEL создаёт luxury ready-to-wear с кинематографичной подачей, точным кроем и тихой визуальной силой.',
      primaryCta: {
        label: 'Смотреть коллекции',
        href: '/collections'
      },
      secondaryCta: {
        label: 'Войти в дом',
        href: '/house'
      },
      sideTopLabel: 'Направление дома',
      sideTopText:
        'Кинематографичный чёрный, скульптурный тейлоринг и дорогой, спокойный ритм luxury-опыта.',
      sideBottomLabel: 'Фундамент',
      sideBottomText:
        'Сайт строится как premium storefront с местом для коллекций, product commerce, private client flows и скрытого admin-layer.'
    },
    home: {
      introEyebrow: 'ROZEL',
      introTitle: 'Дом, созданный для современной luxury-моды.',
      collectionsEyebrow: 'Коллекции',
      collectionsTitle: 'Фирменные миры ROZEL.',
      viewAllLabel: 'Смотреть всё',
      productsEyebrow: 'Изделия',
      productsTitle: 'Первый product layer дома.',
      productsLinkLabel: 'Открыть каталог',
      featuredEyebrow: 'Featured',
      featuredTitle: 'Избранное изделие сезона.',
      featuredText:
        'Витрина ROZEL строится не как список вещей, а как curated luxury-selection с сильной editorial-подачей.',
      featuredCta: 'Открыть изделие'
    },
    highlights: [
      {
        title: 'Редакционное направление',
        text: 'Контролируемый визуальный язык, выстроенный через тень, пропорцию и движение.'
      },
      {
        title: 'Коды дома',
        text: 'Тейлоринг, вечерние формы и private capsule-подход, собранные в единую luxury-систему.'
      },
      {
        title: 'Private client layer',
        text: 'Фундамент под дропы, персональные сценарии и премиальный аккаунт-контур.'
      }
    ],
    collectionsPage: {
      eyebrow: 'Коллекции',
      title: 'Вселенная коллекций ROZEL.',
      description:
        'Фирменный тейлоринг, private capsule-релизы и evening studies, собранные как отдельные editorial-миры.'
    },
    collections: [
      {
        slug: 'noir-atelier',
        title: 'Noir Atelier',
        description: 'Структурный outerwear, глубокий чёрный и жёсткий контроль силуэта.'
      },
      {
        slug: 'private-capsule',
        title: 'Private Capsule',
        description: 'Ограниченные editorial-образы, рассчитанные на строго контролируемый выпуск.'
      },
      {
        slug: 'evening-study',
        title: 'Evening Study',
        description: 'Текучие вечерние формы, построенные на сдержанности, балансе и тихой силе.'
      }
    ],
    productsPage: {
      eyebrow: 'Каталог',
      title: 'Коллекционные изделия ROZEL.',
      description:
        'Первый product layer дома: верхняя одежда, вечерние формы и точный тейлоринг, оформленные как luxury storefront.',
      tabs: {
        all: 'Все',
        outerwear: 'Outerwear',
        evening: 'Evening',
        capsule: 'Capsule'
      },
      featuredTitle: 'Featured product direction',
      featuredText:
        'Следующий слой каталога — реальные изображения, sizes, availability и private-client product workflows.'
    },
    products: [
      {
        slug: 'noir-tailored-coat',
        collection: 'Noir Atelier',
        category: 'outerwear',
        badge: 'Signature',
        title: 'Noir Tailored Coat',
        subtitle: 'Структурное пальто с жёсткой линией плеч',
        description:
          'Силуэтное пальто с длинной линией, плотной посадкой по корпусу и controlled editorial-подачей.',
        price: '$2,400',
        material: 'Wool / Cashmere Blend',
        details: [
          'Удлинённый силуэт',
          'Жёсткая линия плеч',
          'Скрытая застёжка',
          'Подкладка premium-grade'
        ]
      },
      {
        slug: 'atelier-silk-dress',
        collection: 'Evening Study',
        category: 'evening',
        badge: 'Evening',
        title: 'Atelier Silk Dress',
        subtitle: 'Текучая вечерняя форма',
        description:
          'Вечернее изделие с мягким падением ткани, чистой вертикалью и приглушённым luxury-характером.',
        price: '$1,800',
        material: 'Silk Satin',
        details: [
          'Мягкая вертикальная линия',
          'Минималистичный крой',
          'Evening-oriented silhouette',
          'Лёгкая внутренняя структура'
        ]
      },
      {
        slug: 'private-capsule-jacket',
        collection: 'Private Capsule',
        category: 'capsule',
        badge: 'Limited',
        title: 'Private Capsule Jacket',
        subtitle: 'Ограниченный жакет editorial-линии',
        description:
          'Короткий жакет с точным объёмом, строгой архитектурой корпуса и капсульным характером.',
        price: '$1,950',
        material: 'Structured Wool',
        details: [
          'Капсульный выпуск',
          'Архитектурная форма',
          'Чистая передняя плоскость',
          'Плотная luxury-фактура'
        ]
      }
    ],
    productPage: {
      backLabel: 'Назад в каталог',
      detailsTitle: 'Детали изделия',
      materialLabel: 'Материал',
      collectionLabel: 'Коллекция',
      ctaPrimary: 'Связаться по изделию',
      ctaSecondary: 'Открыть коллекции'
    },
    housePage: {
      eyebrow: 'Дом моды',
      title: 'ROZEL строится на точности, сдержанности и силуэте.',
      paragraphs: [
        'Дом формируется через тихий подход к luxury: меньше жестов, сильнее форма, чище пропорция и жёстче визуальная дисциплина.',
        'ROZEL рассматривает тейлоринг, вечернюю конструкцию и editorial-подачу как единую систему. Вещь, кампания и клиентский опыт должны ощущаться согласованно.',
        'Эта цифровая основа создаётся как полноценная fashion-платформа с коллекциями, private client-сценариями и скрытым административным слоем.'
      ]
    },
    journalPage: {
      eyebrow: 'Журнал',
      title: 'Заметки из дома.'
    },
    journal: [
      {
        title: 'Дисциплина силуэта',
        category: 'Дом',
        excerpt:
          'ROZEL начинается с формы: сначала структура, затем тишина, затем акцент на линии и пропорции.'
      },
      {
        title: 'Тёмный тейлоринг как язык',
        category: 'Editorial',
        excerpt:
          'Чёрный здесь — не отсутствие цвета, а система глубины, контраста и фактуры.'
      },
      {
        title: 'Модель private capsule',
        category: 'Коллекции',
        excerpt:
          'Ограниченный выпуск делает связь между вещью и клиентом более точной и осознанной.'
      }
    ],
    contactPage: {
      eyebrow: 'Контакты',
      title: 'Клиентский сервис и контакты дома.',
      emailLabel: 'Email',
      presenceLabel: 'Присутствие',
      email: 'clientservices@rozelshop.com',
      city: 'Paris / Online'
    },
    privacyPage: {
      eyebrow: 'Конфиденциальность',
      title: 'Конфиденциальность',
      text:
        'ROZEL уважает приватность клиента и обрабатывает информацию с максимальной деликатностью. Полный текст политики будет расширен вместе с запуском commerce и account-слоя.'
    },
    termsPage: {
      eyebrow: 'Условия',
      title: 'Условия использования',
      text:
        'Условия использования цифрового дома ROZEL будут расширены вместе с запуском product commerce, клиентских аккаунтов и сервисных политик.'
    },
    footer: {
      description:
        'Luxury fashion house, сфокусированный на силуэте, editorial-ясности и сдержанном цифровом опыте.',
      navigationTitle: 'Навигация',
      servicesTitle: 'Клиентский сервис',
      copyright: `© ${new Date().getFullYear()} ROZEL. Все права защищены.`
    }
  },
  en: {
    brand: 'ROZEL',
    domain: 'rozelshop.com',
    navigation: [
      { label: 'House', href: '/house' },
      { label: 'Collections', href: '/collections' },
      { label: 'Journal', href: '/journal' },
      { label: 'Contact', href: '/contact' }
    ],
    hero: {
      eyebrow: 'Maison ROZEL',
      title: 'A modern fashion house built on precision, silhouette, and restraint.',
      description:
        'ROZEL creates luxury ready-to-wear with a cinematic point of view, sharp tailoring, and quiet visual power.',
      primaryCta: {
        label: 'Explore Collections',
        href: '/collections'
      },
      secondaryCta: {
        label: 'Enter the House',
        href: '/house'
      },
      sideTopLabel: 'House Direction',
      sideTopText:
        'Cinematic black, sculpted tailoring, and a premium luxury rhythm shaped with control.',
      sideBottomLabel: 'Foundation',
      sideBottomText:
        'The site is built as a premium storefront first, with room for collections, product commerce, private client flows, and a hidden admin layer.'
    },
    home: {
      introEyebrow: 'ROZEL',
      introTitle: 'A house built for modern luxury.',
      collectionsEyebrow: 'Collections',
      collectionsTitle: 'Signature ROZEL worlds.',
      viewAllLabel: 'View all',
      productsEyebrow: 'Products',
      productsTitle: 'The first product layer of the house.',
      productsLinkLabel: 'Open catalog',
      featuredEyebrow: 'Featured',
      featuredTitle: 'The featured piece of the season.',
      featuredText:
        'The ROZEL storefront is built not as a list of items, but as a curated luxury selection with strong editorial framing.',
      featuredCta: 'Open item'
    },
    highlights: [
      {
        title: 'Editorial Direction',
        text: 'A controlled visual language shaped through shadow, proportion, and movement.'
      },
      {
        title: 'House Signatures',
        text: 'Tailoring, evening forms, and a private capsule model merged into one luxury system.'
      },
      {
        title: 'Private Client Layer',
        text: 'A future-ready base for drops, personal flows, and premium account experiences.'
      }
    ],
    collectionsPage: {
      eyebrow: 'Collections',
      title: 'The ROZEL collection universe.',
      description:
        'Signature tailoring, private capsule releases, and evening studies designed as distinct editorial worlds.'
    },
    collections: [
      {
        slug: 'noir-atelier',
        title: 'Noir Atelier',
        description: 'Structured outerwear, deep black tones, and strict silhouette control.'
      },
      {
        slug: 'private-capsule',
        title: 'Private Capsule',
        description: 'Limited editorial forms designed for tightly controlled release.'
      },
      {
        slug: 'evening-study',
        title: 'Evening Study',
        description: 'Fluid evening silhouettes shaped by restraint, balance, and quiet power.'
      }
    ],
    productsPage: {
      eyebrow: 'Catalog',
      title: 'ROZEL collection products.',
      description:
        'The first product layer of the house: outerwear, evening forms, and precise tailoring framed as a luxury storefront.',
      tabs: {
        all: 'All',
        outerwear: 'Outerwear',
        evening: 'Evening',
        capsule: 'Capsule'
      },
      featuredTitle: 'Featured product direction',
      featuredText:
        'The next catalog layer is real imagery, sizes, availability, and private-client product workflows.'
    },
    products: [
      {
        slug: 'noir-tailored-coat',
        collection: 'Noir Atelier',
        category: 'outerwear',
        badge: 'Signature',
        title: 'Noir Tailored Coat',
        subtitle: 'Structured coat with a sharp shoulder line',
        description:
          'A silhouette coat with a long line, controlled fit through the body, and strong editorial presence.',
        price: '$2,400',
        material: 'Wool / Cashmere Blend',
        details: [
          'Extended silhouette',
          'Sharp shoulder line',
          'Hidden closure',
          'Premium-grade lining'
        ]
      },
      {
        slug: 'atelier-silk-dress',
        collection: 'Evening Study',
        category: 'evening',
        badge: 'Evening',
        title: 'Atelier Silk Dress',
        subtitle: 'Fluid evening form',
        description:
          'An evening piece with soft fabric fall, clean verticality, and a restrained luxury character.',
        price: '$1,800',
        material: 'Silk Satin',
        details: [
          'Soft vertical line',
          'Minimal cut',
          'Evening-oriented silhouette',
          'Light internal structure'
        ]
      },
      {
        slug: 'private-capsule-jacket',
        collection: 'Private Capsule',
        category: 'capsule',
        badge: 'Limited',
        title: 'Private Capsule Jacket',
        subtitle: 'Limited jacket from the editorial line',
        description:
          'A short jacket with precise volume, strict body architecture, and a capsule luxury identity.',
        price: '$1,950',
        material: 'Structured Wool',
        details: [
          'Capsule release',
          'Architectural shape',
          'Clean front plane',
          'Dense luxury texture'
        ]
      }
    ],
    productPage: {
      backLabel: 'Back to catalog',
      detailsTitle: 'Product details',
      materialLabel: 'Material',
      collectionLabel: 'Collection',
      ctaPrimary: 'Contact about this item',
      ctaSecondary: 'Open collections'
    },
    housePage: {
      eyebrow: 'House',
      title: 'ROZEL is built on precision, restraint, and silhouette.',
      paragraphs: [
        'The house is shaped by a quiet approach to luxury: fewer gestures, stronger forms, cleaner proportions, and stricter visual discipline.',
        'ROZEL treats tailoring, evening structure, and editorial direction as one continuous system. The garment, the campaign, and the client experience are designed to feel aligned.',
        'This digital foundation is being built as a complete fashion platform with collections, private client flows, and a hidden administrative layer.'
      ]
    },
    journalPage: {
      eyebrow: 'Journal',
      title: 'Notes from the house.'
    },
    journal: [
      {
        title: 'The discipline of silhouette',
        category: 'House',
        excerpt:
          'ROZEL begins with shape: structure first, then silence, then emphasis on line and proportion.'
      },
      {
        title: 'Dark tailoring as language',
        category: 'Editorial',
        excerpt:
          'Black is treated not as absence, but as a system of depth, contrast, and texture.'
      },
      {
        title: 'The private capsule model',
        category: 'Collections',
        excerpt:
          'Limited release structures create a more intentional relationship between garment and client.'
      }
    ],
    contactPage: {
      eyebrow: 'Contact',
      title: 'Client services and house contact.',
      emailLabel: 'Email',
      presenceLabel: 'Presence',
      email: 'clientservices@rozelshop.com',
      city: 'Paris / Online'
    },
    privacyPage: {
      eyebrow: 'Privacy',
      title: 'Privacy',
      text:
        'ROZEL respects client privacy and handles information with discretion. The full policy will expand as the commerce and account layers are activated.'
    },
    termsPage: {
      eyebrow: 'Terms',
      title: 'Terms of Use',
      text:
        'Terms of use for the ROZEL digital house will expand alongside product commerce, client accounts, and service policies.'
    },
    footer: {
      description:
        'A luxury fashion house focused on silhouette, editorial clarity, and a restrained digital experience.',
      navigationTitle: 'Navigation',
      servicesTitle: 'Client Services',
      copyright: `© ${new Date().getFullYear()} ROZEL. All rights reserved.`
    }
  }
}

export function getSiteContent(locale: Locale): SiteContent {
  return content[locale]
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en'
  }

  return 'ru'
}

export function stripLocaleFromPathname(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/'
  }

  if (pathname === '/en') {
    return '/'
  }

  if (pathname.startsWith('/en/')) {
    const stripped = pathname.slice(3)
    return stripped.length ? stripped : '/'
  }

  return pathname
}

export function toLocalizedHref(locale: Locale, path: string): string {
  if (locale === 'ru') {
    return path
  }

  if (path === '/') {
    return '/en'
  }

  return `/en${path}`
}

export function getProductBySlug(locale: Locale, slug: string): ProductItem | undefined {
  return content[locale].products.find((item) => item.slug === slug)
}
