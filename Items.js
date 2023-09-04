import { useState } from "react";


const Items=(props)=>{
    const{image,name, content, price} =props;
    const [quantity,setQuantity] = useState(1);
   
    const handleInc=() =>{
        setQuantity(quantity+1);
    };

    const handleDec=()=>{
        if(quantity > 1){
          setQuantity(quantity-1);
        }
    }

    return(
        <>

        <div className="items-info">

          <div className="order-child">

   <img className="newImage" src={image} alt="hi"/>

<div className="title">
   <h2>{name}</h2>  
   <p>{content}</p>
   <div>${price}</div>
   
</div>
 
 <div>

 </div>
   
     <button className="btn" onClick={handleInc}>+</button>
     <span>{quantity}</span>

     <button className="btn" onClick={handleDec}>-</button>
     
</div>
</div>

<hr/>

  


        </>
    )
}

export default Items;



