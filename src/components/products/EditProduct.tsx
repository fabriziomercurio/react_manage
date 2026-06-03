import React, { useEffect, useState } from "react" 
import type { Product } from "../../types/Product";
const baseUrl = import.meta.env.VITE_BASE_URL; 
const staticUrl = import.meta.env.VITE_STATIC_URL; 

const EditProduct = ({id}: {id?:number|null}) => { 
  
    const [product,setProduct] = useState<Product>({'id': 0,'title': '','name':'','imageId':null,'created_at':''}); 
    const [size,setSize] = useState<string[]>([]);
    const [error,setError] = useState<string>(''); 

    const [prodUpdate,setProdUpdate] = useState({'title': product.title, 'image': product.name, 'removeImage':false}); 

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value, files } = e.target;
        setProdUpdate({
            ...prodUpdate, 
            [name]: files?.[0] ? files?.[0] : value
        }) 
    }


    const handleDeleteImage = async () => {
        // setProdUpdate({
        //     ...prodUpdate, 
        //     removeImage:true
        // }) 
        setProdUpdate((prev) => ({
        ...prev,
        removeImage: true
        }));
    }

    const submitUpdateForm = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(prodUpdate.title); 
        try { 
          const form = new FormData(); 
          form.append("title", prodUpdate.title); 
          form.append("image", prodUpdate.image ?? ''); 
          form.append("removeImage",String(prodUpdate.removeImage));
          const data = await fetch(`${baseUrl}/product/${id}`, {
            method:'PUT', 
            body:form
          }); 

          
          console.log("removeImage:", prodUpdate.removeImage);

          const result = await data.json();          

          if (!data.ok) {
            setError(result.error);
            return; 
          }    
          
          console.log(result.message)
          console.log(prodUpdate.image)
         
        } catch (error) {
            console.log("Err:", error); 
        }
    }
   
     const loadProducts = async () => {
          
      try { 
          const res = await fetch(`${baseUrl}/products/${id}`); 

          const data = await res.json();
          
          if (!res.ok) {
             setError(data.message); 
             return;
          } 

          console.log(data.message)

          setProduct(data.result) 
          console.log(data.result)
            
          if (data.sizes) {
             setSize(data.sizes) 
          }          
        
          console.log(data)
      } catch (error) {
          console.log(error)
      }
    } 

    const handleDelete = async (e:any) => { 
        e.preventDefault();
        try {
            const res = await fetch(`${baseUrl}/product/${id}`,{
                method:"DELETE"
            }); 

            const result = await res.json(); 

            if (!res.ok) {
             setError(result.error); 
             console.log(result.error)
             return;
          } 

          console.log(result.message)
          
        } catch (error) {
            console.log(error);
        }
    } 

    

    useEffect(() => {
       loadProducts() 
    }, []) 

    useEffect(() => {
        if (product) {
            setProdUpdate({ title: product.title, image:product.name, removeImage:false }); 
        }
    }, [product]);

    return (
    <form onSubmit={submitUpdateForm}> 
        <label htmlFor="title">Title:</label><br /> 
        { product && 
           (<>
           <input type="text" name="title" value={prodUpdate.title} onChange={handleInputChange}  /><br />
           </>) 
        }
        
        {error && (<>
           <h3>{error}</h3>
        </>)}
        {product && (
         <>        
            {size.length > 0 && product?.name &&(
              <div><img src={`${staticUrl}/${product.created_at}/${size[1]}/${product.name}`} alt="" style={{width: '50%'}}/>
                <div onClick={handleDeleteImage}><button>remove image</button></div>
              </div>
          )}
         </>)} 
         <input type="file" name="image" onChange={handleInputChange}/>
         <button>update</button> 
         <button onClick={handleDelete}>delete</button>
    </form>);
}

export default EditProduct