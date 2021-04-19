const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");
const engineer = require("../employees/engineer");
const intern = require("../employees/intern");
const Choices = require("inquirer/lib/objects/choices");

function Employee(managerName, employeeId, emailAddress, officeNumber) {
    this.managerName = managerName;
    this.employeeId = employeeId;
    this.emailAddress = emailAddress;
    this.officeNumber = officeNumber;
}

const employeeArray = ["engineer", "intern"]

inquirer
.prompt([
{
  type: "text",
  name: "managerName",
  message: "What is your manager's name?"
},

{
type: "text",
name: "employeeId",
message: "What is your emoployee ID?"
},

{
type: "text",
name: "emailAddress",
message: "What is your email address?"
},

{
type: "text",
name: "officeNumber",
message: "What is your office number?"
},

{
type: "checkbox",    
name: "typeOfEmployment",
message: "Please select your type of employment",
choices: employeeArray
},



{
name: "addAnother",
type: "confirm",
message: "Would you like to add another employee?"
}
])

.then((answer) => {
console.log(answer);
});




module.exports = Employee;