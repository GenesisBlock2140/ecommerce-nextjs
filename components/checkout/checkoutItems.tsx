"use client"
import { FC } from 'react'
import Image from "next/image"

interface IcheckoutItems {
  name: string
  price: number
  quantity: number
  image: string
}

export const CheckoutItems: FC<IcheckoutItems> = ({ name, price, quantity, image }) => {
  return (
      <div className="my-4">
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <div className='flex flex-shrink-0 w-20'>
              <Image src={image} alt={name} width={80} height={80} />
            </div>
            <div className='max-w-[250px] flex flex-col text-sm'>
              <p>{name}</p>
              <p className='font-semibold'>{price}$</p>
            </div>
          </div>
          <div className='flex gap-1 mr-2'>
            <p className='bg-gray-100 px-4 rounded'>{quantity}</p>
            <Image src={'/svg/trash.svg'} alt='delete' width={20} height={20} className='cursor-pointer' />
          </div>
        </div>
    </div>
  )
}