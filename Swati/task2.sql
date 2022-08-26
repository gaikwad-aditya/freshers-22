-- create DATABASE  product_db
 
--   CREATE TABLE product_categories(
--      id INTEGER PRIMARY KEY IDENTITY(1,1),
--      title VARCHAR(20),
--      description VARCHAR(60)
-- );

 select * from product_categories

-- CREATE TABLE products (
--     id INTEGER PRIMARY KEY IDENTITY(100,1),
--     title VARCHAR(20),
--     price INTEGER,
--     description VARCHAR(60),
--     category_id INTEGER,
--     FOREIGN KEY (category_id) REFERENCES product_categories(id),
--     company VARCHAR(20)
-- );

 select * from products
--   
-- CREATE TABLE orders(
--     id INTEGER PRIMARY KEY IDENTITY(202201,1),
--     total INTEGER,
--     OrderDate DATE
-- );

select * from orders

-- CREATE TABLE order_details(
--     id INTEGER PRIMARY KEY,
--     ProductID INTEGER,
--     FOREIGN KEY (ProductID) REFERENCES products(id),
--     OrderID INTEGER,
--     FOREIGN KEY (OrderID) REFERENCES orders(id),
--     quantity INTEGER,
--     price INTEGER,
--     totalprice INTEGER,
--     discount INTEGER
-- );

select * from order_details

-- insert into product_categories (title, description) values
-- ('Health','Focusing on Health'),
-- ('Fashion','Apperals and Accesories'),
-- ('Food','Groceries and Daily Food'),
-- ('Home Decor','Focusig on  HouseInterior');

-- insert into products (title, price,description, category_id, company) values
--  ('Evion',157,'MultiVitamins',1,'P&G'),
--  ('Nutralite',278,'Focusing on Health',1,'Amway'),
--  ('Accessories',2000,'Jwellery',2,'Tanishq'),
--  ('Bags',5500,'Luxury Bags',2,'Chanel'),
--  ('Oats',180,'Breakfast Food',3,'Saffola'),
--  ('Wadrobe',3700,'Furniture',4,'IKEA');

-- insert into orders (total,OrderDate) values
--   (3,'2021-08-11'),(2,'2022-06-12'),(4,'2021-03-23'),(4,'2020-11-07'),(1,'2019-08-11');

-- insert into order_details (id,ProductID,OrderID,quantity,price,totalprice,discount) values
--   (1000,101,202201,2,157,(2*157)*10/100,10),
--   (1001,101,202201,1,278,(1*278)*10/100,10),
--   (1002,104,202202,2,3700,(2*3700)*40/100,40),
--   (1003,101,202203,3,278,(2*278)*12/100,12),
--   (1004,101,202203,1,157,(2*157)*10/100,10),
--   (1005,103,202204,3,180,(3*180)*18/100,18),
--   (1006,102,202205,1,5500,(1*5500)*5/100,5);

--  update order_details set ProductID = 100 where id = 1000;
--  update order_details set ProductID = 105 where id = 1002;
--  update order_details set ProductID = 100 where id = 1004;
--  update order_details set ProductID = 104 where id = 1005;
--  update order_details set ProductID = 103 where id = 1006;