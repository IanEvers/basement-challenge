import type {NextPage} from "next";
import Image from "next/image";
import logo from "../public/logo.svg";
import symbols from "../public/group.svg";
import headerLogo from "../public/header.svg";
import favicon from "../public/favicon.svg";
import { useEffect, useState } from "react";
import {Product} from '../public/product/types';

function Header() {
  return(
    <header className="p-5 text-center">
      <div className="text-white flex justify-between ">
        <div className="block sm:hidden flex">
          
        </div>
        <div className="hidden sm:flex ">
          <Image alt="Basement" src={logo} className="" />
        </div>

        <div className="hidden sm:flex">  
          <Image alt="symbols" src={symbols} className="hidden sm:block" />
        </div>
        <div className="border-solid py-1 px-6 border-2 rounded-full">
          <p className="">
            CART (0)
          </p>
        </div>
      </div>
    </header>
  )
}

function TextoBasement() {
  return (
    <div>
      <div className="p-5 sm:p-15 text-center">
        <Image alt="symbols" src={headerLogo}/>
      </div>
      
      <hr className="pt-2"/>
      <p className="font-bold pb-2 whitespace-nowrap overflow-hidden text-center text-2xl">A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag</p>
      <hr className="p-2"/>
    </div>
  )
}

function ProductCard(product: Product) {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-gray-900">
      <Image alt={product.name} src={product.image} width="400px" height="500px" objectFit="contain"/>

      </div>
        <h3>{product.name}</h3>
    </div>
  )
}

function ProductosGrid() {
  const getData=()=>{
    fetch('product/mock.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  const [data,setData]=useState([]);

  // meto todo en un array nuevo totalmente al pedo
  let productos = new Array()
  data.forEach(element => {
    const producto : Product = element;
    productos.push(producto)
  });
  console.log(productos)
 
  return (
    <div className="p-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
      
      {productos.map(producto =>
        ProductCard(producto)
      )}
    </div>
   
   
  )
}

const Home: NextPage = () => {
  return (
    <div>

      <Header />
      <TextoBasement />
      <ProductosGrid />
    
    </div>
  );
};

export default Home;
