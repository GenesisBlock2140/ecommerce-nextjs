import { Shell } from "@/components/shell";
import Image from "next/image";
import mapPin from '@/public/svg/mapPin.svg'
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Shell className="px-2">
      <div className="flex flex-col justify-center items-center text-center h-[70vh]">
        <Image src={mapPin} alt="mapPin" width={60} height={60} className="mb-4" />
        <h1 className="text-xl font-semibold">Cette catégorie n'existe pas...</h1>
        <p className="text-sm">Tu sembles perdu, peut être une erreur de click ?</p>
        <Button 
          text="Visiter les catégories" 
          size="big" 
          to="/category" 
          className="mt-4"
        />
      </div>
    </Shell>
  )
}