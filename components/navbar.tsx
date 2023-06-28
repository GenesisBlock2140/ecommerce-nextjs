"use client"
import Image from 'next/image';
import { FC, useState } from 'react';
import shopSvg from '@/public/svg/shop.svg'
import Link from 'next/link';
import { ShoppingCart } from './shopping-cart/shoppingCart';
import { LoginModal } from './login/loginModal';

export const Navbar: FC = () => {

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <nav className="max-w-[1200px] mx-auto bg-white h-20 flex items-center px-2 border-b border-[#e8e8e8]">
      <div className="flex items-center justify-between w-full">
        <Link href={'/'} className="text-black font-medium text-xl">
          Brocante
        </Link>
        <div className='flex items-center text-sm gap-4 lg:gap-8'>
          <Link href={'/category'}>
            Catégories
          </Link>
          <button className='bg-[#373737] text-white rounded p-2' onClick={() => setIsLoginModalOpen(old => !old)}>
            Se connecter
          </button>
          <Image src={shopSvg} alt='panier' className='cursor-pointer' onClick={() => setIsCartOpen(old => !old)} />
          {isCartOpen && <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
          {isLoginModalOpen && <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />}
        </div>
      </div>
    </nav>
  )
}