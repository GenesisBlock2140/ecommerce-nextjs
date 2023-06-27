import Link from "next/link";
import { FC } from "react";

interface Item {
  link: string
  name: string
}

interface IBreadcrumbTrail {
  fil: Item[]
}

export const BreadcrumbTrail: FC<IBreadcrumbTrail> = ({ fil }) => {
  return (
    <div className="flex items-center gap-2 h-[60px] text-sm text-gray-700">
      <Link href={"/"}>Accueil</Link>
      <span> {">"} </span>
      {fil.map((item, index) => {
        return (
        <>
          <Link href={item.link}>{item.name}</Link>
          {(index+1) !== fil.length && <span> {">"} </span>}
        </>
        )
      })}
    </div>
  )
}