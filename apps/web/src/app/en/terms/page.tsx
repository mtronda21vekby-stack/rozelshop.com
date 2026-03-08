import { getSiteContent } from '../../../lib/site-data';

export default function EnglishTermsPage() {
  const siteData = getSiteContent('en');

  return (
    <section className="page-section page-section--tight">
      <div className="container">
        <div className="eyebrow">{siteData.termsPage.eyebrow}</div>
        <h1 className="page-title">{siteData.termsPage.title}</h1>
        <p className="legal-copy" style={{ maxWidth: 860, marginTop: 26 }}>
          {siteData.termsPage.text}
        </p>
      </div>
    </section>
  );
}
