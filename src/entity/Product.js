import ProductType from '../constant/productType';

const VALID_PRODUCT_TYPES = Object.values(ProductType);

/**
 * @typedef {Object} ProductProp
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} unitPrice
 * @property {number} amount
 * @property {Date} purchaseDate
 * @property {number} providerId
 * @property {ProductType} productType
 * @property {Date} expiredDate
 */

class Product {
  /**
   * @param {ProductProp} config
   */
  constructor({
    id,
    name,
    description,
    unitPrice,
    amount,
    purchaseDate,
    providerId,
    productType,
    expiredDate,
  }) {
    if (!VALID_PRODUCT_TYPES.includes(productType)) {
      throw new Error(
        `Invalid product type "${productType}". Must be one of: ${VALID_PRODUCT_TYPES.join(', ')}`
      );
    }

    this.id = id;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.amount = amount;
    this.purchaseDate = purchaseDate;
    this.providerId = providerId;
    this.productType = productType;
    this.expiredDate = expiredDate;
  }
}

export default Product;
