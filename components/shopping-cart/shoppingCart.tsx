import Image from "next/image";
import { FC, Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { CartItems } from "./cartItems";
import { CartTotal } from "./cartTotal";
import { CartEmpty } from "./cartEmpty";
import { useAppSelector } from "@/redux/store";

interface IShoppingCart {
  isCartOpen: boolean
  setIsCartOpen: Dispatch<SetStateAction<boolean>>
}

export const ShoppingCart: FC<IShoppingCart> = ({isCartOpen, setIsCartOpen}) => {

  const [closeCartAnimate, setCloseCartAnimate] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const itemInCart = useAppSelector((state) => state.cartReducer.cart)

  const getTotalPrice = ():number => {
    let total = 0
    itemInCart.map(item => {
      total+= item.quantity * item.product.price
    })
    return total
  }

  const toggleAnim = () => {
    if (!hasOpened) {
      setCloseCartAnimate(true)
      setHasOpened(true)
      setTimeout(() => {
        setIsCartOpen(old => !old)
      }, 600)
    }
  }

  return (
    <>
      <div className="w-full h-full bg-[#00000080] fixed top-0 left-0 z-20" onClick={toggleAnim}>
      </div>
      <div className={`w-[350px] h-[100vh] fixed top-0 ${isCartOpen ? 'slide-left-cart' : ''} ${closeCartAnimate ? 'slide-right-cart' : ''} right-[-350px] bg-white z-30`}>
        <div className="w-full flex items-center justify-around border-b border-[#d6d6d6] h-20">
          <p className="text-lg">Votre panier</p>
          <button onClick={toggleAnim}>
            <Image src={'/svg/close.svg'} alt="close" width={20} height={20} />
          </button>
        </div>
        <div className="w-full h-[85vh] flex flex-col justify-between items-center mt-4">
          <div>
            {itemInCart.length === 0 
            ? <CartEmpty /> 
            : itemInCart.map((item, index) =>
              <CartItems 
                quantity={item.quantity} 
                name={item.product.name}
                unitPrice={item.product.price}
                img={item.product.picture}
                key={index}
              />
              )
            }
            {itemInCart.length !== 0 && <CartTotal total={getTotalPrice()} />}
          </div>
          <div className="text-center">
            <Button text="Checkout" size="big" to="/checkout" />
          </div>
        </div>
      </div>
    </>
  )
}