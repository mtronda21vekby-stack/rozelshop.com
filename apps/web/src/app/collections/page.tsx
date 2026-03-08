import { siteData } from '../../lib/site-data';

export default function CollectionsPage() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.34em] text-white/42">
            Collections
          </div>
          <h1 className="mt-4 text-4xl font-medium md:text-6xl">
            The ROZEL collection universe.
          </h1>
          <p className="mt-6 text-base leading-7 text-white/62 md:text-lg">
            Signature tailoring, private capsule releases, and evening studies
            designed as distinct editorial worlds.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {siteData.collections.map((item) => (
            <article
              key={item.slug}
              className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                ROZEL
              </div>
              <h2 className="mt-5 text-2xl font-medium">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
