import { useEffect } from "react";
import ProductDisplay from "./ProductDisplay";

export default function AllProductsDisplay({products=[]}){
    useEffect(()=>{
        console.log(products);
    }, [products])
    return(
        <div className="grid grid-cols-1 gap-10 auto-cols-fr sm:grid-cols-2 my-12 sm:mx-5 xl:mx-10 lg:mx-7 md:mx-6 min-[850px]:grid-cols-3 min-[1150px]:grid-cols-4 transition-all">
            {products.length>0 && products.map((product)=>(
                <div key={product.id} className="flex justify-center items-center">
                    <ProductDisplay product={product}/>
                </div>
            ))}
        </div>
    )
}