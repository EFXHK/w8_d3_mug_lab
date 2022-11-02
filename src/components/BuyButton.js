import React from "react";

const BuyButton = ({mug, addToBasket}) => {


    return ( 
        <button onClick={() => addToBasket(mug)}>
            Add to Basket &#x1f6d2;
        </button>
     );
}
 
export default BuyButton;