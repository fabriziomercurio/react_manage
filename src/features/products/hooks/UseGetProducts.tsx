import { useState } from "react";
import { getProducts } from "../api/ProductsApi"; 
import type { Product } from "../../../types/Product";

export function useGetProducts(){ 

   const [products,setProducts] = useState<Product[]>([]); 

   async function fetchProducts()
   {
       const response = await getProducts(); 
       setProducts(response.data); 
   } 

   return {products,fetchProducts}
} 

