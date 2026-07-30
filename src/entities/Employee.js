/**
 * @typedef {Object} EmployeeConfig
 * @property {string} id
 * @property {string} name
 * @property {Date} startedDate
 * @property {string} role
 * @property {string} phoneNumber
 * @property {number} salary
 */

class Employee {
  /**
   * @param {EmployeeConfig} config
   */
  constructor({ id, name, startedDate, role, phoneNumber, salary }) {
    this.id = id;
    this.name = name;
    this.startedDate = startedDate;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.salary = salary;
  }
}

export default Employee;
