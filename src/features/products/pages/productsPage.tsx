import { useEffect } from "react";
import { useProducts } from "../hooks/useProduct";
import ProductList from "../components/productList";

const ProductPage = () => { 

    const {products, fetchProducts} = useProducts();
   
    useEffect(() => {
        fetchProducts()
    },[])

    return (<>
        <ProductList products={products} />
    </>)

}

export default ProductPage;