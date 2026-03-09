'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  defaultCmsProducts,
  readCmsProducts,
  type CmsProduct
} from '../../lib/cms-store'
import { getSiteContent, type Locale } from '../../lib/site-data'

type ProductDetailClientProps = {
  slug: string
  locale: Locale
}

export function ProductDetailClient({
  slug,
  locale
}: ProductDetailClientProps) {
  const siteData = getSiteContent(locale)
  const [products, setProducts] = useState<CmsProduct[]>(defaultCmsProducts)

  useEffect(() => {
    setProducts(readCmsProducts())
  }, [])

  const product = useMemo(
    () => products.find((item) => item.slug === slug && item.status === 'Опубликовано'),
    [products, slug]
  )

  const isEn = locale === 'en'
  const collectionsHref = isEn ? '/en/collections' : '/collections'
  const contactHref = isEn ? '/en/contact' : '/contact'
  const notFoundTitle = isEn ? 'Item not found' : 'Изделие не найдено'
  const backToCatalogLabel = isEn ? 'Back to catalog' : 'Вернуться в каталог'
  const materialValue = 'Luxury Composition'
  const extraDetail = 'ROZEL luxury presentation'

  if (!product) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="eyebrow">ROZEL</div>
          <h1 className="page-title">{notFoundTitle}</h1>

          <div className="button-row">
            <Link href={collectionsHref} className="btn btn--primary">
              {backToCatalogLabel}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="product-layout">
          <div className="product-gallery" />

          <article className="card product-panel">
            <Link href={collectionsHref} className="link-inline">
              {siteData.productPage.backLabel}
            </Link>

            <div style={{ marginTop: 22 }}>
              <span className="product-badge">{product.badge}</span>
            </div>

            <h1 className="product-title">{product.title}</h1>
            <p className="product-subtitle">{product.subtitle}</p>
            <p className="product-text">{product.description}</p>
            <div className="product-price">{product.price}</div>

            <div className="product-meta">
              <div className="product-meta__item">
                <div className="product-meta__label">{siteData.productPage.collectionLabel}</div>
                <div className="product-meta__value">{product.collection}</div>
              </div>

              <div className="product-meta__item">
                <div className="product-meta__label">{siteData.productPage.materialLabel}</div>
                <div className="product-meta__value">{materialValue}</div>
              </div>

              <div className="product-meta__item">
                <div className="product-meta__label">{siteData.productPage.detailsTitle}</div>
                <ul className="product-details">
                  <li>{product.subtitle}</li>
                  <li>{product.description}</li>
                  <li>{extraDetail}</li>
                </ul>
              </div>
            </div>

            <div className="button-row">
              <Link href={contactHref} className="btn btn--primary">
                {siteData.productPage.ctaPrimary}
              </Link>

              <Link href={collectionsHref} className="btn btn--ghost">
                {siteData.productPage.ctaSecondary}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
