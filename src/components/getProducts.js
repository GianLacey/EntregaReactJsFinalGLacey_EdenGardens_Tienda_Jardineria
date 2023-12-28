
import data from "../../JSON/products.json"

export const getProducts = (productType) => {
    return new Promise((resolve, reject) => {
        if (data.hasOwnProperty(productType)) {
            resolve(data[productType]);
        } else {
            reject(new Error(`Tipo de producto no válido: ${productType}`));
        }
    })
}

export const getProductById = (id, productType) => {
    return new Promise((resolve, reject) => {

        let items;

        switch (productType) {
            case 'plants':
                items = data.plants;
                break;
            case 'seeds':
                items = data.seeds;
                break;
            case 'flowerpot':
                items = data.flowerpot;
                break;
            case 'tools':
                items = data.tools;
                break;

            default:
                reject({
                    error: "tipo de producto no valido"
                })
                return;
        }

        const item = items.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}

