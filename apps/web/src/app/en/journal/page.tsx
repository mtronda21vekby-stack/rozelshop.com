import { getSiteContent } from '../../../lib/site-data'

export default function EnglishJournalPage() {
  const siteData = getSiteContent('en')

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
                  The house speaks through form, not noise.
                </h2>

                <p className="editorial-card__text">
                  The ROZEL journal should feel like an extension
                  of the collection: controlled text, strong composition,
                  and a calm luxury rhythm.
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
                  Tailoring as language
                </h3>

                <p className="editorial-card__text">
                  Proportion, line, and shadow work
                  as one visual system.
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
                  Quiet luxury structure
                </h3>

                <p className="editorial-card__text">
                  Fewer gestures, cleaner decisions,
                  stronger impression.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>
    </>
  )
}
