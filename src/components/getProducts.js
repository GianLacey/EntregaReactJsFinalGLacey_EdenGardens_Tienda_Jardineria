
import data from "../../JSON/products.json"

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(data.plants)
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
