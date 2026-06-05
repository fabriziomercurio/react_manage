import { useState } from "react";
import { AuthService } from "../../../services/AuthService";
import { loginUser } from "../api/UserApi";
import type { UserLogin } from "../../../types/User";

export function useLogin(){ 

    const [formData, setFormData] = useState<UserLogin>({ 'email': '', 'password': '' }); 

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
            console.log("Server Response:", res);
            AuthService.setToken(`fake-token`); 
        } catch (err) { 
            console.log("Err:", err);
        }
    }


    return {       
        handleInputChange, 
        submitLogin
    }
}