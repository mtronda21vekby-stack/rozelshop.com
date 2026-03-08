import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, getSiteContent } from '../../../lib/site-data'

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const siteData = getSiteContent('ru')

  return siteData.products.map((product) => ({
    slug: product.slug
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const siteData = getSiteContent('ru')
  const product = getProductBySlug('ru', slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <section className="page-section">
        <div className="container">
          <Link href="/collections" className="link-inline">
            {siteData.productPage.backLabel}
          </Link>

          <div className="product-layout" style={{ marginTop: 26 }}>
            <div className="product-gallery" />

            <article className="card product-panel">
              <div className="product-badge">{product.badge}</div>

              <h1 className="product-title">{product.title}</h1>

              <div className="product-subtitle">{product.subtitle}</div>

              <p className="product-text">{product.description}</p>

              <div className="product-price">{product.price}</div>

              <div className="button-row">
                <Link href="/contact" className="btn btn--primary">
                  {siteData.productPage.ctaPrimary}
                </Link>

                <Link href="/collections" className="btn btn--ghost">
                  {siteData.productPage.ctaSecondary}
                </Link>
              </div>

              <div className="product-meta">
                <div className="product-meta__item">
                  <div className="product-meta__label">
                    {siteData.productPage.collectionLabel}
                  </div>
                  <div className="product-meta__value">{product.collection}</div>
                </div>

                <div className="product-meta__item">
                  <div className="product-meta__label">
                    {siteData.productPage.materialLabel}
                  </div>
                  <div className="product-meta__value">{product.material}</div>
                </div>

                <div className="product-meta__item">
                  <div className="product-meta__label">
                    {siteData.productPage.detailsTitle}
                  </div>

                  <ul className="product-details">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
