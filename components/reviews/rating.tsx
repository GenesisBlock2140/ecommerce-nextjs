import Image from 'next/image'
import { FC } from 'react'

import star from '@/public/svg/star.svg'
import starHalf from '@/public/svg/star-half.svg'
import starEmpty from '@/public/svg/star-empty.svg'

interface IRating {
  rating: number
  size?: number
}

export const Rating: FC<IRating> = ({ rating, size }) => {

  const getStarIcon = (value:number, index:number) => {
    if (value >= index + 1) {
      return <Image src={star} alt='star' width={size ? size : 30}/>
    } else if (value >= index + 0.5) {
      return <Image src={starHalf} alt='starHalf' width={size ? (size+2) : 30}/>
    } else {
      return <Image src={starEmpty} alt='starEmpty' width={size ? size : 30}/>
    }
  }

  const renderStars = (value:number) => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          {getStarIcon(value, i)}
        </span>
      )
    }
    return stars
  }

  return (
    <div className="flex items-center gap-2">
      {renderStars(rating)}
    </div>
  )
}