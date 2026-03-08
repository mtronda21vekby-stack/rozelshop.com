import Link from 'next/link';
import { siteData } from '../../lib/site-data';

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 text-xs uppercase tracking-[0.4em] text-white/60">
            {siteData.hero.eyebrow}
          </div>

          <h1 className="text-4xl font-medium leading-tight md:text-6xl">
            {siteData.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            {siteData.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={siteData.hero.primaryCta.href}
              className="rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              {siteData.hero.primaryCta.label}
            </Link>

            <Link
              href={siteData.hero.secondaryCta.href}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              {siteData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
