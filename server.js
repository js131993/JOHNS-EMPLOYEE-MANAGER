const mysql = require('mysql2');
const inquirer = require("inquirer");

//create connection only takes one argument (object)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "allemployee_db",
});

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
      "Quit",
    ],
  },
];
//the questions can not be defined in the global scope(move these to their functions)
function viewEmployees() {
  const sql = "SELECT * from employees";
  db.query(sql, null, (err, result) => {
    if (err) {
      console.log("errors");
      return;
    }
    return result;
  });
}

//having trouble building function
function addEmployee() {
  let roles = viewRoles();
  let allEmployees = viewEmployees();
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
      choices: [null, ...allEmployees],
      //... is a spread operator, taking employees and sticking into array, allowing you to make more choices... it can be null and allow more choices
    },
  ];
  inquirer
    .prompt(addEmployeeQuestions)
    //prompt returns a promise and that's why we can change,
    //make sure library supports terminology
    .then((answers) => {
      //answers will have information for addEmployeeQuestions which will be used for the add employees table
      /*
      let const employeeNew ={
        firstName: answers.firstName,
        lastName: answers.lastName,
        role: answer.role
      }
      let manager =  answers.manager;
      db.employees.update(())


      */
      console.log(answers);
    })
   .catch((error) => {
    if (error.isTtyError) {
      console.log("Error")
    } else {
      console.log("This function works")
    }
  })
  
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

function updateEmmployeeRole() {
  let roles = viewRoles();
  let employees = viewEmployees();
  let updateEmployeeRoleQuestions = [
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
    },
  ];
  inquirer
    .prompt(updateEmployeeRoleQuestions)
    //prompt returns a promise and that's why we can change,
    //make sure library supports terminology
    .then((answers) => {
      //answers will have information for addEmployeeQuestions which will be used for the add employees table
      /*


      */
      console.log(answers);
    })
   .catch((error) => {
    if (error.isTtyError) {
      console.log("Error")
    } else {
      console.log("This function works")
    }
  })
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

function addDepartment (){
  let departments = viewDepartments();
  let addDepartmentQuestions = [
  {
    name: "department",
    type: "input",
    message: "Please enter the name of the new department.",
  },
  ];
  inquirer
    .prompt(addDepartmentQuestions)
    //prompt returns a promise and that's why we can change,
    //make sure library supports terminology
    .then((answers) => {
      //answers will have information for addEmployeeQuestions which will be used for the add employees table
      /*

      */
      console.log(answers);
    })
   .catch((error) => {
    if (error.isTtyError) {
      console.log("Error")
    } else {
      console.log("This function works")
    }
  })
}
//calling existing functions

//using switch so that if then does not need to be used constantly in the
inquirer.prompt(mainMenuQuestions).then((choices) => {
  const expr = choices.choicesMainMenu;
  switch (expr) {
    case "View All Employees":
      viewEmployees();
      console.log("View all employees.");
      break;

    case "Add Employee":
      addEmployee();
      console.log("Adding an employee.");
      break;

    case "Update Employee Role":
      updateEmployeeRole();
      console.log("Update employee role.");
      break;

    case "View All Roles":
      viewRoles();
      console.log("View All Roles");
      break;

    case "Add Role":
      updateEmmployeeRole();
      console.log("Add role to employee");
      break;

    case "View All Departments":
      viewDepartments();
      console.log("View All Departments");
      break;
    //all take in arguments
    case "Add Department":
      addDepartment();
      console.log("Adding department.");

      break;
    case "Quit":
      break;
  }
}).catch(error => console.log(error));



process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});
//use above for any error that