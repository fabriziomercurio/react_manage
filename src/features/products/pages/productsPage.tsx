import { useEffect } from "react";
import { useProducts } from "../hooks/useProduct";
import ProductList from "../components/productList";
import {useRoute} from "../hooks/useRoute"; 

const ProductPage = () => { 

    const {products, fetchProducts} = useProducts(); 
    const {navigate} = useRoute();
   
    useEffect(() => {
        fetchProducts() 
    },[]) 

    return (<> 
        { <ProductList products={products} navigate={navigate} />} 
    </>)

}

export default ProductPage;