/**
 * @typedef {Object} EmployeeProp
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} address
 * @property {Date} startedDate
 * @property {string} phoneNumber
 * @property {number} salary
 * @property {Date} dateOfBirth
 */

class Employee {
  /**
   * @param {EmployeeProp} config
   */
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
