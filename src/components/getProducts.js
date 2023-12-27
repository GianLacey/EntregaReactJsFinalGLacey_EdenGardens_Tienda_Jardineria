
import data from "../../JSON/products.json"

export const getProducts = (productType) => {
    return new Promise((resolve, reject) => {
        if(data.hasOwnProperty(productType)){
            resolve(data[productType]);
        } else {
            reject(new Error(`Tipo de producto no válido: ${productType}`));
        }
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.plants.find((el) => el.id === id);

        if(item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
} 

