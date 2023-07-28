"use client"

import { FC, useState } from 'react'
import { QuantitySelector } from './product/quantitySelector'
import { Button } from './ui/button'
import { addToCart } from '@/redux/features/cart-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { Product } from '@/types/product'

interface IAddToCart {
  productData: Product
}

export const AddToCart: FC<IAddToCart> = ({ productData }) => {

  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(0)

  const addToState = () => {
    dispatch(addToCart({
      product: productData, 
      quantity: quantity
    }))
  }

  return (
    <div className="flex gap-5 mt-5">
      <QuantitySelector getQuantity={(quantity) => setQuantity(quantity)} />
      <Button text="Ajouter au panier" size="normal" action={addToState} />
    </div>
  )
}