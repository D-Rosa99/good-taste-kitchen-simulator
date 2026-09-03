class Customer {
  constructor({ id, name, phoneNumber = null, address = null }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}

export default Customer;
