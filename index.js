const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const path = require("path");
const generateMarkup = require("./generateMarkup");

let teamArray = [];

// Need to apply something that will not allow duplicate IDs

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

const engineerQs = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
  },
];

const internQs = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's employee ID #?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init() {
  inquirer.prompt(questions).then((answers) => {
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
      console.log(answer);
      if (answer.addAnother === "Engineer") {
        inquirer.prompt(engineerQs).then((answers) => {
          const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          teamArray.push(engineer);
          askForNext();
        });
      }
      if (answer.addAnother === "Intern") {
        inquirer.prompt(internQs).then((answers) => {
          const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          teamArray.push(intern);
          askForNext();
        });
      } else {
        writeToFile("TeamPage.html", generateMarkup(teamArray), function (err) {
          if (err) throw err;
        });
      }
    });
  }
}

init();
