"use client"

import { FC } from "react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/store";

export const CheckoutTotal: FC = () => {

  const itemInCart = useAppSelector((state) => state.cartReducer.cart)

  const getTotalPrice = ():number => {
    let total = 0
    itemInCart.map(item => {
      total+= item.quantity * item.product.price
    })
    return total
  }

  return (
    <>
      <div className="w-full sm:w-[350px] h-[250px] px-4 py-8 mx-auto bg-gray-100 rounded">
        <p className="text-xl font-semibold mb-4">Total du panier</p>
        <div className="flex justify-between my-2">
          <p>Sous total</p>
          <p className="font-semibold">{getTotalPrice()} €</p>
        </div>
        <div className="flex justify-between my-2">
          <p>Frais de livraison</p>
          <p className="font-semibold">0 €</p>
        </div>
        <hr />
        <div className="flex justify-between my-2">
          <p>Total</p>
          <p className="font-semibold">{getTotalPrice()} €</p>
        </div>
        <Button text="Paiement 🛒" size="big" to="/checkout" />
      </div>
    </>
  )
}