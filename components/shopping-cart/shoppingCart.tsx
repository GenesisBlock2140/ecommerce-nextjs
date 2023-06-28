import Image from "next/image";
import { FC, Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { CartItems } from "./cartItems";
import { CartTotal } from "./cartTotal";

interface IShoppingCart {
  isCartOpen: boolean
  setIsCartOpen: Dispatch<SetStateAction<boolean>>
}

export const ShoppingCart: FC<IShoppingCart> = ({isCartOpen, setIsCartOpen}) => {

  const [closeCartAnimate, setCloseCartAnimate] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const toggleAnim = () => {
    if (!hasOpened) {
      setCloseCartAnimate(true)
      setHasOpened(true)
      setTimeout(() => {
        setIsCartOpen(old => !old)
      }, 800)
    }
  }

  return (
    <>
      <div className="w-full h-full bg-[#00000080] fixed top-0 left-0" onClick={toggleAnim}>
      </div>
      <div className={`w-[350px] h-[100vh] fixed top-0 ${isCartOpen ? 'slide-left-cart' : ''} ${closeCartAnimate ? 'slide-right-cart' : ''} right-[-350px] bg-white`}>
        <div className="w-full flex items-center justify-around border-b border-[#d6d6d6] h-20">
          <p className="text-lg">Votre panier</p>
          <button onClick={toggleAnim}>
            <Image src={'/svg/close.svg'} alt="close" width={20} height={20} />
          </button>
        </div>
        <div className="w-full h-[85vh] flex flex-col justify-between items-center mt-4">
          <div>
            <CartItems 
              quantity={2} 
              name="Lampe en aluminium alumini iumc iumc iumcniumcc iumc"
              unitPrice={149.99}
              img="/product/lampe/lampe-alu.png"
            />
            <CartItems 
              quantity={1} 
              name="Lampe en aluminium alumini iumc iumc iumcniumcc iumc"
              unitPrice={49.99}
              img="/product/lampe/lampe-indus.png"
            />
            <CartTotal total={349.97} />
          </div>
          <div className="text-center">
            <Button text="Checkout" size="big" to="/checkout" />
          </div>
        </div>
      </div>
    </>
  )
}