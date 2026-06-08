export default function Navbar(props:any){
    return(
        <>
            <div>
                <nav>
                    <button onClick={() => props.navigate({"path":'/login/'})}>login</button>
                    <button onClick={() => props.navigate({"path":'/register/'})}>register</button>  
                    <button onClick={() => props.navigate({"path":'/product-store/'})}>add product</button>
                    <button onClick={() => props.navigate({"path":'/products/'})}>products</button>
                </nav>
            </div>
        </>
    )
}

