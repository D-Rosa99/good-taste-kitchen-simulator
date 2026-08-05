class Chef extends Employee {
  constructor({ cookingExperience, ...employeeProps }) {
    super(employeeProps);
    this.cookingExperience = cookingExperience;
  }
}

export default Chef;
