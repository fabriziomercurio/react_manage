const baseUrl = import.meta.env.VITE_BASE_URL 

export async function RefreshToken(token:string | null) 
{
    if (!token) {
        throw new Error('UNAUTHORIZED');
    }

    const response = await fetch(`${baseUrl}/refresh-token`,{
     method:"POST", 
     headers: {
         'Content-Type': 'application/json',
     }, 
     body: JSON.stringify({
     token: token,
     }),
    });  

    const result = await response.json(); 

    if (!response.ok) {
        if (result.message == 'Token_Expired') {      
            throw new Error('UNAUTHORIZED');
        } 

        throw new Error(result.message || "REFRESH_FAILED");
    }

    return result; 
} 
