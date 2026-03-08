import { getSiteContent } from '../../../lib/site-data';

export default function EnglishContactPage() {
  const siteData = getSiteContent('en');

  return (
    <section className="page-section">
      <div className="container">
        <div className="eyebrow">{siteData.contactPage.eyebrow}</div>
        <h1 className="page-title">{siteData.contactPage.title}</h1>

        <div className="contact-grid" style={{ marginTop: 34 }}>
          <article className="card contact-card">
            <div className="card__label">{siteData.contactPage.emailLabel}</div>
            <div className="contact-card__value">{siteData.contactPage.email}</div>
          </article>

          <article className="card contact-card">
            <div className="card__label">{siteData.contactPage.presenceLabel}</div>
            <div className="contact-card__value">{siteData.contactPage.city}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
