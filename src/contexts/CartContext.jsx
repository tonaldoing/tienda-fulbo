import React, {createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, newQuantity) => {

        const {quantity = 0} = cartItems.find( prod => prod.id === item.id ) || {} ;
        const newCart = cartItems.filter(prod => prod.id !== item.id);
        setCartItems([...newCart, {...item, quantity: quantity + newQuantity}])

    }


    const clearCart = () => setCartItems([]);

    const isInCart = (id) => {
        return cartItems.find(item => item.id === id ) ? true : false;
    }

    const removeItem = (id) => setCartItems( cartItems.filter(item => item.id !== id ))

    return (
        <CartContext.Provider value ={{
            clearCart, 
            isInCart,
            removeItem,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;