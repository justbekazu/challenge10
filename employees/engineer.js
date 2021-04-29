const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");
const Employee =require("./Employee")

function Engineer(engineerName, engineerId, emailAddress, githubUserName) {
    this.engineerName = engineerName;
    this.engineerId = engineerId;
    this.emailAddress = emailAddress;
    this.githubUserName = githubUserName;
}

inquirer
.prompt([
{
  type: "text",
  name: "engineerName",
  message: "What is your name?"
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
}

])

goBack()

module.exports = Engineer;