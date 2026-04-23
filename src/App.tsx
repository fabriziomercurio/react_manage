import { useState } from 'react'
import renderRoute from './components/Route'; 
import type { Router } from './types/Router';
import './App.css'

function App() { 

const [route,setRoute] = useState<Router>({"path":"","id":null}); 

const navigate = (path:Router) => 
{
    setRoute(path); 
}

  return (
    <> 
    <div>
      <nav>
        <button onClick={() => navigate({"path":'/'})}>home</button>
        <button onClick={() => navigate({"path":'/about'})}>about</button> 
        <button onClick={() => navigate({"path":'/register'})}>register</button>
        <button onClick={() => navigate({"path":'/login'})}>login</button>
        <button onClick={() => navigate({"path":'/dashboard'})}>dashboard</button>
      </nav>
    </div> 
    {renderRoute(route)}
    </>
  )
}

export default App
