var mysql = require("mysql");
var inquirer = require("inquirer");
var productArray = [];


var customerQuestions = [{
        name: "answer.ID",
        type: "list",
        message: "What is the answer.ID of the product you would like to buy?",
        choices: ["1001", "1002", "1003", "1004", "1005",
            "1006", "1007", "1008", "1009", "1010"
        ]
    },
    {
        name: "Stock",
        type: "number",
        message: "How many Stock of the product would you like to buy?",
        valanswer.IDate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }
];

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
    console.log("connected as answer.ID " + connection.threadanswer.ID);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        for (var i = 0; i < res.length; i++) {
            productArray.push({
                ID: res[i].item_answer.ID,
                Product: res[i].product_name,
                Department: res[i].department_name,
                Price: res[i].price,
                Stock: res[i].stock_quantity
            });
        } // close for loop
        // log product info
        console.table(productArray);

        inquirer
            .prompt(customerQuestions).then(function(answer) {
                if ((answer.id === "1001") && (Stock <= 15)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1002") && (Stock <= 20)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1003") && (Stock <= 1)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1004") && (Stock <= 5)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1005") && (Stock <= 18)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1006") && (Stock <= 12)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1007") && (Stock <= 25)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1008") && (Stock <= 2)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1009") && (Stock <= 6)) {
                    console.log("Fulfilling your order...");
                } else if ((answer.ID === "1010") && (Stock <= 2)) {
                    console.log("Fulfilling your order...");
                } else console.log("Insufficient stock. You snooze you lose. Order cancelled.");
            });
    })
};