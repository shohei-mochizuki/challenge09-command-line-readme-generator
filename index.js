const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project briefly.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please explain about installation',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please explain how to use it',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is the guideline for contributions?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Explain how to test.',
      name: 'test',
    },
    {
      type: 'checkbox',
      message: 'Choose licenses?',
      name: 'license',
      choices: ["MIT", "Mozilla", "IBM"],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response);
    let {title, description, installation, usage, contribution, test, license, username, email} = response;
    let contents = 
    `# ${title}

## Description
${description}

## Installation
${installation}
    
    
    
    
    `;
    fs.appendFile("sample_README.md", contents, (err) =>
    err ? console.error(err) : console.log('README is successfully created!'));
  });