'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Locale,
  toLocalizedHref
} from '../../lib/site-data'
import { defaultCmsStore, readCmsSnapshotByLocale } from '../../lib/cms-store'

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const [snapshot, setSnapshot] = useState(defaultCmsStore[locale])

  useEffect(() => {
    setSnapshot(readCmsSnapshotByLocale(locale))
  }, [locale])

  const hero = snapshot.hero
  const heroStyle =
    snapshot.media.heroImage.trim().length > 0
      ? {
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.34), rgba(0,0,0,0.58)), url(${snapshot.media.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      : undefined

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
          <div className="panel panel--large" style={heroStyle}>
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
