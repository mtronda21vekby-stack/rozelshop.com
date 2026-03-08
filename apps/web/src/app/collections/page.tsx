import { getSiteContent } from '../../lib/site-data';

export default function CollectionsPage() {
  const siteData = getSiteContent('ru');

  return (
    <section className="page-section">
      <div className="container">
        <div className="eyebrow">{siteData.collectionsPage.eyebrow}</div>
        <h1 className="page-title">{siteData.collectionsPage.title}</h1>
        <p className="page-text">{siteData.collectionsPage.description}</p>

        <div className="grid grid--3" style={{ marginTop: 34 }}>
          {siteData.collections.map((item) => (
            <article key={item.slug} className="card">
              <div className="card__media" />
              <div className="card__body">
                <div className="card__label">ROZEL</div>
                <h2 className="card__title">{item.title}</h2>
                <p className="card__text">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
