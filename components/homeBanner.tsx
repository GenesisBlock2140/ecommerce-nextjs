import Link from "next/link"
import { FC } from "react"

export const HomeBanner: FC = () => {
  return (
    <div className="max-w-full h-[600px] bg-gray-400 flex items-center justify-center bg-[url('/background-vintage-black.png')]">
      <div className="w-[400px] flex flex-col justify-center items-center h-40 bg-white p-5 m-2">
        <h1 className="text-2xl uppercase font-semibold">Le monde du vintage</h1>
        <Link href={'/category'} className="underline">
          Visiter les catégories
        </Link>
      </div>
    </div>
  )
}