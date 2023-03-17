// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "location",
    message: "Where is your current location?",
  },
  {
    type: "input",
    name: "bio",
    message: "Tell us a little bit about yourself",
  },
  {
    type: "input",
    name: "LinkedIn URL",
    message: "Please enter your LinkedIn URL",
  },
  {
    type: "input",
    name: "GitHub URL",
    message: "Please enter your GitHub URL",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
