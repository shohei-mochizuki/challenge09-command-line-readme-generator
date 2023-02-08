// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      break;
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
      break;
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
      break;
    case null:
      return ""
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT": 
      return "(https://opensource.org/licenses/MIT)"
      break;
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GPL":
      return "(https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case null:
      return ""
      break;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT": 
      return "(https://opensource.org/licenses/MIT)"
      break;
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GPL":
      return "(https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case null:
      return ""
      break;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## DESCRIPTION 
${data.descripton}


## TABLE OF CONTENTS



## INSTALLATION 
${data.installation}


## USAGE 
${data.usage}


## LICENSE 
${renderLicenseSection(data.license)}


## CONTRIBUTION 
${data.contribution}


## TESTS 
${data.test}


## QUESTIONS 
If you have any questions, please feel free to reachout to me!
GitHub page: ${data.github}
Email: ${data.email}
`;
}

module.exports = {
  generateMarkdown
};
