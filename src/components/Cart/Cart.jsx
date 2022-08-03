import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import ItemCart from './ItemCart/ItemCart';

export default function Cart() {

  const {cartItems, totalPrice } = useCartContext();
    
  if (cartItems.length === 0 ){
    return(
      <>
        <p>No hay nada loco</p>
        <Link to="/"> Ir a la tienda </Link>
      </>
    )
  } 
  return(
    <>
      {
        cartItems.map( product => <ItemCart key={product.id} product={product}/> )
      }
    </>
  )

  }