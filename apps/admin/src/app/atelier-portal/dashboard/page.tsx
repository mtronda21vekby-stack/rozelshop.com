export default function AdminDashboardPage() {
  return (
    <main className="card stack">
      <p className="meta">Dashboard</p>
      <h1>ROZEL control surface</h1>
      <p className="copy">Reserve this area for products, collections, CMS, media, orders, settings, roles, and audit workflows.</p>

      <div className="kpi-grid">
        <section className="kpi">
          <p className="label">Products</p>
          <p className="value">0</p>
        </section>
        <section className="kpi">
          <p className="label">Collections</p>
          <p className="value">0</p>
        </section>
        <section className="kpi">
          <p className="label">Orders</p>
          <p className="value">0</p>
        </section>
      </div>
    </main>
  );
}
