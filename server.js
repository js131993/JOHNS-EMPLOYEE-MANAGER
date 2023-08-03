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
    message: "Who is the future employee's manager?"
  }
];

const addDepartment[
  {
    
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


inquirer.prompt(mainMenuQuestions).then((choices) => {
  console.log(choices.choicesMainMenu)
  const expr = choices.choicesMainMenu;
  switch (expr) {
    case "View All Employees":
    //   db.query(sql, params, (err, result) => {
    // if (err) {
    //   res.status(400).json({ error: err.message });
    //   return;
    //   //checking error message first we would return a success method if we switched order....
    // // }
    // res.json({
    //   message: 'success',
    //   data: body
    // });
      console.log("View All Employees");
      break;
    
    case "Add Employee":
      break;
    
    case "Update Employee Role":
      break;
    
    case "View All Roles":
      console.log("View All Roles")
      break;
    
    case "Add Role":
      break;
    
    case "View All Departments":
      console
      break;
    
    case "Add Department":
      break;
    
    case "Quit":
      console.log("You have exited the emmployee database. ");
      process.exit();
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

});


// const



//when updating you must make a new variable
