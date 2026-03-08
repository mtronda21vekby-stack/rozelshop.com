'use client'

import Link from 'next/link'

export default function EnglishAtelierPortalPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="cms-stack">
          <div>
            <div className="eyebrow">Atelier Portal</div>
            <h1 className="page-title">English admin mirror</h1>
            <p className="page-text">
              The primary admin shell is currently mounted on the default atelier portal route.
            </p>
          </div>

          <div className="cms-panel">
            <div className="cms-panel__label">Admin route</div>
            <h2 className="cms-panel__title">Use the main private entry.</h2>
            <p className="cms-panel__text">
              For the current stage of ROZEL CMS, use the main private route for content operations.
            </p>

            <div className="button-row">
              <Link href="/atelier-portal" className="btn btn--primary">
                Open main portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
