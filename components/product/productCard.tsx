import { currency } from '@/config/currency'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IProductCard {
  title: string
  productId: string
  price: number
  picture: any
}

export const ProductCard: FC<IProductCard> = ({ title, productId, price, picture }) => {
  return (
    <div className='max-w-[350px] h-[380px]'>
      <Link href={`/product/${productId}`}>
        <div className='w-full overflow-hidden'>
          <Image src={picture} alt={picture} width={350} height={350} className='duration-300 hover:scale-110' />
        </div>
        <div className='flex justify-between items-center gap-2 mt-2'>
          <p>{title}</p>
          <p className='font-medium'>{`${price}${currency.symbol}`}</p>
        </div>
      </Link>
    </div>
  )
}