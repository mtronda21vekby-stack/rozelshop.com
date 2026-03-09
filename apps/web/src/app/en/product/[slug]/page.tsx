import { ProductDetailClient } from '../../../../components/product/ProductDetailClient'
import { defaultCmsProducts } from '../../../../lib/cms-store'

type EnglishProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return defaultCmsProducts.map((item) => ({
    slug: item.slug
  }))
}

export default async function EnglishProductPage({
  params
}: EnglishProductPageProps) {
  const { slug } = await params

  return <ProductDetailClient slug={slug} locale="en" />
}
