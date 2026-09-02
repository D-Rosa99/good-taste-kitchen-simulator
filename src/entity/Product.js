class Product {
  constructor({
    id,
    name,
    productType,
    unitPrice,
    measureUnit,
    ingredient,
    recipe
  }) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.productType = productType;
    this.measureUnit = measureUnit;
    this.ingredient = ingredient;
    this.recipe = recipe;
  }
}

export default Product;
