"use client"

import SearchBar from "@/components/SearchBar";
import ProductDisplay from "@/components/ProductDisplay";
import { useEffect, useState } from "react";
import AllProductsDisplay from "@/components/AllProductsDisplay";

export default function Home() {

  const [products,setProducts] = useState([]);
  const [searchValue,setSearchValue] = useState('');

  const productsData = async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    console.log(data);
  }

  useEffect(()=>{
    productsData();
  }, []);

  const filteredProducts = products.filter((product)=>(
    product?.title?.toLowerCase()?.includes(searchValue.toLowerCase())
  )
  );

  return (
    <div>
      <SearchBar setSearchValue={setSearchValue}/>
      <div className="w-full cursor-pointer">
        <AllProductsDisplay products={searchValue=='' ? products : filteredProducts}/>
      </div>
    </div>
  );
}
