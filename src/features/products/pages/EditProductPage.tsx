import EditProduct from "../components/EditProduct";
import { UseUpdateProduct } from "../hooks/UseUpdateProduct";

const EditProductPage = ({id}: {id?:number|null}) => 
{   
    const {submitUpdate,handleInputChange,product,staticUrl,size,handleDeleteRecord,handleDeleteImage} = UseUpdateProduct(id); 

    return(
        <>
        <EditProduct submit={submitUpdate} handleInputChange={handleInputChange} 
        product={product} url={staticUrl} size={size} 
        delete={handleDeleteRecord} deleteImage={handleDeleteImage} /> 
        </>
    )
}

export default EditProductPage; 