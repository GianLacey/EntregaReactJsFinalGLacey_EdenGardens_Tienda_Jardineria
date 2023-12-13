import axios from 'axios';

/**
 * @description Get products from dummtjson API 
 * @param {number} limit 
 * @returns {Promise} 
 */


export async function getProducts(limit = 10) {
    return await axios.get(`https://apimocha.com/edenapi/post?limit=${limit}`)
}  