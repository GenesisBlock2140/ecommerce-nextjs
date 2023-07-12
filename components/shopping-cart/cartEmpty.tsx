import Image from "next/image"
import shoppingCart from "@/public/svg/shopping-cart.svg"

export const CartEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <Image src={shoppingCart} alt="shopingCart" width={60} height={60} />
      <p>Votre panier est vide</p>
    </div>
  )
}