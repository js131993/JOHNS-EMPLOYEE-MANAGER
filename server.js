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

const addEmployeeQuestion = [
  {
    name: "addEmployeeQuestion",
    choices: "list",
    message: "Would you like to add an employee?",
    choices: ["YES", "NO"],
  },
];

const addDepartmentQuestion = [
  {
    name: "addDepartmentQuestion",
    choices: "list",
    message: "Would you like to add a department?",
    choices: ["YES", "NO"],
  },
];

const departmentAdded = [
  {
    name: "departmentAdded",
    type: "checkbox",
  },
];

const updateEmployeeRole = [
  {
    name: "updateEmployeeRole",
    choices: "list",
    message: "Would you like to update and employee role?",
    choices: ["YES", "NO"],
  },
];

const viewAllroles = [
  {
    name: "viewAllroles",
    choices: "list",
    message: " Would you like to view all roles?",
    choices: ["YES", "NO"],
  },
];

inquirer.prompt(mainMenuQuestions).then((choices) => {
  console.log(choices.choicesMainMenu)
  const expr = choices.choicesMainMenu;
  switch (expr) {
    case "View All Employees":
      console.log("view all employess selected");
      break;
    case "Add Employee":
      
      break;
    case "Update Employee Role":

      break;
    case "View All Roles":

      break;
    case "Add Role":

      break;
    case "View All Departments":

      break;
    case "View All Departments":

      break;
    case "Quit":
      console.log('You have exited the emmployee database. ')
      process.exit()
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

});


// const



//when updating you must make a new variable
