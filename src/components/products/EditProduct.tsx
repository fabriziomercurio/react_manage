import { useEffect, useState } from "react" 
import type { Product } from "../../types/Product";
const baseUrl = import.meta.env.VITE_BASE_URL;

const EditProduct = ({id}: {id?:number|null}) => { 
  
    const [product,setProduct] = useState<Omit<Product, "created">>({'id': 0,'title': ''}); 
   
     const loadProducts = async () => {
          
      try { 
          const res = await fetch(`${baseUrl}/products/${id}`); 
          const data = await res.json(); 
          setProduct(data) 
      } catch (error) {
          console.log(error)
      }
    } 

    useEffect(() => {
       loadProducts() 
    }, []) 

    return(<>        
       { product.id } { product.title }     
    </>) 
}
export default EditProduct