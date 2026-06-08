import AddProduct from "../components/AddProduct";
import { UseStoreProduct } from "../hooks/UseStoreProduct";

const AddProductPage = () => { 

    const submit = UseStoreProduct(); 

 return (<> {<AddProduct {...submit}  /> }
     </>)

}

export default AddProductPage;