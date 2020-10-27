const inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./generateMarkdown.js");


 // array of questions for user
 function questions() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address"
      },
      {
        type: "input",
        name: "title",
        message: "What is your project name?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
      },
      {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "know",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?"
      }
    ]);
  }
  
// function to write README file
function writeToFile("readme.md", data) {
    generateMarkdown();

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
