import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";


export const CartContext = createContext();

const cartStart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(cartStart);

    const addCart = (product, count) => {

        const productAdd = { ...product, count };

        const newCart = [...cart];

        const inCart = newCart.find((product) => product.id === productAdd.id);

        if (inCart) {
            inCart.count += count;
        } else {
            newCart.push(productAdd);
        }

        setCart(newCart);
    }

    const countCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={
            {
                cart,
                addCart,
                countCart,
                totalPrice,
                clearCart
            }
        }>
            {children}
        </CartContext.Provider>

    )
}