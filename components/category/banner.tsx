import { FC } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

interface IBanner {
  title: string
  description: string
  goTo: string
  img: string
  reverse?: boolean
}

export const Banner:FC<IBanner> = ({ title, description, goTo, img, reverse = false }) => {
  return (
    <div className={`w-full h-[400px] bg-[#f2f2f2] flex ${reverse ? 'flex-row-reverse' : ''} my-10`}>
      <div className='w-full lg:w-1/2 flex justify-center items-center px-2'>
        <div className='max-w-[400px]'>
          <p className='text-3xl font-semibold uppercase'>{title}</p>
          <p className='text-lg my-3'>{description}</p>
          <Button text='Découvrir' size='big' to={goTo} className='text-white' />
        </div>
      </div>
      <div className='w-1/2 h-[400px] hidden lg:block overflow-hidden'>
        <Image src={img} alt='lampe category' width={600} height={400} className='w-full' />
      </div>
    </div>
  )
}