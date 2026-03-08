import Link from 'next/link';
import {
  Locale,
  toLocalizedHref
} from '../../lib/site-data';

type LanguageToggleProps = {
  locale: Locale;
  currentPath: string;
};

export function LanguageToggle({
  locale,
  currentPath
}: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
      <Link
        href={toLocalizedHref('ru', currentPath)}
        className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition ${
          locale === 'ru'
            ? 'bg-white text-black'
            : 'text-white/65 hover:text-white'
        }`}
      >
        RU
      </Link>

      <Link
        href={toLocalizedHref('en', currentPath)}
        className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition ${
          locale === 'en'
            ? 'bg-white text-black'
            : 'text-white/65 hover:text-white'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
