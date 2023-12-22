import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const { cart, totalPrice, clearCart, cartVisible, closeCart } = useContext(CartContext);

    useEffect(() => {
        const EscKey = (event) => {
            if(event.key === 'Escape') {
                closeCart();           
            }
        };
        document.addEventListener('keydown', EscKey);
        
        return () => document.removeEventListener('keydown', EscKey);

    }, [cartVisible, closeCart]);

    return (
        <div className={`z-40 ${cartVisible ? 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' : 'hidden'}`} >
            <div className={`cart-container ${cartVisible ? 'block' : 'hidden'} relative z-50`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                
                <div className="inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inset-0 overflow-hidden">
                    <div className=" inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Carrito</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" >
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul className="-my-6 divide-y divide-gray-200">
                                                    {
                                                        cart.map((prod) => (
                                                            <li key={prod.id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img src={prod.thumbnail} className="h-full w-full object-cover object-center" />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a href="#">{prod.title}</a>
                                                                            </h3>
                                                                            <p className="ml-4">${prod.price}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{prod.type}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">Cant. {prod.count}</p>

                                                                        <div className="flex">
                                                                            <button type="button" className="font-medium text-green-primary hover:text-green-fluo">Eliminar</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }


                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex justify-end text-sm">
                                        <button type="button" className="font-medium mr-6 mb-1 text-green-primary hover:text-green-fluo" onClick={clearCart}>Vaciar carrito</button>
                                    </div>


                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Total</p>
                                            <p>${totalPrice()}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar la compra.</p>
                                        <div className="mt-6">
                                            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-green-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-fluo">Confirmar</a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                o<> </>
                                                <button type="button" className="font-medium text-green-primary hover:text-green-fluo">
                                                    Continuar comprando
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
