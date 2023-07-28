import { Shell } from "@/components/shell";
import { Banner } from "@/components/category/banner";

export default function Category () {
  return (
    <Shell>
      <h1 className="text-2xl text-center font-medium my-20">Parcourir nos catégories</h1>
      <Banner 
          title='Nos lampes' 
          description='Découvrez nos collections de magnifique lampes vintages pour tous'
          goTo='/category/lampes'
          img='/category/lampe-sable.png'
        />
    </Shell>
  )
}