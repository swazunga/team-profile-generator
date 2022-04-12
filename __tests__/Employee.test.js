const Employee = require("../lib/Employee");
console.log("test");

test("creates an employee name", () => {
  const employee = new Employee("Dave");

  expect(employee.getName()).toBe("Dave");
});
