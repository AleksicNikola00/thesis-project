import axios from "axios";

const url = "/api/products";

/**
 * @typedef BrandMap
 * @property {string} brand Brand name
 * @property {number} count Number of available products
 */

/**
 * @param {'clothes' | 'shoes'} productType
 * @returns {Promise<BrandMap[]>} A promise to the BrandMap list
 */
export const getBrands = (productType) => {
  return axios
    .get(`${url}/brands`, {
      params: {
        productType,
      },
    })
    .then((response) => response.data);
};
