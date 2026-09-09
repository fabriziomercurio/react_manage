import { AuthService } from "../../../services/AuthService";
import { RefreshToken } from "../../auth/api/RefreshToken";

const baseUrl = import.meta.env.VITE_BASE_URL

export async function getProducts() 
{
    let response = await fetch(`${baseUrl}/products`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${AuthService.getAccessToken()}`   
        },
    });    

    if (response.status === 401) { 
        const result = await RefreshToken(AuthService.getRefreshToken());        
        AuthService.setAccessToken(result.accessToken); 
        AuthService.setRefreshToken(result.refreshToken); 
        console.log('refresh is running')
        response = await fetch(`${baseUrl}/products`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${result.accessToken}`   
        },
      }); 
    } 

    if (response.status === 403) {
        localStorage.removeItem("accessToken"); 
        localStorage.removeItem("refreshToken"); 
        window.location.href = '/login'; 
        return;
    }

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
            errorData?.error || `HTTP ${response.status} - Error fetching products`
        );
    }

    return response.json() 
} 

export async function getProduct(id:number) 
{   
    const response = await fetch(`${baseUrl}/products/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${AuthService.getAccessToken()}`   
        }
    });    ///products/:productId

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
            errorData?.error || `HTTP ${response.status} - Error fetching products`
        );
    }

    return response.json();
}

export async function storeProducts(payload:FormData) 
{   
    const response = await fetch(`${baseUrl}/products`,{
        method: "POST",
        headers: {
            'Authorization': `Bearer ${AuthService.getAccessToken()}`   
        }, 
        body: payload
    });

    const data = await response.json().catch(() => null); 

    if (!response.ok) {     

        throw new Error( 
            data?.message || `HTTP ${response.status} - Error fetching products`
        );
    }

    return data; 
} 

export async function updateProduct(id:number,payload:any) 
{
    const response = await fetch(`${baseUrl}/product/${id}`,{
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${AuthService.getAccessToken()}`   
        },
        body: payload
    });

    const data = await response.json().catch(() => null); 

    if (!response.ok) {     

        throw new Error( 
            data?.message || `HTTP ${response.status} - Error fetching products`
        );
    }

    return data; 
} 

export async function DeleteRecord(id:number){ 
   
    const response = await fetch(`${baseUrl}/product/${id}`,{
        method:"DELETE",
        headers: {
            'Authorization': `Bearer ${AuthService.getAccessToken()}`   
        },
      }); 

     const data = await response.json(); 

      if (!response.ok) {
         throw new Error( 
            data?.message || `HTTP ${response.status} - Error fetching products`
        );
      } 

     return data; 
}