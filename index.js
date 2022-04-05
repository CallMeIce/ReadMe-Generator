// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "Title Name",
        },
        {
            name: "description",
            type: "input",
            message: "Provide a short description explaining the what, why, and how of your project.",
        },
        {
            name: "steps",
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?",
        },
        {
            name: "screenshot",
            type: "input",
            message: "Provide instructions and examples for use. Include screenshots as needed.",
        },
        {
            name: "collab",
            type: "input",
            message: "List your collaborators, if any, with links to their GitHub profiles, any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
        },
        {
            name: "links",
            type: "input",
            message: "Links to the deployed and the github repo.",
        },
    ]).then((answer) => {
        console.log(answer.description, answer.steps, answer.screenshot, answer.collab, answer.links);
    
        fs.writeFile("info.txt",JSON.stringify(answer, null, '\t'), (err) => err ? console.log(err) : console.log("Success"))
    });



// const questions = {
//     // one: "Provide a short description explaining the what, why, and how of your project.",
//     // two: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
//     // three: "Provide instructions and examples for use. Include screenshots as needed.",
//     // four: "List your collaborators, if any, with links to their GitHub profiles, any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
//     // five: "Links to the deployed and the github repo.",
// }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
