import React from "react";
import { useState } from 'react';
import { Button } from '@mui/material';

export default function ItemCount({ initial, items, onAdd }) {
  
  const [count, setCount] = useState(initial)
  const [stock, setStock] = useState(items)
  
  const removeCount = () => {
    if(count > 1){
      setCount( prev => prev - 1 )
    }
  }

  const addCount = () => {
    if(count < stock ){
      setCount( prev => prev + 1 )
    }
  }

  const addProd = () => {
    if(count <= stock ){
      setStock ( stock - count )
    }
    else {
      alert('no hay tanto stock')
    }
  }

  return (
    <>
      <div className="item-count-container"> 
        <div className="item-count">
          <Button onClick={removeCount}>-</Button>
            <span>{count}</span>
          <Button onClick={addCount}>+</Button>
        </div>
        <div className="item-actions">
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
        <small> Stock disponible {stock} </small>
        </div>
      </div>
    </>
  );

  }