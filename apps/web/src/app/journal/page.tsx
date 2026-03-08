import { siteData } from '../../lib/site-data';

export default function JournalPage() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.34em] text-white/42">
          Journal
        </div>

        <h1 className="mt-4 text-4xl font-medium md:text-6xl">
          Notes from the house.
        </h1>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {siteData.journal.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                {item.category}
              </div>
              <h2 className="mt-5 text-2xl font-medium">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
