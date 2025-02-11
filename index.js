// packages 
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from'./utils/generateMarkdown';
//questions
const questions = ['What is the title?','What would you like to add as a desription?','Istallation instructions?','Useage?','How to Contribute?','What tests should be run?','What is your GitHub username?', 'What is your Email address?','What license would you like to use?'];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Created')
      );
}

// function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'Title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'Description',
        message:questions[1]

      },
      {
        type:'input',
        name:'Installation',
        message:questions[2],
      },
      {
        type:'input',
        name:'contributing',
        message:questions[3],
      },
      {
        type:'input',
        name:'Tests',
        message:questions[4],
      },
      {
        type: 'input',
        name: 'GitHubUsername',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'Email',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'License',
        message: questions[7],
        choices: ['Apache', 'Boost', 'GNU GPL', 'MIT'],
      },
    ])
    .then((data) => {
      const fileName = 'README.md';
      writeToFile(fileName, data);
    });
}

// calls initialize app
init();
