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
export const getBrands = async (productType) => {
  const response = await axios.get(`${url}/brands`, {
    params: {
      productType,
    },
  });
  return response.data;
};

/**
 * @typedef Product
 * @property {string} brand Product's brand name
 * @property {string} model Product's model name
 * @property {'SHOES' | 'CLOTHES'} type Product type
 * @property {string} imgUrl Product's image url
 * @property {number} id Product's unique identifier
 */

/**
 * @param {'clothes' | 'shoes'} productType
 * * @param {number} pageNum
 * @returns {Promise<Product[]>} A promise to the BrandMap list
 */
export const getProducts = async (productType, pageNum) => {
  const pageSize = 20;
  const response = await axios.get(`${url}`, {
    params: {
      productType,
      pageNum,
      pageSize,
    },
  });
  return response.data;
};
