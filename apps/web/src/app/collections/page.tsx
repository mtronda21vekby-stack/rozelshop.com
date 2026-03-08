import { collections } from '@/lib/site-data';

export default function CollectionsPage() {
  return (
    <main className="page-wrap">
      <div className="shell">
        <div className="page-intro">
          <p className="eyebrow">Collections</p>
          <h1 className="page-title">Seasonal architecture for drops, lookbooks, and merchandising.</h1>
          <p className="copy">Collection entities are already reserved in the API and Prisma schema to support future merchandising workflows.</p>
        </div>

        <div className="grid grid-2">
          {collections.map((collection) => (
            <article key={collection.id} className="card">
              <p className="meta">{collection.season}</p>
              <h2 className="card-title">{collection.title}</h2>
              <p className="card-copy">{collection.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
