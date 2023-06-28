import { Button } from "@/components/ui/button";
import { CheckoutItems } from "@/components/checkout/checkoutItems";
import { Shell } from "@/components/shell";
import { CheckoutEmpty } from "@/components/checkout/checkout-empty";

export default function Checkout() {
  return (
    <Shell className="px-2">
      <h1 className="text-xl lg:text-2xl font-semibold my-10">Votre panier (2)</h1>
      <CheckoutEmpty />
      <div className="lg:flex justify-between gap-10">
        <div className="w-full max-w-[750px] text-sm lg:text-base">
          <CheckoutItems name="Lampe flexible réflecteur aluminium" price={119.99} quantity={1} image={'/product/lampe/lampe-luminorex.png'} />
          <CheckoutItems name="Lampe de bureau vintage Luminorex bordeaux" price={149} quantity={1} image={'/product/lampe/lampe-luminorex.png'} />
        </div>
        <div className="w-full sm:w-[350px] h-[250px] px-4 py-8 mx-auto bg-gray-100 rounded">
          <p className="text-xl font-semibold mb-4">Total du panier</p>
          <div className="flex justify-between my-2">
            <p>Sous total</p>
            <p className="font-semibold">145 €</p>
          </div>
          <div className="flex justify-between my-2">
            <p>Frais de livraison</p>
            <p className="font-semibold">4.99 €</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Total</p>
            <p className="font-semibold">149.99 €</p>
          </div>
          <Button text="Paiement 🛒" size="big" to="/checkout" />
        </div>
      </div>
      
    </Shell>
  )
}