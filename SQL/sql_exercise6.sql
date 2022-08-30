-- use Sales;

-- -- Write a query that counts the number of salespeople registering orders for each day. 
-- -- (If a
-- -- salesperson has more than one order on a given day, he or she should be counted only once.).
-- select COUNT(distinct snum) as SalesPeople_Count, odate from orders GROUP by odate;

-- -- Write a query on the Customers table that will find the highest rating in each city. Put the output in
-- -- this form:
-- -- For the city (city), the highest rating is : (rating).
-- select distinct city as 'For the city', max(rating) as 'the highest rating is' from  customers group by city;

-- -- Write a query that totals the orders for each day and places the results in descending order.
-- select odate as Order_Date, count(odate) as Order_Count from orders group by odate Order by count(odate) desc ;

-- -- Write a query that selects the total amount in orders for each salesperson for whom this total is
-- -- greater than the amount of the largest order in the table.
-- select max(amt) as Max_Amt from orders;

-- -- Write a query that selects the highest rating in each city.
-- select sum(amt) as Total_Amt_SP, snum as SalesP_ID from orders group by snum HAVING sum(amt) > (select max(amt) as Max_Amt from orders);

-- -- Largest order taken by each salesperson with order value more than Rs.3000.
-- select distinct snum as SalesP_ID, (select max(amt)from orders o1 where o1.snum =o2.snum) as Max_Amount from orders o2 group by snum,amt HAVING max(amt) > 3000;

-- -- Select each customer smallest order.
-- select distinct snum as Customer_ID, (select min(amt) from orders o1 where o1.snum =o2.snum) as Min_Amount from orders o2 group by snum,amt;