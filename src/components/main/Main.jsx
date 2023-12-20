import React from 'react'

export const Main = () => {
    return (
        <div>

            <main className='font-franklin'>
                <section className="container-publicity relative h-96 bg-cover bg-center overflow-hidden bg-main-img">
                    <div className="text-white z-10 absolute left-10 top-10">
                        <h2 className="text-5xl uppercase">eden garden</h2>
                        <h1 className="text-2xl font-light w-2/3">Tu tienda online de confianza en jardinería, paisajismo y horticultura.</h1>
                        <p className="text-lg fontMain">Regístrate y entérate primero de las novedades.</p>
                    </div>
                    <div className="flex absolute bottom-10 left-10">
                        <button className="registro bg-white text-green-primary py-2 px-4 rounded-l">QUIERO SUSCRIBIRME</button>
                        <button className="arrow-container bg-white py-2 px-4 rounded-r">
                            <span className="arrow-icon">
                                <img src="../src/assets/icons/arrowgreen.ico.ico" alt="flecha" className="w-5" />
                            </span>
                        </button>
                    </div>
                    <div className="z-50 w-96 h-full bg-white opacity-20 absolute right-10 top-0"></div>
                </section>

                <section>
                    {/* Agrega el contenido de la segunda sección aquí */}
                </section>

                <section className="comoComprar text-center mt-20">
                    <h2 className="text-5xl text-green-primary mb-10">Cómo comprar en Eden Garden</h2>
                    <div className="containerPasos max-w-2xl mx-auto">
                        <div className="pasosComprar block justify-between">

                            <div className='flex'>
                                <div className="columna flex-1 mx-4">
                                    <h3 className="text-4xl font-bold text-green-primary mb-4">1</h3>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi doloremque nulla ullam fuga molestiae.</p>
                                </div>
                                <div className="columna flex-1 mx-4">
                                    <h3 className="text-4xl font-bold text-green-primary mb-4">2</h3>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi doloremque nulla ullam fuga molestiae.</p>
                                </div>
                                <div className="columna flex-1 mx-4">
                                    <h3 className="text-4xl font-bold text-green-primary mb-4">3</h3>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi doloremque nulla ullam fuga molestiae.</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="columna flex-1 mx-4">
                                    <h3 className="text-4xl font-bold text-green-primary mb-4">4</h3>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi doloremque nulla ullam fuga molestiae.</p>
                                </div>
                                <div className="columna flex-1 mx-4">
                                    <h3 className="text-4xl font-bold text-green-primary mb-4">5</h3>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi doloremque nulla ullam fuga molestiae.</p>
                                </div>
                                <div className="columna flex-1 mx-4">
                                    <h3 className="text-4xl font-bold text-green-primary mb-4">6</h3>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi doloremque nulla ullam fuga molestiae.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
