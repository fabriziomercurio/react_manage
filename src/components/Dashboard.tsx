import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import Login from "./Login";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Dashboard = () => { 
    type Product = {
    id: number;
    title: string;
    created: string;
    };

    // const token = localStorage.getItem('token');    
    const token = AuthService.getToken();
    if (!token) return < Login/> 

    const [products,useProducts] = useState<Product[]>([]); 
    
    const loadProducts = async () => 
    {        
        try {
        const res = await fetch(`${baseUrl}/products`);
        const data = await res.json() 
        useProducts(data) 
        } catch (error) {
           console.log("Err:", error); 
        }
    }

    useEffect(() => {
        loadProducts()
    },[])

    return (<> 
      <h3>Dashboard</h3>
      {products && products.map((p) => (
        <div key={p.id}>{p.title}</div>
        ))}    
    </>)
} 

export default Dashboard; 