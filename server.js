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


async function promptUpdateEmployeeRoleQuestions(db) {
  let roles = await readRoles(db);
  let employees = await readEmployees(db);
  let updateEmployeeRoleQuestions = [
    {
      name: "pickEmployee",
      type: "list",
      message: "Select the employee you would like to update.",
      choices: employees.map((e) => ({ name: e.name, value: e.id })),
    },
    {
      name: "updatedRole",
      type: "list",
      message: "Select the employee's new role in the company.",
      choices: roles.map((r) => ({ name: r.title, value: r.id })),
    },
  ];

  let answers = await inquirer.prompt(updateEmployeeRoleQuestions);
  console.log(answers);
}


async function promptAddDepartmentQuestions(db) {
  let departments = await readDepartments(db);
  let addDepartmentQuestions = [
    {
      name: "department",
      type: "input",
      message: "Please enter the name of the new department.",
    },
  ];
  let answers = await inquirer.prompt(addDepartmentQuestions);
}






