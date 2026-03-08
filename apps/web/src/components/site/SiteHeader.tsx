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
    <header className="site-header">
      <div className="container site-header__top">
        <Link href={toLocalizedHref(locale, '/')} className="site-brand">
          {siteData.brand}
        </Link>

        <div className="site-header__right">
          <nav className="site-nav site-nav--desktop">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={toLocalizedHref(locale, item.href)}
                className="site-nav__link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LanguageToggle locale={locale} currentPath={currentPath} />
        </div>
      </div>

      <div className="site-header__mobile">
        <div className="container">
          <nav className="site-nav site-nav--mobile">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={toLocalizedHref(locale, item.href)}
                className="site-nav__link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
