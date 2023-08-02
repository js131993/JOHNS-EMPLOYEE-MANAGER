INSERT INTO departments (department_name)
VALUES (" SALES"),
       ( "ENGINEERING" ),
       ( "FINANCE" ),
       ( "LEGAL" ),

INSERT INTO roles (title, department_id, salary)
VALUES ( "Sales Lead", 1 , 10000),
       ( "Salesperson", 1, 70000),
       ( "Lead Engineer", 2, 800000),
       ( "Software Engineer", 2, 75000),
       ( "Account Manager", 3, 90000),
       ( "Accountant", 3, 60000),
       ( "Legal Team Lead", 4, 150000),
       ( "Lawyer", 4, 170000);

INSERT INTO view_all_employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Harvard" , 1),
       ("Johnnie", "Bravo" , 3),
       ("Scooby", "Doo" , 3),
       ("William", "Shakespeare" , 7),
       ("Harry", "Potter" , 5),
       ("Ryan", "Gosling" , null),
       ("Will", "Smith" , null),
       


