import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import Basket from "./components/Basket";
import { useState } from 'react';
import User from './components/User';



function App() {

  let items = [
    { item: "Reeses", price: 5.00},
    { item: "Nerds", price: 3.00}, 
    { item: "Skittles", price: 4.00},
    { item: "Galaxy", price: 4.00},
    { item: "Skittles Sour", price: 4.00},
    { item: "Ferrero Rochet", price: 10.00},
    { item: "Truffles", price: 15.00},
    { item: "Wrigleys Extra", price: 1.00},
    { item: "Lucozade", price: 2.00},
    { item: "Coke", price: 2.00},
    { item: "Twix", price: 2.00},
    { item: "Kinder Bueno", price: 3.00}
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
            <Route exact path="/user" element={ <User/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
