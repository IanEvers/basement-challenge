import type {NextPage} from "next";
import Image from "next/image";
import logo from "../public/logo.svg";
import symbols from "../public/group.svg";
import headerLogo from "../public/header.svg";
import favicon from "../public/favicon.svg";
import footer from "../public/footer.svg";
import hexa1 from "../public/hexa1.svg";
import hexa2 from "../public/hexa2.svg";
import { useEffect, useState } from "react";
import {Product} from '../public/product/types';

function Header() {
  return(
    <header className="p-5 text-center">
      <div className="text-white flex justify-between ">
        <div className="block sm:hidden flex">
          <Image alt="Basement" src={favicon} className="" />
        </div>
        <div className="hidden sm:flex ">
          <Image alt="Basement" src={logo} className="" />
        </div>

        <div className="hidden sm:flex">  
          <Image alt="symbols" src={symbols} className="hidden sm:block" />
        </div>
        <div className="border-solid py-1 px-6 border-2 rounded-full">
          <button>
            CART (0)
          </button>
        </div>
      </div>
    </header>
  )
}

function TextoBasement() {
  return (
    <div>
      
      <div className="p-5 sm:p-15 text-center">
        <Image alt="Header Logo" src={headerLogo}/>
      </div>
      
      <hr className="pt-2"/>
      <p className="font-bold pb-2 whitespace-nowrap overflow-hidden text-center text-2xl">A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag</p>
      <hr className="p-2"/>
    </div>
  )
}

function ProductCard(product: Product) {
  return (
    <div  key={product.id}>
      <div className="bg-gradient-to-b from-black to-gray-900 border-b-2 flex justify-center">
        <Image alt={product.name} src={product.image} width="400px" height="500px"/>
      </div>
      <div className="pt-2 flex flex-row justify-between text-lg">
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
      </div>
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
 
  return (
    <div className="p-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
      
      {productos.map(producto =>
        ProductCard(producto)
      )}
    </div>   
  )
}

function Footer() {
  return  (
    <div className="flex justify-center p-5">
      <Image alt="Footer" src={footer} className="" />
    </div>
  )
}

function Tetrahedros() {
  // ni idea q son jaja
  return(
    <div className="z-50 absolute flex justify-between">
      <div className="top-80">
        <Image alt="symbols" src={hexa1} />
      </div>
      <div className="top-2 left-2 ">
        <Image alt="symbols" src={hexa2} className=""/>
      </div>

    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      
      <Tetrahedros />
      <Header />
      <TextoBasement />
      <ProductosGrid />
      <Footer />
    
    </div>
  );
};

export default Home;
