import { Banner } from '@/components/category/banner'
import { HomeBanner } from '@/components/homeBanner'
import { ProductCard } from '@/components/product/productCard'
import { ProductList } from '@/components/product/productList'
import { Shell } from '@/components/shell'
import lampList from '@/data/product.json'
import { productUrlFormat } from '@/utils/urlFormat'
import { removeAccents } from "@/utils/removeAccents"

export default function Home() {
  return (
    <>
      <Shell>
        <HomeBanner />
        <h2 className='text-2xl font-medium text-center my-10'>Découvrez nos lampes</h2>
        <ProductList>
          {lampList.lampes.map((item, index) => {
            return <ProductCard title={item.name} price={item.price} picture={item.picture} productId={productUrlFormat(removeAccents(item.name))} key={index} />
          })}
        </ProductList>
        <Banner 
          title='Nos lampes' 
          description='Découvrez nos collections de magnifique lampes vintages pour tous'
          goTo='/category/lampes'
          img='/category/lampe-sable.png'
        />
      </Shell>
    </>
  )
}
