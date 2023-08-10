// Return all employees from the Database.
async function readEmployees(db) {
  const sql = `SELECT 
    e.id,  
    CONCAT(e.first_name, ' ', e.last_name) name, 
    r.title,
    r.Salary,
    d.department_name department,
    CONCAT(m.first_name, ' ', m.last_name) manager 
    FROM employees e 
    JOIN roles r ON r.id = e.role_id
    JOIN departments d ON d.id = r.department_id
    LEFT JOIN employees m ON m.id = e.manager_id `;
  const [rows] = await db.execute(sql);
  return rows;
}

// Update an Employee's Role in the Database.
async function updateEmployeeRole(db, employeeId, employeeRole) {
  const sql = ``;
  await db.execute(sql);
  // Update does not return anything. We are not selecting any data from the DB. Just updating.
}

// Add new Employee to Database.
//insert is used for creating records in a table for sql
async function createEmployee(db, employee) {
  const sql = `
  INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES(?, ?, ?, ?);`;
    //????  mysql inputs parameters and the ? are placeholders
  await db.execute(sql, [
    employee.firstName,
    employee.lastName,
    employee.role,
    employee.manager,
  ]);
    //second parameter is an array of values, these are the values that are going into ? placeholder
  // Create does not return anything. We are not selecting any data from the DB. Just adding.
}

module.exports = { readEmployees, updateEmployeeRole, createEmployee };
