import { useEffect } from "react";
import { useProducts } from "../hooks/UseProduct";
import ProductList from "../components/ProductList";
import {useRoute} from "../../navbar/hooks/UseRoute"; 

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