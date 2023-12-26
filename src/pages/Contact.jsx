import React from 'react'

export const Contact = () => {
    return (
        <div>
            <div className="relative flex justify-center sm:items-center sm:pt-0 mt-12">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 sm:rounded-lg font-thin font-monserrat">

                                <p className="text-normal text-left sm:text-2xl ">
                                    Para una respuesta mas rápida contáctanos por <a className="text-green-fluo hover:text-green-primary font-medium cursor-pointer">whatsapp.</a>
                                </p>

                                <div className="flex items-center mt-8">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide w-50">
                                        Buenos Aires, Argentina,
                                        Postal Code
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide w-40">
                                        +54 123456789
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 ">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide w-40">
                                        info@edengarden.org
                                    </div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="font-thin text-sm text-gray-500">Nombre</label>
                                    <input type="name" name="name" id="name" className="w-100 mt-2 py-1 px-3 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-green-fluo focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="font-thin text-sm text-gray-500">Email</label>
                                    <input type="email" name="email" id="email" className="w-100 mt-2 py-1 px-3 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-green-fluo focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="font-thin text-sm text-gray-500">Numero <small>(opcional)</small></label>
                                    <input type="tel" name="tel" id="tel" className="w-100 mt-2 py-1 px-3 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-green-fluo focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="font-thin text-sm text-gray-500">Mensaje <small>(opcional)</small></label>
                                    <textarea type="text" name="tel" id="tel" className="w-100 max-h-32 mt-2 py-1 px-3 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-green-fluo focus:outline-none" />
                                </div>
                                <div className='flex justify-between items-start mt-2'>
                                    <img src="https://repository-images.githubusercontent.com/24650294/4d804b80-7e39-11e9-82fe-07761d844a8c" alt="simulacro recaptcha" className='w-32' />
                                    <button type="submit" className="md:w-32 bg-green-primary hover:bg-blue-dark text-white font-bold py-2 px-6 mt-3 line hover:bg-green-fluo tracking-wider transition ease-in-out duration-300">
                                        Enviar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

