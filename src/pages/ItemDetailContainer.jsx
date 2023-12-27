import { useEffect, useState } from "react";
import { getProductById } from "../components/getProducts.js";
import { ItemDetails } from "../components/ItemDetails";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    console.log("ItemDetailContainer Rendered");

    const params = useParams();
    const { id, productType } = params;

    console.log(id);
    console.log(productType);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id && productType) {
            getProductById(Number(id), productType)
                .then((res) => {
                    setProduct(res);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [id, productType]);

    return (
        <div className="block mt-10">
            {product && <ItemDetails product={product} />}
        </div>
    );
};
