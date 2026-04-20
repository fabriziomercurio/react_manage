import { useState } from "react"
import {AuthService} from "../services/AuthService";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Login = () => {

    const [formLogin, setFormLogin] = useState({ "email": "", "password": "" });

    const handleInputChangeLogin = (e: any) => { 
        const {name,value} = e.target;
        setFormLogin({ ...formLogin, [name]:value })
    }

    const submitFormLogin = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`${baseUrl}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formLogin.email,
                    password: formLogin.password
                })
            });
            const data = await res.json();
            console.log("Server Response:", data);
            AuthService.setToken('fake-token')
        } catch (err) {
            console.log("Err:", err);
        }
    }

    return (<>
        <h2>login</h2>
        <form onSubmit={submitFormLogin}>
            <input type="text" id="email" name="email" onChange={handleInputChangeLogin} /><br />
            <input type="text" id="password" name="password" onChange={handleInputChangeLogin} /><br />
            <button type="submit" style={{ marginBottom: 90 }}>click</button>
        </form>

    </>)
}

export default Login; 