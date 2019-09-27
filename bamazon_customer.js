<<<<<<< HEAD
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "PandaPower29!",
    database: "bamazon_db"
});

connection.connect(function(err) { // this is the callback
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        start();
    });
};

function start() {
    inquirer
        .prompt({
            name: "ID_selection",
            type: "list",
            message: "What is the ID of the product you would like to buy?",
            choices: ["1001", "1002", "1003", "1004", "1005",
                "1006", "1007", "1008", "1009", "1010"
            ]
        })
        .then(function(answer) {
            if (answer.ID_selection === "1001" || "1002" || "1003" || "1004" || "1005" ||
                "1006" || "1007" || "1008" || "1009" || "1010")
                console.log("Thank you");
            messageTwo();
        })
}

function messageTwo() {
    inquirer
        .prompt({
            name: "units",
            type: "number",
            message: "How many units of the product would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        })
        .then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "UPDATE products SET ?", {
                    stock_quantity: 2
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your order was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    afterConnection();
                }
            );
        });
=======
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "PandaPower29!",
    database: "bamazon_db"
});

connection.connect(function(err) { // this is the callback
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        start();
    });
};

function start() {
    inquirer
        .prompt({
            name: "ID_selection",
            type: "list",
            message: "What is the ID of the product you would like to buy?",
            choices: ["1001", "1002", "1003", "1004", "1005",
                "1006", "1007", "1008", "1009", "1010"
            ]
        })
        .then(function(answer) {
            if (answer.ID_selection === "1001" || "1002" || "1003" || "1004" || "1005" ||
                "1006" || "1007" || "1008" || "1009" || "1010")
                console.log("Thank you");
            messageTwo();
        })
}

function messageTwo() {
    inquirer
        .prompt({
            name: "units",
            type: "number",
            message: "How many units of the product would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        })
        .then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "UPDATE products SET ?", {
                    stock_quantity: 2
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your order was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    afterConnection();
                }
            );
        });
>>>>>>> b32eb63858f5f65f8e581c31e945f4e7c32bafd5
}