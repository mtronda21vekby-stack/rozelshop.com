import { getSiteContent } from '../../lib/site-data';

export default function HousePage() {
  const siteData = getSiteContent('ru');

  return (
    <section className="page-section">
      <div className="container">
        <div className="eyebrow">{siteData.housePage.eyebrow}</div>
        <h1 className="page-title">{siteData.housePage.title}</h1>

        <div className="prose-block">
          {siteData.housePage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
