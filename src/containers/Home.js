import React from "react";
import { useState } from "react";
import Items from "../components/Items";
import Basket from "../components/Basket";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
    text-align: center;
    font-size: larger;
`

const Home = () => {



    return (
        <>
            <HomeContainer>
                <h1>HomePage</h1>
                <h4>Please click on items to start your shop</h4>
            </HomeContainer>
        </>
    )
}

export default Home