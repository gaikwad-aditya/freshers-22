-- use Sales;

-- -- Write a query that lists each order number followed by the name of the customer who made the
-- -- order.
-- select distinct o.onum as Order_Number, c.cnum as Ordered_By, c.cname as Customer_Name from orders o full outer join customers c on o.cnum = c.cnum;

-- -- Write a query that gives the names of both the salesperson and the customer for each order along
-- -- with the order number.
-- select c.cname as Customer_Name, s.sname as SalesP_Name,(select onum from orders where orders.snum = customers.snum) as Order_ID FROM customers c full outer JOIN salespeople s on c.snum=s.snum;

-- -- Write a query that produces all customers serviced by salespeople with a commission above 12%.
-- -- Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission.
-- select c.cname as Cust_Name, s.sname as SalesP_Name, s.comm as Rate_Comm from customers c inner join salespeople s on c.snum = s.snum where s.comm > 0.12;

-- -- Write a query that calculates the amount of the salesperson’s commission on each order by a
-- -- customer with a rating above 100.
-- select c.cname as Cust_Name, s.comm as Commission, c.rating as Cust_Rating from salespeople s inner join customers c on s.snum = c.snum where c.rating > 100 ;

-- -- Write a query that produces all pairs of salespeople who are living in the same city.Exclude
-- -- combinations of salespeople with themselves as well as duplicate rows with the order reversed
-- select s1.sname+' '+s2.sname as Pair, s1.city from salespeople s1 full outer join salespeople s2 on s1.city = s2.city where s1.sname > s2.sname;