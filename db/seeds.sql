INSERT INTO departments (department_id, departmentName)
VALUES (1, " SALES"),
       (2, "ENGINEERING"),
       (3, "FINANCE"),
       (4, "LEGAL"),

INSERT INTO roles (roles_id, title, department_id, salary)
VALUES (1, "Sales Lead", 1 , 10),
       (2, "Salesperson", 1, 15),
       (3, "Lead Engineer", 2, 23),
       (4, "Software Engineer", 2, 45),
       (5, "Account Manager", 3, 50),
       (6, "Accountant", 3, 78),
       (7, "Legal Team Lead", 4, 32),
       (8, "Lawyer", 4, 78);

INSERT INTO view_all_employees (employees_id, firstName, lastName, role_id, manager_id)
VALUES (1, "John", "Harvard" , 1),
       (2, "Johnnie", "Bravo" , 3),
       (3, "Scooby", "Doo" , 3),
       (4, "William", "Shakespeare" , 7),
       (5, "Harry", "Potter" , 5),
       (6, "Ryan", "Gosling" , null),
       (7, "Will", "Smith" , null),
       


