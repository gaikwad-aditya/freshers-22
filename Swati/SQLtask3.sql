-- CREATE DATABASE Sales_db

-- CREATE TABLE salespeople_db(snum INT, sname varchar(10), city varchar(10), comm decimal(3,2));

-- CREATE TABLE customers_db(cnum INTEGER, cname varchar(10), city varchar(10), rating INTEGER, snum INTEGER);

-- CREATE TABLE orders_db(onum INTEGER, amt decimal(7,2), odate date, cnum INTEGER, snum INTEGER);

-- INSERT INTO salespeople_db VALUES(1001, 'Peel', 'London', 0.12);
-- INSERT INTO salespeople_db VALUES(1002, 'Serres', 'San Jose', 0.13);
-- INSERT INTO salespeople_db VALUES(1004, 'Motika', 'London', 0.11);
-- INSERT INTO salespeople_db VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
-- INSERT INTO salespeople_db VALUES(1003, 'Axelrod', 'New York', 0.10);

-- INSERT INTO customers_db VALUES(2001, 'Hoffman', 'London', 100, 1001);
-- INSERT INTO customers_db VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
-- INSERT INTO customers_db VALUES(2003, 'Liu', 'San Jose', 200, 1002);
-- INSERT INTO customers_db VALUES(2004, 'Grass', 'Berlin', 300, 1002);
-- INSERT INTO customers_db VALUES(2006, 'Clemens', 'London', 100, 1001);
-- INSERT INTO customers_db VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
-- INSERT INTO customers_db VALUES(2007, 'Pereira', 'Rome', 100, 1004);

-- INSERT INTO orders_db VALUES(3001,18.69,'1990-10-03', 2008, 1007);
-- INSERT INTO orders_db VALUES(3003,767.19,'1990-10-03', 2001, 1001);
-- INSERT INTO orders_db VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
-- INSERT INTO orders_db VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
-- INSERT INTO orders_db VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
-- INSERT INTO orders_db VALUES(3009,1713.23,'1990-10-04',2002, 1003);
-- INSERT INTO orders_db VALUES(3007,75.75,'1990-10-04',2004, 1002);
-- INSERT INTO orders_db VALUES(3008,4723.00,'1990-10-04',2006, 1001);
-- INSERT INTO orders_db VALUES(3010,309.95,'1990-10-04',2004, 1002);
-- INSERT INTO orders_db VALUES(3011,9891.88,'1990-10-04',2006, 1001);

SELECT * from salespeople_db
SELECT * FROM customers_db
SELECT * FROM orders_db

-- SELECT * FROM customers_db WHERE snum = 1001;

-- SELECT cname, rating FROM  customers_db WHERE city = 'San Jose'

-- SELECT distinct snum from orders_db;

-- Select * from orders_db WHERE amt >=1000;

-- SELECT sname, city from salespeople_db WHERE comm >=0.10 AND city='London';

-- SELECT * from customers_db WHERE rating > 100 OR city = 'Rome';
-- select * from orders_db where (amt < 1000 OR NOT (odate = '1990-10-03' AND cnum > 2003));

-- Select * from orders_db where NOT ((odate = '1990-10-03' OR snum >1006) AND amt >= 1500);

-- SELECT * FROM orders_db WHERE NOT (amt = '0' OR amt = 'null');