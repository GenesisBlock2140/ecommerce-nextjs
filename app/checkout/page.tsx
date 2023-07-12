import { Shell } from "@/components/shell";
import { CheckoutBox } from "@/components/checkout/checkoutBox";
import { CheckoutTotal } from "@/components/checkout/checkout-total";
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Brocante - Finaliser vos achats",
  description: "Brocante est un site de brocante en ligne vous proposant une multitude d'objets uniques et vintages.",
  icons: {
    icon: "favicon.ico"
  }
}

export default function Checkout() {

  return (
    <Shell className="px-2">
      <h1 className="text-xl lg:text-2xl font-semibold my-10">Votre panier</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <CheckoutBox />
        <CheckoutTotal />
      </div>
      <div className="lg:mb-[250px]"/>
    </Shell>
  )
}