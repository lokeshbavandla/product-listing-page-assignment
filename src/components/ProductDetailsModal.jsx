import Image from "next/image"

export default function ProductDetailsModal({product={}, setModal}){
    return(

        <>
        <div className={`relative bg-white rounded-xl w-[40rem] py-10 px-10 flex gap-6 transition-all max-[700px]:flex-col max-[700px]:w-[20rem] max-[700px]:px-7 max-[360px]:w-[17rem] max-[360px]:px-5`}>

            <div className="absolute right-2 top-2 cursor-pointer hover:rounded-full hover:bg-gray-200 p-2 transition-all z-[1000]"
                onClick={()=>setModal(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>

            <div className="w-[60rem] max-[700px]:flex max-[700px]:ml-7 max-[700px]:mt-10">
                <Image 
                        src={`${product?.image}`}
                        alt={`${product?.title}`}
                        width={200}
                        height={200}
                        style={{objectFit: "contain", objectPosition: "center"}}
                        className="w-[100%] h-[100%] max-[700px]:w-[200px] max-[700px]:h-[200px]"
                    />
            </div>

            <div className="flex flex-col gap-2 max-[700px]:">
                <div className="flex flex-col gap-2">   
                    <p className="text-lg font-[500]">{product?.title}</p>

                    <span className="text-md font-bold text-gray-600">${product?.price}</span>
                <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{product?.rating?.rate}</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-yellow-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                    <span className="ml-1 text-sm">({product?.rating?.count})</span>
                </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-gray-600">Description:</span>
                        <p className="text-sm font-[500] text-gray-500">{product?.description}</p>
                    </div>
                </div>
            </div>
              
        </div>
        </>
    )
}