"use client"

import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";
import AllProductsDisplay from "@/components/AllProductsDisplay";
import Loading from "./loading";

export default function Home() {

  const [products,setProducts] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [loading,setLoading] = useState(true);

  const productsData = async()=>{
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    productsData();
  }, []);

  const filteredProducts = products.filter((product)=>(
    product?.title?.toLowerCase()?.includes(searchValue.toLowerCase())
  )
  );

  return (
    <>
      { !loading ? (<div>
        <SearchBar setSearchValue={setSearchValue}/>
        <div className="w-full cursor-pointer">
          <AllProductsDisplay products={searchValue=='' ? products : filteredProducts}/>
        </div>
      </div>) :
      (<Loading />)}
    </>
   
  );
}
