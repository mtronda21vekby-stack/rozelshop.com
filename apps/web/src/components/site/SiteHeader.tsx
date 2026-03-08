import Link from 'next/link';
import {
  Locale,
  getSiteContent,
  toLocalizedHref
} from '../../lib/site-data';
import { LanguageToggle } from './LanguageToggle';

type SiteHeaderProps = {
  locale: Locale;
  currentPath: string;
};

export function SiteHeader({
  locale,
  currentPath
}: SiteHeaderProps) {
  const siteData = getSiteContent(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link
          href={toLocalizedHref(locale, '/')}
          className="text-lg font-semibold uppercase tracking-[0.38em]"
        >
          {siteData.brand}
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={toLocalizedHref(locale, item.href)}
                className="text-sm uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LanguageToggle locale={locale} currentPath={currentPath} />
        </div>
      </div>
    </header>
  );
}
