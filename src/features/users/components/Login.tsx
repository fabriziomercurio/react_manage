import type { UserLoginProps } from "../../../types/User";

export default function Login(props:UserLoginProps) 
{  
    return (<>
        <h3>Login</h3>
        <form onSubmit={props.submitLogin}>
            <input type="text" id="email" name="email" onChange={props.handleInputChange} style={{
                border: props.error?.email?.length ? "1px solid red" : undefined,
                outline: "none",
            }} />
            {props.error?.email?.map((err: string, i: number) => (
                <p
                    key={i}
                    style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "2px 0",
                    }}
                >
                    {err}
                </p>
            ))}<br />
            <input type="password" id="password" name="password" onChange={props.handleInputChange} style={{
                border: props.error?.password?.length ? "1px solid red" : undefined,
                outline: "none",
            }} />
            {props.error?.password?.map((err: string, i: number) => (
                <p
                    key={i}
                    style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "2px 0",
                    }}
                >
                    {err}
                </p>
            ))}<br />

             {props.error?.general?.map((err:string, i: number) => (
                <p key={i} style={{ color: "red", fontSize: "12px" }}>
                    {err}
                </p>
                ))}

            <button type="submit">login</button>
        </form>
    </>)
}