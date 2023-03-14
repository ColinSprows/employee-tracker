// DEPENDENCIES
const mysql = require('mysql2')
const inquirer = require("inquirer")
const consoleTable = require("console.table");

// DB CONNECTION
const db = mysql.createConnection({
    user: "root",
    password: "6666",
    database: "employee_info_db",
    host: "localhost",
},
console.log("db connected")
)

// DATA

// FUNCTIONS
    //functions for inquirer

function quit() {
    db.end();
    process.exit();
}


function viewAllDepartments() {}

function viewAllRoles() {}

function viewAllEmployees() {}

function addADepartment() {}

function addARole() {}

function addAmEmployee() {}

function updatAnEmployeeRole() {}

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
            switch (answer.option) {
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
                    addAmEmployee();
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
initPrompt();