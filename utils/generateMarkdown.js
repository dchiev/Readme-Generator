// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  # Installation 

  To install necessary dependencies, run the following command:

  ${data.dependencies}
  
  ## Usage 

  ${data.know}

  ## License

  ${data.license}

  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following command: 

  ${data.tests}

  ## Questions

  If you have any questions about the repo, contact me directly at ${data.email}. You can find more of my work at github.com/${data.name}
`;
}

module.exports = generateMarkdown;
