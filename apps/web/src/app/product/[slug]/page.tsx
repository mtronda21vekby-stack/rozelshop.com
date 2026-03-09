'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  defaultCmsProducts,
  readCmsProducts,
  type CmsProduct
} from '../../../lib/cms-store'
import { getSiteContent } from '../../../lib/site-data'

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const siteData = getSiteContent('ru')
  const [slug, setSlug] = useState('')
  const [products, setProducts] = useState<CmsProduct[]>(defaultCmsProducts)

  useEffect(() => {
    params.then((value) => setSlug(value.slug))
    setProducts(readCmsProducts())
  }, [params])

  const product = useMemo(
    () => products.find((item) => item.slug === slug && item.status === 'Опубликовано'),
    [products, slug]
  )

  if (!product) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="eyebrow">ROZEL</div>
          <h1 className="page-title">Изделие не найдено</h1>
          <div className="button-row">
            <Link href="/collections" className="btn btn--primary">
              Вернуться в каталог
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
            <Link href="/collections" className="link-inline">
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
                <div className="product-meta__value">Luxury Composition</div>
              </div>

              <div className="product-meta__item">
                <div className="product-meta__label">{siteData.productPage.detailsTitle}</div>
                <ul className="product-details">
                  <li>{product.subtitle}</li>
                  <li>{product.description}</li>
                  <li>ROZEL luxury presentation</li>
                </ul>
              </div>
            </div>

            <div className="button-row">
              <Link href="/contact" className="btn btn--primary">
                {siteData.productPage.ctaPrimary}
              </Link>

              <Link href="/collections" className="btn btn--ghost">
                {siteData.productPage.ctaSecondary}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
