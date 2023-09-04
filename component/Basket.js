import React, { useState, useEffect } from "react";
import Items from "./Items";
import products from "./Pro";
//import Product from "./Product";



   function Basket({basketData}){
   console.log(basketData);
   return (
      <>
         <div className="block col-1">
            <h1>Cart</h1>
            {
               // item.map((curItem) =>{
               //   return  <Items key={curItem.id}  {...curItem}/>
               // })
               basketData?.map((cart, idx) => {
                  return <Items key={idx}  {...cart} />
                  
               })

            }
         </div>
      </>
   );

}

export default Basket;


