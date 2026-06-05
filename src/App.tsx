import './App.css'
import Navbar from './features/navbar/components/Navbar';
import { useRoute } from './features/navbar/hooks/UseRoute';

function App() { 

const {navigate} = useRoute();  

  return (
    <> 
    <Navbar navigate={navigate}  />
    </>
  )
}

export default App
