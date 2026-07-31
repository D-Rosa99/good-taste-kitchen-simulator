/**
 * @typedef {Object} CustomerProp
 * @property {number} id
 * @property {string} name
 * @property {string} phoneNumber
 * @property {string} address
 */

class Customer {
  /**
   * @param {CustomerProp} config
   */
  constructor({ id, name, phoneNumber = null, address = null }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}

export default Customer;
