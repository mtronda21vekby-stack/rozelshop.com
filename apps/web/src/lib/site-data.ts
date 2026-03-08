import type { CollectionSummary, NavItem, ProductSummary } from '@rozel/types';

export const navItems: NavItem[] = [
  { href: '/house', label: 'House' },
  { href: '/collections', label: 'Collections' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Client Services' }
];

export const featuredProducts: ProductSummary[] = [
  { id: '1', slug: 'sculpted-coat', name: 'Sculpted Coat', price: 3200, currency: 'USD', badge: 'New' },
  { id: '2', slug: 'silk-column-dress', name: 'Silk Column Dress', price: 2600, currency: 'USD' },
  { id: '3', slug: 'atelier-trouser', name: 'Atelier Trouser', price: 980, currency: 'USD' }
];

export const collections: CollectionSummary[] = [
  {
    id: '1',
    slug: 'noir-volume',
    title: 'Noir Volume',
    season: 'Autumn / Winter',
    description: 'Architectural silhouettes, dense tailoring, and sharp evening rhythm.'
  },
  {
    id: '2',
    slug: 'bone-light',
    title: 'Bone Light',
    season: 'Resort',
    description: 'Pale structure, soft drape, and restrained ceremony.'
  }
];
