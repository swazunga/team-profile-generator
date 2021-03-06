const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an engineer GitHub link", () => {
  const engineer = new Engineer("Dave", "15", "email@email.com", "github");
  expect(engineer.getGithub()).toBe(
    `<a href="https://www.github.com/github">github</a>`
  );
});

test("creates an engineer", () => {
  const engineer = new Engineer();
  expect(engineer.getRole()).toBe("Engineer");
});
