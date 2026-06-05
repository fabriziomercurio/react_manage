import type { UserRegisterProps } from "../../../types/User";

export default function Register(props:UserRegisterProps) 
{
    return (<>
        <h3>Register Profile</h3>
        <form onSubmit={props.submit}>
            <input type="text" id="email" name="email" onChange={props.handleInputChange} /><br />
            <input type="text" id="password" name="password" onChange={props.handleInputChange} /><br />
            <button>click</button>
        </form>
    </>)
}