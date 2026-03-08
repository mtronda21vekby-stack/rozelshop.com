import { getSiteContent } from '../../lib/site-data';

export default function JournalPage() {
  const siteData = getSiteContent('ru');

  return (
    <section className="page-section">
      <div className="container">
        <div className="eyebrow">{siteData.journalPage.eyebrow}</div>
        <h1 className="page-title">{siteData.journalPage.title}</h1>

        <div className="grid grid--3" style={{ marginTop: 34 }}>
          {siteData.journal.map((item) => (
            <article key={item.title} className="card feature-card">
              <div className="card__label">{item.category}</div>
              <h2 className="journal-card__title">{item.title}</h2>
              <p className="feature-card__text">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
