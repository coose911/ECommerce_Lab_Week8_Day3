import React from "react";
import { useParams } from "react-router-dom";

const Basket = ({basket}) => {

    const basketItems = basket.map((item) => {
        return (
            <li>{item.item}</li>
        )
    })

console.log(basket)
    return (
        <>
        <h1>This is a Basket</h1>
        <ul>
            <h6>{basketItems}</h6>
        </ul>
        </>
    )
}

export default Basket