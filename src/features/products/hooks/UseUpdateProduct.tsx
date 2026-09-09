import { useState } from "react";
import type { ProductUpdate } from "../../../types/Product";
import { DeleteRecord, getProduct, updateProduct } from "../api/ProductsApi";
const staticUrl = import.meta.env.VITE_STATIC_URL;

export function UseUpdateProduct(id:any){ 

    const [product,setUpdateProduct] = useState<ProductUpdate>({title:'',image:null,name:'',removeImage:false});  
    const [size,setSize] = useState<string[]>([]);

    async function fetchProduct(id: any){
        const data = await getProduct(id);
        if (data.sizes) {
           setSize(data.sizes[1]); 
        }        
       
        setUpdateProduct(data.result);
    };

    const handleInputChange = (e:any) => {
    const { name, value, type, files } = e.target;

    setUpdateProduct((prev) => ({
        ...prev,
        [name]: type === 'file' && files ? files[0] : value,
        removeImage: type === 'file' && files ? false : prev.removeImage // If you choose a new file, removeimage automatically reverts to false
    }));
}

    const handleDeleteImage = (e:any) => {
       e.preventDefault(); 
       setUpdateProduct((prev) => ({
        ...prev,
        removeImage: true
        }));
    }

    const handleDeleteRecord = async (e:any) => {
        e.preventDefault(); 
        try {
            const data = await DeleteRecord(id); 
            console.log(data); 
          
        } catch (error) {
            console.log(error);
        }
    }

    const submitUpdate = async (e: React.FormEvent<HTMLFormElement>) => { 
        console.log(product); 
        e.preventDefault(); 

        const res = new FormData; 
        res.append("title", product.title); 
        res.append("image", product.image ?? ''); 
        res.append("removeImage", String(product.removeImage));

        try {
            const data = await updateProduct(id,res); 
            console.log("Server Response:", data);
        } catch (err) {
            console.log("Err:", err);
        }  
    }
  
    return {
        submitUpdate,handleInputChange,fetchProduct,product,staticUrl,size,handleDeleteRecord,handleDeleteImage
    }
}