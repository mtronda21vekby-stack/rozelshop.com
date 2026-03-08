import Link from 'next/link'
import { getSiteContent } from '../../../lib/site-data'

export default function EnglishCollectionsPage() {
  const siteData = getSiteContent('en')
  const featured = siteData.products[0]

  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="eyebrow">{siteData.productsPage.eyebrow}</div>
          <h1 className="page-title">{siteData.productsPage.title}</h1>
          <p className="page-text">{siteData.productsPage.description}</p>

          <div className="catalog-tabs">
            <div className="catalog-tab is-active">{siteData.productsPage.tabs.all}</div>
            <div className="catalog-tab">{siteData.productsPage.tabs.outerwear}</div>
            <div className="catalog-tab">{siteData.productsPage.tabs.evening}</div>
            <div className="catalog-tab">{siteData.productsPage.tabs.capsule}</div>
          </div>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            {siteData.products.map((item) => (
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
    </>
  )
}
