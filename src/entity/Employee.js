class Employee {
  constructor({
    id,
    firstName,
    lastName,
    address,
    startedDate,
    phoneNumber,
    salary,
    dateOfBirth,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.startedDate = startedDate;
    this.phoneNumber = phoneNumber;
    this.salary = salary;
    this.dateOfBirth = dateOfBirth;
  }
}

export default Employee;
