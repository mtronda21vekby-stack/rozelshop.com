import Link from 'next/link'
import { getSiteContent } from '../../../lib/site-data'

export default function EnglishHousePage() {
  const siteData = getSiteContent('en')

  return (
    <>
      <section className="page-section">
        <div className="container">

          <div className="eyebrow">
            {siteData.housePage.eyebrow}
          </div>

          <h1 className="page-title">
            {siteData.housePage.title}
          </h1>

          <div className="prose-block">
            {siteData.housePage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>

      <section className="page-section page-divider">
        <div className="container">

          <div className="editorial-grid">

            <article className="editorial-card editorial-card--tall">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  MAISON
                </div>

                <h2 className="editorial-card__title">
                  The house is built through the discipline of form.
                </h2>

                <p className="editorial-card__text">
                  ROZEL is not built on visual noise.
                  The house stands on precision, proportion,
                  material, and controlled luxury delivery.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  DIRECTION
                </div>

                <h3 className="editorial-card__title">
                  Restraint
                </h3>

                <p className="editorial-card__text">
                  Fewer visual gestures,
                  more strength in form.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  SYSTEM
                </div>

                <h3 className="editorial-card__title">
                  One language
                </h3>

                <p className="editorial-card__text">
                  Campaign, garment, and digital layer
                  should feel like one house.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      <section className="page-section page-divider">
        <div className="container">

          <div className="cta-band">
            <div className="cta-band__row">

              <div>
                <div className="eyebrow">
                  ROZEL
                </div>

                <h2 className="cta-band__title">
                  The house is ready for the product universe.
                </h2>

                <p className="cta-band__text">
                  The next layer is product cards,
                  collection pages, lookbook,
                  and private client architecture.
                </p>
              </div>

              <Link
                href="/en/collections"
                className="btn btn--primary"
              >
                View collections
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
