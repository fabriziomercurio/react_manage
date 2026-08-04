import type { UserLogin, UserRegister } from "../../../types/User";


const baseUrl = import.meta.env.VITE_BASE_URL 

export async function registerUser(payload:UserRegister){

    const response = await fetch(`${baseUrl}/users`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });  

        if (!response.ok) {

        const errorData = await response.json().catch(() => null); 
    
        throw errorData;
    }

    return response.json() 
} 

export async function loginUser(payload:UserLogin) 
{
   const response = await fetch(`${baseUrl}/login`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });  

        const data = await response.json().catch(() => null); 
  
        if (!response.ok) { 
          
            
        // const errorData = await response.json().catch(() => null); 
    
       throw data;

        // throw new Error( 
        //     // data?.message || `HTTP ${response.status} - Error fetching products`
        //     data?.message
        // );
    }

    return data; 
}
