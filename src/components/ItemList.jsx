import React from 'react';
import { Link } from 'react-router-dom';

export const ItemList = ({ products }) => {
    return (
        <div className='grid grid-cols-4 '>

            {products.length > 0 &&
                products.map((product) => (
                    <div key={product.id} className="mx-4 my-2 w-40 font-outfit">
                        <div className="space-y-2 h-full w-40">
                            <div className="w-auto">
                                <Link to={`/item/${product.id}`}><img className="flex-1 w-full" src={product.thumbnail} alt={product.title} /></Link>
                            </div>
                            <div className="w-full">
                                <p className="w-full text-sm text-gray-500">{product.title}</p>

                                <div>
                                    <p className="w-full pb-2 text-xsmed tracking-wide leading-tight font-bold text-gray-600">${product.price}</p>
                                </div>
                                <Link to={`/item/${product.id}`}>
                                    <div className="opacity-95 w-full h-6 bg-green-primary flex items-center justify-center">
                                        <p className="text-xxsm text-zinc-100 uppercase">agregar al carrito</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

    );
};
