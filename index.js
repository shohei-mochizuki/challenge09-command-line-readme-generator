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
      name: 'license_checkbox',
      choices: ["MIT", "Mozilla", "IBM"],
    },
    {
      type: 'list',
      message: 'Choose licenses?',
      name: 'license_list',
      choices: ["MIT", "Mozilla", "IBM"],
    },
    {
      type: 'rawlist',
      message: 'Choose licenses?',
      name: 'license_rawlist',
      choices: ["MIT", "Mozilla", "IBM"],
    },
  ])
  .then((response) =>
    // fs.appendFile(`${response.user_name}.txt`, JSON.stringify(response), (err) =>
    // err ? console.error(err) : console.log('Input logged!')
    console.log(response)
  );