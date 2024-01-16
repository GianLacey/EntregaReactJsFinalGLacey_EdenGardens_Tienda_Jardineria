import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export const ItemListContainer = ({ productType }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsRef = collection(db, "products");
                const querySnapshot = await getDocs(productsRef);
    
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
    
                console.log("Todos los productos:", data);
    
                // Filtrar los datos según el productType
                const filteredData = data[0][productType].map(item => ({
                    ...item,
                    productType: item.type // Agrego el tipo como una propiedad al objeto filtrado
                  }));
    
                console.log(`Productos filtrados para ${productType}:`, filteredData);
    
                setProducts(filteredData); // Actualizar el estado con los datos filtrados
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
    
        fetchProducts();
    }, [productType]);
    

    return (
        <div>
            <ItemList products={products} productType={productType} />
        </div>
    );
};
