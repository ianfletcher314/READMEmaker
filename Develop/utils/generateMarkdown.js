// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description} 
  # Table of Contents
  ${data.tableOfContents} 
  # Instalation
  ${data.instalation}
  # Usage
  ${data.usage}  
  # Contributing
  ${data.contributing} 
  # Tests
  ${data.tests} 
  #Questions 
  Please contact me at ${data.email} or visit my GitHub ${data.github}

`;
}
// exports this file out to index.js so it  can be used as a module
module.exports = generateMarkdown;
