import Image from "next/image"
import { FC } from "react"
import shoppingCart from "@/public/svg/shopping-cart.svg"

export const CheckoutEmpty: FC = () => {
  return (
    <div className="w-full h-80 border-2 border-gray-200 border-dashed rounded-lg">
      <div className="flex flex-col justify-center items-center h-full">
        <Image src={shoppingCart} alt="shoppingCart" width={90} height={90} />
        <p className="text-center">Vous n'avez pas encore de produit dans votre panier</p>
      </div>
    </div>
  )
}