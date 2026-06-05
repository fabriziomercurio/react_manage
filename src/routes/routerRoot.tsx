import Login from "../components/Login";
import EditProduct from "../components/products/EditProduct";
import Register from "../features/products/components/register";
import { useRoute } from "../features/products/hooks/useRoute";
import ProductPage from "../features/products/pages/productsPage";
import RegisterPage from "../features/products/pages/registerPage";

export default function RouterRoot() {
    const { parameter } = useRoute();

    if (parameter.path === "/edit/") {
        return <EditProduct id={parameter.id} />;
    } 

    if (parameter.path === "/login/") {
        return <Login />;
    } 

    if (parameter.path === "/register/") {
        return <RegisterPage />;
    } 

    if (parameter.path === "/products/") {
        return <ProductPage />;
    }

   return <ProductPage />;
}