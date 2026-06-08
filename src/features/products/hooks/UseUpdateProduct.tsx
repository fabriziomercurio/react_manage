import { useState } from "react";
import type { ProductRegister } from "../../../types/Product";
import { getProduct, updateProduct } from "../api/ProductsApi";

export function UseUpdateProduct(id:any){ 

    const [product,setUpdateProduct] = useState<ProductRegister>({title:'',image:null}); 

    async function fetchProduct(id: any){
        const data = await getProduct(id);
        console.log(data.result); 
        setUpdateProduct(data.result);
    };

    const handleInputChange = (e:any) => { 
        const {name, value, type, files} = e.target; 
        setUpdateProduct((prev)=>({
            ...prev, 
            [name]:type === 'file' && files ? files[0] : value 
        }))      
    } 

    const submit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        console.log(product.title) 
        const res = new FormData; 
        res.append("title", product.title); 
        res.append("image", product.image ?? ''); 

        try {
            const data = await updateProduct(id,res); 
            console.log("Server Response:", data);
        } catch (err) {
            console.log("Err:", err);
        }
    }
  
    return {
        submit,handleInputChange,fetchProduct,product
    }
}