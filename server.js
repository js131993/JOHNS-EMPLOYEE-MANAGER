
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer")

// No middleware because it is not a server application(such as APIs)

//I need this code, runs for every request and response

//npm i inquirer@8.2.4 --save... must use to save library
const mainMenuQuestions = [
  {
    name: "choicesMainMenu",
    choices: "list",
    message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role","View All Roles", "Add Role", "View All Departments", "Add Department", "View All Employees","Quit"],
    },
]; 
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

const updateEmployeeRole = [
      {
    name: "updateEmployeeRole",
    choices: "list",
    message: "Would you like to update and employee role?",
      choices: ["YES", "NO"],
  }

]

//when updating you must make a new variable
