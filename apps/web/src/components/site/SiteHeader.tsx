import Link from 'next/link';
import { siteData } from '../../lib/site-data';

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.35em]"
        >
          {siteData.brand}
        </Link>

        <nav className="hidden gap-6 md:flex">
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
