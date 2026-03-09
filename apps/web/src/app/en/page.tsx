'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Hero } from '../../components/site/Hero'
import { defaultCmsStore, readCmsSnapshotByLocale, type CmsSnapshot } from '../../lib/cms-store'
import { getSiteContent } from '../../lib/site-data'

export default function EnglishHomePage() {
  const siteData = getSiteContent('en')
  const [cmsSnapshot, setCmsSnapshot] = useState<CmsSnapshot>(defaultCmsStore.en)

  useEffect(() => {
    setCmsSnapshot(readCmsSnapshotByLocale('en'))
  }, [])

  const home = cmsSnapshot.home
  const sections = cmsSnapshot.sections

  const featured = useMemo(() => {
    return (
      siteData.products.find((item) => item.slug === cmsSnapshot.featuredProductSlug) ??
      siteData.products[0]
    )
  }, [cmsSnapshot.featuredProductSlug, siteData.products])

  return (
    <>
      <Hero locale="en" />

      {sections.showIntro && (
        <section className="page-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{home.introEyebrow}</div>
              <h2 className="section-title">{home.introTitle}</h2>
            </div>

            <div className="grid grid--3">
              {siteData.highlights.map((item) => (
                <article key={item.title} className="card feature-card">
                  <h3 className="feature-card__title">{item.title}</h3>
                  <p className="feature-card__text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {sections.showCollections && (
        <section className="page-section page-divider">
          <div className="container">
            <div className="section-head__row">
              <div>
                <div className="eyebrow">{siteData.home.collectionsEyebrow}</div>
                <h2 className="section-title">{siteData.home.collectionsTitle}</h2>
              </div>

              <Link href="/en/collections" className="link-inline">
                {siteData.home.viewAllLabel}
              </Link>
            </div>

            <div className="grid grid--3" style={{ marginTop: 34 }}>
              {siteData.collections.map((item) => (
                <article key={item.slug} className="card">
                  <div className="card__media" />

                  <div className="card__body">
                    <div className="card__label">ROZEL</div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__text">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {sections.showProducts && (
        <section className="page-section page-divider">
          <div className="container">
            <div className="section-head__row">
              <div>
                <div className="eyebrow">{home.productsEyebrow}</div>
                <h2 className="section-title">{home.productsTitle}</h2>
              </div>

              <Link href="/en/collections" className="link-inline">
                {home.productsLinkLabel}
              </Link>
            </div>

            <div className="grid grid--3" style={{ marginTop: 34 }}>
              {siteData.products.map((item) => (
                <article key={item.slug} className="card">
                  <div className="card__media card__media--soft" />

                  <div className="card__body">
                    <div className="card__label">{item.badge}</div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__text">{item.subtitle}</p>

                    <div className="card__meta">
                      <div className="card__price">{item.price}</div>

                      <Link href={`/en/product/${item.slug}`} className="link-inline">
                        Open item
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {sections.showFeatured && featured && (
        <section className="page-section page-divider">
          <div className="container">
            <div className="featured-product">
              <div className="featured-product__media" />

              <div>
                <div className="eyebrow">{home.featuredEyebrow}</div>
                <h2 className="featured-product__title">{home.featuredTitle}</h2>
                <p className="featured-product__text">{home.featuredText}</p>

                <div className="featured-product__meta">
                  <div className="card__price">{featured.price}</div>
                  <Link href={`/en/product/${featured.slug}`} className="btn btn--primary">
                    {home.featuredCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.showEditorial && (
        <section className="page-section page-divider">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">ROZEL</div>
              <h2 className="section-title">Collection worlds</h2>
            </div>

            <div className="editorial-grid">
              <article className="editorial-card editorial-card--tall">
                <div className="editorial-card__overlay" />

                <div className="editorial-card__content">
                  <div className="editorial-card__eyebrow">COLLECTION</div>
                  <h3 className="editorial-card__title">Noir Atelier</h3>
                  <p className="editorial-card__text">
                    Deep black, sharp structure, and a controlled silhouette language.
                  </p>
                </div>
              </article>

              <article className="editorial-card editorial-card--soft">
                <div className="editorial-card__overlay" />

                <div className="editorial-card__content">
                  <div className="editorial-card__eyebrow">PRIVATE</div>
                  <h3 className="editorial-card__title">Private Capsule</h3>
                  <p className="editorial-card__text">
                    Limited releases built for a tightly curated luxury format.
                  </p>
                </div>
              </article>

              <article className="editorial-card editorial-card--soft">
                <div className="editorial-card__overlay" />

                <div className="editorial-card__content">
                  <div className="editorial-card__eyebrow">EVENING</div>
                  <h3 className="editorial-card__title">Evening Study</h3>
                  <p className="editorial-card__text">
                    Evening forms shaped by fluid balance and quiet visual power.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
