import React from "react";
import BuyButton from "./BuyButton";

const Mug = ({mug}) => {
    return ( 
        <section>
            <ul>
        <p><strong>MUGS MUGS MUGS MUGS MUGS</strong></p>
        <p><strong>Name: {mug.name}</strong></p>
        <p><strong>Price: £{mug.price}</strong></p>
        <BuyButton mug = {mug} />
            </ul>
        </section>
        
     );
}
 
export default Mug;