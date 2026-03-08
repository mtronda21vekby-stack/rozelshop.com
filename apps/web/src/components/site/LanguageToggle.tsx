import Link from 'next/link';
import { Locale, toLocalizedHref } from '../../lib/site-data';

type LanguageToggleProps = {
  locale: Locale;
  currentPath: string;
};

export function LanguageToggle({
  locale,
  currentPath
}: LanguageToggleProps) {
  return (
    <div className="language-toggle">
      <Link
        href={toLocalizedHref('ru', currentPath)}
        className={`language-toggle__item ${locale === 'ru' ? 'is-active' : ''}`}
      >
        RU
      </Link>

      <Link
        href={toLocalizedHref('en', currentPath)}
        className={`language-toggle__item ${locale === 'en' ? 'is-active' : ''}`}
      >
        EN
      </Link>
    </div>
  );
}
