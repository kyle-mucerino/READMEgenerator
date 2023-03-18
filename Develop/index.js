// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
let questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the command function to install necessary dependencies",
    default: "npm i"
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the command to run tests"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide info about using the repo",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide info about contributing to the repo",
  },
  {
    type: "list",
    name: "license",
    message: "What license is to be used in this project?",
    choices: ['ISC', 'CC', 'MIT', 'NCSA'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile();
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(answers){
    console.log(answers);
    fs.writeFile("README.md", generateMarkdown(answers), function(){
      console.log("README generated");
    })
  });
}

// Function call to initialize app
init();
