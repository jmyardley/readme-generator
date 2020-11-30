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
                choices: ['BSD', 'MIT', 'GPL'],
            },

        ]);


const generateHTML = (answers) => '';

promptUser()
.then((answers) => writeFile('index.html', generateHTML(answers)))
.then(() => console.log('Successfully wrote to index.html'))
.catch((err) => console.error(err));

