import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() { 

  type productForm = {
    title: string; 
  }

  type Product = {
  id: number;
  title: string;
  created: string;
  };

  const [count, setCount] = useState(0) 
  const [formData,setFormData] = useState<productForm>({"title":""}) 

  const [formDataRegister,setFormDataRegister] = useState({"email":"","password":""}); 


  const [products,useProducts] = useState<Product[]>([])

  const loadProducts = () => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json()) 
    .then((data) => useProducts(data)) 
  } 

  useEffect(() => {
    loadProducts()
  },[]) 

  const handleInputChange = (e:any)  => 
  {
     const {name, value} = e.target; 
     setFormData({...formData,  [name]: value,}); 
     console.log(formData)
  } 

  const handleInputChangeRegister = (e:any) => 
  {
     const {name,value} = e.target; 
     setFormDataRegister({...formDataRegister, [name]:value}); 
  }

  const submitForm = (e:any) => { 
    e.preventDefault(); 
    fetch("http://localhost:3000/products", {
      method:"POST", 
      headers: {
        'Content-Type':'application/json'
      }, 
      body:JSON.stringify({
        title:formData.title
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Risposta dal server:", data);
    })
    .catch(err => console.error("Errore:", err));
  } 

  const submitFormRegister = (e:any) => {
    e.preventDefault(); 
    fetch("http://localhost:3000/users", {
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },  
      body:JSON.stringify({
        email:formDataRegister.email, 
        password:formDataRegister.password
      })
    }).then((res) => res.json()) 
    .then((data) => {console.log("Server Response: ", data)})
    .catch((err) => console.log("Error:", err))
  }

  return (
    <> 
    {products.map(p => (
      <div key={p.id}>{p.title}</div>
    ))} 
    <h2>register</h2>
    <form onSubmit={submitFormRegister}>
      <input type="text" id="email" name="email" onChange={handleInputChangeRegister} /><br />
      <input type="text" id="password" name="password" onChange={handleInputChangeRegister} /><br /> 
      <button type="submit" style={{marginBottom:90}}>click</button>
    </form> 
    
    <form onSubmit={submitForm}>
    <label htmlFor="title">Title:</label><br />
    <input type="text" id="title" name="title" onChange={handleInputChange} /><br />
    <button type="submit">click</button>
    </form>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
