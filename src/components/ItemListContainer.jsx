import { useEffect, useState } from "react";
import { getProducts } from "./getProducts";
import { ItemList } from "./ItemList";


export const ItemListContainer = ({ productType }) => {

    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        getProducts(productType)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [productType])


    return (
        <div>
            
            <ItemList products = { products } productType={ productType }/>

        </div>

    )
}