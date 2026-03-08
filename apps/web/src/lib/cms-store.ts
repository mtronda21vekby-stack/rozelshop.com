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
