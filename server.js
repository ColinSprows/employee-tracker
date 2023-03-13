// DEPENDENCIES
const mysql = require('mysql2')
const inquirer = require("inquirer")
const consoleTable = require("console.table");


// DATA

// DB CONNECTION
const db = mysql.createConnection({
    user: "root",
    password: "6666",
    database: "employee_info_db",
    host: "localhost",
},
console.log("db connected")
)

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
                "a",
                "b",
                "c",
            ]
        })
        .then(function(answer) {
            console.log("You chose: " + answer.init);
        })
}

initPrompt();