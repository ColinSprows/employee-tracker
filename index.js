// DEPENDENCIES
const mysql = require('mysql2')
const inquirer = require("inquirer")
const consoleTable = require("console.table");

// DB CONNECTION
const db = mysql.createConnection({
    user: "root",
    password: "6666",
    database: "employee_db",
    host: "localhost",
},
console.log("db connected")
)

db.connect(function(err) {
    if (err) throw err;
    initPrompt();
})

// DATA

// FUNCTIONS
    //functions for inquirer

function quit() {
    db.end();
    process.exit();
}


function viewAllDepartments() {
    db.query(`SELECT * FROM department`, (err, result) => {
        if (err) throw err;
        console.table(result);
        initPrompt();
    });
}

function viewAllRoles() {
    db.query(`SELECT * FROM role`, (err, result) => {
        if (err) throw err;
        console.table(result);
        initPrompt();
    });
}

function viewAllEmployees() {
    db.query(`SELECT * FROM employee`, (err, result) => {
        if (err) throw err;
        console.table(result);
        initPrompt();
    });
}

function addADepartment() {
    inquirer
        .prompt({
            type: "input",
            message: "Please enter new department name",
            name: "departmentName"
        })
        .then(function(answer){
            db.query(`INSERT INTO department (name) VALUES (?)`, [answer.departmentName]), 
            (err, response) => {
                if (err) throw err;
                console.table(response) 
            }
            initPrompt();
        })
}

function addARole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please select a role name",
                name: "roleName"
            },
            {
                type: "input",
                message: "Please enter the salary for this role",
                name: "salary"
            },
            {
                type: "input",
                message: "Please enter the department that this role is in",
                name: "departmentName"
            }
        ])
        .then(function(answer) {
            db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [answer.roleName, answer.salary, answer.departmentName]), 
            (err, response) => {
                if (err) throw err;
                console.table(response)
            }
            initPrompt();
        })
}

function addAnEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter first name",
                name: "firstName"
            },
            {
                type: "input",
                message: "Enter last name",
                name: "lastName"
            },
            {
                type: "input",
                message: "Enter role",
                name: "role"
            },
            {
                type: "input",
                message: "Enter manager id",
                name: "manager"
            }
        ])
        .then(function(answer) {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answer.firstName, answer.lastName, answer.role, answer.manager]), 
            (err, response) => {
                if (err) throw err;
                console.table(response)
            }
            initPrompt();
        })
}

function updatAnEmployeeRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter an employee to update",
                name: "employee"
            },
            {
                type: "input",
                message: "Enter employees new role",
                name: "newRole"
            },
        ])
        .then(function(answer) {
            db.query(`UPDATE employee SET role_id=? WHERE first_name= ?`, [answer.employee, answer.newRole]), 
            (err, response) => {
                if (err) throw err;
                console.table(response)
            }
            initPrompt();
        })
}

// APP / PORT
const PORT = process.env.PORT || 3001;

// MIDDLEWARE

// ROUTES

// START THE APP
function initPrompt() {
    inquirer
        .prompt({
            name: "init",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        })
        .then(function(answer) {
            console.log("You chose: " + answer.init);
            // add functions for each choice above and initialize on select
            switch (answer.init) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addADepartment();
                    break;
                case "Add a role":
                    addARole();
                    break;
                case "Add an employee":
                    addAnEmployee();
                    break;
                case "Update an employee role":
                    updatAnEmployeeRole();
                    break;
                default:
                    quit();
            }
            // call functions above in FUNCTIONS
        })
}

// INIT