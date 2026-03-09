'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { defaultCmsProducts, readCmsProducts, type CmsProduct } from '../../../lib/cms-store'
import { getSiteContent } from '../../../lib/site-data'

export default function EnglishCollectionsPage() {
  const siteData = getSiteContent('en')
  const [products, setProducts] = useState<CmsProduct[]>(defaultCmsProducts)
  const [activeTab, setActiveTab] = useState<'all' | 'outerwear' | 'evening' | 'capsule'>('all')

  useEffect(() => {
    setProducts(readCmsProducts())
  }, [])

  const publishedProducts = useMemo(
    () => products.filter((item) => item.status === 'Опубликовано'),
    [products]
  )

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') {
      return publishedProducts
    }

    if (activeTab === 'outerwear') {
      return publishedProducts.filter((item) => item.collection.toLowerCase().includes('noir'))
    }

    if (activeTab === 'evening') {
      return publishedProducts.filter((item) => item.collection.toLowerCase().includes('evening'))
    }

    return publishedProducts.filter((item) => item.collection.toLowerCase().includes('private'))
  }, [activeTab, publishedProducts])

  const featured = publishedProducts[0]

  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="eyebrow">{siteData.productsPage.eyebrow}</div>
          <h1 className="page-title">{siteData.productsPage.title}</h1>
          <p className="page-text">{siteData.productsPage.description}</p>

          <div className="catalog-tabs">
            <button
              type="button"
              className={`catalog-tab ${activeTab === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              {siteData.productsPage.tabs.all}
            </button>
            <button
              type="button"
              className={`catalog-tab ${activeTab === 'outerwear' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('outerwear')}
            >
              {siteData.productsPage.tabs.outerwear}
            </button>
            <button
              type="button"
              className={`catalog-tab ${activeTab === 'evening' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('evening')}
            >
              {siteData.productsPage.tabs.evening}
            </button>
            <button
              type="button"
              className={`catalog-tab ${activeTab === 'capsule' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('capsule')}
            >
              {siteData.productsPage.tabs.capsule}
            </button>
          </div>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            {filteredProducts.map((item) => (
              <article key={item.slug} className="card">
                <div className="card__media card__media--soft" />

                <div className="card__body">
                  <div className="card__label">{item.badge}</div>
                  <h2 className="card__title">{item.title}</h2>
                  <p className="card__text">{item.description}</p>

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

      {featured && (
        <section className="page-section page-divider">
          <div className="container">
            <div className="featured-product">
              <div className="featured-product__media" />

              <div>
                <div className="eyebrow">Featured</div>
                <h2 className="featured-product__title">{featured.title}</h2>
                <p className="featured-product__text">{siteData.productsPage.featuredText}</p>

                <div className="featured-product__meta">
                  <div className="card__price">{featured.price}</div>
                  <Link href={`/en/product/${featured.slug}`} className="btn btn--primary">
                    Open item
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
