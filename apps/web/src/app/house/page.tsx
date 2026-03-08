import { getSiteContent } from '../../lib/site-data';

export default function HousePage() {
  const siteData = getSiteContent('ru');

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.34em] text-white/42">
          {siteData.housePage.eyebrow}
        </div>

        <h1 className="mt-4 text-4xl font-medium md:text-6xl">
          {siteData.housePage.title}
        </h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-white/64 md:text-lg">
          {siteData.housePage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
