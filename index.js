// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const markdown = require('./generateMarkdown')
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
            name: "content",
            type: "checkbox",
            message: "List your table of contents",
            choices: ["[Installation](#Installation) \n", "[Usage](#Usage) \n", "[Collaboration](#Collaboration) \n", "[Links](#Links) \n", "[License](#License) \n ", "[Test](#Test)", "[Questions](#Questions)"]
        },
        {
            name: "install",
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?",
        },
        {
            name: "usage",
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
        {
            name: "license",
            type: "list",
            message: "Pick your license",
            choices: ["MIT", "Mozilla", "Unlicense"],
        },
        {
            name: "test",
            type: "input",
            message: "Write any tests for your application",
        },
        {
            name: "questions",
            type: "input",
            message: "Github profile name and email address:",
        },
    ]).then((answer) => {
        console.log(answer.title, answer.description, answer.content, answer.install, answer.usage, answer.collab, answer.links, answer.license, answer.test, answer.questions);

        fs.writeFile("Readme.md", markdown({ ...answer }), (err) => err ? console.log(err) : console.log("Success"))
    });