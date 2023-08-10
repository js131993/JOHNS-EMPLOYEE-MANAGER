// Return all roles from the Database.
async function readRoles(db) {
  const sql = `SELECT r.id, title, salary, department_name department FROM roles r
    JOIN departments d ON r.department_id = d.id`;
  const [rows] = await db.execute(sql);
  return rows;
}

// Add role to the Database.
async function createRole(db, role) {
  const sql = ``;
  await db.execute(sql);
  // No return
}

module.exports = { readRoles, createRole };
