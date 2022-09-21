import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

// LOGICA DEL CARRITO

const addProduct = (item,quantity) => {
if (inCart(item.id)) {
    setCart(cart.map(product => {
        return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
    })); 
} else {
    setCart ([...cart,{...item,quantity}])
}
};

const [cart,setCart] = useState([]);

const clearCart = () => setCart([]);

const inCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

const totalPrice = () => {
    return cart.reduce((prev,act) => prev + prod.quantity * prod.price, 0)
};

const totalProduct = () => cart.reduce((acu,currentProduct) => acu + currentProduct.quantity); 

console.log(cart);


  return (
    <div>
        <CartContext.Provider value= {{
            clearCart,
            inCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProduct
        }}>
            {children}
        </CartContext.Provider>

    </div>
  )
}

export default CartProvider