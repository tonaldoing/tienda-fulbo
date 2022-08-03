import React from 'react';
import { useCartContext } from '../../../contexts/CartContext';

export default function ItemCart({ product }) {
    console.log(product)
    const {removeProduct} = useCartContext();
    return (
        <>
        <div>
            <img src={product.image} alt={product.title} />
        </div>
        <div>
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            <p>{product.quantity * product.price}</p>
            <button onClick={()=>removeProduct(product.id)}>Quitar del carrito</button>
        </div>
        </>
    )
}