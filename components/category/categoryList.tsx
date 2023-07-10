"use client"

import { FC, useEffect, useState } from "react"
import { ProductList } from "@/components/product/productList"
import { ProductCard } from "@/components/product/productCard"
import { productUrlFormat } from "@/utils/urlFormat"
import { removeAccents } from "@/utils/removeAccents"
import { Product } from "@/types/product"
import Image from "next/image"
import Plus from '@/public/svg/plus.svg'

interface ICategoryList {
  data: Product[]
}

export const CategoryList: FC<ICategoryList> = ({ data }) => {

  const [dataFiltered, setDataFiltered] = useState(data);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsFilterOpen(true)
    } else {
      setIsFilterOpen(false)
    }
  }, [])

  const bestRated = () => {
    setDataFiltered(dataFiltered => [...dataFiltered].sort((a, b) => b.rating - a.rating));
  }

  const filterByRisingPrice = () => {
    setDataFiltered(dataFiltered => [...dataFiltered].sort((a, b) => a.price - b.price));
  }

  const filterByDecreasingPrice = () => {
    setDataFiltered(dataFiltered => [...dataFiltered].sort((a, b) => b.price - a.price));
  }

  const cleanFilter = () => {
    setDataFiltered([...data]);
  }

  return (
    <>
      <div className="lg:flex flex-row">
        <div className="flex flex-col w-full lg:w-[300px] space-y-2">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsFilterOpen(old => !old)}>
            <p className="text-xl font-semibold">Filtre</p>
            <Image src={Plus} alt="plus" width={20} height={20} className="cursor-pointer" />
          </div>
          <hr />
          <div className={`${isFilterOpen ? 'flex' : 'hidden'} flex-col space-y-2`}>
            <p className="w-fit cursor-pointer" onClick={bestRated}>Mieux notés</p>
            <p className="w-fit cursor-pointer" onClick={filterByRisingPrice}>Prix croissant</p>
            <p className="w-fit cursor-pointer" onClick={filterByDecreasingPrice}>Prix decroissant</p>
            <p className="w-fit cursor-pointer text-sm pt-4" onClick={cleanFilter}>X Supprimer les filtres</p>
          </div>
        </div>
        <div className="w-full">
          <ProductList>
          {dataFiltered.map((item, index) => {
            return <ProductCard 
              title={item.name} 
              price={item.price} 
              picture={item.picture} 
              productId={productUrlFormat(removeAccents(item.name))} 
              size={250} 
              height={320} 
              key={index} 
              />
          })}
        </ProductList>
        </div>
      </div>
    </>
  )
}