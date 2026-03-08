import { getSiteContent } from '../../../lib/site-data';

export default function EnglishTermsPage() {
  const siteData = getSiteContent('en');

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.34em] text-white/42">
          {siteData.termsPage.eyebrow}
        </div>
        <h1 className="mt-4 text-4xl font-medium md:text-6xl">
          {siteData.termsPage.title}
        </h1>
        <p className="mt-8 text-base leading-8 text-white/62 md:text-lg">
          {siteData.termsPage.text}
        </p>
      </div>
    </section>
  );
}
