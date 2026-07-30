import ProductType from './ProductType.js';

/**
 * @typedef {Object} ProductConfig
 * @property {string} id
 * @property {string} name
 * @property {Date} expiredDate
 * @property {string} description
 * @property {number} price
 * @property {string} productType
 * @property {string} providerId
 * @property {number} amount
 * @property {Date} purchaseDate
 */

class Product {
  /**
   * @param {ProductConfig} config
   */
  constructor({
    id,
    name,
    expiredDate,
    description,
    price,
    productType,
    providerId,
    amount,
    purchaseDate,
  }) {
    this.id = id;
    this.name = name;
    this.expiredDate = expiredDate;
    this.description = description;
    this.price = price;
    this.productType = productType;
    this.providerId = providerId;
    this.amount = amount;
    this.purchaseDate = purchaseDate;
  }
}

export default Product;
