import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from '../../contexts/CartContext'

export default function Cart() {
    const {cartItems} = useContext(CartContext);
    const [totalPrice, SetTotalPrice] = useState(0);
    useEffect( () => {
      let total = 0;
      cartItems.forEach(item => {
        total += item[0].price;
      })
      SetTotalPrice(total);
    },[cartItems])
    console.log(cartItems);
    return ( 
      <>
      <ul>
        {cartItems.map((item) => (
          
          <>
          <ul>
          <li>{item[0].title}</li>
          <li>{item[0].price}</li>
          </ul>
          </>
        ))}
        </ul>
        <div>
          <p>Total price:{totalPrice}</p>
        </div>
      </>
    );
  }