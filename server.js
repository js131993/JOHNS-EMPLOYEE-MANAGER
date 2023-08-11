const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
const { readRoles, createRole } = require("./db/role");
const {
  readEmployees,
  updateEmployeeRole,
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
//Can not do anything until connection is established
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
        let answers = await promptUpdateEmployeeRoleQuestions(db);
        await updateEmployeeRole(db, answers.employeeId, answers.roleId);
        console.log("Update employee role.");
        break;
      // Get a table of all Roles in the Application.
      case "View All Roles":
        const roles = await readRoles(db);
        console.table(roles);
        break;
      // Add a new Role to the Application.
      case "Add Role":
         let roleAnswers = await promptAddRoleQuestsions(db);
         await createRole(db, roleAnswers);
         break;
      // Get a table of all Departments in the Application.
      case "View All Departments":
        const departments = await readDepartments(db);
        console.table(departments);
        break;
      // Add a new Department to the Application.
      case "Add Department":
        const department = await promptAddDepartmentQuestions(db);
        await createDepartment(db, department);
        //db is connection , you need to have department as second parameters
        console.log("Adding department.");
        break;
      case "Quit":
        process.exit();
    }
  }
}


async function promptAddEmployeeQuestions(db) {
  let roles = await readRoles(db);
  let employees = await readEmployees(db);
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
      choices: roles.map((r) => ({ name: r.title, value: r.id })),
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the future employee's manager?",
      choices: [
        { name: "No Manager", value: null },
        ...employees.map((e) => ({ name: e.name, value: e.id })),
      ],
      //... is a spread operator, taking employees and sticking into array, allowing you to make more choices... it can be null and allow more choices
    },
  ];
  let answers = await inquirer.prompt(addEmployeeQuestions);
  return answers;
}

async 

async function promptUpdateEmployeeRoleQuestions(db) {
  let roles = await readRoles(db);
  let employees = await readEmployees(db);
  let updateEmployeeRoleQuestions = [
    {
      name: "employeeId",
      type: "list",
      message: "Select the employee you would like to update.",
      choices: employees.map((e) => ({ name: e.name, value: e.id })),
      //create a new arrray, new object with name and value
      //what gets displayed in the variable is the id.
      //what you can see in the list and what gets stored
    },
    {
      name: "roleId",
      type: "list",
      message: "Select the employee's new role in the company.",
      choices: roles.map((r) => ({ name: r.title, value: r.id })),
    },
  ];
  let answers = await inquirer.prompt(updateEmployeeRoleQuestions);
  return answers;
}


async function promptAddDepartmentQuestions(db) {
  let addDepartmentQuestions = [
    {
      name: "name",
      type: "input",
      message: "Please enter the name of the new department.",
    },
  ];
  let answers = await inquirer.prompt(addDepartmentQuestions);
  return answers;
}
//answers is object






