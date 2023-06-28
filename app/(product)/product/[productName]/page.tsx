import Image from "next/image"
import star from '@/public/svg/star.svg'
import starHalf from '@/public/svg/star-half.svg'
import { Rating } from "@/components/reviews/rating"
import { Review } from "@/components/reviews/review"
import chairImg from '@/public/product/chair/marron-chair.jpg'
import { ReviewList } from "@/components/reviews/reviewList"
import { QuantitySelector } from "@/components/product/quantitySelector"
import { Button } from "@/components/ui/button"
import { AddToCart } from "@/components/addToCart"
import { Shell } from "@/components/shell"
import { BreadcrumbTrail } from "@/components/breadcrumb-trail"
import lampList from '@/data/lampes.json'
import { productUrlFormat } from "@/utils/urlFormat"
import { removeAccents } from "@/utils/removeAccents"
import { notFound } from 'next/navigation'

export default function Product({ params }: { params: { productName: string } }) {

  console.log(removeAccents("lampe-de-bureau-vintage-modèle-rare") === params.productName);
  console.log(removeAccents("lampe-de-bureau-vintage-modèle-rare"))
  console.log(params.productName)

  const getProductData = lampList.lampes.filter(item => 
    productUrlFormat(removeAccents(item.name)) === params.productName)

  console.log(getProductData)

  if (getProductData.length === 0) {
    notFound()
  }

  return (
    <Shell className="px-2">
      <BreadcrumbTrail fil={[{link: '/category/lampes', name: 'Lampes'}, {link: '/product/1', name: 'Produit'}]} />
      <div className="flex flex-wrap justify-start gap-10">
        <div className="max-w-[550px]">
          <Image src={getProductData[0].picture} alt="chairImg" width={550} height={550} />
        </div>
        <div className="max-w-[550px]">
          <p>{}</p>
          <p className="text-3xl font-medium my-2">{getProductData[0].name}</p>
          <Rating rating={getProductData[0].rating} />
          <p className="text-3xl my-4">{getProductData[0].price} €</p>
          <p>{getProductData[0].description}</p>
          <AddToCart productId="22" />
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