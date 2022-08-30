-- use sales;

-- -- Create an index that will enable 
-- -- a user to pull orders for ‘1990-10-03’ 
-- -- out of the Orders table quickly.

-- create INDEX Pull_Orders on orders (odate) where odate = '1990-10-03'

-- -- If the Orders table has already been created, 
-- -- how can you force the onum field to be unique
-- -- (assume all current values are unique)?

-- alter table orders add CONSTRAINT UQ_Onum UNIQUE(onum);


-- -- -- Create an index that would permit salesperson 
-- -- to retrieve his orders.
-- create INDEX SalesP_Orders ON orders (onum,amt,odate,cnum,snum)

-- -- Let us assume that each salesperson 
-- -- is to have only one customer of a 
-- -- given rating, and that this is currently 
-- -- the case. Create an index that enforces it.
-- create INDEX UQ_SalesP_Cust on customers (distinct cnum ,rating)

-- -- -- Create an index to speed up searching order 
-- -- on a given date by given customer.
-- create INDEX DateWise_Orders on orders (odate) where odate = '1990-10-03'



