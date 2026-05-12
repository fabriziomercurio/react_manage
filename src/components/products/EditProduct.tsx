import { useEffect, useState } from "react" 
import type { Product } from "../../types/Product";
const baseUrl = import.meta.env.VITE_BASE_URL;

const EditProduct = ({id}: {id?:number|null}) => { 
  
    const [product,setProduct] = useState<Product>({'id': 0,'title': '','name':'','imageId':null,'created':''}); 
    const [size,setSize] = useState<string[]>([]);
    const [error,setError] = useState<string>('');
   
     const loadProducts = async () => {
          
      try { 
          const res = await fetch(`${baseUrl}/api/products/${id}`); 

          const data = await res.json();
          
          if (!res.ok) {
             setError(data.message)
          } 

          setProduct(data.result)
          setSize(data.sizes)
      } catch (error) {
          console.log(error)
      }
    } 

    useEffect(() => {
       loadProducts() 
    }, []) 

    return (
    <div> 
        {error && (<>
           <h3>{error}</h3>
        </>)}
        {product && (
        <>
            <h2>{product.name}</h2>
            <div>
                <img src={`${baseUrl}/${product.created}/${size[1]}/${product.name}`} alt=""  style={{width: '50%'}}/> 
            </div>
        </>
        )}
    </div>
);
}
export default EditProduct