import { useEffect } from 'react';
import './App.css'
import { Logout } from './features/auth/api/Logout';
import Navbar from './features/navbar/components/Navbar';
import { useRoute } from './features/navbar/hooks/UseRoute';
import ProductPage from './features/products/pages/ProductsPage';
import Login from './features/users/components/Login';
import { useLogin } from './features/users/hooks/UseLogin';
import AddProductPage from './features/products/pages/AddProductPage';
import RegisterPage from './features/users/pages/RegisterPage';
import EditProductPage from './features/products/pages/EditProductPage';

function App() { 

const {navigate, parameter} = useRoute();  
const { submitLogin, handleInputChange, error } = useLogin();

useEffect(() => {
    if (parameter.path === "/logout") {
        Logout(navigate);
    }
}, [parameter.path]);

  return (
    <> 
    <Navbar navigate={navigate}  />

    {parameter.path === "/login" && (
                <Login
                    submitLogin={submitLogin}
                    handleInputChange={handleInputChange}
                    error={error}
                />
            )}

    {parameter.path === "/products" && <ProductPage />} 

    {parameter.path === "/product-store" && <AddProductPage />} 

    {parameter.path === "/register" && <RegisterPage />} 

     {parameter.path === "/edit/" && (
                <EditProductPage
                    id={parameter.id}
                />
            )}
    </>
  )
}

export default App
