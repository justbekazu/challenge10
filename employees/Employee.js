const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");
const engineer = require("../employees/engineer");
const intern = require("../employees/intern");
const Choices = require("inquirer/lib/objects/choices");
const startApp = require("../user");

function Employee(managerName, employeeIdManager, emailAddressManager, officeNumber) {
    this.managerName = managerName;
    this.employeeId = employeeIdManager;
    this.emailAddress = emailAddressManager;
    this.officeNumber = officeNumber;
}

inquirer
.prompt([
{
  type: "text",
  name: "managerName",
  message: "What is your manager's name?",
  validate: managerName => {
    if (managerName) {
        return true;
      }
      else {
        console.log("Please enter your name!");
       return false;
    }
    }
    },
  

{
type: "text",
name: "employeeIdManager",
message: "What is their emoployee ID?",
validate: employeeIdManager => {
    if (employeeIdManager) {
        return true;
      }
      else {
        console.log("Please enter their employee id!");
       return false;
    }
    }
    },


{
type: "text",
name: "emailAddressManager",
message: "What is their email address?",
validate: emailAddressManager => {
if (emailAddressManager) {
    return true;
  }
  else {
    console.log("Please enter their email address!");
   return false;
}
}
},


{
type: "text",
name: "officeNumber",
message: "What is their office number?",
validate: officeNumber => {
    if (officeNumber) {
        return true;
      }
      else {
        console.log("Please enter their office number!");
       return false;
    }
    }
    },


{
type: "list",    
name: "typeOfEmployment",
message: "Please select your type of employment",
choices: ["engineer", "intern"],
validate: (emailAddressManager) => {
    if (emailAddressManager) {
        return true;
      }
      else {
        console.log("Please enter your email address!");
       return false;
    }
    }
    },




{
type: "confirm",
name: "addAnother",
message: "Would you like to add another employee?",
validate: addAnother => {
    if (addAnother) {
        startApp();
      }
      else {
        console.log("let's see the HTML");
       return false;
    }
    }
    },

])

.then((answer) => {
console.log(answer);
});




module.exports = Employee;