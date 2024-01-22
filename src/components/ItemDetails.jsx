import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

export const ItemDetails = ({ product }) => {

    const { cart, addCart } = useContext(CartContext);

    console.log(cart);

    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            count > 1 && setCount((prev) => prev - 1);
        }
    };



    return (
        <div>
            <div className="sm:container 2xl:mx-auto lg:py-0 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex justify-center lg:flex-row flex-col gap-8">
                    <div className=" w-full sm:w-96 md:w-8/12  lg:w-4/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                        <div className=" w-full lg:w-9/12 bg-white flex justify-center items-center">
                            <img src={product.thumbnail} alt="Preview" />
                        </div>
                        <div className=" w-full lg:w-24 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                            <div className="bg-white w-full flex justify-center items-center py-4">
                                {product.thumbnail ? (
                                    <img src={product.thumbnail} alt="preview 1" />
                                ) : (
                                    <span>No hay imagen disponible</span>
                                )}
                            </div>
                            <div className="bg-white w-full flex justify-center items-center py-4">
                                {product.images[0] ? (
                                    <img src={product.images[0]} alt="preview 2" />
                                ) : (
                                    <img src={product.thumbnail} alt="preview 2" />
                                )}

                            </div>
                            <div className="bg-white w-full flex justify-center items-center py-4">
                                {product.images[1] ? (
                                    <img src={product.images[1]} alt="preview 3" />
                                ) : (
                                    <img src={product.thumbnail} alt="preview 3" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-96 md:w-8/12 lg:w-4/12">
                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-500 mt-0">{product.title}</h2>

                        <p className=" font-normal text-base leading-6 text-gray-500 mt-0"></p>
                        <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 text-gray-600 leading-5 mt-6 ">${product.price}</p>

                        <div className="lg:mt-11 mt-10">
                            <div className="flex flex-row justify-between">
                                <p className=" font-medium text-base leading-4 text-gray-500">Selecciona la cantidad</p>
                                <div className="flex">
                                    <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                        -
                                    </span>

                                    <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />

                                    <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>

                            <p className="font-semibold text-xl flex items-center justify-between pr-4 leading-5 text-gray-800 lg:mt-8 mt-9">Caracteristicas <img className='w-10' src="https://www.svgrepo.com/show/414047/plant.svg" alt="plant" /></p>
                            <p className="text-normal text-base leading-6 text-gray-600 mt-4">{product.description}</p>
                        </div>
                        <button onClick={() => { addCart(product, count) }} className="focus:outline-none focus:ring-2 hover:bg-green-fluo focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-green-primary w-full py-5 lg:mt-4 mt-6">Confirmar compra</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
