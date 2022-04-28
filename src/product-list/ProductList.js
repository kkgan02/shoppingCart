import React from 'react'

import ProductItem from './ProductItem';

export default function ProductList(props) {
    console.log(props.products);
  return (
    <div className="my-5">
        <h2>Products</h2>
        <div>
            {props.products.map((p) => {
                return <ProductItem 
                key={p.id} 
                product={p}
                addToCart={props.addToCart}/>
            })}
        </div>
    </div>
  );
}
