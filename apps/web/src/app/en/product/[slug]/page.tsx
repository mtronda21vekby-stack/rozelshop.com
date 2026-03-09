import { ProductDetailClient } from '../../../../components/product/ProductDetailClient'
import { defaultCmsProducts } from '../../../../lib/cms-store'

type EnglishProductPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return defaultCmsProducts.map((item) => ({
    slug: item.slug
  }))
}

export default function EnglishProductPage({
  params
}: EnglishProductPageProps) {
  return <ProductDetailClient slug={params.slug} locale="en" />
}
