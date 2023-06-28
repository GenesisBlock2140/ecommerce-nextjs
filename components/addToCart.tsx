"use client"
import { FC } from 'react'
import { QuantitySelector } from './product/quantitySelector'
import { Button } from './ui/button'

interface IaddToCart {
  productId: string
}

export const AddToCart: FC<IaddToCart> = ({ productId }) => {
  return (
    <div className="flex gap-5 mt-5">
      <QuantitySelector getQuantity={(quantity) => console.log(quantity, productId)} />
      <Button text="Ajouter au panier" size="normal" />
    </div>
  )
}