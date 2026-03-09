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

export type CmsSnapshot = {
  hero: CmsHeroContent
  home: CmsHomeContent
}

export const CMS_STORAGE_KEY = 'rozel-cms-snapshot'

export const defaultCmsSnapshot: CmsSnapshot = {
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
  }
}

export function sanitizeCmsSnapshot(value: unknown): CmsSnapshot {
  if (!value || typeof value !== 'object') {
    return defaultCmsSnapshot
  }

  const source = value as Partial<CmsSnapshot>

  return {
    hero: {
      eyebrow: typeof source.hero?.eyebrow === 'string' ? source.hero.eyebrow : defaultCmsSnapshot.hero.eyebrow,
      title: typeof source.hero?.title === 'string' ? source.hero.title : defaultCmsSnapshot.hero.title,
      description:
        typeof source.hero?.description === 'string'
          ? source.hero.description
          : defaultCmsSnapshot.hero.description,
      primaryLabel:
        typeof source.hero?.primaryLabel === 'string'
          ? source.hero.primaryLabel
          : defaultCmsSnapshot.hero.primaryLabel,
      primaryHref:
        typeof source.hero?.primaryHref === 'string'
          ? source.hero.primaryHref
          : defaultCmsSnapshot.hero.primaryHref,
      secondaryLabel:
        typeof source.hero?.secondaryLabel === 'string'
          ? source.hero.secondaryLabel
          : defaultCmsSnapshot.hero.secondaryLabel,
      secondaryHref:
        typeof source.hero?.secondaryHref === 'string'
          ? source.hero.secondaryHref
          : defaultCmsSnapshot.hero.secondaryHref,
      sideTopLabel:
        typeof source.hero?.sideTopLabel === 'string'
          ? source.hero.sideTopLabel
          : defaultCmsSnapshot.hero.sideTopLabel,
      sideTopText:
        typeof source.hero?.sideTopText === 'string'
          ? source.hero.sideTopText
          : defaultCmsSnapshot.hero.sideTopText,
      sideBottomLabel:
        typeof source.hero?.sideBottomLabel === 'string'
          ? source.hero.sideBottomLabel
          : defaultCmsSnapshot.hero.sideBottomLabel,
      sideBottomText:
        typeof source.hero?.sideBottomText === 'string'
          ? source.hero.sideBottomText
          : defaultCmsSnapshot.hero.sideBottomText
    },
    home: {
      introEyebrow:
        typeof source.home?.introEyebrow === 'string'
          ? source.home.introEyebrow
          : defaultCmsSnapshot.home.introEyebrow,
      introTitle:
        typeof source.home?.introTitle === 'string'
          ? source.home.introTitle
          : defaultCmsSnapshot.home.introTitle,
      productsEyebrow:
        typeof source.home?.productsEyebrow === 'string'
          ? source.home.productsEyebrow
          : defaultCmsSnapshot.home.productsEyebrow,
      productsTitle:
        typeof source.home?.productsTitle === 'string'
          ? source.home.productsTitle
          : defaultCmsSnapshot.home.productsTitle,
      productsLinkLabel:
        typeof source.home?.productsLinkLabel === 'string'
          ? source.home.productsLinkLabel
          : defaultCmsSnapshot.home.productsLinkLabel,
      featuredEyebrow:
        typeof source.home?.featuredEyebrow === 'string'
          ? source.home.featuredEyebrow
          : defaultCmsSnapshot.home.featuredEyebrow,
      featuredTitle:
        typeof source.home?.featuredTitle === 'string'
          ? source.home.featuredTitle
          : defaultCmsSnapshot.home.featuredTitle,
      featuredText:
        typeof source.home?.featuredText === 'string'
          ? source.home.featuredText
          : defaultCmsSnapshot.home.featuredText,
      featuredCta:
        typeof source.home?.featuredCta === 'string'
          ? source.home.featuredCta
          : defaultCmsSnapshot.home.featuredCta
    }
  }
}

export function readCmsSnapshot(): CmsSnapshot {
  if (typeof window === 'undefined') {
    return defaultCmsSnapshot
  }

  try {
    const raw = window.localStorage.getItem(CMS_STORAGE_KEY)

    if (!raw) {
      return defaultCmsSnapshot
    }

    return sanitizeCmsSnapshot(JSON.parse(raw))
  } catch {
    return defaultCmsSnapshot
  }
}

export function writeCmsSnapshot(snapshot: CmsSnapshot): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(snapshot))
}
