/**
 * @typedef {Object} ProviderConfig
 * @property {string} id
 * @property {string} name
 * @property {string} phoneNumber
 * @property {string} email
 * @property {string} address
 */

class Provider {
  /**
   * @param {ProviderConfig} config
   */
  constructor({ id, name, phoneNumber, email, address }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }
}

export default Provider;
