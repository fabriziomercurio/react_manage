import { AuthService } from "../../../services/AuthService"; 
import { RefreshToken } from "./RefreshToken";
const baseUrl = import.meta.env.VITE_BASE_URL  

export async function Logout() 
{
    let response = await fetch(`${baseUrl}/logout`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${AuthService.getAccessToken()}`   
        },
    });   

    if (response.status === 401) {
        const result = await RefreshToken(AuthService.getRefreshToken());     
        AuthService.setAccessToken(result.accessToken); 
        AuthService.setRefreshToken(result.refreshToken); 
        response = await fetch(`${baseUrl}/logout`,{
        method:"POST",
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
            errorData?.error || `HTTP ${response.status} - Error logout`
        );
    } 

    localStorage.removeItem("accessToken"); 
    localStorage.removeItem("refreshToken"); 

    window.location.href = '/login'; 
    
    // return response.json(); 
}