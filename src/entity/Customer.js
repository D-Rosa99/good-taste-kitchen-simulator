/**
 * @typedef {Object} CustomerProp
 * @property {number} id
 * @property {string} name
 * @property {string} phoneNumber
 * @property {string} address
 * @property {number} tableNumber
 */

class Customer {
  /**
   * @param {CustomerProp} config
   */
  constructor({ id, name, tableNumber, phoneNumber = null, address = null }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.tableNumber = tableNumber;
  }
}

export default Customer;
