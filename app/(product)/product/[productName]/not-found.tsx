import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <Shell className="px-2">
      <div className="h-[600px] flex flex-wrap items-center justify-between">
        <Image src={'/404_2.jpg'} alt="404" width={500} height={500} />
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="text-2xl font-semibold">Tu es perdu ? 👀</h1>
          <p>Il semblerait que cette page n'existe pas ...</p>
          <Button text="Retour à l'accueil" size="big" to="/" />
        </div>
      </div>
    </Shell>
  )
}