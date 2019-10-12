CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
ID_selection INT NOT NULL,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price DECIMAL (6,2) NOT NULL,
stock_quantity INT DEFAULT NOT NULL 0
);

SELECT * FROM products;




