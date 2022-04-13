const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Tests creating the role of an intern", () => {
  const intern = new Intern();
  expect(intern.getRole()).toBe("Intern");
});

test("Test showing the school for the intern", () => {
  const intern = new Intern("Dave", "15", "email@email.com", "Harvard");
  expect(intern.getSchool()).toBe("Harvard");
});
