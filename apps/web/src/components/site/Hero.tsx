import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-panel shell">
        <p className="eyebrow">Fashion House / Editorial Commerce</p>
        <h1 className="hero-title">ROZEL builds couture atmosphere into modern digital retail.</h1>
        <p className="hero-text">
          Storefront, campaigns, hidden admin surface, and commerce-ready architecture designed for a premium launch.
        </p>

        <div className="hero-actions">
          <Link href="/collections" className="button button-primary">
            Explore Collections
          </Link>
          <Link href="/house" className="button button-ghost">
            Discover the House
          </Link>
        </div>
      </div>
    </section>
  );
}
