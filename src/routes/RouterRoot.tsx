import EditProduct from "../components/products/EditProduct";
import { useRoute } from "../features/navbar/hooks/UseRoute";
import LoginPage from "../features/users/pages/LoginPage";
import ProductPage from "../features/products/pages/ProductsPage";
import RegisterPage from "../features/users/pages/RegisterPage";
import AddProductPage from "../features/products/pages/AddProductPage";
import EditProductPage from "../features/products/pages/EditProductPage";

export default function RouterRoot() {
    const { parameter } = useRoute();

    if (parameter.path === "/edit/") {
        return <EditProduct id={parameter.id} />;
    } 

    if (parameter.path === "/edit-new/") {
        return <EditProductPage id={parameter.id}/> 
    }

    if (parameter.path === "/login/") {
        return <LoginPage />;
    } 

    if (parameter.path === "/register/") {
        return <RegisterPage />;
    } 

    if (parameter.path === "/products/") {
        return <ProductPage />;
    } 

    if (parameter.path === "/product-store/") {
        return <AddProductPage /> 
    }

   return <ProductPage />;
}