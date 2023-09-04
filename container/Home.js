import Navbar from "../component/Navbar";
import { useState } from "react";
import Basket from "../component/Basket";
import Main from "../component/Main";
import products from "../component/Pro";


function Home(){
    const [basketData,setBasketData]=useState([]);
  return (
  <div>
    
   <Navbar/>
   <div className="row">
    <Main products={products} setBasketData={setBasketData} />
    <Basket basketData={basketData} />
    </div>

   </div>
  );
}

export default Home;