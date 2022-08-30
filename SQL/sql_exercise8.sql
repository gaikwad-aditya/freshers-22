-- use sales;

-- -- Write a query that uses a subquery to obtain all orders for the customer named Cisneros. Assume
-- -- you do not know his customer number (cnum).
-- select distinct o.onum as Order_ID, o.amt as Amount, o.odate as Order_Date, o.cnum as Cust_ID, o.snum as SalesP_ID,(select c1.cname FROM customers c1 where c1.cname = 'Cisneros') as Cust_Name from orders o  inner join customers c on o.snum = c.snum order by o.onum;

-- -- Write a query that produces the names and ratings of all customers who have above- average
-- -- orders
-- select c.cname as Cust_Name, c.rating as Rating, o.amt as Amount, o.onum as Order_ID from customers c inner JOIN orders o on c.cnum = o.cnum where amt > (select avg(amt) from orders);

-- -- Write a query that selects the total amount in orders for each salesperson for whom this total is
-- -- greater than the amount of the largest order in the table.
-- select distinct snum as SalesP_ID,(select sum(amt) from orders o1 group BY snum HAVING o1.snum = o2.snum AND sum(amt) > (select max(amt) from orders)) as Order_Amount from orders o2;


-- -- Write a query that selects all customers whose ratings are equal to or greater than ANY of Serres.
-- select cname, rating from customers where rating >= ANY(select rating from customers c inner join salespeople s on c.snum = s.snum where (s.sname = 'Serres'));


-- -- Write a query using ANY or ALL 
-- -- that will find all salespeople 
-- -- who have no customers located in
-- -- their city.

-- select s.snum as SalesP_ID,s.sname as SalesP_Name,s.city as SalesP_City from salespeople s where s.city != ALL(select c.city FROM customers c);

-- -- Write a query that 
-- -- selects all orders 
-- -- for amounts greater than 
-- -- any for the customers in London.
-- select onum as Order_ID,  amt as Order_Amt,  odate as Order_Date,  cnum as Cust_ID, snum as Cust_ID  from orders where amt>ANY (select o.amt from orders o inner join customers c on o.cnum=c.cnum and c.city='London');

-- -- -- Extract all the orders of Motika
-- select distinct s.sname as Cust_Name, o.cnum as Cust_ID, o.onum as OrderID, o.amt as Order_Amount, o.odate as Order_Date, o.snum as SalesP_ID FROM salespeople s inner join orders o  on s.snum =o.snum where s.sname = 'Motika' ; 

-- -- Find all the order attribute to 
-- -- salespeople servicing customers in London.
-- select distinct o.cnum as Cust_ID, o.onum as OrderID, o.amt as Order_Amount, o.odate as Order_Date, o.snum as SalesP_ID, c.city as Cust_City from orders o inner join customers c on  o.snum = c.snum where c.city = 'London' 

-- -- -- Find names and numbers of all 
-- --    salesperson 
-- -- who have more than one customer.

-- select s.snum as SalesP_ID, s.sname as SalesP_Name from  salespeople s full outer JOIN customers c  on s.snum = c.snum GROUP by s.snum,s.sname  HAVING count(c.cnum) > 1  
-- -- Find salespeople number,name 
-- -- and city who have 
-- -- multiple customers.
-- select s.snum as SalesP_ID, s.sname as SalesP_Name, s.city as SalesP_City from salespeople s full outer JOIN customers c on s.snum = c.snum GROUP by s.snum,s.sname,s.city HAVING count(c.cnum) > 1

-- -- Select customers who have a 
-- -- greater rating than any other 
-- -- customer in Rome.
-- select c.cnum as Custom_ID, c.cname as Custom_Name, c.city as Custom_City, c.rating as Custom_Rating from customers c where c.rating > ANY (select c1.rating from customers c1 where c1.city = 'Rome')

-- -- Select all orders that 
-- -- had amounts that were 
-- -- greater that at least one 
-- -- of the orders 
-- -- from ‘1990-10-04’ .
-- select o.onum as Order_ID, o.amt as Order_Amt, o.odate as Order_Date, o.cnum as Cust_ID, o.snum as SalesP_ID from orders o WHERE o.amt > SOME (select o1.amt FROM orders o1 where o1.odate = '1990-10-04')

-- -- Find all orders with amounts 
-- -- smaller than any amount for a customer 
-- -- in San Jose. 
-- select o.onum as Order_ID, o.amt as Order_Amt, o.odate as Order_Date, o.cnum as Cust_ID, o.snum as SalesP_ID from orders o where o.amt < any (select o1.amt FROM orders o1 inner join customers c on o1.cnum = c.cnum WHERE c.city = 'San Jose')

-- -- Select those
-- -- customers whose rating are higher than 
-- -- every customer in Paris.
-- SELECT c.cnum as Cust_ID, c.cname as Cust_Name, c.city as Cust_City, c.rating as Cust_Rating FROM customers c WHERE c.rating > ALL (select c1.rating FROM customers c1 where c1.city ='Paris')

