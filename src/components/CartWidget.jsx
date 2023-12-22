import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const { countCart, toggleCart, cartVisible } = useContext(CartContext);

    const click = (e) => {
        e.stopPropagation();
        toggleCart();
    };


    console.log('cartVisible', cartVisible);

    return (
        <div>
            <button onClick={click}>
                <div className="relative">
                    <div className="absolute bottom-0 left-4">
                        <p className="flex h-4 w-3 items-center justify-center font-semibold rounded-full bg-red-500 p-1.5 text-xxs text-white">{countCart()}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(107 114 128)" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </div>
            </button>
        </div>
    )
}
