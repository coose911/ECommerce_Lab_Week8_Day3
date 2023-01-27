import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
    overflow: auto;
    background: #2F4F4F;
    width: 100%;
`
const LinkContainer = styled.button`
    float: center;
    padding: 12px;
    color: #DCDCDC;
    text-decoration: none;
    font-size: 17px;
    width: 24%;
`

const NavBar = () => {


    return (
        <NavContainer>
        <ul>
            <LinkContainer>
            <li>
                <Link to="/">Home</Link>
            </li>
            </LinkContainer>
            <LinkContainer>
            <li>
                <Link to="/basket">Basket</Link>
            </li>
            </LinkContainer>
            <LinkContainer>
            <li>
                <Link to="/items">Items</Link>
            </li>
            </LinkContainer>
            <LinkContainer>
            <li>
                <Link to="/user">User</Link>
            </li>
            </LinkContainer>
        </ul>
        </NavContainer>
    )
}

export default NavBar