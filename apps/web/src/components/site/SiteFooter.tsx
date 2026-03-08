import Link from 'next/link';
import {
  Locale,
  getSiteContent,
  toLocalizedHref
} from '../../lib/site-data';

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const siteData = getSiteContent(locale);

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm uppercase tracking-[0.34em] text-white/72">
            {siteData.brand}
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
            {siteData.footer.description}
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/42">
            {siteData.footer.navigationTitle}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={toLocalizedHref(locale, item.href)}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/42">
            {siteData.footer.servicesTitle}
          </div>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link
              href={toLocalizedHref(locale, '/contact')}
              className="transition hover:text-white"
            >
              {locale === 'ru' ? 'Контакты' : 'Contact'}
            </Link>

            <Link
              href={toLocalizedHref(locale, '/privacy')}
              className="transition hover:text-white"
            >
              {locale === 'ru' ? 'Конфиденциальность' : 'Privacy'}
            </Link>

            <Link
              href={toLocalizedHref(locale, '/terms')}
              className="transition hover:text-white"
            >
              {locale === 'ru' ? 'Условия' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs tracking-[0.18em] text-white/45">
        {siteData.footer.copyright}
      </div>
    </footer>
  );
}
