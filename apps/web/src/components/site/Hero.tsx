'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Locale,
  getSiteContent,
  toLocalizedHref
} from '../../lib/site-data'
import { defaultCmsSnapshot, readCmsSnapshot } from '../../lib/cms-store'

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const siteData = getSiteContent(locale)
  const [cmsHero, setCmsHero] = useState(defaultCmsSnapshot.hero)

  useEffect(() => {
    if (locale !== 'ru') {
      return
    }

    setCmsHero(readCmsSnapshot().hero)
  }, [locale])

  const hero =
    locale === 'ru'
      ? cmsHero
      : {
          eyebrow: siteData.hero.eyebrow,
          title: siteData.hero.title,
          description: siteData.hero.description,
          primaryLabel: siteData.hero.primaryCta.label,
          primaryHref: siteData.hero.primaryCta.href,
          secondaryLabel: siteData.hero.secondaryCta.label,
          secondaryHref: siteData.hero.secondaryCta.href,
          sideTopLabel: siteData.hero.sideTopLabel,
          sideTopText: siteData.hero.sideTopText,
          sideBottomLabel: siteData.hero.sideBottomLabel,
          sideBottomText: siteData.hero.sideBottomText
        }

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="eyebrow">{hero.eyebrow}</div>

          <h1 className="hero__title">{hero.title}</h1>

          <p className="hero__text">{hero.description}</p>

          <div className="button-row">
            <Link
              href={toLocalizedHref(locale, hero.primaryHref)}
              className="btn btn--primary"
            >
              {hero.primaryLabel}
            </Link>

            <Link
              href={toLocalizedHref(locale, hero.secondaryHref)}
              className="btn btn--ghost"
            >
              {hero.secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="hero__stack">
          <div className="panel panel--large">
            <div className="panel__label">{hero.sideTopLabel}</div>
            <div className="panel__text-large">{hero.sideTopText}</div>
          </div>

          <div className="panel panel--medium">
            <div className="panel__label">{hero.sideBottomLabel}</div>
            <div className="panel__text">{hero.sideBottomText}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
