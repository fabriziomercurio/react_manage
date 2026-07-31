import { useRoute } from "../features/navbar/hooks/UseRoute";
import LoginPage from "../features/users/pages/LoginPage";
import ProductPage from "../features/products/pages/ProductsPage";
import RegisterPage from "../features/users/pages/RegisterPage";
import AddProductPage from "../features/products/pages/AddProductPage";
import EditProductPage from "../features/products/pages/EditProductPage";
import { AuthService } from "../services/AuthService";
import LogoutPage from "../features/products/pages/LogoutPage";

export default function RouterRoot() {
    
    const { parameter } = useRoute(); 

    const token = AuthService.getAccessToken(); 

    if (parameter.path === "/login/") {
        return <LoginPage />;
    } 

    if (parameter.path === "/edit/" && token) {
        return <EditProductPage id={parameter.id}/> 
    }    

    if (parameter.path === "/register/") {
        return <RegisterPage />;
    }

    if (parameter.path === "/products/" && token) {
        return <ProductPage />;
    } 

    if (parameter.path === "/product-store/" && token) {
        return <AddProductPage /> 
    } 

    if (parameter.path === "/logout/" && token) {
        return <LogoutPage /> 
    }

   return <LoginPage />;
}