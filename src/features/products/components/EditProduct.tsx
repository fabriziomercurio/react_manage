export default function EditProduct(props:any) 
{   
    return(
        <>
         <form onSubmit={props.submit}>
             <input type="text"name="title"value={props.product.title}onChange={props.handleInputChange}/><br /> 
             <input type="file" name="image" onChange={props.handleInputChange}/><br /> 
{props.staticUrl}
             {/* <img src={`${staticUrl}/${props.product.created_at}/${size[1]}/${props.product.name}`} alt="" style={{width: '50%'}}/>  */}

             <button>click</button>
         </form>
        </>
    )
}