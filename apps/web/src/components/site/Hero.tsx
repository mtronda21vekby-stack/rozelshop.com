import Link from 'next/link';
import {
  Locale,
  getSiteContent,
  toLocalizedHref
} from '../../lib/site-data';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const siteData = getSiteContent(locale);

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="eyebrow">{siteData.hero.eyebrow}</div>

          <h1 className="hero__title">{siteData.hero.title}</h1>

          <p className="hero__text">{siteData.hero.description}</p>

          <div className="button-row">
            <Link
              href={toLocalizedHref(locale, siteData.hero.primaryCta.href)}
              className="btn btn--primary"
            >
              {siteData.hero.primaryCta.label}
            </Link>

            <Link
              href={toLocalizedHref(locale, siteData.hero.secondaryCta.href)}
              className="btn btn--ghost"
            >
              {siteData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hero__stack">
          <div className="panel panel--large">
            <div className="panel__label">{siteData.hero.sideTopLabel}</div>
            <div className="panel__text-large">{siteData.hero.sideTopText}</div>
          </div>

          <div className="panel panel--medium">
            <div className="panel__label">{siteData.hero.sideBottomLabel}</div>
            <div className="panel__text">{siteData.hero.sideBottomText}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
