export default function EditProduct(props: any) { 
   
    return (
        <>
          <form onSubmit={props.submit}>
              <input type="text" name="title" value={props.product.title} onChange={props.handleInputChange} /><br />
              {
                  props.size.length > 0 && props.product?.name && !props.product.removeImage && props.product.images && props.product.images.length > 0 &&(
                    <div>
                      {
                        props.product.images.map((element: any, index: number) => {

                            const imageUrl = element instanceof File
                                ? URL.createObjectURL(element)
                                : element?.created_at
                                    ? `${props.url}/${element.created_at.substring(0, 10)}/${props.size}/${element.name}`
                                    : 'https://placehold.co/600x400/EEE/31343C';

                            return (
                                <p key={index}>
                                    <img
                                        src={imageUrl}
                                        alt=""
                                        style={{ width: '50%' }}
                                    />

                                    <input
                                        type="file"
                                        name="image"
                                        data-index={index}
                                        accept="image/*"
                                        onChange={props.handleInputChange}
                                    />
                                    <br />
                                </p>
                            );
                        })
}
                      
                      <button onClick={props.deleteImage}>remove image</button>
                    </div>
                  )
              }

              

              <button>update</button> <br />
              <button onClick={props.delete}>remove record</button>
          </form>
        </>
    )
}