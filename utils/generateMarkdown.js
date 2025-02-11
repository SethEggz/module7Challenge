// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'GNU GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case'Apache':
      return 'https://spdx.org/licenses/Apache-2.0.html';
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'GNU GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    default:
      return '';
  }
}
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  return `## License
  ${license} license.  
  ${licenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
 

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## Contribution
${data.contributionGuidelines}

## Testing
${data.testingInstructions}

## Questions
- GitHub username: ${data.username}
- GitHub link: https://github.com/${data.username}
- For additional questions, email me at ${data.email}

## Badges
 ${licenseBadge}


${licenseSection}`;

};

renderLicenseBadge(license);
renderLicenseLink(license);
export default generateMarkdown;
