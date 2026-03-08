'use client'

import { useMemo, useState } from 'react'
import { getSiteContent } from '../../lib/site-data'

type AdminSection = 'dashboard' | 'products' | 'collections' | 'journal' | 'settings'

type AdminProduct = {
  id: string
  title: string
  collection: string
  price: string
  status: 'Draft' | 'Published'
}

type AdminCollection = {
  id: string
  title: string
  type: string
  status: 'Draft' | 'Published'
}

type AdminJournal = {
  id: string
  title: string
  category: string
  status: 'Draft' | 'Published'
}

const initialProducts: AdminProduct[] = [
  {
    id: 'prd-001',
    title: 'Noir Tailored Coat',
    collection: 'Noir Atelier',
    price: '$2,400',
    status: 'Published'
  },
  {
    id: 'prd-002',
    title: 'Atelier Silk Dress',
    collection: 'Evening Study',
    price: '$1,800',
    status: 'Draft'
  },
  {
    id: 'prd-003',
    title: 'Private Capsule Jacket',
    collection: 'Private Capsule',
    price: '$1,950',
    status: 'Published'
  }
]

const initialCollections: AdminCollection[] = [
  {
    id: 'col-001',
    title: 'Noir Atelier',
    type: 'Outerwear',
    status: 'Published'
  },
  {
    id: 'col-002',
    title: 'Private Capsule',
    type: 'Capsule',
    status: 'Published'
  },
  {
    id: 'col-003',
    title: 'Evening Study',
    type: 'Evening',
    status: 'Draft'
  }
]

const initialJournal: AdminJournal[] = [
  {
    id: 'jrn-001',
    title: 'The discipline of silhouette',
    category: 'House',
    status: 'Published'
  },
  {
    id: 'jrn-002',
    title: 'Dark tailoring as language',
    category: 'Editorial',
    status: 'Draft'
  },
  {
    id: 'jrn-003',
    title: 'The private capsule model',
    category: 'Collections',
    status: 'Published'
  }
]

function AdminSidebar({
  active,
  onChange
}: {
  active: AdminSection
  onChange: (section: AdminSection) => void
}) {
  const items: { key: AdminSection; label: string }[] = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'products', label: 'Products' },
    { key: 'collections', label: 'Collections' },
    { key: 'journal', label: 'Journal' },
    { key: 'settings', label: 'Settings' }
  ]

  return (
    <aside className="cms-sidebar">
      <div className="cms-sidebar__brand">ROZEL CMS</div>

      <nav className="cms-sidebar__nav">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={`cms-sidebar__item ${active === item.key ? 'is-active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

function DashboardView({
  productCount,
  collectionCount,
  journalCount
}: {
  productCount: number
  collectionCount: number
  journalCount: number
}) {
  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Dashboard</div>
        <h1 className="page-title">Atelier CMS</h1>
        <p className="page-text">
          Private content layer for products, collections, editorial publishing,
          and house settings.
        </p>
      </div>

      <div className="cms-stat-grid">
        <article className="cms-stat-card">
          <div className="cms-stat-card__label">Products</div>
          <div className="cms-stat-card__value">{productCount}</div>
        </article>

        <article className="cms-stat-card">
          <div className="cms-stat-card__label">Collections</div>
          <div className="cms-stat-card__value">{collectionCount}</div>
        </article>

        <article className="cms-stat-card">
          <div className="cms-stat-card__label">Journal</div>
          <div className="cms-stat-card__value">{journalCount}</div>
        </article>
      </div>

      <div className="cms-grid-2">
        <article className="cms-panel">
          <div className="cms-panel__label">Publishing Status</div>
          <h2 className="cms-panel__title">House content is ready for structured editing.</h2>
          <p className="cms-panel__text">
            This CMS layer is prepared for future API wiring: product CRUD,
            collection editing, editorial publishing, and admin auth.
          </p>
        </article>

        <article className="cms-panel">
          <div className="cms-panel__label">Next step</div>
          <h2 className="cms-panel__title">Connect real backend and persistence.</h2>
          <p className="cms-panel__text">
            The interface is already segmented into domains, so we can bind it
            to Nest API and database without redesigning the admin shell.
          </p>
        </article>
      </div>
    </div>
  )
}

function ProductsView({
  products,
  onAdd
}: {
  products: AdminProduct[]
  onAdd: (item: AdminProduct) => void
}) {
  const [title, setTitle] = useState('')
  const [collection, setCollection] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim() || !collection.trim() || !price.trim()) {
      return
    }

    onAdd({
      id: `prd-${Date.now()}`,
      title: title.trim(),
      collection: collection.trim(),
      price: price.trim(),
      status: 'Draft'
    })

    setTitle('')
    setCollection('')
    setPrice('')
  }

  return (
    <div className="cms-stack">
      <div className="cms-section-head">
        <div>
          <div className="eyebrow">Products</div>
          <h1 className="page-title">Product Manager</h1>
        </div>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Create product</div>

          <div className="cms-form">
            <input
              className="cms-input"
              placeholder="Product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Collection"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Add product
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Notes</div>
          <h2 className="cms-panel__title">Luxury catalog structure.</h2>
          <p className="cms-panel__text">
            Products are separated from collections so the store can scale into
            variants, availability, media assets, pricing, and private-client logic.
          </p>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Collection</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.collection}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`cms-badge ${item.status === 'Published' ? 'is-published' : 'is-draft'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CollectionsView({
  collections,
  onAdd
}: {
  collections: AdminCollection[]
  onAdd: (item: AdminCollection) => void
}) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim() || !type.trim()) {
      return
    }

    onAdd({
      id: `col-${Date.now()}`,
      title: title.trim(),
      type: type.trim(),
      status: 'Draft'
    })

    setTitle('')
    setType('')
  }

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Collections</div>
        <h1 className="page-title">Collection Manager</h1>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Create collection</div>

          <div className="cms-form">
            <input
              className="cms-input"
              placeholder="Collection title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Add collection
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Structure</div>
          <h2 className="cms-panel__title">Editorial collection architecture.</h2>
          <p className="cms-panel__text">
            Collections should remain a premium narrative layer over product groups,
            not just a raw category tree.
          </p>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>
                  <span className={`cms-badge ${item.status === 'Published' ? 'is-published' : 'is-draft'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function JournalView({
  items,
  onAdd
}: {
  items: AdminJournal[]
  onAdd: (item: AdminJournal) => void
}) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim() || !category.trim()) {
      return
    }

    onAdd({
      id: `jrn-${Date.now()}`,
      title: title.trim(),
      category: category.trim(),
      status: 'Draft'
    })

    setTitle('')
    setCategory('')
  }

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Journal</div>
        <h1 className="page-title">Editorial Manager</h1>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Create article</div>

          <div className="cms-form">
            <input
              className="cms-input"
              placeholder="Article title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Add article
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Editorial</div>
          <h2 className="cms-panel__title">Journal is part of the house language.</h2>
          <p className="cms-panel__text">
            The editorial layer should stay visually aligned with collections,
            products, and the broader luxury identity of ROZEL.
          </p>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <span className={`cms-badge ${item.status === 'Published' ? 'is-published' : 'is-draft'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SettingsView() {
  const siteData = getSiteContent('en')

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Settings</div>
        <h1 className="page-title">House Settings</h1>
      </div>

      <div className="cms-grid-2">
        <article className="cms-panel">
          <div className="cms-panel__label">Brand</div>
          <h2 className="cms-panel__title">{siteData.brand}</h2>
          <p className="cms-panel__text">
            Domain: {siteData.domain}
          </p>
        </article>

        <article className="cms-panel">
          <div className="cms-panel__label">Admin foundation</div>
          <h2 className="cms-panel__title">Ready for auth + API wiring.</h2>
          <p className="cms-panel__text">
            This settings layer will later hold environment-specific admin controls,
            roles, localization controls, and storefront toggles.
          </p>
        </article>
      </div>
    </div>
  )
}

export default function AtelierPortalPage() {
  const [entered, setEntered] = useState(false)
  const [password, setPassword] = useState('')
  const [section, setSection] = useState<AdminSection>('dashboard')

  const [products, setProducts] = useState<AdminProduct[]>(initialProducts)
  const [collections, setCollections] = useState<AdminCollection[]>(initialCollections)
  const [journal, setJournal] = useState<AdminJournal[]>(initialJournal)

  const dashboardCounts = useMemo(
    () => ({
      products: products.length,
      collections: collections.length,
      journal: journal.length
    }),
    [products, collections, journal]
  )

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (password === 'rozel-admin') {
      setEntered(true)
    }
  }

  if (!entered) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="admin-login">
            <div className="eyebrow">Atelier Portal</div>
            <h1 className="page-title">ROZEL CMS</h1>
            <p className="page-text">
              Private content management layer for the house.
            </p>

            <form onSubmit={handleLogin} className="admin-login__form">
              <input
                type="password"
                placeholder="Access key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
              />

              <button className="btn btn--primary">
                Enter atelier
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="cms-layout">
          <AdminSidebar active={section} onChange={setSection} />

          <div className="cms-content">
            {section === 'dashboard' && (
              <DashboardView
                productCount={dashboardCounts.products}
                collectionCount={dashboardCounts.collections}
                journalCount={dashboardCounts.journal}
              />
            )}

            {section === 'products' && (
              <ProductsView
                products={products}
                onAdd={(item) => setProducts((prev) => [item, ...prev])}
              />
            )}

            {section === 'collections' && (
              <CollectionsView
                collections={collections}
                onAdd={(item) => setCollections((prev) => [item, ...prev])}
              />
            )}

            {section === 'journal' && (
              <JournalView
                items={journal}
                onAdd={(item) => setJournal((prev) => [item, ...prev])}
              />
            )}

            {section === 'settings' && <SettingsView />}
          </div>
        </div>
      </div>
    </section>
  )
}
