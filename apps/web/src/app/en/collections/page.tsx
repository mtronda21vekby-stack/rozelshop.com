import Link from 'next/link'
import { getSiteContent } from '../../../lib/site-data'

export default function EnglishCollectionsPage() {
  const siteData = getSiteContent('en')

  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="eyebrow">{siteData.productsPage.eyebrow}</div>
          <h1 className="page-title">{siteData.productsPage.title}</h1>
          <p className="page-text">{siteData.productsPage.description}</p>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            {siteData.products.map((item) => (
              <article key={item.slug} className="card">
                <div className="card__media" />

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
          <div className="section-head">
            <div className="eyebrow">ROZEL</div>
            <h2 className="section-title">Editorial collection structure</h2>
          </div>

          <div className="editorial-grid">
            <article className="editorial-card editorial-card--tall">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">SIGNATURE</div>
                <h3 className="editorial-card__title">Noir Atelier</h3>
                <p className="editorial-card__text">
                  The core black tailoring line, built through strict form,
                  shoulder structure, and material restraint.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">CAPSULE</div>
                <h3 className="editorial-card__title">Private Capsule</h3>
                <p className="editorial-card__text">
                  Limited editorial releases designed for controlled luxury volume.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">EVENING</div>
                <h3 className="editorial-card__title">Evening Study</h3>
                <p className="editorial-card__text">
                  Evening forms shaped by fluidity, balance, and quiet visual power.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
