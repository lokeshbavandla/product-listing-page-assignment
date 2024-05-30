export default function SearchBar({setSearchValue}){
    return(
        <div className="flex justify-center">
            <div className="flex items-center justify-center max-w-[40rem] w-full bg-white rounded-full mx-10 my-5 px-10">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>

                <div className="w-full flex justify-center">
                    <input
                        type="text"
                        placeholder="Search For Products"
                        className="py-5 bg-transparent rounded-full px-4 text-lg w-full outline-none"
                        onChange={(e)=>setSearchValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}