import Link from 'next/link';
import { Hero } from '../components/site/Hero';
import { getSiteContent } from '../lib/site-data';

export default function HomePage() {
  const siteData = getSiteContent('ru');

  return (
    <>
      <Hero locale="ru" />

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.34em] text-white/42">
                {siteData.home.introEyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-medium md:text-5xl">
                {siteData.home.introTitle}
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {siteData.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.34em] text-white/42">
                {siteData.home.collectionsEyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-medium md:text-5xl">
                {siteData.home.collectionsTitle}
              </h2>
            </div>

            <Link
              href="/collections"
              className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              {siteData.home.viewAllLabel}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {siteData.collections.map((item) => (
              <article
                key={item.slug}
                className="rounded-[2rem] border border-white/10 p-6"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Коллекция
                </div>
                <h3 className="mt-5 text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
