import Link from 'next/link';
import { siteData } from '../../lib/site-data';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 text-xs uppercase tracking-[0.42em] text-white/58">
            {siteData.hero.eyebrow}
          </div>

          <h1 className="text-4xl font-medium leading-[1.02] md:text-7xl">
            {siteData.hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
            {siteData.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={siteData.hero.primaryCta.href}
              className="rounded-full border border-white bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:opacity-90"
            >
              {siteData.hero.primaryCta.label}
            </Link>

            <Link
              href={siteData.hero.secondaryCta.href}
              className="rounded-full border border-white/18 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:border-white/40"
            >
              {siteData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <div className="grid gap-4">
            <div className="min-h-[220px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.32em] text-white/42">
                House Direction
              </div>
              <div className="mt-6 text-2xl leading-tight text-white/92">
                Cinematic black, sculpted tailoring, and a restrained luxury
                rhythm.
              </div>
            </div>

            <div className="min-h-[180px] rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-[0.32em] text-white/42">
                Foundation
              </div>
              <div className="mt-6 text-sm leading-7 text-white/62">
                Built as a premium storefront first, with room for collections,
                product commerce, private client experiences, and a hidden admin
                layer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
