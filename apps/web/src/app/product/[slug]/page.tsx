import { ProductDetailClient } from '../../../components/product/ProductDetailClient'
import { defaultCmsProducts } from '../../../lib/cms-store'

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return defaultCmsProducts.map((item) => ({
    slug: item.slug
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  return <ProductDetailClient slug={slug} locale="ru" />
}
