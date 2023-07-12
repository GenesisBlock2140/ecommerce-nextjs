"use client"

import { FC } from "react";
import Image from "next/image";
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { removeFromCart } from '@/redux/features/cart-slice'

interface ICartItems {
  quantity: number
  name: string
  unitPrice: number
  img: string
}

export const CartItems: FC<ICartItems> = ({ quantity, name, unitPrice, img }) => {

  const dispatch = useDispatch<AppDispatch>();

  const deleteItem = () => {
    dispatch(removeFromCart({ productName: name }))
  }

  return (
    <div className="flex my-2">
    <div className="block w-20">
      <Image src={img} alt="product" width={80} height={80} />
    </div>
    <div className="w-[245px] ml-1">
      <p className="text-sm">{`${quantity}x ${name}`}</p>
      <div className="flex justify-around mt-2">
        <p className="font-semibold">{`${unitPrice * quantity} €`}</p>
        <button className="text-xs text-gray-600" onClick={deleteItem}>Supprimer</button>
      </div>
    </div>
  </div>
  )
}