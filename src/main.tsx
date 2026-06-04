import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RouterRoot from './routes/routerRoot.tsx'
import Navbar from './features/products/pages/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <Navbar />
    <App />
    <RouterRoot /> 
  </StrictMode>,
)
