
import type { Product } from "../../../types/Product"; 

export default function ProductList({products,navigate}:{products:Product[];navigate:any}) 
{
   return(<><div>Lista Prodotti</div>
          {
            products.map((product:any) => (
                <div key={product.id}>{product.title} <button onClick={() => navigate({"path":'/edit/',"id":product.id})}>{product.id}</button> </div>
            ))
          }
   </>)
}