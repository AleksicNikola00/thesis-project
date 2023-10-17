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
 * @typedef ProductPage
 * @property {Product[]} content Slice of products for the selected page
 * @property {boolean} last True if the page is last one
 * @property {number} totalPages Number of total pages
 * @property {number} totalElements  Total number of products
 */

/**
 * @param {'clothes' | 'shoes'} productType
 * @param {number} pageNum
 * @param {string} brands
 * @returns {Promise<ProductPage>} A promise to the BrandMap list
 */
export const getProducts = async (productType, pageNum, brands) => {
  const pageSize = 20;
  const response = await axios.get(url, {
    params: {
      productType,
      pageNum,
      pageSize,
      brands,
    },
  });
  return response.data;
};

/**
 * @param {'clothes' | 'shoes'} productType
 * @param {number} pageNum Page number used for pagination
 * @param {string} criteria Search criteria
 * @param {number} [pageSize=5] Element per page, default value is 5
 * @returns {Promise<ProductPage>} A promise to the BrandMap list
 */
export const searchProducts = async (pageNum, criteria, pageSize = 5) => {
  const response = await axios.get(`${url}/search`, {
    params: {
      pageNum,
      pageSize,
      criteria,
    },
  });

  return response.data;
};
