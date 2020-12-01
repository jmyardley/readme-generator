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
    `The title of this project is ${answers.title}.\n\n\nDescription: \n${answers.description}\n\nInstallation instructions: \n${answers.installation}\n\nUsage information: \n${answers.usage}\n\nContribution guidelines: \n${answers.contribution}\n\nTest instructions: \n${answers.test}\n\nLicense: ${answers.license}`;

promptUser()
    .then((answers) => writeFile('readme.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));

