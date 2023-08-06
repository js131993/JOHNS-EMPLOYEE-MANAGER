const mysql = require("mysql2");
const inquirer = require("inquirer");

//create connection only takes one argument (object)
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "db",
  },
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
//the questions can not be defined in the global scope(move these to their functions)



const addDepartmentQuestions = [
  {
    name: "department",
    type: "input",
    message: "Please enter the name of the new department."
  },
];

const updateEmployeeRoleQuestions = [
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
    }
  });
}

//having trouble building function
function addEmployee () {
  // inquirer
  //   .prompt(addEmployee)
  //   .then
  let roles = viewRoles();
  let addEmployeeQuestions = [
    {
      type: "input",
      message: "What is the future employee's first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the future employee's last name?",
      name: "lastName",
    },
    {
      type: "list",
      name: "role",
      message: "What is the future employee's role in the company?",
      choices: [roles],
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the future employee's manager?",
      choices: [null, ...employees],
    },
  ];
}

  function viewRoles() {
    const sql = "SELECT * FROM roles";
    db.query(sql, null, (err, result) => {
      if (err) {
        console.log("error");
        return;
        //need the return for the console.log(error)
      }
      return result;
    });
  }

    function viewDepartments() {
      const sql = "SELECT * FROM departments";
      db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
      });
    }
//calling existing functions

      
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
      addEmployee();
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
    //all take in arguments
    case "Add Department":
      addDepartment()
      console.log("Adding department.")

      break;
    case "Quit":
      console.log("You have exited the emmployee database. ");
      process.exit();
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
}
);