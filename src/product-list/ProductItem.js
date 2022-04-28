import React, {useState} from 'react'
import {Row} from "react-bootstrap"

export default function ProductItem(props) {
    console.log(props.product);

    const [quantity, setQuantity] = useState(1)
  return (
    <Row>
        <div>{props.product.productName}</div>
        <div>{props.product.price}</div>
        <div>
            <input 
            type="number"
            value={quantity}
            min="1"
            onChange={(event)=>{
                setQuantity(event.target.value)
            }}
            ></input>
            <button
            onClick={() => {
                console.log("Add to cart", props.product, quantity);
                props.addToCart(props.product, quantity);
            }}>Add to Cart</button>
        </div>
    </Row>
  );
}


