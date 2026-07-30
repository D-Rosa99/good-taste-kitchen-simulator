import OrderStatus from './OrderStatus.js';
/**
 * @typedef {Object} OrderItem
 * @property {string} name
 * @property {number} quantity
 * @property {number} unitPrice
 */

/**
 * @typedef {Object} OrderConfig
 * @property {string} id
 * @property {string} [orderStatus=OrderStatus.PENDING]
 * @property {Date} date
 * @property {string} description
 * @property {string} paymentMethod
 * @property {string} employeeId
 * @property {string} clientId
 * @property {OrderItem[]} [items=[]]
 */

class Order {
  /**
   * @param {OrderConfig} config
   */
  constructor({
    id,
    orderStatus = OrderStatus.PENDING,
    date,
    description,
    paymentMethod,
    employeeId,
    clientId,
    items = [],
  }) {
    this.id = id;
    this.orderStatus = orderStatus;
    this.date = date;
    this.description = description;
    this.paymentMethod = paymentMethod;
    this.employeeId = employeeId;
    this.clientId = clientId;
    this.items = items;
  }
}

export default Order;
