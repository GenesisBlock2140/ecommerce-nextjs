import { Product } from "@/types/product";
import productData from '@/data/product.json'
import { removeAccents } from "@/utils/removeAccents";
import { removeUrlFormat } from "@/utils/removeUrlFormat";

type ProductCategories = {
  [category: string]: Product[];
};

export function getProductByName(name: string, data: ProductCategories = productData) {
  const products: Product[] = []
  name = removeUrlFormat(name)

  for (const category in data) {
    const categoryProducts = data[category]
    const matchingProducts = categoryProducts.filter((product) =>
      removeAccents(product.name).toLowerCase().includes(name.toLowerCase())
    );
    products.push(...matchingProducts)
  }

  return products
}
