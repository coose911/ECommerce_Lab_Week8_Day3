import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import styled from "styled-components";

const ItemTitleContainer = styled.h2`
    margin-left: 100px;
`

const Items = ({items, addToBasket}) => {

    const itemDetails = items.map((item, index) => {
        return (
          <Item item={item} key={index} addToBasket={addToBasket}/>   
        )
    })

  
    return (
      <>
      <ItemTitleContainer>
      <h1> Items List</h1>
      </ItemTitleContainer>
      <ul>
        {itemDetails}
      </ul>
      </>

    )
}

export default Items