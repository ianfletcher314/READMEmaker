// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
var licences = {
	MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
	Apache: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
	none: ``,
  GPLv2: `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const title = `${data.title}`;
    return(`# ${data.title}
${licences[data.license]}
## Table of Contents
 1. [Description](#Description)
 2. [Instalation](#Instalation)
 3. [Usage](#Usage)
 4. [Contributing](#Contributing)
 5. [Tests](#Tests)
 6. [Questions](#Questions)
 7. [License](#License)
## Description
${data.description}  
## Instalation
${data.instalation}
## Usage
${data.usage}  
## Contributing
${data.contributing} 
## Tests
${data.tests} 
## Questions 
Please contact me at ${data.email} or visit my GitHub ${data.github}
## License
This application is protected under the ${data.license} license
  
`);
 
}
// exports this file out to index.js so it  can be used as a module
module.exports = generateMarkdown;
