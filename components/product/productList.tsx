import { FC, ReactNode } from 'react'

interface IProductList {
  children: ReactNode[]
}

export const ProductList: FC<IProductList> = ({ children }) => {
  return (
    <div className='my-4'>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {children}
      </div>
    </div>
  )
}