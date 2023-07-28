import Image from "next/image"
import { Rating } from "@/components/reviews/rating"
import { ReviewList } from "@/components/reviews/reviewList"
import { AddToCart } from "@/components/addToCart"
import { Shell } from "@/components/shell"
import { BreadcrumbTrail } from "@/components/breadcrumb-trail"
import { notFound } from 'next/navigation'
import { AddToWishlist } from "@/components/addToWishlist"
import { getProductByName } from "@/services/product/getProductByName"
import { Metadata } from "next"

export async function generateMetadata(
  { params }: { params: { productName: string } }
): Promise<Metadata> {
  const product = getProductByName(params.productName)
  if (product.length === 0) {
    return {
      title: "Ce produit n'existe pas | Brocante"
    }
  }
  return {
    title: `${product[0].name} | Brocante`,
  }
}

export default function Product({ params }: { params: { productName: string } }) {

  const getProductData = getProductByName(params.productName)

  if (getProductData.length === 0) {
    notFound()
  }

  return (
    <Shell className="px-2">
      <BreadcrumbTrail 
        fil={[
          {link: `/category/${getProductData[0].category}`, name: getProductData[0].category}, 
          {link: `/product/${getProductData[0].name}`, name: 'Produit'}
        ]}
      />
      <div className="flex flex-wrap justify-start gap-10">
        <div className="max-w-[550px] relative z-10">
          <AddToWishlist />
          <Image src={getProductData[0].picture} alt={getProductData[0].name} width={550} height={550} />
        </div>
        <div className="max-w-[550px]">
          <p className="text-3xl font-medium my-2">{getProductData[0].name}</p>
          <Rating rating={getProductData[0].rating} />
          <p className="text-3xl my-4">{getProductData[0].price} €</p>
          <p>{getProductData[0].description}</p>
          <AddToCart productData={getProductData[0]} />
        </div>
      </div>
      <div className="my-20">
        <p className="text-xl font-semibold mb-3">Description</p>
        <p>{getProductData[0].description}</p>
      </div>
      <ReviewList 
        reviews={[
          {author: 'Marc', rating: 5, review: "En tant que passionné de brocante, je suis enchanté par ce site. Leur vaste collection d'objets vintage et rétro est tout simplement fascinante. J'ai pu dénicher des articles rares et authentiques pour agrémenter ma collection. "},
          {author: 'Sophie', rating: 4.8, review: "Le processus de commande était simple et sécurisé, et la livraison a été rapide. Je recommande vivement ce site à tous les amateurs de pièces uniques !"},
          {author: 'Laura', rating: 3.7, review: "Ce site de brocante en ligne est tout simplement fantastique ! J'ai récemment commandé un magnifique meuble vintage et je suis émerveillée par sa qualité et son charme."},
          {author: 'a', rating: 3.7, review: 'aaaa'},
          {author: 'a', rating: 4.8, review: 'aaaa'},
          {author: 'a', rating: 5, review: 'aaaa'}
        ]}
      />
    </Shell>
  )
}