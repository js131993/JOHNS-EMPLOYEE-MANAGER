DROP DATABASE IF EXISTS AllEmployee_db;
CREATE DATABASE AllEmployee_db;

USE AllEmployee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(50) NOT NULL
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    department_id INT,
    salary DECIMAL,
);

CREATE TABLE view_all_employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id VARCHAR(50),
    manager_id VARCHAR(50),
);