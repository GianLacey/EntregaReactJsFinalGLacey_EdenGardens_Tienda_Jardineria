import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    const list = "flex text-xxs font-segoeui text-sm/[17px] uppercase ml-2";
    const listItem = "mr-1 pr-1 border-r-[1px] border-gray-500";

    const navInfo = ["Sobre nosotros", "Contacto", "Sucursales", "Servicios", "Sustentable"];
    const navShop = ["Plantas", "Semillas y Plantines", "Masetas", "Herramientas y Maquinas"];

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

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const scrollFixed = () => {
            const scrollPosition = window.scrollY || window.pageXOffset;
            setIsFixed(scrollPosition >= 228)
        }
        window.addEventListener("scroll", scrollFixed);

        return () => {
            window.removeEventListener("scroll", scrollFixed);
        }
    }, []);

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
                                        className={`${listItem} text-gray-200 capitalize mr-1 ${index === navInfo.length - 1 ? 'border-none' : 'border-r-[1px]'}`}
                                    >
                                        <Link to={`/${quitarEspacios(item.toLowerCase())}`}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="p-5 flex border-b-[1px] w-full border-green-fluo/30">
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
                    <div className={`flex flex-1 items-center gap-8 sm:justify-start w-full bg-white ${isFixed ? "fixed top-0 z-50 transition delay-1000 duration-1000 ease-in-out" : ""}`}>
                        <h2 className={`ml-11 font-monserrat font-bold text-green-primary ${isFixed ? "block" : "hidden"}`}>EDEN GARDENS</h2>
                        <ul className={`${list} mb-4 mt-4`}>
                            {navShop.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${listItem} text-gray-500 pr-2 mr-2 capitalize ${index === navShop.length - 1 ? 'border-none' : 'border-r-[1px]'}`}
                                >
                                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-1 justify-end me-3 items-center mb-1">
                            <CartWidget></CartWidget>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
