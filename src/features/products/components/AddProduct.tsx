export default function AddProduct(props:{
    submit:(e:React.FormEvent<HTMLFormElement>) => void, 
    handleInputChange:React.ChangeEventHandler<HTMLInputElement>
}) 
{
    return(<>
   <form onSubmit={props.submit}>
    <label htmlFor="title">Title:</label><br />
    <input type="text" id="title" name="title" onChange={props.handleInputChange} required /><br /> 
    <input type="file" name="images" data-index="0" onChange={props.handleInputChange}/>
    <input type="file" name="images" data-index="1" onChange={props.handleInputChange}/>
    <input type="file" name="images" data-index="2" onChange={props.handleInputChange}/>
    <input type="file" name="images" data-index="3" onChange={props.handleInputChange}/>
    <button type="submit">click</button>
    </form>
   </>)
}