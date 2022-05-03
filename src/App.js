import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/morph/bootstrap.min.css'; 

import {Container, Row, Col} from "react-bootstrap";
import React, {useState} from "react";

import ProductList from "./product-list/ProductList";
import ShoppingCart from './shopping-cart/ShoppingCart';

const products = [
  {
  id: "9aa711b367533c012cb110d7ebca844b",
  productName: "Preiser 30411 Horse Drawn Box Wagon",
  price: 137.16,
  },
  {
  id: "d160b9ad8d9c7c7ed1c207a77e9934cc",
  productName: "Roco 10908 Seuthe Smoke Oil",
  price: 6.5,
  },
  {
  id: "f02b2132fcb3460565b5de94c05be8a8",
  productName:
  "Subway train 500 form three-car basic set red gauge N 10-1134 Marunouchi Line",
  price: 45.75,
  },
  {
  id: "bb2466d62f3fdc9510272ee5233694d3",
  productName: "Walthers Trainline 931-1676 TL 50' PD Boxcar ATSF",
  price: 15.0,
  },
  ];

function App() {
const [selectedItems, setSelectedItems] = useState([]);

const addToCart = (product, quantity) => {
  console.log("Add to cart", product, quantity);

  const newSelectedItems = [...selectedItems];

  for (let i = 0; i < newSelectedItems.length; i++) {
    if (newSelectedItems[i].product.id === product.id) {

      newSelectedItems[i] = {...newSelectedItems[i]};
      newSelectedItems[i].quantity += parseInt(quantity);
      setSelectedItems(newSelectedItems);
      return ;
    }
  }
  const newItem = {
    product: product,
    quantity: parseInt(quantity),
  };

  newSelectedItems.push(newItem);
  setSelectedItems(newSelectedItems);
};

const removeFromCart = (productId) => {
  const newSelectedItems = selectedItems.filter((item) => {
    if (item.product.id === productId) {
      return false;
    } else return true;
  
  });
  setSelectedItems(newSelectedItems);
};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand fw-bold" href="#">ShopZone</a>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Shopping Cart
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container>
          <Col>
              <ProductList
              products={products}
              addToCart={addToCart}
              />
            </Col>   
            <Col>
              <ShoppingCart
              selectedItems={selectedItems}
              removeFromCart={removeFromCart}/>
            </Col>
      </Container>
    </div>
    );
  }

export default App;
