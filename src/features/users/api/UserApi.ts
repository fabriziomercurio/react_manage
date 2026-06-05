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

        throw new Error(
            errorData?.error || `HTTP ${response.status} - Error fetching products`
        );
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

        throw new Error( 
            data?.message || `HTTP ${response.status} - Error fetching products`
        );
    }

    return data; 
}
