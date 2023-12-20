import React, { useState } from 'react'

export const ItemDetails = ( {product} ) => {
    
    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

  return (
    <div>
       <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Description Div --> */}

                
                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src={product.thumbnail} alt="plant"/>
                    </div>
                    <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div className="bg-gray-100 flex object-contain w-full h-full justify-center items-center p-0">
                            <img src={product.thumbnail} />
                        </div>
                        <div className="bg-gray-100 flex object-contain w-full h-full justify-center items-center p-0">
                            <img src={product.images[0]} />
                        </div>
                        <div className="bg-gray-100 flex object-contain w-full h-full justify-center items-center p-0">
                            <img src={product.images[1]} />
                        </div>
                    </div>
                </div>
                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{product.title}</h2>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7"></p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">$ 790.89</p>

                    <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
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

                    <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">Add to cart</button>
                </div>

                {/* <!-- Preview Images Div For larger Screen--> */}

            </div>
            <div className="flex  justify-center items-center w-full">
                <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                    <div>
                        <img className='w-16' src="https://www.svgrepo.com/show/414047/plant.svg" alt="plant" />
                        <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Caracteristicas</p>
                        <p className="text-normal text-base leading-6 text-gray-600 mt-4">{product.description}</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}
