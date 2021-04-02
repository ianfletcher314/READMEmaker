// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const {generateMarkdown} = require('./utils/generateMarkdown');
const { title } = require('process');
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
        message: 'Please enter your table of contents',
        name: 'tableOfContents',
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
            "GPLv2"
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('README.html', process.argv[2], (err) =>
    //     err ? console.error(err) : console.log('Success!')
    //     );
}

// TODO: Create a function to initialize app
function init() {
    console.log("init function running")
    inquirer
        .prompt(questions)
        .then((data) => {
            const title = `${data.title}`;
            console.log(data)

            fs.writeFile(`${title}.html`, JSON.stringify(data, null, '\t'), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });
            
    
    }

// Function call to initialize app
init();
