"use client"
import { FC, useState } from "react"
import Image from "next/image"

import heart from '@/public/svg/heart.svg'
import heartFill from '@/public/svg/heartFill.svg'

export const AddToWishlist: FC = () => {

  const [inWishlist, setInWishlist] = useState<boolean>(false);

  return (
    <span className="absolute top-4 right-4">
      <Image 
        src={inWishlist ? heartFill : heart} 
        alt="fav" 
        width={30} 
        height={30} 
        className="cursor-pointer"
        onClick={() => setInWishlist(old => !old)}
      />
    </span>
  )
}