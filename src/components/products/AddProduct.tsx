import React, { useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL;

const AddProduct = () => { 
 
    type productForm = {
    title: string; 
  }

  const [formData,setFormData] = useState<productForm>({"title":""}) 

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)  => 
  {
     const {name, value} = e.target; 
     setFormData({...formData,  [name]: value,}); 
  } 

   const submitForm = async (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    try { 
    const res = new FormData(); 
    res.append("title", formData.title); 

    const data = await fetch(`${baseUrl}/products`, {
      method:'POST', 
      body:res
    }); 
     
    const test = await data.json();  
    console.log(test);
         
    } catch (error) {
        console.log("Err:", error); 
    }
  } 

   return(<>
   <form onSubmit={submitForm}>
    <label htmlFor="title">Title:</label><br />
    <input type="text" id="title" name="title" onChange={handleInputChange} /><br />
    <button type="submit">click</button>
    </form>
   </>)
}  

export default AddProduct; 