'use client';

import { usePathname } from 'next/navigation';
import {
  getLocaleFromPathname,
  stripLocaleFromPathname
} from '../../lib/site-data';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPathname(pathname);
  const currentPath = stripLocaleFromPathname(pathname);

  return (
    <div className="site-shell">
      <SiteHeader locale={locale} currentPath={currentPath} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
