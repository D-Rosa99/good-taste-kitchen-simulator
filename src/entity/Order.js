import { KitchenTrace } from './KitchenTrace.js';

class Order extends KitchenTrace {
  constructor({
    id,
    orderStatus,
    employeeId,
    orderDetails,
  }) {
    super({ orderId: id, createdBy: employeeId, updatedBy: employeeId, createAt: new Date() });

    this.id = id;
    this.orderStatus = orderStatus;
    this.totalPrice;
    this.orderDetails = orderDetails;
  }

  calculateTotalPrice = () => {}
}

export default Order;
