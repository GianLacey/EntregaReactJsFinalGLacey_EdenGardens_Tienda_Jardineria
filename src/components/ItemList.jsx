import React from 'react';
import { Link } from 'react-router-dom';

export const ItemList = ({ products }) => {
    return (
        <div className='flex m-1'>

            {products.length > 0 &&
                products.map((product) => (
                    <div key={product.id} className="mx-auto w-60 my-2 p-1">
                        <div className="space-y-1 mx-auto h-full py-2 bg-gray-800 rounded-xl space-x-10">
                            <div className="w-auto">
                                <Link to={`/item/${product.id}`}><img className="flex-1 h-full px-2 rounded-t-xl" src={product.thumbnail} alt={product.title} /></Link>
                            </div>
                            <div className="w-2/3">
                                <p className="w-full text-2xl font-semibold text-white">{product.title}</p>
                                
                                <div>
                                    <p className="w-full pb-8 text-m tracking-wide leading-tight text-white">$ {product.price}</p>
                                </div>
                                <div className="rounded w-3/3">
                                    <div className="opacity-95 border rounded-lg border-white px-4">
                                        <Link to={`/item/${product.id}`}><p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">Buy now</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

    );
};
