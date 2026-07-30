import Role from '../constant/role';

const VALID_ROLES = Object.values(Role);

/**
 * @typedef {Object} EmployeeProp
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} address
 * @property {Date} startedDate
 * @property {Role} role
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
    role,
    phoneNumber,
    salary,
    dateOfBirth,
  }) {
    if (!VALID_ROLES.includes(role)) {
      throw new Error(
        `Invalid role "${role}". Must be one of: ${VALID_ROLES.join(', ')}`
      );
    }

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.startedDate = startedDate;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.salary = salary;
    this.dateOfBirth = dateOfBirth;
  }
}

export default Employee;
