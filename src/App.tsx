import { useState } from 'react'
import renderRoute from './components/Route'; 
import type { Router } from './types/Router';
import './App.css'
import Navbar from './features/products/components/navbar';
import { useRoute } from './features/products/hooks/useRoute';

function App() { 

const [route,setRoute] = useState<Router>({"path":"","id":null}); 
const {navigate} = useRoute();  

// const navigate = (path:Router) => 
// {
//     setRoute(path); 
// }

  return (
    <> 
    <Navbar navigate={navigate}  />
    {/* <div>
      <nav>
        <button onClick={() => navigate({"path":'/'})}>home</button>
        <button onClick={() => navigate({"path":'/about'})}>about</button> 
        <button onClick={() => navigate({"path":'/register'})}>register</button>
        <button onClick={() => navigate({"path":'/add-product'})}>add product</button>
        <button onClick={() => navigate({"path":'/login'})}>login</button>
        <button onClick={() => navigate({"path":'/dashboard'})}>dashboard</button> 

        <button onClick={() => navigate({"path":'/products'})}>products</button>
      </nav>
    </div>  */}
    {/* {renderRoute(route)} */}
    </>
  )
}

export default App
