import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const Items = ({items, addToBasket}) => {

    const itemDetails = items.map((item, index) => {
        return (
         <Item item={item} key={index} addToBasket={addToBasket}/>   
        )
    })

  
    return (
      <ul>
        {itemDetails}
      </ul>

    )
}

export default Items