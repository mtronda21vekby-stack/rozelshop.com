import Link from 'next/link'
import { getSiteContent } from '../../lib/site-data'

export default function PrivacyPage() {
  const siteData = getSiteContent('ru')

  return (
    <>
      <section className="page-section page-section--tight">
        <div className="container">

          <div className="eyebrow">
            {siteData.privacyPage.eyebrow}
          </div>

          <h1 className="page-title">
            {siteData.privacyPage.title}
          </h1>

          <p
            className="legal-copy"
            style={{ maxWidth: 860, marginTop: 26 }}
          >
            {siteData.privacyPage.text}
          </p>

        </div>
      </section>

      <section className="page-section page-divider">
        <div className="container">

          <div className="cta-band">
            <div className="cta-band__row">

              <div>
                <div className="eyebrow">
                  PRIVACY
                </div>

                <h2 className="cta-band__title">
                  Приватность — часть luxury-опыта.
                </h2>

                <p className="cta-band__text">
                  По мере запуска commerce-layer,
                  аккаунтов и клиентских сценариев
                  политика конфиденциальности будет
                  расширена до полноценного production-уровня.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn btn--primary"
              >
                Связаться
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
