// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const ask = [{
    type: 'input',
    name: 'projectTitle',
    message: 'What is your projects name?'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['Mit', 'Apache', 'GNU', 'Mozilla']

},
{
    type: 'input',
    name: 'description',
    message: 'Discription:'
},
{
    type: 'input',
    name: 'tableOfContents',
    message: 'Table of contents'
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage Information:'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Test instructions:'
},
{
    type: 'input',
    name: 'questions',
    message: 'Any questions?'
}

];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(ask)
        .then(answers => {
            const renderLicenseBadge = (license) => {
                if (license === 'Mit') {
                    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                }

                if (license === 'Apache') {
                    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                }

                if (license === 'GNU') {
                    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                }

                if (license === 'Mozilla') {
                    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                }
            }

            const { projectTitle, description, tableOfContents, installation, usage, license, contributing, tests, questions } = answers

            return `
# ${projectTitle} 
This project is licensed under the ${license} license
${renderLicenseBadge(license)}
## Description
${description}
## Table of Contents 
${tableOfContents}
## Installation 
${installation}
         
##  Usage
${usage}
                      
## Contributing 
${contributing}
         
## Tests
${tests}
         
## Questions 
${questions}`

        })
        .then(data => {fs.writeFileSync('YOURREADME.md', data )
        console.log("Success! Your README has been created!")})
        
        
}

// Function call to initialize app
init();



