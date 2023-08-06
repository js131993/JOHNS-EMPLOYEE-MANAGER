INSERT INTO departments (department_name)
VALUES ("SALES" ),
       ( "ENGINEERING" ),
       ( "FINANCE" ),
       ( "LEGAL" );

INSERT INTO roles (title, department_id, salary)
VALUES ( "Sales Lead", 1 , 10000),
       ( "Salesperson", 1, 70000),
       ( "Lead Engineer", 2, 800000),
       ( "Software Engineer", 2, 75000),
       ( "Account Manager", 3, 90000),
       ( "Accountant", 3, 60000),
       ( "Legal Team Lead", 4, 150000),
       ( "Lawyer", 4, 170000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Harvard" , 1, null),
       ("Johnnie", "Bravo" , 3, null),
       ("Scooby", "Doo" , 4, 1),
       ("William", "Shakespeare", 7, 3),
       ("Harry", "Potter" , 5, 2),
       ("Ryan", "Gosling" , 3, 4),
       ("Will", "Smith" , 5, null);
       


