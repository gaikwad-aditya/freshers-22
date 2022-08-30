-- ----------------------------- assignment 2 -------------------------------



-- create 'product_db' databse
--     CREATE DATABASE product_db;
--     USE product_db;
-- create following tables
-- categories: id (PK), title, description
--     CREATE TABLE categories(
--         id INT PRIMARY KEY,
--         title VARCHAR(20),
--         description VARCHAR(30),
--     );

-- products: id (PK), title, price, description, category (FK), company
--     CREATE TABLE product(
--         id INT PRIMARY KEY,
--         title VARCHAR(20),
--         price FLOAT,
--         description VARCHAR(40),
--         catID INT FOREIGN KEY REFERENCES categories(id),
--         company VARCHAR(20)
--     );

-- orders: id (PK), total, date
--     CREATE TABLE orders(
--         id INT PRIMARY KEY,
--         total FLOAT,
--         date DATE
--     );

-- order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount
--     CREATE TABLE order_details(
--         id INT PRIMARY KEY,
--         orderID INT FOREIGN KEY REFERENCES orders(id),
--         productID INT FOREIGN KEY REFERENCES product(id),
--         quantityn INT,
--         price FLOAT,
--         totalPrice FLOAT,
--         discount INT
--     );

-- create relationship as shown in the table schema
-- add some dummy data
--     INSERT INTO categories(id, title, description)
--     VALUES(10001, 'Mobiles', 'quality mobiles with discount');

--     INSERT INTO categories(id, title, description)
--     VALUES(10002, 'Mobile Accessories', 'quality mobiles accessories'),
--     (10003, 'Tablets', 'quality tablets with discount'),
--     (10004, 'Computers', 'quality Computer with discount'),
--     (10005, 'Cameras', 'quality Cameras with discount'),
--     (10006, 'Home Theater', 'quality Home Theater'),
--     (10007, 'TV', 'quality TV with discount');

--     SELECT * FROM categories;

--     INSERT INTO product(id, title, price, description, catID, company) 
--     VALUES(101, 'Norzo 50i', 8399, '4GB RAM + 64GB Storage', 10001, 'realme'),
--     (102, 'Nord CE 2', 24999, '8GB RAM + 128GB Storage', 10001, 'OnePlus'),
--     (103, 'Canon EOS 1500D', 39999, '24.1 Digital SLR', 10005, 'Canon'),
--     (104, 'Microsoft Pro8-13', 108990, 'i5/8GB RAM/256GB SSD Window 11', 10004, 'Microsoft'),
--     (105, 'OnePlus 138.8 cm', 10399, '55 inches Q1 Series 4K Android', 10007, 'OnePlus'),
--     (106, 'Canon EOS 200D', 61890, 'EF-S 18-55mm f4 is STM Lens', 10005, 'Canon'),
--     (107, 'ASUS Vivobook 16X', 54990, 'AMD Ryzen 5 8GB/512GB SSD', 10004, 'Asus'),
--     (108, 'JBL Bar 5.1', 67998, 'Deep Bass, HDMI ARC, Bluetooth, AUX', 10006, 'JBL'),
--     (109, 'Sony Bravia', 86990, '65 inches 4K UltraHD Smart LED', 10007, 'Sony'),
--     (110, 'Philips Audio TAB530', 9299, 'Wireless Subwoofer, HDMI ARC', 10006, 'Philips');

--     select * from product;

--     INSERT INTO orders(id, total, date)
--     VALUES(1001, 54990, '2022-05-26'),
--     (1002, 61890, '2020-07-14'),
--     (1003, 24999, '2021-06-05'),
--     (1004, 86990, '2019-01-20'),
--     (1005, 39999, '2022-04-30'),
--     (1006, 8399, '2022-10-22'),
--     (1007, 54990, '2020-04-25'),
--     (1008, 9299, '2012-09-16'),
--     (1009, 54990, '2018-05-26');

--     SELECT * FROM orders;

--     INSERT INTO order_details(id, orderID, productID, quantityn, price, totalPrice, discount)
--     VALUES(1, 1001, 107, 1, 54990, 54990, 14),
--     (2, 1005, 103, 1, 39999, 3999, 10),
--     (3, 1003, 102, 1, 24999, 24999, 9),
--     (4, 1006, 101, 1, 8399, 8399, 15),
--     (5, 1004, 109, 1, 86990, 86990, 12),
--     (6, 1002, 106, 1, 61890, 61890, 30),
--     (7, 1009, 107, 1, 54990, 54990, 14),
--     (8, 1008, 110, 1, 9299, 9299, 25),
--     (9, 1007, 107, 1, 54990, 54990, 14);

--     SELECT * FROM order_details;