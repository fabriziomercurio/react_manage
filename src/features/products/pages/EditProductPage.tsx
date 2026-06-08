import { useEffect } from "react";
import EditProduct from "../components/EditProduct";
import { UseUpdateProduct } from "../hooks/UseUpdateProduct";

const EditProductPage = ({id}: {id?:number|null}) => 
{   
    const {submit,handleInputChange,fetchProduct,product} = UseUpdateProduct(id); 

    useEffect(() => { 
            fetchProduct(id) 
        },[id]) 

    return(
        <>
        <EditProduct submit={submit} handleInputChange={handleInputChange} product={product}/> 
        </>
    )
}

export default EditProductPage; 