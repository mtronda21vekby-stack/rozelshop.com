import { getSiteContent } from '../../../lib/site-data';

export default function EnglishContactPage() {
  const siteData = getSiteContent('en');

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.34em] text-white/42">
          {siteData.contactPage.eyebrow}
        </div>

        <h1 className="mt-4 text-4xl font-medium md:text-6xl">
          {siteData.contactPage.title}
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
            <div className="text-xs uppercase tracking-[0.28em] text-white/40">
              {siteData.contactPage.emailLabel}
            </div>
            <div className="mt-4 text-2xl font-medium">
              {siteData.contactPage.email}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
            <div className="text-xs uppercase tracking-[0.28em] text-white/40">
              {siteData.contactPage.presenceLabel}
            </div>
            <div className="mt-4 text-2xl font-medium">
              {siteData.contactPage.city}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
