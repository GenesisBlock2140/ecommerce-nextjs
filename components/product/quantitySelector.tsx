"use client"
import { FC, useEffect, useState } from 'react'

interface IQuantitySelector {
  getQuantity: (quantity:number) => void
}

export const QuantitySelector: FC<IQuantitySelector> = ({ getQuantity }) => {

  const [quantity, setQuantity] = useState<number>(1)

  // Send quantity value to parent comp
  useEffect(() => {
    getQuantity(quantity)
  }, [quantity])

  const removeQuantity = () => {
    if (quantity !== 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const addQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  return (
    <div className='w-[120px] h-10 flex justify-around items-center text-center border border-gray-400 cursor-pointer select-none'>
      <div className='w-full' onClick={removeQuantity}> - </div>
      <div className='w-full border-l border-r border-gray-400 h-full flex items-center justify-center'>
        { quantity }
      </div>
      <div className='w-full' onClick={addQuantity}> + </div>
    </div>
  )
}