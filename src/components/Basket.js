import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BasketTitleContainer = styled.h2`
    margin-left: 100px;
`

const TotalContainer = styled.h2`
    margin-left: 100px;
    justify-content: center;
`

const BasketContainer = styled.li`
    list-style-type: none;
    border: 1px solid #ddd; 
    margin-top: -1px; 
    background-color: #f6f6f6; 
    padding: 12px;
    font-size: 1.5em;
    margin-right: 30px;
`

const Basket = ({basket}) => {

    const basketItems = basket.map((item) => {
        return (
            <BasketContainer><li>{item.item}  : Has been added to your Basket for £{item.price}</li></BasketContainer>
        )
    })

    let total = 0;
        basket.forEach(item => {
        total += item.price;
    });


console.log(basket)
    return (
        <>
        <BasketTitleContainer>
        <h1>Basket Items Added Below</h1>
        </BasketTitleContainer>
        
        <ul>
            <h6>{basketItems}</h6>
        </ul>
        <TotalContainer>
        <h2> Your Total is £{total}</h2>
        </TotalContainer>
        
        </>
    )
}

export default Basket