// Return all roles from the Database.
async function readRoles(db) {
  const sql = `SELECT r.id, title, salary, department_name department FROM roles r
    JOIN departments d ON r.department_id = d.id`;
  const [rows] = await db.execute(sql);
  return rows;
}

// Add role to the Database.
async function createRole(db, role) {
  const sql = `INSERT INTO roles (title, department_id, salary) VALUES(?, ?, ?)`;
  await db.execute(sql, [role.title, role.departmentId, role.salary]);
  // No return
}

module.exports = { readRoles, createRole };
