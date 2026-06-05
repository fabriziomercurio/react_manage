import Login from "./Login"; 
import Register from "./Register";
import Dashboard from "./Dashboard";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";

import ProductPage from "../features/products/pages/ProductsPage.js";

import type { Router } from '../types/Router';

const renderRoute = (route:Router) => { 
  if(route.path === '/edit/') 
  {
    return <EditProduct id={route.id} />
  }
    switch (route.path) {
      case "/":
        return 'home';
      case "/about":
        return 'about';
      case "/login": 
        return <Login />; 
      case "/register": 
        return <Register />
      case "/dashboard": 
        return <Dashboard />; 
      case "/add-product": 
        return <AddProduct /> 
      
      case "/products": 
        return <ProductPage /> 

      default:
        return 'notfound';
    }
  }; 

export default renderRoute;  