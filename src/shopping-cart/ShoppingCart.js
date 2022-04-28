import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import {Row, Col} from "react-bootstrap";

export default function ShoppingCart(props) {
  const totalamount = () => {
    let total = 0;
    for(let selectedItem of props.selectedItems){
      total = total + (selectedItem.quantity * selectedItem.product.price)
    }
    return total;
  };

  const subTotalAmount = (selectedItem) => {
    return selectedItem.quantity * selectedItem.product.price;
  };
  return (
    <div className="my-5">
      <h2>Cart</h2>
      <div>
        <table>
          <Row className='fw-bold'>
            <Col>Name</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
            <Col>SubTotal</Col>
            <Col></Col>
          </Row>
        {props.selectedItems.map((item) => {
          return (
            <Row>
              <Col>{item.product.productName}</Col>
              <Col>{item.product.price}</Col>
              <Col>{item.quantity}</Col>
              <Col>{subTotalAmount(item)}</Col>
              <Col>
                <button
                onClick={() => {
                  props.removeFromCart(item.product.id);
                }}
                >Remove</button>
              </Col>
            </Row>
          );
        })}
        </table>
      </div>
      <Row className='fw-bold'>Total: {totalamount()}</Row>
    </div>
  );
}
