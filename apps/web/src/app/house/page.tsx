import Link from 'next/link'
import { getSiteContent } from '../../lib/site-data'

export default function HousePage() {
  const siteData = getSiteContent('ru')

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
                  Дом строится через дисциплину формы.
                </h2>

                <p className="editorial-card__text">
                  ROZEL не строится на визуальном шуме.
                  Основа дома — точность, пропорция,
                  материал и controlled luxury-подача.
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
                  Сдержанность
                </h3>

                <p className="editorial-card__text">
                  Меньше визуальных жестов,
                  больше силы в форме.
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
                  Единый язык
                </h3>

                <p className="editorial-card__text">
                  Кампания, вещь и digital-layer
                  должны ощущаться как один дом.
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
                  Дом уже готов к product universe.
                </h2>

                <p className="cta-band__text">
                  Следующий слой — карточки продукта,
                  коллекционные страницы, lookbook
                  и private client architecture.
                </p>
              </div>

              <Link
                href="/collections"
                className="btn btn--primary"
              >
                Смотреть коллекции
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
