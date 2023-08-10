const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
const { readRoles, createRole } = require("./db/role");
const {
  readEmployees,
  updateEmmployeeRole,
  createEmployee,
} = require("./db/employee");
const { readDepartments, createDepartment } = require("./db/department");

//create connection only takes one argument (object)
mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "allemployee_db",
  })
  .then((conn) => {
    main(conn);
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
async function viewEmployees() {
   const sql = `SELECT  CONCAT(e.first_name, ' ', e.last_name) name, r.title, CONCAT(m.first_name, ' ', m.last_name) manager FROM employees e JOIN roles r ON r.id = e.role_id LEFT JOIN employees m ON m.id = e.manager_id `;
  const [rows] = await db.execute(sql);
    return rows;
}
//this will also include a join.....


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
     console.log("error", error);
  })
  
}

async function viewRoles() {
  const sql = `SELECT r.id, title, salary, department_name department FROM roles r
JOIN departments d ON r.department_id = d.id`;
  const [rows] = await db.execute(sql);
    return rows;
}

async function updateEmployeeRole() {
  let roles = await viewRoles();
  let employees = await viewEmployees();
  let updateEmployeeRoleQuestions = [
    {
      name: "pickEmployee",
      type: "list",
      message: "Select the employee you would like to update.",
      choices: employees.map( (e) => e.name),
    },
    {
      name: "updatedRole",
      type: "list",
      message: "Select the employee's new role in the company.",
      choices: roles.map((r) => r.title),
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

async function viewDepartments() {
  const sql = `SELECT * from departments`;
  const [rows] = await db.execute(sql);
    return rows;
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
    } 
  })
}
//calling existing functions

//using switch so that if then does not need to be used constantly in the
let running = true;





function askMainQuestions() {
  inquirer
    .prompt(mainMenuQuestions)
    .then(async (choices) => {
      const expr = choices.choicesMainMenu;
      switch (expr) {
        case "View All Employees":
          const employees = await viewEmployees();
          console.table(employees);
          break;

        case "Add Employee":
          addEmployee();
          console.log("Adding an employee.");
          break;

        case "Update Employee Role":
          const updateEmployee = await updateEmployeeRole();
          console.log(updateEmployee);
          break;

        case "View All Roles":
          const roles = await viewRoles();
          console.table(roles);
          break;

        case "Add Role":
          updateEmmployeeRole();
          console.log("Add role to employee");
          break;

        //below was changed to variable and called with console.table
        case "View All Departments":
          const departments = await viewDepartments();
          console.table(departments);
          break;
        //all take in arguments
        case "Add Department":
          addDepartment();
          console.log("Adding department.");
          break;
        case "Quit":
          process.exit();
      }
      askMainQuestions();
    })
}

askMainQuestions();
//use above for any error that