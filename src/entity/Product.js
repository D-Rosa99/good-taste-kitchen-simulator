class Product {
  constructor({
    id,
    name,
    unitPrice,
    amount,
    purchaseDate,
    productType,
    unitOfMeasure,
  }) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.amount = amount;
    this.purchaseDate = purchaseDate;
    this.productType = productType;
    this.unitOfMeasure = unitOfMeasure;
  }
}

export default Product;
