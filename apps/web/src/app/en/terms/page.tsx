import Link from 'next/link'
import { getSiteContent } from '../../../lib/site-data'

export default function EnglishTermsPage() {
  const siteData = getSiteContent('en')

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
                  Terms will become part of the full commerce system.
                </h2>

                <p className="cta-band__text">
                  Once product pages, accounts,
                  orders, and service flows are launched,
                  this section will expand
                  into a complete legal structure.
                </p>
              </div>

              <Link
                href="/en/house"
                className="btn btn--primary"
              >
                Enter the house
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
