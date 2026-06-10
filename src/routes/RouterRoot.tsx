import { useRoute } from "../features/navbar/hooks/UseRoute";
import LoginPage from "../features/users/pages/LoginPage";
import ProductPage from "../features/products/pages/ProductsPage";
import RegisterPage from "../features/users/pages/RegisterPage";
import AddProductPage from "../features/products/pages/AddProductPage";
import EditProductPage from "../features/products/pages/EditProductPage";
import { AuthService } from "../services/AuthService";

export default function RouterRoot() {
    
    const { parameter } = useRoute(); 

    const token = AuthService.getToken(); 

    if (parameter.path === "/edit/") {
        return <EditProductPage id={parameter.id}/> 
    }

    if (parameter.path === "/login/") {
        return <LoginPage />;
    } 

    if (parameter.path === "/register/") {
        return <RegisterPage />;
    }

    if (parameter.path === "/products/" && token) {
        return <ProductPage />;
    } 

    if (parameter.path === "/product-store/") {
        return <AddProductPage /> 
    }

   return <LoginPage />;
}