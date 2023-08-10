// Return all departments from the Database.
async function readDepartments(db) {
  const sql = `SELECT * from departments`;
  const [rows] = await db.execute(sql);
  return rows;
}

// Add department to the Database.
async function createDepartment(db, department) {
  const sql = `INSERT INTO departments (department_name) VALUES (?);`;
  await db.execute(sql, [
    department.name,
  ]
  );
  //reminder! underscore goes with sql not javascript
  // No return
}

//These functions are being called from the switch statements.

module.exports = { readDepartments, createDepartment };
