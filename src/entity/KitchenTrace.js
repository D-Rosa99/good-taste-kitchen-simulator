
class KitchenTrace {
  constructor({ orderId, createdBy, updatedBy, createAt }) {
    this.orderId = orderId;
    this.createdBy = createdBy; 
    this.updatedBy = updatedBy;
    this.createAt = createAt;
  }
}

export default KitchenTrace;
