import type {NextPage} from "next";
import Image from "next/image";
import logo from "../public/logo.svg";
import symbols from "../public/group.svg";
import headerLogo from "../public/header.svg";
import favicon from "../public/favicon.svg";


function Header() {
  return(
    <header className="p-5 text-center">
      <div className="text-white flex justify-between ">
        <div className="block sm:hidden flex">
          
          <Image alt="Basement" src={favicon} />
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

function productosGrid() {
  return (
    <div></div>
  )
}

const Home: NextPage = () => {
  return (
    <div>

      <Header />
      <TextoBasement />
    
    </div>
  );
};

export default Home;
