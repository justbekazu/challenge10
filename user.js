const inquirer = require("inquirer");
const fs = require("fs");

const 

const startApp = function() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'first name',
        message: 'What is your first name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your last name!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'last name',
        message: 'What is your last name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your last name!');
            return false;
          }
        }
      },    
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'list',
        name: 'what is your employement status',
        message: 'what is your employment status',
        choices: ['full time employee', 'part time employee', 'intern']
      },

      {
        type: 'input',
        name: 'email address',
        message: 'Provide your email address:'
      }
    ]);
  };

startApp();
        // const pageHTML = generatePage(portfolioData);
        // fs.writeFile('./index.html', pageHTML, err => {
        // if (err) throw new Error(err);