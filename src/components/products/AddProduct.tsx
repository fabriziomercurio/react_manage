import React, { useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL;

const AddProduct = () => { 
 
    type productForm = {
    title: string;
    image:Blob|null
  }

  const [formData,setFormData] = useState<productForm>({"title":"","image":null}) 

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)  => 
  {
     const {name, value, type, files} = e.target; 
     setFormData({...formData,    
      [name]: type === 'file' && files ? files[0] : value // if files exists use files[0] otherwise use value      
    });  
  } 

   const submitForm = async (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    try { 
    const res = new FormData(); 
    res.append("title", formData.title); 
    res.append("image", formData.image ?? '')

    const data = await fetch(`${baseUrl}/products`, {
      method:'POST', 
      body:res
    });        

    if (!data.ok) {
      const text = await data.text();
      throw new Error(text); 
    }

    const result = await data.json();  
    console.log(result);
         
    } catch (error) {
        console.log("Err:", error); 
    }
  } 

   return(<>
   <form onSubmit={submitForm}>
    <label htmlFor="title">Title:</label><br />
    <input type="text" id="title" name="title" onChange={handleInputChange} /><br /> 
    <input type="file" name="image" onChange={handleInputChange}/>
    <button type="submit">click</button>
    </form>
   </>)
}  

export default AddProduct; 