const inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions =
  [
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
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE", "Boost", "BSD 3-Clause License", "BSD 2-Clause License"]
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
  ]


// function to write README file

/* function writeFile(fileName, data) {
    fs.writeFile ("readme.md", data, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Done! Your readme has been generated")
    })

} */



// function to initialize program
async function init() {

  const answers = await inquirer.prompt(questions);
  console.log(answers);


  switch (answers.license) {
    case 'MIT':
      console.log("You've selected MIT");
      answers.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case 'APACHE':
      console.log("You've selected APACHE");
      answers.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case 'Boost':
      console.log("You've selected Boost");
      answers.badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case 'BSD 2-Clause License':
      console.log("You've selected BSD 2-Clause License")
      answers.badge ="[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      break;
    default:
  answers.badge= ""
  }
  

// license switch case goes here. Save to answers.badge
  /*  inquirer.prompt(questions).then(function (answers){
     console.log(answers); */
  fs.writeFileSync("your-readme.md", generateMarkdown(answers));
  console.log("Done! Your readme has been generated")
}







// function call to initialize program
init();
