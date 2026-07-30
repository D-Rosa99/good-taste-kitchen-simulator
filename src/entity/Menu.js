/**
 * @typedef {Object} EmployeeProp
 * @property {number} id
 * @property {string} name
 * @property {Date} creationDate
 * @property {number[]} [menuItems=[]]
 * @property {string} targetSeason
 */

class Menu {
  /**
   * @param {EmployeeProp} config
   */
  constructor({ id, name, creationDate, menuItems = [], targetSeason }) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.menuItems = menuItems;
    this.targetSeason = targetSeason;
  }
}

export default Menu;
