import { Wordmark } from '@rozel/ui';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Wordmark subtle />
          <p className="footer-copy">Luxury house foundation for campaigns, collections, and private client commerce.</p>
        </div>

        <div>
          <p className="footer-title">Client Services</p>
          <ul className="footer-list">
            <li>Shipping & Returns</li>
            <li>Appointments</li>
            <li>Concierge</li>
          </ul>
        </div>

        <div>
          <p className="footer-title">House</p>
          <ul className="footer-list">
            <li>Collections</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
