/**
  * @typedef {Object} ProviderProp
  * @property {number} id
  * @property {string} name
  * @property {string} phoneNumber
  * @property {string} address
  * @property {string} email
  * @property {Date} startedDate
*/

class Provider {
  /**
   * @param {ProviderProp} config
  */
  constructor({ id, name, phoneNumber, address, email, startedDate }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.email = email;
    this.startedDate = startedDate;
  }
}

export default Provider;
