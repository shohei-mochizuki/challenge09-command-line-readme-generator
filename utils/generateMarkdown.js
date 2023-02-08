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
  if (license !== null){
    return renderLicenseBadge(license) + renderLicenseLink(license)
  } else {
    return ""
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseSection(data.license)}

## DESCRIPTION 
${data.descripton}

## INSTALLATION 
${data.installation}

## USAGE 
${data.usage}

## CONTRIBUTION 
${data.contribution}

## TEST 
${data.test}

## QUESTION 
${data.github}

## CONTACT
${data.email}
`;
}

module.exports = {
  generateMarkdown
};
