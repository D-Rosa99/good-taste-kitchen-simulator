/**
 * @typedef {Object} MenuItemProp
 * @property {number} id
 * @property {string} recipe
 * @property {string} name
 * @property {number[]} [products=[]]
 * @property {boolean} [hasDiscount=false]
 * @property {number} [discountPercentage=0]
 * @property {number} price
 */

class MenuItem {
  /**
   * @param {MenuItemProp} config
   */
  constructor({
    id,
    recipe,
    name,
    products = [],
    hasDiscount = false,
    discountPercentage = 0,
    price,
  }) {
    this.id = id;
    this.recipe = recipe;
    this.name = name;
    this.products = products;
    this.hasDiscount = hasDiscount;
    this.discountPercentage = discountPercentage;
    this.price = price;
  }
}

export default MenuItem;
