// Return all departments from the Database.
async function readDepartments(db) {
  const sql = `SELECT * from departments`;
  const [rows] = await db.execute(sql);
  return rows;
}

// Add department to the Database.
async function createDepartment(db, role) {
  const sql = ``;
  await db.execute(sql);
  // No return
}

module.exports = { readDepartments, createDepartment };
