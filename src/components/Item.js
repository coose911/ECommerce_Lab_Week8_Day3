import React from "react";

const Item = ({item, addToBasket}) => {

    const handleItemClick = () => {
      
            addToBasket(item)
        
    }


    return (
        <>
            <li>
                <p>{item.item}</p>
                <p>{item.price}</p>
                <button onClick={handleItemClick}>Add To Basket</button>
            </li>
        </>
    )
}

export default Item