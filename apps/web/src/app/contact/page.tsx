import { siteData } from '../../lib/site-data';

export default function ContactPage() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.34em] text-white/42">
          Contact
        </div>

        <h1 className="mt-4 text-4xl font-medium md:text-6xl">
          Client services and house contact.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
            <div className="text-xs uppercase tracking-[0.28em] text-white/40">
              Email
            </div>
            <div className="mt-4 text-2xl font-medium">
              {siteData.contact.email}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
            <div className="text-xs uppercase tracking-[0.28em] text-white/40">
              Presence
            </div>
            <div className="mt-4 text-2xl font-medium">
              {siteData.contact.city}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
