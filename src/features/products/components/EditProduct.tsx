export default function EditProduct(props:any) 
{   
    return(
        <> 
        
         <form onSubmit={props.submit}>
             <input type="text"name="title"value={props.product.title}onChange={props.handleInputChange}/><br /> 
             
             {
                props.size.length > 0 && props.product?.name && !props.product.removeImage && (
                 <div>
                  <img src={`${props.url}/${props.product.created_at}/${props.size}/${props.product.name}`} alt="" style={{width: '50%'}}/>
                  <button onClick={props.deleteImage}>remove image</button>
                 </div>                 
                ) 
             } 

             <input type="file" name="image" onChange={props.handleInputChange}/><br />             
           
             <button>update</button> <br />
             <button onClick={props.delete}>remove record</button>
         </form>
        </>
    )
}