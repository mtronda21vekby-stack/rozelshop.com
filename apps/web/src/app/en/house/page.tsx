'use client'

import { useEffect, useState } from 'react'
import { defaultCmsStore, readCmsSnapshotByLocale, type CmsSnapshot } from '../../../lib/cms-store'

export default function EnglishHousePage() {
  const [snapshot, setSnapshot] = useState<CmsSnapshot>(defaultCmsStore.en)

  useEffect(() => {
    setSnapshot(readCmsSnapshotByLocale('en'))
  }, [])

  return (
    <section className="page-section">
      <div className="container">
        <div className="eyebrow">{snapshot.house.eyebrow}</div>
        <h1 className="page-title">{snapshot.house.title}</h1>

        <div className="prose-block">
          <p>{snapshot.house.paragraphOne}</p>
          <p>{snapshot.house.paragraphTwo}</p>
          <p>{snapshot.house.paragraphThree}</p>
        </div>
      </div>
    </section>
  )
}
