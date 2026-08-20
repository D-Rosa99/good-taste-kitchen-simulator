class OrderDetails {
  constructor({
    id,
    orderId,
    productId,
    quantity,
    unitPrice,
    processStatus,
    assignedChefId,
  }) {
    this.id = id;
    this.orderId = orderId;
    this.menuItemId = productId;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.itemStatus = processStatus;
    this.assignedChefId = assignedChefId;
  }
}

export default OrderDetails;
