import { useState } from "react";
import { AuthService } from "../../../services/AuthService";
import { loginUser } from "../api/UserApi";
import type { UserLogin } from "../../../types/User";
import mapErrors from "../../../helpers/MapErrors";
import { useRoute } from "../../navbar/hooks/UseRoute";

export function useLogin(){ 

    const { navigate } = useRoute();

    const [formData, setFormData] = useState<UserLogin>({ 'email': '', 'password': '' }); 
    const [error, setError] = useState<Record<string, string[]>>()

    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target; 
        setFormData({
            ...formData, 
            [name]:value
        }) 
    } 

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        try {
            const res = await loginUser({ email: formData.email,password: formData.password})
            AuthService.setAccessToken(res.accessToken);  
            AuthService.setRefreshToken(res.refreshToken); 
            console.log("Login completato:", res);
            // window.location.href = '/products';
            navigate({ path: "/products", id: null });
            return
        } catch (err:any) {  
            console.error("Errore durante il login:", err);
            
            console.log("RAW ERROR:", err);
            
                        if (Array.isArray(err?.message)) {
                            setError(mapErrors(err.message));
                            return;
                        }
            
                        // single error
                        if (typeof err?.message === "string") { 
                           
                            setError({
                            general: [err.message]
                            });
                            return;
                        } 


            // if (err instanceof Error) {
            //   console.log(err)
            //                 const errors = JSON.parse(err.message);
            
            //                 setError(mapErrors(errors))
            
            //             } else {
            //                 console.log(err)
            //             }
        }
    }

    return {handleInputChange, 
        submitLogin, 
        error
    }
}