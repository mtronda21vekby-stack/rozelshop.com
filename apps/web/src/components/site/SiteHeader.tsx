import Link from 'next/link';
import { Wordmark } from '@rozel/ui';
import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="ROZEL home">
          <Wordmark />
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
