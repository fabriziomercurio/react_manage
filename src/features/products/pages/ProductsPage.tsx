import { useEffect } from "react";
import { useGetProducts } from "../hooks/UseGetProducts";
import ProductList from "../components/ProductList";
import {useRoute} from "../../navbar/hooks/UseRoute"; 

const ProductPage = () => { 

    const {products, fetchProducts} = useGetProducts(); 
    const {navigate} = useRoute();
   
    useEffect(() => {
        fetchProducts() 
    },[]) 

    return (<> 
        { <ProductList products={products} navigate={navigate} />} 
    </>)

}

export default ProductPage;