const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");



const startApp = function() {
    return inquirer.prompt([
      {
        type: "input",
        name: User ="first name",
        message: "What is your first name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your last name!");
            return false;
          }
        }
      },
   
      {
        type: "input",
        name: "last name",
        message: "What is your last name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your last name!");
            return false;
          }
        }
      },

      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } 
          if (githubInput) {
              link="github.com/" + ("")
          }
          else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        }
      },
      
      {
        type: "list",
        name: "what is your employement status",
        message: "what is your employment status",
        choices: ["full time employee", "part time employee", "intern"]
      },

      {
        type: "input",
        name: "email address",
        message: "Provide your email address:",
        validate: emailInput => {
            if (emailInput) {
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
    message: "Would you like to enter another employee",
    default: false
  }
])
}

.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }

    

        

        // function makeHtml(Request, Response) {
        // fs.writeFile("./index.html", pageHTML, function (err, data) {
        // if (err) {
        //     Response.write("file not found");
        // } else {
        //     Request.write(data);
        //     Response.write(data);
        // };


 startApp();

 module.exports = startApp;
