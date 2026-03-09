'use client'

import { useEffect, useState } from 'react'
import { defaultCmsStore, readCmsSnapshotByLocale, type CmsSnapshot } from '../../../lib/cms-store'

export default function EnglishContactPage() {
  const [snapshot, setSnapshot] = useState<CmsSnapshot>(defaultCmsStore.en)

  useEffect(() => {
    setSnapshot(readCmsSnapshotByLocale('en'))
  }, [])

  return (
    <section className="page-section">
      <div className="container">
        <div className="eyebrow">{snapshot.contact.eyebrow}</div>
        <h1 className="page-title">{snapshot.contact.title}</h1>

        <div className="contact-grid" style={{ marginTop: 28 }}>
          <article className="card contact-card">
            <div className="card__label">{snapshot.contact.emailLabel}</div>
            <div className="contact-card__value">{snapshot.contact.email}</div>
          </article>

          <article className="card contact-card">
            <div className="card__label">{snapshot.contact.presenceLabel}</div>
            <div className="contact-card__value">{snapshot.contact.city}</div>
          </article>
        </div>
      </div>
    </section>
  )
}
