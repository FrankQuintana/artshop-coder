import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    // aderir a cart
	const addProduct = (item, quantity) => {
	    let newCart;
	    let product = cart.find(product => product.id === item.id);
	    if (product) {
	        product.quantity += quantity;
	        newCart = [...cart];
	    } else {
	        product = { ...item, quantity: quantity };
	        newCart = [...cart, product];
	    }
	    setCart(newCart);
	}
    // precio total cart
    const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};
    //total products cart
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    // limpiar el cart
    const clearCart = () => setCart([]);
    // producto en cart
    const inCart = (id) => cart.find(product => product.id === id) ? true : false;
    // borrar cart
    const deleteProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        clearCart,
        inCart,
        deleteProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider