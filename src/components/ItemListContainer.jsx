import { useEffect, useState } from "react";
import { getProducts } from "./getProducts";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            });
    }, [])


    return (
        <div className="block  mt-10">
            <p className="uppercase text-center font-franklin text-5xl text-lime-700">{props.greeting}</p>

            <ItemList products = {products}/>

        </div>

    )
}