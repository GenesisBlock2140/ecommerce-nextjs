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
    <div>
      <div className='text-center'>
        <p className='text-lg mb-1'>{tag}</p>
        <p className='text-3xl font-medium mb-10'>{title}</p>
      </div>
      <div className='flex flex-wrap items-center gap-10'>
        {children}
      </div>
      <button className='block bg-[#D8C7B7] py-4 px-8 mt-10 mx-auto rounded-lg'>
        <Link href={href}>
          Voir la collection
        </Link>
      </button>
    </div>
  )
}