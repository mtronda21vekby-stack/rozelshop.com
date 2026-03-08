import Link from 'next/link';
import { siteData } from '../../lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/70">
            {siteData.brand}
          </div>
          <p className="mt-2 text-sm text-white/50">
            {siteData.footer.copyright}
          </p>
        </div>

        <div className="flex gap-5 text-sm text-white/70">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
