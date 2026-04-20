import React, { useState } from "react"
const baseUrl = import.meta.env.VITE_BASE_URL;

const Register = () => {
    type registerForm = {
        email: string;
        password: string;
    }

    const [formRegister, setFormRegister] = useState<registerForm>({ "email": "", "password": "" });

    const handleInputChangeRegister = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormRegister({ ...formRegister, [name]: value })
    }

    const submitFormRegister = async (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        console.log(formRegister)

        try {
            const res = await fetch(`${baseUrl}/users`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formRegister.email,
                    password: formRegister.password
                })
            });
            const data = await res.json();
            console.log("Server Response:", data);
        } catch (err) {
            console.log("Err:", err);
        }
    }

    return (<>
        <h3>register</h3>
        <form onSubmit={submitFormRegister}>
            <input type="text" id="email" name="email" onChange={handleInputChangeRegister} /><br />
            <input type="text" id="password" name="password" onChange={handleInputChangeRegister} /><br />
            <button type="submit">click</button>
        </form>
    </>)
}

export default Register; 