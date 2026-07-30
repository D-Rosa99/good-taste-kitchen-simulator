import OrderStatus from '../constant/orderStatus.js';
import PaymentMethods from '../constant/paymentMethods.js';

const VALID_STATUSES = Object.values(OrderStatus);
const VALID_PAYMENT_METHODS = Object.values(PaymentMethods);

/**
 * @typedef {Object} OrderProp
 * @property {number} id
 * @property {OrderStatus} orderStatus
 * @property {Date} date
 * @property {string} note
 * @property {number} price
 * @property {PaymentMethods} paymentMethod
 * @property {number} employeeId
 * @property {number[]} [menuItems=[]]
 * @property {number} customerId
 */

class Order {
  /**
   * @param {OrderProp} config
   */
  constructor({
    id,
    orderStatus,
    date,
    note,
    price,
    paymentMethod,
    employeeId,
    menuItems = [],
    customerId,
  }) {
    if (!VALID_STATUSES.includes(orderStatus)) {
      throw new Error(
        `Invalid order status "${orderStatus}". Must be one of: ${VALID_STATUSES.join(', ')}`
      );
    }
    if (!VALID_PAYMENT_METHODS.includes(paymentMethod)) {
      throw new Error(
        `Invalid payment method "${paymentMethod}". Must be one of: ${VALID_PAYMENT_METHODS.join(', ')}`
      );
    }

    this.id = id;
    this.orderStatus = orderStatus;
    this.date = date;
    this.note = note;
    this.price = price;
    this.paymentMethod = paymentMethod;
    this.employeeId = employeeId;
    this.menuItems = menuItems;
    this.customerId = customerId;
  }
}

export default Order;
