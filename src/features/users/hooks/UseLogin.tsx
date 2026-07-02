import { useState } from "react";
import { AuthService } from "../../../services/AuthService";
import { loginUser } from "../api/UserApi";
import type { UserLogin } from "../../../types/User";
import mapErrors from "../../../helpers/MapErrors";

export function useLogin(){ 

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
            AuthService.setToken(res.JWT); 
            console.log(res)
        } catch (err:any) {  
            
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