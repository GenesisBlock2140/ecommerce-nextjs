"use client"

import { FC } from "react"
import { useAppSelector } from "@/redux/store";
import { CheckoutItems } from "./checkoutItems";
import { CheckoutEmpty } from "./checkout-empty";

export const CheckoutBox: FC = () => {

  const itemInCart = useAppSelector((state) => state.cartReducer.cart)

  return (
    <div className="w-full max-w-[750px] text-sm lg:text-base">
      { itemInCart.length > 0 
      ? itemInCart.map((item, index) => {
        return (
          <CheckoutItems 
            name={item.product.name}
            price={item.product.price} 
            quantity={item.quantity} 
            image={item.product.picture}
            key={index}
          />
        )
      }) 
      : <CheckoutEmpty />
      }
    </div>
  )
}