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

async function main(db) {
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

  // Infinite loop until the User selects 'Quit' or force closes the Application.
  while (true) {
    let answers = await inquirer.prompt(mainMenuQuestions);
    switch (answers.choicesMainMenu) {
      // Get a table of all Employees in the Application.
      case "View All Employees":
        let employees = await readEmployees(db);
        console.table(employees);
        break;
      // Add a new Employee to the Application.
      case "Add Employee":
        let employee = await promptAddEmployeeQuestions(db);
        await createEmployee(db, employee);
        break;
      // Change an Employee's Role in the Application.
      case "Update Employee Role":
        await promptUpdateEmployeeRoleQuestions(db);
        console.log("Update employee role.");
        break;
      // Get a table of all Roles in the Application.
      case "View All Roles":
        const roles = await readRoles(db);
        console.table(roles);
        break;
      // Add a new Role to the Application.
      case "Add Role":
        await createRole(db);
        break;
      // Get a table of all Departments in the Application.
      case "View All Departments":
        const departments = await readDepartments(db);
        console.table(departments);
        break;
      // Add a new Department to the Application.
      case "Add Department":
        await createDepartment(db);
        console.log("Adding department.");
        break;
      case "Quit":
        process.exit();
    }
  }
}

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





