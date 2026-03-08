import { Hero } from '../components/site/Hero';
import { siteData } from '../lib/site-data';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 text-xs uppercase tracking-[0.35em] text-white/50">
            Collections
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {siteData.collections.map((item) => (
              <article
                key={item.slug}
                className="rounded-3xl border border-white/10 p-6"
              >
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
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
