CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL PRIMARY KEY,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL(6,2) NULL,
stock_quantity INTEGER NULL
);

SELECT * FROM products;


