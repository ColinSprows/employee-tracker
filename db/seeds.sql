-- department seed
INSERT INTO department (name)
VALUES ("Legal")

-- role seed
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Guy", 69420, 1)

-- employee seed
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Legal", "Guy", 1, 1)
