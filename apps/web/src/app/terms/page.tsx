import Link from 'next/link'
import { getSiteContent } from '../../lib/site-data'

export default function TermsPage() {
  const siteData = getSiteContent('ru')

  return (
    <>
      <section className="page-section page-section--tight">
        <div className="container">

          <div className="eyebrow">
            {siteData.termsPage.eyebrow}
          </div>

          <h1 className="page-title">
            {siteData.termsPage.title}
          </h1>

          <p
            className="legal-copy"
            style={{ maxWidth: 860, marginTop: 26 }}
          >
            {siteData.termsPage.text}
          </p>

        </div>
      </section>

      <section className="page-section page-divider">
        <div className="container">

          <div className="cta-band">
            <div className="cta-band__row">

              <div>
                <div className="eyebrow">
                  TERMS
                </div>

                <h2 className="cta-band__title">
                  Условия станут частью полной commerce-системы.
                </h2>

                <p className="cta-band__text">
                  После запуска product pages,
                  аккаунтов, заказов и сервисных сценариев
                  этот раздел будет расширен
                  до полноценной юридической структуры.
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
