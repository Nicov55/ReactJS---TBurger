import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';


// Creación de contexto

const CartContext = React.createContext([]);

// Variable para utilizar CartContext en componentes

export const useCartContext = () => useContext(CartContext)

// Creación de Provider que contendrá toda la lógica

const CartProvider = (props) => {

// Logica del carrito

const addProduct = (product,quantity) => {
if (inCart(product.id)) {
    setCart(cart.map(productInCart => {
        return productInCart.id === product.id ? {...productInCart, quantity: productInCart.quantity + quantity} : productInCart
    })); 
} else {
    setCart ([...cart,{...product,quantity}])
}
};

const [cart,setCart] = useState([]);

const clearCart = () => setCart([]);

const inCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

const totalPrice = () => {
    const copy = [...cart];
    let count = 0;
    copy.forEach (product => 
        count += product.quantity*product.price);
    return count
}

const totalProducts = () => {
    const copy = [...cart];
    let count = 0;
    copy.forEach (product => 
        count += product.quantity);
    return count
}

console.log(cart);


  return (
    <div>
        <CartContext.Provider value= {{
            // Funciones
            clearCart,
            inCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            // Estados
            cart
        }}>
            {props.children}
        </CartContext.Provider>

    </div>
  )
}

export default CartProvider