import { useEffect, useState } from "react";
import { storeProducts } from "../api/ProductsApi";

export function UseStoreProduct(){

    const [product, setProduct] = useState({title:"",images:[] as (File | null)[]})

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
        let {name, value, type, files, dataset} = e.target     

        if (type === "file" && files) {
            setProduct(prev => { 
            const index = Number(dataset.index);
            const images = [...prev.images];             
            
            while (images.length <= index) {
                images.push(null)
            }

            images[index] = files[0];  
           
            return {...prev, images}
          }); 
        }else{
            setProduct(prev => ({
                ...prev,
                [name]:value
            })) 
            
        }
   } 

    const submit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();  
        const res = new FormData;       
        res.append("title", product.title); 
        
        product.images.forEach(image => {        
            if (image) {
                res.append("image",image);
           }                    
        })

        try {
            const data = await storeProducts(res); 
            console.log("Server Response:", data);
        } catch (err) {
            console.log("Err:", err);
        }       
    } 

    return {submit,handleInputChange}
}