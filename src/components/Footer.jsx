import React from 'react'

export const Footer = () => {
    return (
        <footer className="mt-52 text-center relative font-">
            <div className="absolute top-[-200px] w-full z-10">
                <div className="absolute right-20 rounded h-52 p-10 w-5/6 text-center text-white bg-green-600">
                    <h2 className="mb-8">Sumate al Newsletter</h2>
                    <div className="flex justify-center items-center">
                        <input type="text" placeholder="Nombre" className="bg-white border-none mr-2 px-3 py-4 h-4" />
                        <input type="email" placeholder="Correo electrónico" className="bg-white mr-2 px-3 py-4 border-none h-4" />
                        <button type="submit" className="flex px-3 py-4 w-52 items-center justify-center h-4 border border-gray-500 text-gray-700 rounded rounded-3 bg-transparent">
                            SUSCRIBIRSE
                        </button>
                    </div>
                </div>
            </div>

            <section className="p-16 flex text-white h-52 bg-gray-700 justify-between relative z-1">
                <div className="">
                    <h5>San Isidro</h5>
                    <p>Av. Andrés Rolón 368 <br />
                        (011) 4723.3505 <br />
                        Horarios de atención: <br />
                        Lunes a Viernes: 8.30 a 13 | 14 a 19 hs <br />
                        Sábados: 9 a 13 hs</p>
                </div>
                <div className="">
                    <h5>Contacto</h5>
                    <p>Envianos tu consulta <strong>aquí</strong></p><br />
                    <h5><a href="#">Nosotros</a></h5>
                    <p><strong>Conoce más sobre Eden Garden</strong></p>
                </div>
                <div className="">
                    <h5>Los Cardales</h5>
                    <p>Estrada 44 <br />
                        (0230) 431.9102 · 115.228.8187 <br />
                        Horarios de atención: <br />
                        Lunes a Sábado: 9 a 18 hs
                    </p>
                </div>
            </section>

            <section className="">
                <h3 className="text-green-600 text-16 pt-8 ">Arrepentimiento de compra</h3>
                <p>Iniciá tu gestión <strong><a href="#" className="text-green-600">aquí</a></strong></p>
            </section>

            <section className="bg-white p-0 40 flex items-center justify-between">
                <div className="flex">
                    <img src="https://www.svgrepo.com/show/354518/visa.svg" alt="visacard" className="m-5  w-10" />
                    <img src="https://www.svgrepo.com/show/508701/mastercard-full.svg" alt="mastercard" className="m-5  w-10 " />
                    {/* Repite este bloque según sea necesario para cada tarjeta */}
                </div>
                <div className="flex items-center">
                    <a href="#"><img src="https://www.svgrepo.com/show/452197/facebook.svg" alt="facebook" className="m-10  w-10 " /></a>
                    <a href="#"><img src="https://www.svgrepo.com/show/452231/instagram.svg" alt="instagram" className="m-10  w-10 " /></a>
                </div>
                <div className="dataFiscal">
                    <a href="#"><img src="./assest/icons/tarjetas/afip-data-fiscal.png" alt="" className="ml-150  w-40 " /></a>
                </div>
            </section>
        </footer>
    );
}
