import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext();

const cartStart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(cartStart);

    const addCart = (product, count) => {

        const productAdd = { ...product, count };

        const newCart = [...cart];

        const inCart = newCart.findIndex((prod) => prod.type === productAdd.type && prod.title === productAdd.title);

        if (inCart !== -1) {
            newCart[inCart].count += count;
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


    const [cartVisible, setCartVisible] = useState(false);

    const toggleCart = () => setCartVisible(!cartVisible);
    
    
    const closeCart = () => setCartVisible(false);
    
    useEffect(() => {
        const outsideClick = (event) => {

            const cartContainer = event.target.closest('.cart-container');

            if(!cartContainer) {
                closeCart();
            }
        };
        document.addEventListener('click', outsideClick);

        return () => {
            document.removeEventListener('click', outsideClick);
        }
    }, [cartVisible, closeCart])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={
            {
                cart,
                addCart,
                countCart,
                totalPrice,
                clearCart,
                cartVisible,
                toggleCart,
                closeCart
            }
        }>
            {children}
        </CartContext.Provider>

    )
}
