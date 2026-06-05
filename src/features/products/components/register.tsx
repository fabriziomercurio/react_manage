export default function RegisterNew(props:any) 
{
    return (<>
        <h3>register</h3>
        <form onSubmit={props.submit}>
            <input type="text" id="email" name="email" onChange={props.handleInputChange} /><br />
            <input type="text" id="password" name="password" onChange={props.handleInputChange} /><br />
            <button>click</button>
        </form>
    </>)
}