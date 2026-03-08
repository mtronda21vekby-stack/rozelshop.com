import { getSiteContent } from '../../lib/site-data'

export default function JournalPage() {
  const siteData = getSiteContent('ru')

  return (
    <>
      <section className="page-section">
        <div className="container">

          <div className="eyebrow">
            {siteData.journalPage.eyebrow}
          </div>

          <h1 className="page-title">
            {siteData.journalPage.title}
          </h1>

          <div
            className="grid grid--3"
            style={{ marginTop: 34 }}
          >

            {siteData.journal.map((item) => (
              <article
                key={item.title}
                className="card feature-card"
              >

                <div className="card__label">
                  {item.category}
                </div>

                <h2 className="journal-card__title">
                  {item.title}
                </h2>

                <p className="feature-card__text">
                  {item.excerpt}
                </p>

              </article>
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
                  HOUSE NOTES
                </div>

                <h2 className="editorial-card__title">
                  Дом говорит через форму, а не через шум.
                </h2>

                <p className="editorial-card__text">
                  Журнал ROZEL должен ощущаться как продолжение
                  коллекции: строгий текст, сильная композиция,
                  спокойный luxury-ритм.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  EDITORIAL
                </div>

                <h3 className="editorial-card__title">
                  Тейлоринг как язык
                </h3>

                <p className="editorial-card__text">
                  Пропорция, линия и тень работают
                  как единая визуальная система.
                </p>
              </div>
            </article>

            <article className="editorial-card editorial-card--soft">
              <div className="editorial-card__overlay" />

              <div className="editorial-card__content">
                <div className="editorial-card__eyebrow">
                  PROCESS
                </div>

                <h3 className="editorial-card__title">
                  Тихая luxury-структура
                </h3>

                <p className="editorial-card__text">
                  Меньше жестов, чище решения,
                  сильнее впечатление.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>
    </>
  )
}
