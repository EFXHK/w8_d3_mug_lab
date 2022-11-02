import React from "react"; 
import Mug from "./Mug";
import Basket from "./Basket";

const MugList = ({mugs}) => {

    // const mugComponenets = mugs.map(mug => {
    const mugComponents = mugs.map(mug => (
        <Mug
        key={mug.name}
        mug={mug}
        />
    ))

    return ( 
        <>
        <Basket />
        <p>mug new here</p>
        {mugComponents}
        </>
     );
}
export default MugList;