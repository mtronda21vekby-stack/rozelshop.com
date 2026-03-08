import Link from 'next/link'
import { getSiteContent } from '../../../lib/site-data'

export default function EnglishPrivacyPage() {
  const siteData = getSiteContent('en')

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
                  Privacy is part of the luxury experience.
                </h2>

                <p className="cta-band__text">
                  As the commerce layer, accounts,
                  and client scenarios go live,
                  the privacy policy will expand
                  to full production level.
                </p>
              </div>

              <Link
                href="/en/contact"
                className="btn btn--primary"
              >
                Contact
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
