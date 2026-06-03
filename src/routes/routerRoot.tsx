import EditProduct from "../components/products/EditProduct";
import { useRoute } from "../features/products/hooks/useRoute";
import ProductPage from "../features/products/pages/productsPage";

export default function RouterRoot() {
    const { parameter, navigate } = useRoute();

    if (parameter.path === "/edit/") {
        return <EditProduct id={parameter.id} />;
    }

   return <ProductPage />;
}