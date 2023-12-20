import { useEffect, useState } from "react";
import { getProductById } from "../components/getProducts.js";
import { ItemDetails } from "../components/ItemDetails";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        getProductById(Number(id))
            .then((res) => {
                setProduct(res);
            });
    }, [id])


    return (
        <div className="block  mt-10">

            {product && <ItemDetails product = {product}/>}

        </div>

    )
}