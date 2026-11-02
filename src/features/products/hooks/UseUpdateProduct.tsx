import { useEffect, useState } from "react";
import { DeleteRecord, getProduct, updateProduct } from "../api/ProductsApi";
const staticUrl = import.meta.env.VITE_STATIC_URL;

export function UseUpdateProduct(id:any){ 

    const [product,setUpdateProduct] = useState({title:'',images:[] as (File | null)[],name:'',removeImage:false});
    const [size,setSize] = useState<string[]>([]); 

    const [slots,setSlots] = useState<number[]>([]);

    async function fetchProduct(id: any){

    const data = await getProduct(id);
    
    if (data.sizes) {
       setSize(data.sizes[1]); 
    }  

    if (data.result.length > 0 && data.result[0]?.slot !== undefined) {
        let slotArray = data.result.map((element: any) => Number(element.slot));

        const maxSlot = Math.max(...slotArray);

        // 3. Creiamo l'array normalizzato con i buchi riempiti da null
        const normalized = Array(maxSlot + 1).fill(null); 

        data.result.forEach(({ name, slot, created_at }: any) => {
            normalized[slot] = { name, slot, created_at };
        });

        setUpdateProduct({
            title: data.result[0]?.title,
            images: normalized,
            name: data.result[0]?.name,
            removeImage: false
        });
    }else{
        setUpdateProduct({
            title: data.result[0]?.title,
            images: [null],
            name: data.result[0]?.name,
            removeImage: false
        });
      }
    }; 

    useEffect(() => { 
        fetchProduct(id)             
    },[id]) 

    useEffect(() => { 
      console.log("Product state updated:", product); 
    },[product])

    const handleInputChange = (e:any) => {
    const { name, value, type, files, dataset } = e.target;

    // if (type === "file" && files) {

    //     setUpdateProduct((prev) => { 
    //         const index = Number(dataset.index);
    //         const images = [...prev.images];
    //         while (images.length <= index) {
    //             images.push(null);
    //         }
    //         images[index] = files[0];  
    //         return { ...prev, images }; // If you choose a new file, removeImage automatically reverts to false
    //     });
    // }else{
    //     setUpdateProduct((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }))
    //  }  



    if (type === "file" && files) {
    const index = Number(dataset.index);
        setUpdateProduct((prev) => { 
            
            const images = [...prev.images];
            while (images.length <= index) {
                images.push(null);
            }
            images[index] = files[0];  
            return { ...prev, images }; // If you choose a new file, removeImage automatically reverts to false
        }); 

        setSlots((prev) => {
        if (prev.includes(index)) {
            return prev;
        }

        return [...prev, index];
    }); 

    }else{
        setUpdateProduct((prev) => ({
        ...prev,
        [name]: value,
      }))
     }
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
        e.preventDefault(); 

        const res = new FormData; 
        res.append("title", product.title); 
     
        product.images.forEach((image, index) => {
            if (image) { 
                res.append("image", image) 
            }
        });

        slots.forEach((slot) => {
            res.append("slot", String(slot));
        });

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