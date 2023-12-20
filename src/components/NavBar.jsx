import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const list = "flex text-xxs font-segoeui text-sm/[17px] uppercase ml-2";
    const listItem = "mr-1 pr-1 border-r-[1px] border-gray-500";

    const navInfo = ["Sobre nosotros", "Contacto", "Sucursales", "Servicios", "Sustentable"];
    const navShop = ["Plantas", "Semillas", "Masetas", "Herramientas", "Maquinas"];

    const [isSearchFocused, setIsSearchFocused] = useState(false);

    function quitarEspacios(texto) {
        return texto.replace(/\s/g, '');
    }

    const handleFocus = () => {
        setIsSearchFocused(true);
    };

    const handleBlur = () => {
        setIsSearchFocused(false);
    };

    return (
        <div>
            <header className="bg-gray-50">
                <div className="">
                    <div className="flex items-center p-1 bg-green-primary">
                        <div className="max-w-2xl mx-auto">
                            <form>
                                <label className="mb-2 text-xxs font-medium text-gray-100 sr-only dark:text-gray-300">Search</label>
                                <div className="relative">
                                    <input
                                        id="search"
                                        className={`block p-1 pl-2 w-full text-xxs bg-gray-50 rounded-lg border border-gray-100 focus:bg-lime-700 focus:border-lime-700 dark:bg-transparent dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-700 dark:focus:outline-lime-700 dark:focus:border-lime-700 ${isSearchFocused ? 'pr-8' : 'pr-2'}`}
                                        placeholder="Buscar"
                                        required
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    <div className="flex absolute inset-y-0 right-0 items-center pr-1 pointer-events-none">
                                        {isSearchFocused ? (
                                            <svg className="w-4 h-5 text-gray-500 dark:text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-5 text-gray-500 dark:text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                            <ul className={list}>
                                {navInfo.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${listItem} text-gray-200 ${index === navInfo.length - 1 ? 'border-none' : 'border-r-[1px]'}`}
                                    >
                                        <Link to={`/${quitarEspacios(item.toLowerCase())}`}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="p-5 flex border-b-[1px] w-full border-lime-700/40">
                        <div>
                            <Link to='/'><img className="w-28" src="../src/assets/logos/eden_gardens_logo.webp" alt="logo-page" /></Link>
                        </div>

                        <div className="flex flex-1 items-center justify-between sm:justify-end font-segoeui me-12 text-gray-500 font-medium text-xsmed">
                            <div className="me-4">
                                <img className="w-5 mx-auto mb-2" src="../src/assets/icons/whatsapp-logo-2449.svg" alt="wsp" />
                                <p>2326-353453</p>
                            </div>
                            <div>
                                <img className="w-5 mx-auto mb-2" src="../src/assets/icons/instagram-logo-8869.svg" alt="intagram" />
                                <p>@company</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-8 sm:justify-start ">
                        <ul className={`${list} mb-4 mt-5`}>
                            {navShop.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${listItem} text-gray-500 ${index === navShop.length - 1 ? 'border-none' : 'border-r-[1px]'}`}
                                >
                                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-1 justify-end me-3 items-center mb-1">
                            <div className="relative">
                                <div className="absolute bottom-0 left-4">
                                    <p className="flex h-4 w-3 items-center justify-center font-semibold rounded-full bg-red-500 p-1.5 text-xxs text-white">2</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(107 114 128)" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
