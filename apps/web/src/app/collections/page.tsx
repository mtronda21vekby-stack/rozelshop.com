import Link from 'next/link'
import { getSiteContent } from '../../lib/site-data'

export default function CollectionsPage() {
  const siteData = getSiteContent('ru')

  return (
    <>
      <section className="page-section">
        <div className="container">

          <div className="eyebrow">
            {siteData.collectionsPage.eyebrow}
          </div>

          <h1 className="page-title">
            {siteData.collectionsPage.title}
          </h1>

          <p className="page-text">
            {siteData.collectionsPage.description}
          </p>

          <div
            className="grid grid--3"
            style={{ marginTop: 34 }}
          >

            {siteData.collections.map((item) => (
              <article
                key={item.slug}
                className="card"
              >

                <div className="card__media" />

                <div className="card__body">

                  <div className="card__label">
                    ROZEL
                  </div>

                  <h2 className="card__title">
                    {item.title}
                  </h2>

                  <p className="card__text">
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      <section className="page-section page-divider">
        <div className="container">

          <div className="section-head">
            <div className="eyebrow">
              ROZEL
            </div>

            <h2 className="section-title">
              Редакционная структура коллекций
            </h2>
          </div>

          <div className="editorial-grid">

            <article className="editorial-card editorial-card--tall">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  SIGNATURE
                </div>

                <h3 className="editorial-card__title">
                  Noir Atelier
                </h3>

                <p className="editorial-card__text">
                  Основная линия чёрного тейлоринга,
                  выстроенная через жёсткую форму,
                  структуру плеча и тишину материала.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  CAPSULE
                </div>

                <h3 className="editorial-card__title">
                  Private Capsule
                </h3>

                <p className="editorial-card__text">
                  Ограниченные editorial-релизы для
                  контролируемого luxury-объёма.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  EVENING
                </div>

                <h3 className="editorial-card__title">
                  Evening Study
                </h3>

                <p className="editorial-card__text">
                  Вечерние формы с плавной пластикой,
                  балансом и тихой визуальной силой.
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
                  Следующий слой — product universe.
                </h2>

                <p className="cta-band__text">
                  Основа коллекций уже готова для перехода
                  к карточкам продукта, lookbook-структуре
                  и каталогу дома.
                </p>
              </div>

              <Link
                href="/journal"
                className="btn btn--primary"
              >
                Открыть журнал
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
