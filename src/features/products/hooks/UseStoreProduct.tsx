import { useState } from "react";
import { storeProducts } from "../api/ProductsApi";

export function UseStoreProduct(){

    const [product,setProduct] = useState({title:'',image:null}); 

    const handleInputChange = (e:any) => { 
        const {name, value, type, files} = e.target; 

        setProduct({
            ...product, 
            [name]:type === 'file' && files ? files[0] : value 
        })
    } 

    const submit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();  
        const res = new FormData; 
        res.append("title", product.title); 
        res.append("image", product.image ?? ''); 

        try {
            const data = await storeProducts(res); 
            console.log("Server Response:", data);
        } catch (err) {
            console.log("Err:", err);
        }       
    } 

    return {submit,handleInputChange}
}