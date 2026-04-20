import { useState } from 'react'
import renderRoute from './components/Route';
import './App.css'

function App() { 

const [route,setRoute] = useState(window.location.pathname); 

const navigate = (path:string) => 
{
    setRoute(path);
}

  return (
    <> 
    <div>
      <nav>
        <button onClick={() => navigate('/')}>home</button>
        <button onClick={() => navigate('/about')}>about</button> 
        <button onClick={() => navigate('/register')}>register</button>
        <button onClick={() => navigate('/login')}>login</button>
        <button onClick={() => navigate('/dashboard')}>dashboard</button>
      </nav>
    </div> 
    {renderRoute(route)}
    </>
  )
}

export default App
