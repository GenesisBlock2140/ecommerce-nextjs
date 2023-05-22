import { FC } from 'react'
import { Rating } from './rating'

interface IReview {
  author: string
  rating: number
  review: string
}

export const Review: FC<IReview> = ({ author, rating, review}) => {
  return (
    <div className='max-w-[300px] h-auto'>
      <div className='flex items-center justify-start gap-4 mb-1'>
        <p className='font-medium text-base'>{author}</p>
        <Rating rating={rating} size={20} />
      </div>
      <p className='text-sm italic text-gray-600'>{review}</p>
    </div>
  )
}