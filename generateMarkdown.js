// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if(license === 'Mozilla')
  return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  else (license === 'Unlicense') 
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
  ${data.description}

  ## Table of Contents 
  
  * [[Installation](#Installation)
  * [Usage](#Usage)
  * [Collaboration](#Collaboration)
  * [Links](#Links)
  * [License](#License)
  * [Test](#Test)
  * [Questions](#Questions)

  ## Installation 
  
  ${data.install}

  ## Usage 
  
  ${data.usage}

  ## Collaboration 
  
  ${data.collab}

  ## Links 
  
  ${data.links}

  ## License 
  
  ${data.license}

  ${renderLicenseBadge(data.license)}

  ## Tests 
  
  ${data.test}

  ## Questions 
  
  If you need to contact me for anything, below my email and Github accounts are linked:

  ${data.questions}

  https://github.com/${data.questionsOne}
 
`;
}

module.exports = generateMarkdown;
