import type { UserLoginProps } from "../../../types/User";

export default function Login(props:UserLoginProps) 
{  
    return (<>
        <h3>Login</h3>
        <form onSubmit={props.submitLogin}>
            <input type="text" id="email" name="email" onChange={props.handleInputChange} /><br />
            <input type="text" id="password" name="password" onChange={props.handleInputChange} /><br />
            <button type="submit">login</button>
        </form>
    </>)
}