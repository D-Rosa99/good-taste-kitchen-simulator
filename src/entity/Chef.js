import Employee from './Employee.js';

/**
 * @typedef {import('./Employee.js').EmployeeProp} EmployeeProp
 * @typedef {EmployeeProp & { cookingExperience: number }} ChefProp
*/

class Chef extends Employee {
  /**
   * @param {ChefProp} config
  */
  constructor({ cookingExperience, ...employeeProps }) {
    super(employeeProps);
    this.cookingExperience = cookingExperience;
  }
}

export default Chef;
