import { FC } from "react"

export const Footer: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto border-t border-[#e8e8e8] mt-20">
      <div className="flex flex-wrap justify-around items-center text-center my-10">
        <div className="text-sm">
          <p className="text-lg font-semibold uppercase mb-2">à propos</p>
          <p>Qui sommes nous ?</p>
          <p>Recrutement</p>
          <p>Mentions légales</p>
        </div>
        <div className="text-sm">
          <p className="text-lg font-semibold uppercase mb-2">acheteur</p>
          <p>Créer un compte</p>
          <p>Frais de livraison</p>
          <p>Carte cadeau</p>
        </div>
        <div className="text-sm">
          <p className="text-lg font-semibold uppercase mb-2">contact</p>
          <p>Nous contacter</p>
          <p>Contact presse</p>
          <p>Aide vendeur</p>
        </div>
      </div>
      <p className="text-center text-sm">
        © 2023 Brocbroc, open source
        <a href="https://github.com/GenesisBlock2140/ecommerce-nextjs" target="_blank"> github</a>  
      </p>
    </div>
  )
}