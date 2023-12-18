
import data from "../../JSON/products.json"

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(data.plants)
    })
}
