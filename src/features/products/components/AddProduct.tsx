export default function AddProduct(props:any) 
{
    return(<>
   <form onSubmit={props.submit}>
    <label htmlFor="title">Title:</label><br />
    <input type="text" id="title" name="title" onChange={props.handleInputChange} /><br /> 
    <input type="file" name="image" onChange={props.handleInputChange}/>
    <button type="submit">click</button>
    </form>
   </>)
}