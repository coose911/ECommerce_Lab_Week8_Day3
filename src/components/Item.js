import React from "react";
import styled from "styled-components";

const ItemContainer = styled.li`
    list-style-type: none;
    border: 1px solid #ddd; 
    margin-top: -1px; 
    background-color: #f6f6f6; 
    padding: 12px;
    font-size: 1.5em;
    margin-right: 40px;
    padding-left: 4em;

`

const Item = ({item, addToBasket}) => {

    const handleItemClick = () => {

            addToBasket(item)
        
    }


    return (
        <>
        <ItemContainer>
            <li>
                <p>{item.item}</p>
                <p>£ {item.price}</p>
                <button onClick={handleItemClick}>Add To Basket</button>
            </li>
        </ItemContainer>
        </>
    )
}

export default Item