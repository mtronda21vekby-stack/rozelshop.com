import Link from 'next/link';
import { siteData } from '../../lib/site-data';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.38em]"
        >
          {siteData.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
