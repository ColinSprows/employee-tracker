-- department seed
INSERT INTO department (name)
VALUES 
    ("Legal"),
    ("Sales"),
    ("Superheroes"),
    ("Cheese");

-- role seed
INSERT INTO role (title, salary, department_id)
VALUES 
    ("Legal Guy", 69420, 1), 
    ("Sales Guy", 10100, 2), 
    ("Other Guy", 10000, 3), 
    ("Other Other Guy", 6666666, 4);

-- employee seed
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Legal", "Guy", 1, 1), 
    ("Colin", "Sprows", 1, 1), 
    ("Jack", "Sparrow", 1, 2), 
    ("Tom", "Arnold", 1, 3);
