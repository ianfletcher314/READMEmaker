// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
console.log(generateMarkdown)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter information on the instalation of your project',
        name: 'instalation',
    },
    {
        type: 'input',
        message: 'Please enter information on the intended usage of your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter information on the intended usage of your project',
        name: 'usage',
    },
    {
        type: "list",
        message: "Please choose a license for your README!",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "GPLv2",
            "None",
        ]
    },
    {
        type: 'input',
        message: 'Please enter the contact information for the contributing developers of this project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please enter information on your TESTS',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter a link to your GitHub so people can contact you with questions',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email so people can contact you with questions',
        name: 'email',
    },
];


// TODO: Create a function to initialize app 
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            // why doesnt this work???
            var markdown = generateMarkdown(data)
            // console.log(markdown)
            const title = `${data.title}`;

            fs.writeFile(`${title}.md`, markdown, (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });
            
    
    }

// Function call to initialize app
init();
