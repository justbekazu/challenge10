const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

const team = [[], [], []];

let menuPick = "";
function nextPrompt() {
  switch (menuPick) {
    case "Add an" + " ENGINEER" + " to my team":
      engineerInfo();
      break;
    case "Add an" + " INTERN" + " to my team":
      internInfo();
      break;
    case "Add another" + " ENGINEER" + " to my team":
      engineerInfo();
      break;
    case "Add another" + " INTERN" + " to my team":
      internInfo();

    default:
      writeFileAsync("./dist/profile.html", generateHTML(team)).then(() =>
        console
          .log(" New HTML file successfully generated! ")

          .catch((err) => console.log(" Oops, there was an error... ", err))
      );
  }
}

// function validateFirstName(firstName) {
//   if (name.length <= 20 && name.length > 0) {
//     return true;
//   }
//   return ("Must be between 1-20 characters (inclusive)");
// }
function validateName(name) {
  if (name.length <= 20 && name.length > 0) {
    return true;
  }
  return "Must be between 1-20 characters (inclusive)";
}

function validateNumber(number) {
  if (/^[0-9]+$/.test(number)) {
    return true;
  }
  return "numbers only";
}

function validateEmail(email) {
  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
    return true;
  }
  return "Please input a valid email address";
}

function validateGithub(github) {
  if (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(github)) {
    return true;
  }
  return "Please input a valid GitHub username";
}

const managerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Team manager " + "name" + " (1-20 characters):",
        validate: validateName,
      },
      {
        type: "input",
        name: "managerId",
        message: "Team manager " + "employee ID" + ":",
        validate: validateNumber,
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Team manager " + "email" + ":",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Team manager " + "office number" + ":",
        validate: validateNumber,
      },
      {
        type: "list",
        name: "menu",
        message:
          "--------- Menu --------- \nChoose one of the following options:",
        choices: [
          {
            name: "Add an" + " ENGINEER" + " to my team",
          },
          {
            name: "Add an" + " INTERN" + " to my team",
          },
          {
            name: "Finished",
          },
        ],
      },
    ])
    .then((answers) => {
      menuPick = answers.menu;
      const manager = new Manager(
        answers.managerName,
        parseInt(answers.managerId),
        answers.managerEmail,
        parseInt(answers.managerOfficeNumber)
      );
      team[0].push(manager);
      nextPrompt();
    });
};

const engineerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Engineer" + " name" + " (1-25 characters):",
        validate: validateName,
      },
      {
        type: "input",
        name: "engineerId",
        message: "Engineer" + " employee ID" + ":",
        validate: validateNumber,
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer" + " email" + ":",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Engineer" + " GitHub username" + ":",
        validate: validateGithub,
      },
      {
        type: "list",
        name: "menu",
        message:
          "--------- Menu --------- \nChoose one of the following options:",
        choices: [
          {
            name: "Add another" + " ENGINEER" + " to my team",
          },
          {
            name: "Add an" + " INTERN" + " to my team",
          },
          {
            name: "Finished",
          },
        ],
      },
    ])
    .then((answers) => {
      menuPick = answers.menu;
      const engineer = new Engineer(
        answers.engineerName,
        parseInt(answers.engineerId),
        answers.engineerEmail,
        answers.engineerGithub
      );
      team[1].push(engineer);
      nextPrompt();
    });
};

const internInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Intern" + " name" + " (1-25 characters):",
        validate: validateName,
      },
      {
        type: "input",
        name: "internId",
        message: "Intern" + " employee ID" + ":",
        validate: validateNumber,
      },
      {
        type: "input",
        name: "internEmail",
        message: "Intern" + " email" + ":",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "internSchool",
        message: "Intern" + " school" + ":",
      },
      {
        type: "list",
        name: "menu",
        message:
          "--------- Menu --------- \nChoose one of the following options:",
        choices: [
          {
            name: "Add an" + " ENGINEER" + " to my team",
          },
          {
            name: "Add another" + " INTERN" + " to my team",
          },
          {
            name: "Finished",
          },
        ],
      },
    ])
    .then((answers) => {
      menuPick = answers.menu;
      const intern = new Intern(
        answers.internName,
        parseInt(answers.internId),
        answers.internEmail,
        answers.internSchool
      );
      team[2].push(intern);
      nextPrompt();
    });
};

managerInfo();
