import { getSiteContent } from '../../lib/site-data';

export default function PrivacyPage() {
  const siteData = getSiteContent('ru');

  return (
    <section className="page-section page-section--tight">
      <div className="container">
        <div className="eyebrow">{siteData.privacyPage.eyebrow}</div>
        <h1 className="page-title">{siteData.privacyPage.title}</h1>
        <p className="legal-copy" style={{ maxWidth: 860, marginTop: 26 }}>
          {siteData.privacyPage.text}
        </p>
      </div>
    </section>
  );
}
