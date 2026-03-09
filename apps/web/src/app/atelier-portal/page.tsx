'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CMS_STORAGE_KEY,
  defaultCmsSnapshot,
  readCmsSnapshot,
  writeCmsSnapshot,
  type CmsSnapshot
} from '../../lib/cms-store'
import { getSiteContent } from '../../lib/site-data'

type AdminSection =
  | 'dashboard'
  | 'homepage'
  | 'products'
  | 'collections'
  | 'journal'
  | 'settings'

type AdminProduct = {
  id: string
  title: string
  collection: string
  price: string
  status: 'Черновик' | 'Опубликовано'
}

type AdminCollection = {
  id: string
  title: string
  type: string
  status: 'Черновик' | 'Опубликовано'
}

type AdminJournal = {
  id: string
  title: string
  category: string
  status: 'Черновик' | 'Опубликовано'
}

const initialProducts: AdminProduct[] = [
  {
    id: 'prd-001',
    title: 'Noir Tailored Coat',
    collection: 'Noir Atelier',
    price: '$2,400',
    status: 'Опубликовано'
  },
  {
    id: 'prd-002',
    title: 'Atelier Silk Dress',
    collection: 'Evening Study',
    price: '$1,800',
    status: 'Черновик'
  },
  {
    id: 'prd-003',
    title: 'Private Capsule Jacket',
    collection: 'Private Capsule',
    price: '$1,950',
    status: 'Опубликовано'
  }
]

const initialCollections: AdminCollection[] = [
  {
    id: 'col-001',
    title: 'Noir Atelier',
    type: 'Outerwear',
    status: 'Опубликовано'
  },
  {
    id: 'col-002',
    title: 'Private Capsule',
    type: 'Capsule',
    status: 'Опубликовано'
  },
  {
    id: 'col-003',
    title: 'Evening Study',
    type: 'Evening',
    status: 'Черновик'
  }
]

const initialJournal: AdminJournal[] = [
  {
    id: 'jrn-001',
    title: 'The discipline of silhouette',
    category: 'Дом',
    status: 'Опубликовано'
  },
  {
    id: 'jrn-002',
    title: 'Dark tailoring as language',
    category: 'Editorial',
    status: 'Черновик'
  },
  {
    id: 'jrn-003',
    title: 'The private capsule model',
    category: 'Коллекции',
    status: 'Опубликовано'
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
    { key: 'dashboard', label: 'Обзор' },
    { key: 'homepage', label: 'Главная' },
    { key: 'products', label: 'Товары' },
    { key: 'collections', label: 'Коллекции' },
    { key: 'journal', label: 'Журнал' },
    { key: 'settings', label: 'Настройки' }
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
        <div className="eyebrow">Панель управления</div>
        <h1 className="page-title">Административная панель ROZEL</h1>
        <p className="page-text">
          Управление содержимым сайта, товарами, коллекциями, редакционными материалами
          и ключевыми блоками витрины дома.
        </p>
      </div>

      <div className="cms-stat-grid">
        <article className="cms-stat-card">
          <div className="cms-stat-card__label">Товары</div>
          <div className="cms-stat-card__value">{productCount}</div>
        </article>

        <article className="cms-stat-card">
          <div className="cms-stat-card__label">Коллекции</div>
          <div className="cms-stat-card__value">{collectionCount}</div>
        </article>

        <article className="cms-stat-card">
          <div className="cms-stat-card__label">Материалы</div>
          <div className="cms-stat-card__value">{journalCount}</div>
        </article>
      </div>

      <div className="cms-grid-2">
        <article className="cms-panel">
          <div className="cms-panel__label">Содержимое</div>
          <h2 className="cms-panel__title">Все ключевые разделы собраны в одной системе.</h2>
          <p className="cms-panel__text">
            Главная страница, карточки товаров, коллекции и журнал управляются через
            единую административную структуру.
          </p>
        </article>

        <article className="cms-panel">
          <div className="cms-panel__label">Публикация</div>
          <h2 className="cms-panel__title">Контент готов к централизованному управлению.</h2>
          <p className="cms-panel__text">
            Панель рассчитана на дальнейшее подключение авторизации, базы данных,
            загрузки изображений и серверной синхронизации.
          </p>
        </article>
      </div>
    </div>
  )
}

function HomepageView({
  snapshot,
  onSave,
  onReset
}: {
  snapshot: CmsSnapshot
  onSave: (next: CmsSnapshot) => void
  onReset: () => void
}) {
  const [draft, setDraft] = useState<CmsSnapshot>(snapshot)

  useEffect(() => {
    setDraft(snapshot)
  }, [snapshot])

  function updateHero<K extends keyof CmsSnapshot['hero']>(key: K, value: string) {
    setDraft((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [key]: value
      }
    }))
  }

  function updateHome<K extends keyof CmsSnapshot['home']>(key: K, value: string) {
    setDraft((prev) => ({
      ...prev,
      home: {
        ...prev.home,
        [key]: value
      }
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave(draft)
  }

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Главная страница</div>
        <h1 className="page-title">Редактор главной</h1>
        <p className="page-text">
          Управление главным экраном, вводным текстом, товарным блоком и featured-секцией.
        </p>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Контент главной</div>

          <div className="cms-form">
            <input
              className="cms-input"
              value={draft.hero.eyebrow}
              onChange={(e) => updateHero('eyebrow', e.target.value)}
              placeholder="Надпись над главным заголовком"
            />
            <textarea
              className="cms-textarea"
              value={draft.hero.title}
              onChange={(e) => updateHero('title', e.target.value)}
              placeholder="Главный заголовок"
            />
            <textarea
              className="cms-textarea"
              value={draft.hero.description}
              onChange={(e) => updateHero('description', e.target.value)}
              placeholder="Описание главного экрана"
            />
            <input
              className="cms-input"
              value={draft.home.introEyebrow}
              onChange={(e) => updateHome('introEyebrow', e.target.value)}
              placeholder="Надпись над вводным блоком"
            />
            <input
              className="cms-input"
              value={draft.home.introTitle}
              onChange={(e) => updateHome('introTitle', e.target.value)}
              placeholder="Заголовок вводного блока"
            />
            <input
              className="cms-input"
              value={draft.home.productsEyebrow}
              onChange={(e) => updateHome('productsEyebrow', e.target.value)}
              placeholder="Надпись над товарным блоком"
            />
            <input
              className="cms-input"
              value={draft.home.productsTitle}
              onChange={(e) => updateHome('productsTitle', e.target.value)}
              placeholder="Заголовок товарного блока"
            />
            <input
              className="cms-input"
              value={draft.home.productsLinkLabel}
              onChange={(e) => updateHome('productsLinkLabel', e.target.value)}
              placeholder="Текст ссылки на каталог"
            />
            <input
              className="cms-input"
              value={draft.home.featuredEyebrow}
              onChange={(e) => updateHome('featuredEyebrow', e.target.value)}
              placeholder="Надпись над featured-блоком"
            />
            <input
              className="cms-input"
              value={draft.home.featuredTitle}
              onChange={(e) => updateHome('featuredTitle', e.target.value)}
              placeholder="Заголовок featured-блока"
            />
            <textarea
              className="cms-textarea"
              value={draft.home.featuredText}
              onChange={(e) => updateHome('featuredText', e.target.value)}
              placeholder="Текст featured-блока"
            />
            <input
              className="cms-input"
              value={draft.home.featuredCta}
              onChange={(e) => updateHome('featuredCta', e.target.value)}
              placeholder="Текст кнопки featured-блока"
            />

            <div className="button-row">
              <button type="submit" className="btn btn--primary">
                Сохранить
              </button>

              <button type="button" className="btn btn--ghost" onClick={onReset}>
                Сбросить
              </button>
            </div>

            <div className="cms-storage-note">Локальное хранилище: {CMS_STORAGE_KEY}</div>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Предпросмотр</div>

          <div className="cms-preview-card">
            <div className="eyebrow">{draft.hero.eyebrow}</div>
            <h2 className="cms-preview-card__title">{draft.hero.title}</h2>
            <p className="cms-preview-card__text">{draft.hero.description}</p>

            <div className="cms-preview-divider" />

            <div className="cms-preview-card__label">{draft.home.introEyebrow}</div>
            <div className="cms-preview-card__text">{draft.home.introTitle}</div>

            <div className="cms-preview-divider" />

            <div className="cms-preview-card__label">{draft.home.productsEyebrow}</div>
            <div className="cms-preview-card__text">{draft.home.productsTitle}</div>

            <div className="cms-preview-divider" />

            <div className="cms-preview-card__label">{draft.home.featuredEyebrow}</div>
            <div className="cms-preview-card__text">{draft.home.featuredTitle}</div>
            <div className="cms-preview-card__text">{draft.home.featuredText}</div>
          </div>
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
      status: 'Черновик'
    })

    setTitle('')
    setCollection('')
    setPrice('')
  }

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Товары</div>
        <h1 className="page-title">Управление товарами</h1>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Новый товар</div>

          <div className="cms-form">
            <input
              className="cms-input"
              placeholder="Название товара"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Коллекция"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Добавить товар
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Каталог</div>
          <h2 className="cms-panel__title">Структура рассчитана на полноценную витрину.</h2>
          <p className="cms-panel__text">
            Здесь будут управляться карточки товаров, цены, статус публикации,
            описание, изображения и дальнейшие параметры каталога.
          </p>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Коллекция</th>
              <th>Цена</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.collection}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`cms-badge ${item.status === 'Опубликовано' ? 'is-published' : 'is-draft'}`}>
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
      status: 'Черновик'
    })

    setTitle('')
    setType('')
  }

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Коллекции</div>
        <h1 className="page-title">Управление коллекциями</h1>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Новая коллекция</div>

          <div className="cms-form">
            <input
              className="cms-input"
              placeholder="Название коллекции"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Тип"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Добавить коллекцию
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Архитектура</div>
          <h2 className="cms-panel__title">Коллекции формируют структуру дома.</h2>
          <p className="cms-panel__text">
            Коллекция — это не только группа товаров, а самостоятельный редакционный слой
            с собственной подачей, акцентами и визуальным характером.
          </p>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Тип</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>
                  <span className={`cms-badge ${item.status === 'Опубликовано' ? 'is-published' : 'is-draft'}`}>
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
      status: 'Черновик'
    })

    setTitle('')
    setCategory('')
  }

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Журнал</div>
        <h1 className="page-title">Управление журналом</h1>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Новый материал</div>

          <div className="cms-form">
            <input
              className="cms-input"
              placeholder="Заголовок материала"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Категория"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Добавить материал
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Редакционный слой</div>
          <h2 className="cms-panel__title">Журнал продолжает язык ROZEL.</h2>
          <p className="cms-panel__text">
            Редакционные материалы должны оставаться в одной системе с коллекциями,
            товарами и общей luxury-подачей бренда.
          </p>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>Категория</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <span className={`cms-badge ${item.status === 'Опубликовано' ? 'is-published' : 'is-draft'}`}>
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
  const siteData = getSiteContent('ru')

  return (
    <div className="cms-stack">
      <div>
        <div className="eyebrow">Настройки</div>
        <h1 className="page-title">Настройки дома</h1>
      </div>

      <div className="cms-grid-2">
        <article className="cms-panel">
          <div className="cms-panel__label">Бренд</div>
          <h2 className="cms-panel__title">{siteData.brand}</h2>
          <p className="cms-panel__text">Домен: {siteData.domain}</p>
        </article>

        <article className="cms-panel">
          <div className="cms-panel__label">Система</div>
          <h2 className="cms-panel__title">Панель готова к дальнейшему подключению.</h2>
          <p className="cms-panel__text">
            Следующий слой — авторизация, база данных, загрузка медиафайлов
            и серверная синхронизация административного контура.
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
  const [cmsSnapshot, setCmsSnapshot] = useState<CmsSnapshot>(defaultCmsSnapshot)

  useEffect(() => {
    setCmsSnapshot(readCmsSnapshot())
  }, [])

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

  function handleSaveCms(next: CmsSnapshot) {
    setCmsSnapshot(next)
    writeCmsSnapshot(next)
  }

  function handleResetCms() {
    setCmsSnapshot(defaultCmsSnapshot)
    writeCmsSnapshot(defaultCmsSnapshot)
  }

  if (!entered) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="admin-login">
            <div className="eyebrow">Административный вход</div>
            <h1 className="page-title">Панель управления ROZEL</h1>
            <p className="page-text">
              Закрытый доступ к управлению содержимым сайта и витриной бренда.
            </p>

            <form onSubmit={handleLogin} className="admin-login__form">
              <input
                type="password"
                placeholder="Ключ доступа"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
              />

              <button className="btn btn--primary">
                Войти
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

            {section === 'homepage' && (
              <HomepageView
                snapshot={cmsSnapshot}
                onSave={handleSaveCms}
                onReset={handleResetCms}
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
