import { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface IButton {
  text: string
  size: string
  className?: string
  to?: string
  action?: () => void
}

interface ButtonStyle {
  base: string
  size: {
    normal: string
    big: string
    fit: string
    [key: string]: string
  }
}

export const Button: FC<IButton> = ({ className, text, size, action, to }) => {

  const styles:ButtonStyle = {
    base: 'bg-[#373737] h-10 text-medium text-white text-base rounded-lg',
    size: {
      normal: "w-[170px]",
      big: "w-[200px]",
      fit: "w-fit"
    }
  }

  const ButtonElement = (
    <button 
    className={clsx([styles.base,
    size && styles.size[size]],
    className && className)}
    onClick={action}
    >
      { text }
    </button>
  )

  if (!to){
    return (
      ButtonElement
    )
  }

  return (
    <Link href={to}>
      {ButtonElement}
    </Link>
  )
}