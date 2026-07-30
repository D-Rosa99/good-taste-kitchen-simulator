/**
 * @typedef {Object} MenuConfig
 * @property {string} id
 * @property {string} name
 * @property {Date} creationDate
 * @property {string} description
 * @property {number} price
 * @property {string[]} name
 * @property {boolean} [hasDiscount=false]
 * @property {number} [discountPercentage=0]
 */

class Menu {
  /**
   * @param {MenuConfig} config
   */
  constructor({
    id,
    name,
    creationDate,
    description,
    price,
    recipe = [],
    hasDiscount = false,
    discountPercentage = 0,
  }) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.description = description;
    this.price = price;
    this.recipe = recipe;
    this.hasDiscount = hasDiscount;
    this.discountPercentage = discountPercentage;
  }
}

export default Menu;
