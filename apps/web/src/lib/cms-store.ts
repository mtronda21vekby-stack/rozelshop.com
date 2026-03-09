export type CmsHeroContent = {
  eyebrow: string
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
  sideTopLabel: string
  sideTopText: string
  sideBottomLabel: string
  sideBottomText: string
}

export type CmsHomeContent = {
  introEyebrow: string
  introTitle: string
  productsEyebrow: string
  productsTitle: string
  productsLinkLabel: string
  featuredEyebrow: string
  featuredTitle: string
  featuredText: string
  featuredCta: string
}

export type CmsHomeSections = {
  showIntro: boolean
  showCollections: boolean
  showProducts: boolean
  showFeatured: boolean
  showEditorial: boolean
}

export type CmsSnapshot = {
  hero: CmsHeroContent
  home: CmsHomeContent
  sections: CmsHomeSections
  featuredProductSlug: string
}

export type CmsStore = {
  ru: CmsSnapshot
  en: CmsSnapshot
}

export const CMS_STORAGE_KEY = 'rozel-cms-store'

export const defaultCmsStore: CmsStore = {
  ru: {
    hero: {
      eyebrow: 'Maison ROZEL',
      title: 'Современный модный дом, построенный на точности, силуэте и сдержанности.',
      description:
        'ROZEL создаёт luxury ready-to-wear с кинематографичной подачей, точным кроем и тихой визуальной силой.',
      primaryLabel: 'Смотреть коллекции',
      primaryHref: '/collections',
      secondaryLabel: 'Войти в дом',
      secondaryHref: '/house',
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
      productsEyebrow: 'Изделия',
      productsTitle: 'Первый product layer дома.',
      productsLinkLabel: 'Открыть каталог',
      featuredEyebrow: 'Featured',
      featuredTitle: 'Избранное изделие сезона.',
      featuredText:
        'Витрина ROZEL строится не как список вещей, а как curated luxury-selection с сильной editorial-подачей.',
      featuredCta: 'Открыть изделие'
    },
    sections: {
      showIntro: true,
      showCollections: true,
      showProducts: true,
      showFeatured: true,
      showEditorial: true
    },
    featuredProductSlug: 'noir-tailored-coat'
  },
  en: {
    hero: {
      eyebrow: 'Maison ROZEL',
      title: 'A modern fashion house built on precision, silhouette, and restraint.',
      description:
        'ROZEL creates luxury ready-to-wear with a cinematic point of view, sharp tailoring, and quiet visual power.',
      primaryLabel: 'Explore Collections',
      primaryHref: '/collections',
      secondaryLabel: 'Enter the House',
      secondaryHref: '/house',
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
      productsEyebrow: 'Products',
      productsTitle: 'The first product layer of the house.',
      productsLinkLabel: 'Open catalog',
      featuredEyebrow: 'Featured',
      featuredTitle: 'The featured piece of the season.',
      featuredText:
        'The ROZEL storefront is built not as a list of items, but as a curated luxury selection with strong editorial framing.',
      featuredCta: 'Open item'
    },
    sections: {
      showIntro: true,
      showCollections: true,
      showProducts: true,
      showFeatured: true,
      showEditorial: true
    },
    featuredProductSlug: 'noir-tailored-coat'
  }
}

function sanitizeBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback
}

function sanitizeString(value: unknown, fallback: string): string {
  return typeof value === 'string' ? value : fallback
}

function sanitizeSnapshot(value: unknown, fallback: CmsSnapshot): CmsSnapshot {
  if (!value || typeof value !== 'object') {
    return fallback
  }

  const source = value as Partial<CmsSnapshot>

  return {
    hero: {
      eyebrow: sanitizeString(source.hero?.eyebrow, fallback.hero.eyebrow),
      title: sanitizeString(source.hero?.title, fallback.hero.title),
      description: sanitizeString(source.hero?.description, fallback.hero.description),
      primaryLabel: sanitizeString(source.hero?.primaryLabel, fallback.hero.primaryLabel),
      primaryHref: sanitizeString(source.hero?.primaryHref, fallback.hero.primaryHref),
      secondaryLabel: sanitizeString(source.hero?.secondaryLabel, fallback.hero.secondaryLabel),
      secondaryHref: sanitizeString(source.hero?.secondaryHref, fallback.hero.secondaryHref),
      sideTopLabel: sanitizeString(source.hero?.sideTopLabel, fallback.hero.sideTopLabel),
      sideTopText: sanitizeString(source.hero?.sideTopText, fallback.hero.sideTopText),
      sideBottomLabel: sanitizeString(source.hero?.sideBottomLabel, fallback.hero.sideBottomLabel),
      sideBottomText: sanitizeString(source.hero?.sideBottomText, fallback.hero.sideBottomText)
    },
    home: {
      introEyebrow: sanitizeString(source.home?.introEyebrow, fallback.home.introEyebrow),
      introTitle: sanitizeString(source.home?.introTitle, fallback.home.introTitle),
      productsEyebrow: sanitizeString(source.home?.productsEyebrow, fallback.home.productsEyebrow),
      productsTitle: sanitizeString(source.home?.productsTitle, fallback.home.productsTitle),
      productsLinkLabel: sanitizeString(
        source.home?.productsLinkLabel,
        fallback.home.productsLinkLabel
      ),
      featuredEyebrow: sanitizeString(source.home?.featuredEyebrow, fallback.home.featuredEyebrow),
      featuredTitle: sanitizeString(source.home?.featuredTitle, fallback.home.featuredTitle),
      featuredText: sanitizeString(source.home?.featuredText, fallback.home.featuredText),
      featuredCta: sanitizeString(source.home?.featuredCta, fallback.home.featuredCta)
    },
    sections: {
      showIntro: sanitizeBoolean(source.sections?.showIntro, fallback.sections.showIntro),
      showCollections: sanitizeBoolean(
        source.sections?.showCollections,
        fallback.sections.showCollections
      ),
      showProducts: sanitizeBoolean(source.sections?.showProducts, fallback.sections.showProducts),
      showFeatured: sanitizeBoolean(source.sections?.showFeatured, fallback.sections.showFeatured),
      showEditorial: sanitizeBoolean(source.sections?.showEditorial, fallback.sections.showEditorial)
    },
    featuredProductSlug: sanitizeString(source.featuredProductSlug, fallback.featuredProductSlug)
  }
}

export function sanitizeCmsStore(value: unknown): CmsStore {
  if (!value || typeof value !== 'object') {
    return defaultCmsStore
  }

  const source = value as Partial<CmsStore>

  return {
    ru: sanitizeSnapshot(source.ru, defaultCmsStore.ru),
    en: sanitizeSnapshot(source.en, defaultCmsStore.en)
  }
}

export function readCmsStore(): CmsStore {
  if (typeof window === 'undefined') {
    return defaultCmsStore
  }

  try {
    const raw = window.localStorage.getItem(CMS_STORAGE_KEY)

    if (!raw) {
      return defaultCmsStore
    }

    return sanitizeCmsStore(JSON.parse(raw))
  } catch {
    return defaultCmsStore
  }
}

export function writeCmsStore(store: CmsStore): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(store))
}

export function readCmsSnapshotByLocale(locale: 'ru' | 'en'): CmsSnapshot {
  return readCmsStore()[locale]
}

export function writeCmsSnapshotByLocale(locale: 'ru' | 'en', snapshot: CmsSnapshot): void {
  const store = readCmsStore()
  const next: CmsStore = {
    ...store,
    [locale]: snapshot
  }
  writeCmsStore(next)
}
