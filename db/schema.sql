DROP DATABASE IF EXISTS employee_info_db;
CREATE DATABASE employee_info_db;

USE employee_info_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
);