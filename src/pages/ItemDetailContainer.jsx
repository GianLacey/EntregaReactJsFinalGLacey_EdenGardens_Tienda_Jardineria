import { useEffect, useState } from "react";
import { ItemDetails } from "../components/ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemDetailContainer = () => {
    console.log("ItemDetailContainer Rendered");

    const params = useParams();
    const { index, productType } = params;

    console.log(index);
    console.log(productType);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                //  Creo una referencia al documento específico en la colección "products", en este caso como tengo un solo documento, me refiero a el directamente, si no, lo usaria de forma 
                // dinamica trayendolo del ItemListContainer como id del documento 
                const productsRef = doc(db, "products", "EoiK7bkC7jql6YGurdYj");
                const docSnap = await getDoc(productsRef);

                if (docSnap.exists()) {
                    // Si el documento existe, obtengo los datos
                    const productData = docSnap.data();

                    // Accedo al array específico según el tipo de producto y el índice
                    const selectedProduct = productData[productType][index];
                    
                    // Establezco el producto en el estado
                    setProduct(selectedProduct);
                } else {
                    console.log("No se encontro el producto");
                }
            } catch (error) {
                console.error("Error al buscar los datos", error);
            }
        };

        fetchProduct();
    }, [index, productType]);

    return (
        <div className="block mt-10">
            {product && <ItemDetails product={product} />}
        </div>
    );
};
