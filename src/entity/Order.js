class Order {
  constructor({
    id,
    orderStatus,
    date,
    price,
    employeeId,
    recipe,
    customerId,
  }) {
    this.id = id;
    this.orderStatus = orderStatus;
    this.date = date;
    this.price = price;
    this.employeeId = employeeId;
    this.dishName = dishName;
    this.customerId = customerId
  }
}

export default Order;
