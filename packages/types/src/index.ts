export type NavItem = {
  href: string;
  label: string;
};

export type ProductSummary = {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  badge?: string;
};

export type CollectionSummary = {
  id: string;
  slug: string;
  title: string;
  season: string;
  description: string;
};

export type CmsBlock = {
  id: string;
  type: 'hero' | 'editorial' | 'grid' | 'cta';
  heading: string;
  body?: string;
};
