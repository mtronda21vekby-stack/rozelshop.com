import { ProductDetailClient } from '../../../components/product/ProductDetailClient'
import { defaultCmsProducts } from '../../../lib/cms-store'

type ProductPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return defaultCmsProducts.map((item) => ({
    slug: item.slug
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetailClient slug={params.slug} locale="ru" />
}
