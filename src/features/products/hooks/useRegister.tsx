import { useState } from "react";
import type { UserRegister } from "../../../types/UserRegister";
import { registerUser } from "../api/UserApi";
const baseUrl = import.meta.env.VITE_BASE_URL;

export function useRegister(){ 

   const [formData, setFormData] = useState<UserRegister>({ 'email': '', 'password': '' }); 

   const handleInputChange = (e:any) => 
   {
     const {name, value} = e.target; 
     setFormData({
        ...formData, 
        [name]:value
     })
   }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await registerUser({
                  email: formData.email,
                  password: formData.password
            }); 
            console.log("Server Response:", data);
        } catch (err) {
            console.log("Err:", err);
        }
    }; 

    return {
        submit, 
        handleInputChange
    }

}