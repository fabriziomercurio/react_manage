import Login from "./Login"; 
import Register from "./Register";
import Dashboard from "./Dashboard";
import AddProduct from "./products/AddProduct";

const renderRoute = (route:string) => {
    switch (route) {
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
      default:
        return 'notfound';
    }
  }; 

export default renderRoute;  