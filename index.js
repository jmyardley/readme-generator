const inquirer = require('inquirer');

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

    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );
