import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import Login from "./Login";
import type { Router } from "../types/Router";
import renderRoute from "./Route"; 
import type { Product } from "../types/Product";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Dashboard = () => { 

    const token = AuthService.getToken();

    if (!token) return < Login/> 

    const [products,useProducts] = useState<Product[]>([]); 
    
    const loadProducts = async () => 
    {        
        try {
        const res = await fetch(`${baseUrl}/api/products`);
        const data = await res.json() 
        useProducts(data) 
        } catch (error) {
           console.log("Err:", error); 
        }
    }

    useEffect(() => {
        loadProducts()
    },[])    

    const [parameter,setParameter] = useState<Router>({"path":"","id":null}); 

    const navigate = (router:Router) => {
        setParameter({"path":router.path,"id":router.id});   
    } 

    if (parameter.path === "/edit/") {
        return renderRoute(parameter)
    } 

    return (<> 
      <h3>Dashboard</h3>
      {products && products.map((p) => (
        <div key={p.id}>{p.title} --- {p.id}<button onClick={() => navigate({"path":'/edit/',"id":p.id})}>click</button></div>
        ))}   
    </>)
} 

export default Dashboard; 