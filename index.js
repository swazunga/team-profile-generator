const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

let teamArray = [];

const questions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the manager's id?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "What is the manager's office number?",
  },
];

const question2 = [
  {
    type: "list",
    name: "addAnother",
    message: "Would you like to add another employee?",
    choices: ["Engineer", "Intern", "No more"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOffice
  );
  console.log(manager);
  teamArray.push(manager);
  askForNext();
});

function askForNext() {
  inquirer.prompt(question2).then((answer) => {
    console.log(answers);
    if ((answer = "Engineer")) {
      inquirer.prompt(EngineerQs);
    }
    if ((answer = "Intern")) {
      inquirer.prompt(InternQs);
    } else {
      return;
    }
  });
}
