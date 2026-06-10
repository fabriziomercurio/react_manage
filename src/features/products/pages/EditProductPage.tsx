import { useEffect } from "react";
import EditProduct from "../components/EditProduct";
import { UseUpdateProduct } from "../hooks/UseUpdateProduct";

const EditProductPage = ({id}: {id?:number|null}) => 
{   
    const {submitUpdate,handleInputChange,fetchProduct,product,staticUrl,size,handleDeleteRecord,handleDeleteImage} = UseUpdateProduct(id); 

    useEffect(() => { 
            fetchProduct(id) 
        },[id]) 

    return(
        <>
        <EditProduct submit={submitUpdate} handleInputChange={handleInputChange} 
        product={product} url={staticUrl} size={size} 
        delete={handleDeleteRecord} deleteImage={handleDeleteImage} /> 
        </>
    )
}

export default EditProductPage; 