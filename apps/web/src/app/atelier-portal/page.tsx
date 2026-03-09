'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CMS_PRODUCTS_STORAGE_KEY,
  CMS_STORAGE_KEY,
  defaultCmsProducts,
  defaultCmsStore,
  readCmsProducts,
  readCmsStore,
  writeCmsProducts,
  writeCmsStore,
  type CmsProduct,
  type CmsSnapshot,
  type CmsStore
} from '../../lib/cms-store'
import { getSiteContent } from '../../lib/site-data'

type AdminSection =
  | 'dashboard'
  | 'homepage'
  | 'products'
  | 'collections'
  | 'journal'
  | 'settings'

type AdminLocale = 'ru' | 'en'

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
          Управление витриной бренда, товарами, коллекциями, журналом и страницами сайта.
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
    </div>
  )
}

function HomepageView({
  locale,
  snapshot,
  productOptions,
  onSave,
  onReset
}: {
  locale: AdminLocale
  snapshot: CmsSnapshot
  productOptions: { slug: string; title: string }[]
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

  function updateSection<K extends keyof CmsSnapshot['sections']>(key: K, value: boolean) {
    setDraft((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [key]: value
      }
    }))
  }

  function updateSpotlight(index: number, field: 'eyebrow' | 'title' | 'text', value: string) {
    setDraft((prev) => ({
      ...prev,
      spotlights: prev.spotlights.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    }))
  }

  function updatePageSeo(
    page: keyof CmsSnapshot['seo'],
    field: 'title' | 'description',
    value: string
  ) {
    setDraft((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        [page]: {
          ...prev.seo[page],
          [field]: value
        }
      }
    }))
  }

  function updateMedia<K extends keyof CmsSnapshot['media']>(key: K, value: string) {
    setDraft((prev) => ({
      ...prev,
      media: {
        ...prev.media,
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
        <h1 className="page-title">
          Редактор главной {locale === 'ru' ? 'RU' : 'EN'}
        </h1>
        <p className="page-text">
          Управление контентом, секциями, spotlight-блоками, featured-товаром, SEO и media-слотами.
        </p>
      </div>

      <div className="cms-grid-2">
        <form onSubmit={handleSubmit} className="cms-panel">
          <div className="cms-panel__label">Контент и структура</div>

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
              placeholder="Описание главного блока"
            />

            <input
              className="cms-input"
              value={draft.home.introEyebrow}
              onChange={(e) => updateHome('introEyebrow', e.target.value)}
              placeholder="Надпись вводного блока"
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
              placeholder="Надпись товарного блока"
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
              placeholder="Надпись featured-блока"
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

            <select
              className="cms-input"
              value={draft.featuredProductSlug}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  featuredProductSlug: e.target.value
                }))
              }
            >
              {productOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  Featured: {item.title}
                </option>
              ))}
            </select>

            <label className="cms-toggle">
              <input
                type="checkbox"
                checked={draft.sections.showIntro}
                onChange={(e) => updateSection('showIntro', e.target.checked)}
              />
              <span>Показывать вводный блок</span>
            </label>

            <label className="cms-toggle">
              <input
                type="checkbox"
                checked={draft.sections.showCollections}
                onChange={(e) => updateSection('showCollections', e.target.checked)}
              />
              <span>Показывать блок коллекций</span>
            </label>

            <label className="cms-toggle">
              <input
                type="checkbox"
                checked={draft.sections.showProducts}
                onChange={(e) => updateSection('showProducts', e.target.checked)}
              />
              <span>Показывать блок товаров</span>
            </label>

            <label className="cms-toggle">
              <input
                type="checkbox"
                checked={draft.sections.showFeatured}
                onChange={(e) => updateSection('showFeatured', e.target.checked)}
              />
              <span>Показывать featured-блок</span>
            </label>

            <label className="cms-toggle">
              <input
                type="checkbox"
                checked={draft.sections.showEditorial}
                onChange={(e) => updateSection('showEditorial', e.target.checked)}
              />
              <span>Показывать spotlight-блоки</span>
            </label>

            <div className="cms-subtitle">Spotlight 1</div>
            <input
              className="cms-input"
              value={draft.spotlights[0]?.eyebrow ?? ''}
              onChange={(e) => updateSpotlight(0, 'eyebrow', e.target.value)}
              placeholder="Надпись"
            />
            <input
              className="cms-input"
              value={draft.spotlights[0]?.title ?? ''}
              onChange={(e) => updateSpotlight(0, 'title', e.target.value)}
              placeholder="Заголовок"
            />
            <textarea
              className="cms-textarea"
              value={draft.spotlights[0]?.text ?? ''}
              onChange={(e) => updateSpotlight(0, 'text', e.target.value)}
              placeholder="Текст"
            />

            <div className="cms-subtitle">Spotlight 2</div>
            <input
              className="cms-input"
              value={draft.spotlights[1]?.eyebrow ?? ''}
              onChange={(e) => updateSpotlight(1, 'eyebrow', e.target.value)}
              placeholder="Надпись"
            />
            <input
              className="cms-input"
              value={draft.spotlights[1]?.title ?? ''}
              onChange={(e) => updateSpotlight(1, 'title', e.target.value)}
              placeholder="Заголовок"
            />
            <textarea
              className="cms-textarea"
              value={draft.spotlights[1]?.text ?? ''}
              onChange={(e) => updateSpotlight(1, 'text', e.target.value)}
              placeholder="Текст"
            />

            <div className="cms-subtitle">Spotlight 3</div>
            <input
              className="cms-input"
              value={draft.spotlights[2]?.eyebrow ?? ''}
              onChange={(e) => updateSpotlight(2, 'eyebrow', e.target.value)}
              placeholder="Надпись"
            />
            <input
              className="cms-input"
              value={draft.spotlights[2]?.title ?? ''}
              onChange={(e) => updateSpotlight(2, 'title', e.target.value)}
              placeholder="Заголовок"
            />
            <textarea
              className="cms-textarea"
              value={draft.spotlights[2]?.text ?? ''}
              onChange={(e) => updateSpotlight(2, 'text', e.target.value)}
              placeholder="Текст"
            />

            <div className="cms-subtitle">SEO: collections</div>
            <input
              className="cms-input"
              value={draft.seo.collections.title}
              onChange={(e) => updatePageSeo('collections', 'title', e.target.value)}
              placeholder="Collections SEO title"
            />
            <textarea
              className="cms-textarea"
              value={draft.seo.collections.description}
              onChange={(e) => updatePageSeo('collections', 'description', e.target.value)}
              placeholder="Collections SEO description"
            />

            <div className="cms-subtitle">SEO: house</div>
            <input
              className="cms-input"
              value={draft.seo.house.title}
              onChange={(e) => updatePageSeo('house', 'title', e.target.value)}
              placeholder="House SEO title"
            />
            <textarea
              className="cms-textarea"
              value={draft.seo.house.description}
              onChange={(e) => updatePageSeo('house', 'description', e.target.value)}
              placeholder="House SEO description"
            />

            <div className="cms-subtitle">SEO: contact</div>
            <input
              className="cms-input"
              value={draft.seo.contact.title}
              onChange={(e) => updatePageSeo('contact', 'title', e.target.value)}
              placeholder="Contact SEO title"
            />
            <textarea
              className="cms-textarea"
              value={draft.seo.contact.description}
              onChange={(e) => updatePageSeo('contact', 'description', e.target.value)}
              placeholder="Contact SEO description"
            />

            <div className="cms-subtitle">Media URLs</div>
            <input
              className="cms-input"
              value={draft.media.heroImage}
              onChange={(e) => updateMedia('heroImage', e.target.value)}
              placeholder="Hero image URL"
            />
            <input
              className="cms-input"
              value={draft.media.featuredImage}
              onChange={(e) => updateMedia('featuredImage', e.target.value)}
              placeholder="Featured image URL"
            />
            <input
              className="cms-input"
              value={draft.media.spotlightOneImage}
              onChange={(e) => updateMedia('spotlightOneImage', e.target.value)}
              placeholder="Spotlight 1 image URL"
            />
            <input
              className="cms-input"
              value={draft.media.spotlightTwoImage}
              onChange={(e) => updateMedia('spotlightTwoImage', e.target.value)}
              placeholder="Spotlight 2 image URL"
            />
            <input
              className="cms-input"
              value={draft.media.spotlightThreeImage}
              onChange={(e) => updateMedia('spotlightThreeImage', e.target.value)}
              placeholder="Spotlight 3 image URL"
            />

            <div className="button-row">
              <button type="submit" className="btn btn--primary">
                Сохранить
              </button>

              <button type="button" className="btn btn--ghost" onClick={onReset}>
                Сбросить
              </button>
            </div>

            <div className="cms-storage-note">Хранилище главной: {CMS_STORAGE_KEY}</div>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Предпросмотр</div>

          <div className="cms-preview-card">
            <div className="eyebrow">{draft.hero.eyebrow}</div>
            <h2 className="cms-preview-card__title">{draft.hero.title}</h2>
            <p className="cms-preview-card__text">{draft.hero.description}</p>

            <div className="cms-preview-divider" />

            <div className="cms-preview-card__label">Featured</div>
            <div className="cms-preview-card__text">{draft.home.featuredTitle}</div>
            <div className="cms-preview-card__text">{draft.home.featuredText}</div>

            <div className="cms-preview-divider" />

            <div className="cms-preview-card__label">SEO collections</div>
            <div className="cms-preview-card__text">{draft.seo.collections.title}</div>
            <div className="cms-preview-card__text">{draft.seo.collections.description}</div>
          </div>
        </article>
      </div>
    </div>
  )
}

function ProductsView({
  products,
  onAdd,
  onUpdate,
  onSave
}: {
  products: CmsProduct[]
  onAdd: (item: CmsProduct) => void
  onUpdate: (slug: string, field: keyof CmsProduct, value: string) => void
  onSave: () => void
}) {
  const [title, setTitle] = useState('')
  const [collection, setCollection] = useState('')
  const [price, setPrice] = useState('')
  const [badge, setBadge] = useState('Signature')
  const [subtitle, setSubtitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim() || !collection.trim() || !price.trim()) {
      return
    }

    onAdd({
      slug: `product-${Date.now()}`,
      title: title.trim(),
      collection: collection.trim(),
      price: price.trim(),
      badge: badge.trim(),
      subtitle: subtitle.trim(),
      description: description.trim(),
      status: 'Черновик'
    })

    setTitle('')
    setCollection('')
    setPrice('')
    setBadge('Signature')
    setSubtitle('')
    setDescription('')
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
            <input
              className="cms-input"
              placeholder="Бейдж"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
            />
            <input
              className="cms-input"
              placeholder="Подзаголовок"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <textarea
              className="cms-textarea"
              placeholder="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit" className="btn btn--primary">
              Добавить товар
            </button>
          </div>
        </form>

        <article className="cms-panel">
          <div className="cms-panel__label">Товарный каталог</div>
          <h2 className="cms-panel__title">Slug, описание и карточка управляются из панели.</h2>
          <p className="cms-panel__text">
            Изменения товаров сохраняются локально и сразу используются на странице collections и главной.
          </p>

          <div className="button-row">
            <button type="button" className="btn btn--primary" onClick={onSave}>
              Сохранить товары
            </button>
          </div>

          <div className="cms-storage-note">Хранилище товаров: {CMS_PRODUCTS_STORAGE_KEY}</div>
        </article>
      </div>

      <div className="cms-table-wrap">
        <table className="cms-table">
          <thead>
            <tr>
              <th>Slug</th>
              <th>Название</th>
              <th>Коллекция</th>
              <th>Цена</th>
              <th>Бейдж</th>
              <th>Подзаголовок</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.slug}>
                <td>
                  <input
                    className="cms-table-input"
                    value={item.slug}
                    onChange={(e) => onUpdate(item.slug, 'slug', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="cms-table-input"
                    value={item.title}
                    onChange={(e) => onUpdate(item.slug, 'title', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="cms-table-input"
                    value={item.collection}
                    onChange={(e) => onUpdate(item.slug, 'collection', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="cms-table-input"
                    value={item.price}
                    onChange={(e) => onUpdate(item.slug, 'price', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="cms-table-input"
                    value={item.badge}
                    onChange={(e) => onUpdate(item.slug, 'badge', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="cms-table-input"
                    value={item.subtitle}
                    onChange={(e) => onUpdate(item.slug, 'subtitle', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    className="cms-table-input"
                    value={item.status}
                    onChange={(e) => onUpdate(item.slug, 'status', e.target.value)}
                  >
                    <option value="Черновик">Черновик</option>
                    <option value="Опубликовано">Опубликовано</option>
                  </select>
                </td>
              </tr>
            ))}
            {products.map((item) => (
              <tr key={`${item.slug}-desc`}>
                <td colSpan={7}>
                  <textarea
                    className="cms-textarea"
                    value={item.description}
                    onChange={(e) => onUpdate(item.slug, 'description', e.target.value)}
                    placeholder="Описание товара"
                  />
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
          <div className="cms-panel__label">Структура</div>
          <h2 className="cms-panel__title">Коллекции формируют архитектуру витрины.</h2>
          <p className="cms-panel__text">
            Каждая коллекция задаёт отдельный визуальный и товарный слой внутри дома ROZEL.
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
          <div className="cms-panel__label">Редакционный блок</div>
          <h2 className="cms-panel__title">Журнал продолжает образ дома.</h2>
          <p className="cms-panel__text">
            Контент журнала поддерживает стиль, коллекции и публичную подачу бренда.
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
          <div className="cms-panel__label">Хранилище</div>
          <h2 className="cms-panel__title">Локальная конфигурация активна.</h2>
          <p className="cms-panel__text">
            Главная страница и товарные карточки сохраняются в браузере и используются витриной сайта.
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
  const [locale, setLocale] = useState<AdminLocale>('ru')

  const [collections, setCollections] = useState<AdminCollection[]>(initialCollections)
  const [journal, setJournal] = useState<AdminJournal[]>(initialJournal)
  const [cmsStore, setCmsStore] = useState<CmsStore>(defaultCmsStore)
  const [products, setProducts] = useState<CmsProduct[]>(defaultCmsProducts)

  useEffect(() => {
    setCmsStore(readCmsStore())
    setProducts(readCmsProducts())
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

  function handleSaveSnapshot(next: CmsSnapshot) {
    const updatedStore: CmsStore = {
      ...cmsStore,
      [locale]: next
    }

    setCmsStore(updatedStore)
    writeCmsStore(updatedStore)
  }

  function handleResetSnapshot() {
    const updatedStore: CmsStore = {
      ...cmsStore,
      [locale]: defaultCmsStore[locale]
    }

    setCmsStore(updatedStore)
    writeCmsStore(updatedStore)
  }

  function handleAddProduct(item: CmsProduct) {
    setProducts((prev) => [item, ...prev])
  }

  function handleUpdateProduct(slug: string, field: keyof CmsProduct, value: string) {
    setProducts((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    )
  }

  function handleSaveProducts() {
    writeCmsProducts(products)
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
            <div className="cms-topbar">
              <div className="cms-topbar__title">Язык витрины</div>

              <div className="catalog-tabs" style={{ marginTop: 0 }}>
                <button
                  type="button"
                  className={`catalog-tab ${locale === 'ru' ? 'is-active' : ''}`}
                  onClick={() => setLocale('ru')}
                >
                  RU
                </button>
                <button
                  type="button"
                  className={`catalog-tab ${locale === 'en' ? 'is-active' : ''}`}
                  onClick={() => setLocale('en')}
                >
                  EN
                </button>
              </div>
            </div>

            {section === 'dashboard' && (
              <DashboardView
                productCount={dashboardCounts.products}
                collectionCount={dashboardCounts.collections}
                journalCount={dashboardCounts.journal}
              />
            )}

            {section === 'homepage' && (
              <HomepageView
                locale={locale}
                snapshot={cmsStore[locale]}
                productOptions={products.map((item) => ({
                  slug: item.slug,
                  title: item.title
                }))}
                onSave={handleSaveSnapshot}
                onReset={handleResetSnapshot}
              />
            )}

            {section === 'products' && (
              <ProductsView
                products={products}
                onAdd={handleAddProduct}
                onUpdate={handleUpdateProduct}
                onSave={handleSaveProducts}
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
