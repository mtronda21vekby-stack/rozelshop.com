import Link from 'next/link'
import { getSiteContent } from '../../lib/site-data'

export default function ContactPage() {
  const siteData = getSiteContent('ru')

  return (
    <>
      <section className="page-section">
        <div className="container">

          <div className="eyebrow">
            {siteData.contactPage.eyebrow}
          </div>

          <h1 className="page-title">
            {siteData.contactPage.title}
          </h1>

          <div
            className="contact-grid"
            style={{ marginTop: 34 }}
          >

            <article className="card contact-card">
              <div className="card__label">
                {siteData.contactPage.emailLabel}
              </div>

              <div className="contact-card__value">
                {siteData.contactPage.email}
              </div>
            </article>

            <article className="card contact-card">
              <div className="card__label">
                {siteData.contactPage.presenceLabel}
              </div>

              <div className="contact-card__value">
                {siteData.contactPage.city}
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
                  CLIENT SERVICES
                </div>

                <h2 className="cta-band__title">
                  Связь с домом ROZEL.
                </h2>

                <p className="cta-band__text">
                  Следующий этап — полноценный клиентский сервис,
                  private client flows, заявки, appointment-сценарии
                  и сервисная инфраструктура дома.
                </p>
              </div>

              <Link
                href="/house"
                className="btn btn--primary"
              >
                Открыть дом
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
