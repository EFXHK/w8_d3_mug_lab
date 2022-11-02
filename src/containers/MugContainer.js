import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MugList from '../components/MugList';
import BasketList from "../components/BasketList";


const MugContainer = () => {

    const [mugs, setMugs] = useState([
        {name:'Pokemon', price:3.00},
        {name:'Fish Scale', price:50.00},
        {name:'Pumpkin', price:20.00}
    ]);

    const [user, setUser] = useState({
        userName: "Ash"
    });

    const [basket, setBasket] = useState([]);

    function addToBasket(mug) {
        const newBasket = { ...basket}

        //close basket
        newBasket.push(mug);
        //update the cloned basket with mug
        //replace old basket with new
        setBasket(newBasket);
    }

    return(


        <Router> 
            <Routes>
                {/* <Route exact path="/" element={< MugList mugs={mugs} addToBasket={addToBasket} basket={basket} />} /> */}
                {/* <Route exact path="/" element={< MugList mugs={mugs} addToBasket={addToBasket} BasketList={BasketList} />} /> */}
                <Route exact path="/" element={< MugList mugs={mugs} addToBasket={addToBasket} />} />
                <Route path="/basket" element={<BasketList user={user} basket={basket} />} />
                {/* <Route path="/mug/:itemname" element={<Mug mugs={mugs} />} /> */}
            </Routes>

        </Router>
    );
}

export default MugContainer;