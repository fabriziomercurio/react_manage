import { useState } from "react";
import { registerUser } from "../api/UserApi";
import type { UserRegister } from "../../../types/User";
import mapErrors from "../../../helpers/MapErrors";

export function useRegister() {

    const [formData, setFormData] = useState<UserRegister>({ 'email': '', 'password': '' });
    const [error, setError] = useState<Record<string, string[]>>()

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await registerUser({ email: formData.email, password: formData.password });

            console.log("Server Response:", data);
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
        }
    };

    return {
        submit,
        handleInputChange,
        error
    }

}