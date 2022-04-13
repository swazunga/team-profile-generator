const Manager = require("../lib/Manager");

test("Test getting the role of the manager", () => {
  const manager = new Manager();
  expect(manager.getRole()).toBe("Manager");
});
