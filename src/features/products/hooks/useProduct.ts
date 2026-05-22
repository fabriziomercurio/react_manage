import { useState } from "react";
import { getProducts } from "../api/productsApi"; 
import type { Product } from "../../../types/Product";


export function useProducts(){ 

   const [products,setProducts] = useState<Product[]>([]); 

   async function fetchProducts()
   {
       const data = await getProducts(); 
       setProducts(data); 
   } 

   return {products,fetchProducts}
} 

