
import type { Product } from "../../../types/Product"; 

export default function ProductList({products}:{products:Product[]}) 
{
   return(<><div>Lista Prodotti</div>
          {
            products.map((product:any) => (
                <div key={product.id}>{product.title}</div>
            ))
          }
   </>)
}