import { FC } from 'react'
import { Review } from './review'

interface Review {
  author: string
  rating: number
  review: string
}

interface IReviewList {
  reviews: Review[]
}

export const ReviewList: FC<IReviewList> = ({ reviews }) => {

  const globalRating = (reviews.reduce((total, current) => total + current.rating, 0)/reviews.length).toFixed(1)

  return (
    <div className='w-full mx-auto'>
      <div className='text-center sm:text-left my-8'>
        <p className='text-xl font-semibold'>{`Avis ${globalRating}/5`}</p>
        <p className='text-base mb-3'>{`${reviews.length} commentaires`}</p>
      </div>
      <div className='flex flex-wrap justify-center sm:justify-between gap-5'>
        {reviews.filter((val,i) => i < 3).map((rev,key) => {
          return <Review author={rev.author} rating={rev.rating} review={rev.review} key={key} />
        })}
      </div>
    </div>
  )
}