export default function EditProduct(props: any) {
    return (
        <>

            <form onSubmit={props.submit}>
                <input type="text" name="title" value={props.product.title} onChange={props.handleInputChange} /><br />
                {
                    props.size.length > 0 && props.product?.name && !props.product.removeImage && (
                        <div>
                            {
                                props.product.images.map((element: any, index: any) => (

                                    <img key={index} src={`${props.url}/${element.created_at.substring(0, 10)}/${props.size}/${element.name}`} alt="" style={{ width: '50%' }} />
                                ))
                            }

                            <button onClick={props.deleteImage}>remove image</button>
                        </div>
                    )
                }

                <input type="file" name="image" onChange={props.handleInputChange} /><br />

                <button>update</button> <br />
                <button onClick={props.delete}>remove record</button>
            </form>
        </>
    )
}