// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "projtitle",
        message: "How do you want to name your project?",
    },

    {
        type:"input",
        name: "projdescription",
        message: "How do you want to describe your project?",
    },

    {
        type:"input",
        name: "projinstallation",
        message: "Please provide installation instructions: ",
    },

    {
        type:"input",
        name: "projusage",
        message: "Please provide how to use your project?",
    },

    {
        type: "list",
        name: "projlicense",
        message: "Please select a license for this project: ",
        choices: [
            "None",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "GNU AGP License v3.0",
            "GNU GP License v2.0",            
            "GNU GP License v3.0",
            "GNU LGP License v2.1",
            "Mozilla Public License 2.0",
        ]
    },

    {
        type:"input",
        name: "projusername",
        message: "Please provide your Github username: ",
    },

    {
        type:"input",
        name: "projemail",
        message: "Please provide your Email address: ",
    },
    
];

// Create a function to write README file
function writeToFile(fileName, data) {

}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("Readme.md",data);
    });
}

// Function call to initialize app
init();
