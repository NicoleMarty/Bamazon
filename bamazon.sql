CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50) NULL,
department_name VARCHAR (50) NULL,
price DECIMAL (6,2) NULL,
stock_quantity INT DEFAULT 0,
PRIMARY KEY (id)
);

SELECT * FROM products;


