
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer")

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "db",
  },
  console.log(`Connected to the movies_db database.`)
);

// No middleware because it is not a server application(such as APIs)

//I need this code, runs for every request and response

//npm i inquirer@8.2.4 --save... must use to save library
const mainMenuQuestions = [
  {
    name: "choicesMainMenu",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "View All Employees",
      "Quit",
    ],
  },
]; 

inquirer.prompt(mainMenuQuestions).then((choices) => {
  console.log(choices.choicesMainMenu)
  const expr = choices.choicesMainMenu;
  switch (expr) {
    case "View All Employees":
      console.log("view all employess selected");

      break;
    case "Add Employee": ''
      break;
    case "View All Roles":
      break;
    case "Add Role":
      break;
    case "View All Departments":
      break;
    case "Add Department":
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

});
// There are a when property for something is true...(look at it later)

//hardcore roles into information/questions
const addEmployeeQuestion = [
  {
    name: "addEmployeeQuestion",
    choices: "list",
    message: "Would you like to add an employee?",
    choices: ["YES", "NO"],
  }
];
//need to 
const addDepartmentQuestion = [
  {
    name: "addDepartmentQuestion",
    choices: "list",
    message: "Would you like to add a department?",
      choices: ["YES", "NO"],
  }
]

const departmentAdded = [
  {
    name: "departmentAdded",
    type: 'checkbox',


  }
]

const updateEmployeeRole = [
      {
    name: "updateEmployeeRole",
    choices: "list",
    message: "Would you like to update and employee role?",
      choices: ["YES", "NO"],
  }

]

// const

const viewAllroles = [
  {
    name: "viewAllroles",
    choices: "list",
    message: " Would you like to view all roles?",
      choices: ["YES", "NO"]
  }
]

//when updating you must make a new variable
