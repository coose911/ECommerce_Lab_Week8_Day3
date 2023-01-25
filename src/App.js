import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import Basket from "./components/Basket";
import { useState } from 'react';



function App() {

  let items = [
    { item: "Reeses", price: 5},
    { item: "Nerds", price: 3}, 
    { item: "Skittles", price: 4},
    { item: "Galaxy", price: 4},
    { item: "Skittles Sour", price: 4},
    { item: "Ferrero Rochet", price: 10},
    { item: "Truffles", price: 15},
    { item: "Wrigleys Extra", price: 1},
    { item: "Lucozade", price: 2},
    { item: "Coke", price: 2},
    { item: "Twix", price: 2},
    { item: "Kinder Bueno", price: 3}
]

const [listItems, setListItems] = useState(items)
const [basket, setBasket] = useState([])


const addToBasket = (itemObject) => {
    const addedToBasket = [...basket, itemObject]
    setBasket(addedToBasket)
}
console.log(basket)
  return (
    <>
    <Router>
        <NavBar></NavBar>
        <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/navbar" element={ <NavBar />} />
            <Route exact path="/items" element={ <Items items={items} addToBasket={addToBasket}/>} />
            <Route exact path="/basket" element={ <Basket basket={basket}/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
