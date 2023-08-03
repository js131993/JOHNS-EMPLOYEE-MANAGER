const mysql = require("mysql2");
const inquirer = require("inquirer");
const { Query } = require("mysql2/typings/mysql/lib/protocol/sequences/Query");

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

const addEmployee = [
  {
    type: 'input',
    message: "What is the future employee's first name?",
    name: 'firstName',
  },
  {
    type: 'input',
    message: "What is the future employee's last name?",
    name: 'lastName',
  },
  {
    type: 'list',
    name: 'role',
    message: "What is the future employee's role in the company?",
    choices: [roles],
  },
  {
    type: 'list',
    name: 'manager',
    message: "Who is the future employee's manager?",
    choices: [null, ...employees]
  }
];

const addDepartment = [
  {
    name: "department",
    type: "input",
    message: "Please enter the name of the new department."
  },
];

const updateEmployeeRole = [
  {
    name: "pickEmployee",
    type: "list",
    message: "Select the employee you would like to update.",
    choices: [employees],
  },
  {
    name: "updatedRole",
    type: "list",
    message: "Select the employee's new role in the company.",
    choices: [roles],
  }
];

function viewEmployees() {
  const sql = "SELECT * from view_all_employees";
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    };

//having trouble building function
function addEmployeeFunction () {
  inquirer
    .prompt(addEmployee)
    .then
}

  function viewRoles() {
    const sql = "SELECT * FROM rolels";
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
    }
  };

  function viewDepartments() {
    const sql = "SELECT * FROM departments";
    db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
  }


      
//using switch so that if then does not need to be used constantly in the 
inquirer.prompt(mainMenuQuestions).then((choices) => {
  console.log(choices.choicesMainMenu)
  const expr = choices.choicesMainMenu;
  switch (expr) {
    case "View All Employees":
      viewEmployees();
      console.log("View all employees.");
      break;
  
    case "Add Employee":
      addEmployeeFunction();
      console.log("Adding an employee.")
      break;
    
    case "Update Employee Role":
      updateEmployeeRole();
      console.log("Update employee role.")
      break;
    
    case "View All Roles":
      viewRoles()
      console.log("View All Roles")
      break;
    
    case "Add Role":
      addRole()
      console.log("Add role to employee")
      break;
    
    case "View All Departments":
      viewDepartments()
      console.log("View All Departments")
      break;
    
    case "Add Department":
      console.log("Adding department.")
  
  
      break;
    
    case "Quit":
      console.log("You have exited the emmployee database. ");
      process.exit();
      break;
    
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

);


function viewEmployees() {

}
