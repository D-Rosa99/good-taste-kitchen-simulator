/**
 * @typedef {Object} ClientConfig
 * @property {string} id
 * @property {string} name
 * @property {string} phoneNumber
 */

class Client {
  /**
   * @param {ClientConfig} config
   */
  constructor({ id, name, phoneNumber }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}

export default Client;
