import Link from 'next/link';
import { Hero } from '../../components/site/Hero';
import { getSiteContent } from '../../lib/site-data';

export default function EnglishHomePage() {
  const siteData = getSiteContent('en');

  return (
    <>
      <Hero locale="en" />

      <section className="page-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{siteData.home.introEyebrow}</div>
            <h2 className="section-title">{siteData.home.introTitle}</h2>
          </div>

          <div className="grid grid--3">
            {siteData.highlights.map((item) => (
              <article key={item.title} className="card feature-card">
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-divider">
        <div className="container">
          <div className="section-head__row">
            <div>
              <div className="eyebrow">{siteData.home.collectionsEyebrow}</div>
              <h2 className="section-title">{siteData.home.collectionsTitle}</h2>
            </div>

            <Link href="/en/collections" className="link-inline">
              {siteData.home.viewAllLabel}
            </Link>
          </div>

          <div className="grid grid--3" style={{ marginTop: 28 }}>
            {siteData.collections.map((item) => (
              <article key={item.slug} className="card">
                <div className="card__media" />
                <div className="card__body">
                  <div className="card__label">ROZEL</div>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
