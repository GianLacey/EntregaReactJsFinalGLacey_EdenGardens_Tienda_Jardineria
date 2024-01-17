import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export const ItemListContainer = ({ productType }) => {
    const [products, setProducts] = useState([]); //inicializo la varianle products, como un array vacio, y con setProducts que es una funcion actualizo el estado

    useEffect(() => { //uso useEfect para hacer operaciones asincronicas despues de que cambia la dependencia del productType
        const fetchProducts = async () => { //funcion para obtener los productos de la base de datos
            try {
                //consultas a firestore a traves de funciones de la biblioteca de firestore
                const productsRef = collection(db, "products"); //es una consulta que hace referencia a la coleccion nombrada products

                const querySnapshot = await getDocs(productsRef); //getdoc obtiene todos los documentos en la coleccion referida
                
               
                const data = querySnapshot.docs.map((doc) => ({ //es un array que contiene los documentos de la colección. Con map transformo cada documento en un objeto que contiene el id del doc y sus datos
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
            <ItemList products={products} productType={productType}/>
        </div>
    );
};
