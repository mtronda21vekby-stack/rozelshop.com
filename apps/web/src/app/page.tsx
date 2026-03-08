import { formatMoney } from '@rozel/utils';
import { collections, featuredProducts } from '@/lib/site-data';
import { Hero } from '@/components/site/Hero';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Seasonal Focus</p>
            <h2 className="section-title">Collections built for editorial presence and commerce conversion.</h2>
            <p className="lead">The foundation is designed to support campaigns, lookbooks, drops, and a premium product rhythm.</p>
          </div>

          <div className="grid grid-2">
            {collections.map((collection) => (
              <article key={collection.id} className="card">
                <p className="meta">{collection.season}</p>
                <h3 className="card-title">{collection.title}</h3>
                <p className="card-copy">{collection.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">New Selection</p>
            <h2 className="section-title">Product architecture starts with quiet luxury and sharp structure.</h2>
          </div>

          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <article key={product.id} className="card">
                <p className="meta">{product.badge ?? 'ROZEL'}</p>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-copy">Ready for PDP, variants, inventory, editorial pairing, and future checkout wiring.</p>
                <p className="price">{formatMoney(product.price, product.currency)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell card">
          <p className="eyebrow">Foundation Status</p>
          <h2 className="section-title">Storefront, hidden admin, API, and database layers are prepared for GitHub-first development.</h2>
          <p className="lead">
            Next steps are real auth, admin workflows, product CRUD, media storage, and commerce orchestration.
          </p>
        </div>
      </section>
    </main>
  );
}
