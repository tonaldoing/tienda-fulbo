import React, {createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {

        if (isInCart(item.id)){
            setCartItems(cartItems.map(product => {
                return product.id == item.id ? {...product, quantity: product.quantity + quantity } : product
            }));
        }else {
            setCartItems([...cartItems, {...item, quantity }]);
        }

    }

    console.log(cartItems)

    const totalPrice = () => {
        return cartItems.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => {
        return cartItems.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
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
            addItem,
            totalPrice,
            totalProducts,
            cartItems
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;