import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface IProductList {
  tag: string
  title: string
  href: string
  children: ReactNode
}

export const ProductList: FC<IProductList> = ({ tag, title, href, children }) => {
  return (
    <div className='my-4'>
      <div className='text-center'>
        <p className='text-lg mb-1'>{tag}</p>
        <p className='text-3xl font-semibold mb-10'>{title}</p>
      </div>
      <div className='flex flex-wrap items-center justify-center lg:justify-start gap-10'>
        {children}
      </div>
    </div>
  )
}