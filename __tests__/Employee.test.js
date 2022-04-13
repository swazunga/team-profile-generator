const Employee = require("../lib/Employee");

test("creates an employee name", () => {
  const employee = new Employee("Dave");
  expect(employee.getName()).toBe("Dave");
});

test("creates an employee ID", () => {
  const employee = new Employee("Dave", "15");
  expect(employee.getId()).toBe("15");
});

test("creates an employee email", () => {
  const employee = new Employee("Dave", "15", "michael@email.com");
  expect(employee.getEmail()).toBe("michael@email.com");
});

test("gives the employee it's role", () => {
  const employee = new Employee();
  expect(employee.getRole()).toBe("Employee");
});
