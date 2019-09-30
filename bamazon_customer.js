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
        .prompt([{
                name: "ID_selection",
                type: "list",
                message: "What is the ID of the product you would like to buy?",
                choices: ["1001", "1002", "1003", "1004", "1005",
                    "1006", "1007", "1008", "1009", "1010"
                ]
            },
            {
                name: "units",
                type: "number",
                message: "How many units of the product would you like to buy?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function(answer) {
            if ((answer.ID_selection === "1001") && (answer.units <= 15)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1002") && (answer.units <= 20)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1003") && (answer.units <= 1)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1004") && (answer.units <= 5)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1005") && (answer.units <= 18)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1006") && (answer.units <= 12)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1007") && (answer.units <= 25)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1008") && (answer.units <= 2)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1009") && (answer.units <= 6)) {
                console.log("Fulfilling your order...");
            } else if ((answer.ID_selection === "1010") && (answer.units <= 2)) {
                console.log("Fulfilling your order...");
            } else console.log("Insufficient stock. You snooze you lose. Order cancelled.");

        });
}

/*function readProduct(ID_selection) {
    console.log("Showing selected product information...");
    var query = connection.query(
        "SELECT * FROM products WHERE ?", [{
                item_id: ID_selection
            }

        ],
        function(res, err) {
            if (err)
                console.log("oops");
            // Log data for selected item id
            console.log(res);
        });

};

/*function updateProduct() {
    console.log("Updating stock quantity...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?", [{
                stock_quantity: 15
            },
            {
                item_id: 1001
            }
        ],
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");

        });
}*/