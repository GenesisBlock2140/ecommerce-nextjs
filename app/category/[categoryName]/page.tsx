import { Shell } from "@/components/shell"
import { notFound } from "next/navigation"
import productData from '@/data/product.json'
import { Billboard } from "@/components/category/billboard"
import { CategoryList } from "@/components/category/categoryList"
import { ResolvingMetadata, Metadata } from "next"

export async function generateMetadata(
  { params }: { params: { categoryName: string } },
  parent?: ResolvingMetadata
): Promise<Metadata> {
  if (!(params.categoryName in productData)) {
    return {
      title: "Cette catégorie n'existe pas | Brocante"
    }
  }
  return {
    title: `Découvrez nos ${params.categoryName} vintages | Brocante`,
  }
}

export default function Category({ params }: { params: { categoryName: string } }) {

  if (!(params.categoryName in productData)) {
    notFound()
  }

  return (
    <Shell className="px-2">
      <Billboard text="Découvrir notre collection de lampes vintages" />
      <CategoryList data={productData.lampes} />
      <div className="my-10">
        <h1 className="text-2xl font-semibold capitalize mb-2">{params.categoryName}</h1>
        <p className="max-w-[600px] text-sm">
          Découvrez notre collection exclusive de {params.categoryName} vintages pour sublimer votre décoration intérieure. 
          Plongez dans l'atmosphère nostalgique et élégante des époques passées en choisissant parmi notre sélection soigneusement choisie de pièces uniques.
        </p>
      </div>
    </Shell>
  )
}