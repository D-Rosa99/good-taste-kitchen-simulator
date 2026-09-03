class Order {
  constructor({
    id,
    orderStatus,
    employeeId,
    orderDetails,
  }) {
    this.id = id;
    this.orderStatus = orderStatus;
    this.totalPrice;
    this.orderDetails = orderDetails;
  }

  calculateTotalPrice = () => {}
}

export default Order;
