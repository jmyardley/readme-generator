const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter description: ',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Enter installation instructions: ',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Enter usage information: ',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Enter contribution guidelines: ',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'Enter test instructions: ',
                name: 'test',
            },
            {
                type: 'list',
                message: 'Choose License: ',
                name: 'license',
                choices: ['BSD', 'MIT', 'GPL', 'WTFPL'],
            },
            {
                type: 'input',
                message: 'Enter Github username: ',
                name: 'github',
            },
            {
                type: 'input',
                message: 'Enter email: ',
                name: 'email',
            },

        ]);


const generateReadme = (answers) =>
    `The title of this project is ${answers.title}.\n\n![badge](https://img.shields.io/badge/License-${answers.license}-brightgreen)\n\nDescription: \n${answers.description}\n\nContents: [Installation](#Installation)|[Usage](#Usage)|[Contribution](#Contribution)|[Test](#Test)|[License](#License)|[Contact](#Contact) \n\n##Installation\n\n Installation instructions: \n${answers.installation}\n\n##Usage\n\n Usage information: \n${answers.usage}\n\n##Contribution\n\n Contribution guidelines: \n${answers.contribution}\n\n##Test\n\n Test instructions: \n${answers.test}\n\n##License\n\n This project is licensed under ${answers.license} rules.\n\n##Contact\n\n Contact: \nGithub: https://github.com/${answers.github} \nEmail: ${answers.email}`;

promptUser()
    .then((answers) => writeFile('readme.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));

