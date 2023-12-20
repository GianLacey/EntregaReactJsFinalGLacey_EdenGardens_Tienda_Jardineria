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
            <p className="uppercase ml-2 font-franklin text-center text-2xl text-green-primary">{props.greeting}</p>

            <ItemList products = {products}/>

        </div>

    )
}