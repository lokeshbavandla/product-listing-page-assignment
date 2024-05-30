"use client"

import Image from "next/image"
import { useState } from "react"
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductDisplay({product={}}){

    const [modal,setModal] = useState(false);
    const [viewDetails, setViewDetails] = useState(false);
    return(
        <>
        <div className="bg-white rounded-2xl w-[20rem] max-sm:w-[17rem] h-[27rem] py-7 hover:shadow-[-10px_10px_7px_0px_rgba(0,0,0,0.25)] transition-all"
             onClick={()=>{
                setModal(true)
            }}
        >
            <div className="w-full flex justify-center flex-col gap-5 items-center">
                <div>
                    <Image 
                    src={`${product?.image}`}
                    alt={`${product?.title}`}
                    width={200}
                    height={200}
                    style={{objectFit: "contain", objectPosition: "center"}}
                    className="w-[200px] h-[200px]"
                    />
                </div>

                <div className="cursor-pointer text-blue-600 hover:font-bold hover:underline font-medium">
                    {product?.category}
                </div>
            </div>

            <div className="mt-4 px-10 flex flex-col gap-2 items-center">
                <p className="text-md text-center font-[500] line-clamp-2">{product?.title}</p>
                <span className="text-md font-bold text-gray-600">${product?.price}</span>
                <div className="flex items-center gap-1">
                    <span className="text-md font-medium">{product?.rating?.rate}</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-yellow-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                    <span className="ml-1 text-sm">({product?.rating?.count})</span>
                </div>
            </div>
            
        </div>

        {
            modal && <div className={`${modal ? 'block': 'hidden'} fixed h-full overflow-hidden w-full top-0 left-0 bottom-0 rigt-0 bg-[rgba(0,0,0,0.25)] z-[1000]`}>
                <div className="flex items-center justify-center h-full w-full">
                    <ProductDetailsModal product={product} setModal={setModal}/>
                </div>
            </div>
        }
        </>
    )
}