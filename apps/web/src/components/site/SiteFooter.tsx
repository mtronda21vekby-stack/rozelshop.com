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
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">{siteData.brand}</div>
          <p className="footer__text">{siteData.footer.description}</p>
        </div>

        <div>
          <div className="footer__title">{siteData.footer.navigationTitle}</div>
          <div className="footer__links">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={toLocalizedHref(locale, item.href)}
                className="footer__link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer__title">{siteData.footer.servicesTitle}</div>
          <div className="footer__links">
            <Link
              href={toLocalizedHref(locale, '/contact')}
              className="footer__link"
            >
              {locale === 'ru' ? 'Контакты' : 'Contact'}
            </Link>

            <Link
              href={toLocalizedHref(locale, '/privacy')}
              className="footer__link"
            >
              {locale === 'ru' ? 'Конфиденциальность' : 'Privacy'}
            </Link>

            <Link
              href={toLocalizedHref(locale, '/terms')}
              className="footer__link"
            >
              {locale === 'ru' ? 'Условия' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        {siteData.footer.copyright}
      </div>
    </footer>
  );
}
