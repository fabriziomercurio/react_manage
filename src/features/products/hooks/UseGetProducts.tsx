import { useState } from "react";
import { getProducts } from "../api/ProductsApi"; 
import type { Product } from "../../../types/Product";

export function useGetProducts(){ 

   const [products,setProducts] = useState<Product[]>([]); 

   async function fetchProducts()
   {      
       try {

       const response = await getProducts(); 
       setProducts(response.data);

       } catch (error) {
           if (error instanceof Error && error.message === 'UNAUTHORIZED') {
               
               window.location.href = '/login'; 
           }
       }
   } 

   return {products,fetchProducts}
} 

