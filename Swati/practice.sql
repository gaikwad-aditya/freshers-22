--CREATE DATABASE student_db
-- CREATE TABLE student (
--     id INTEGER PRIMARY KEY IDENTITY(1,1),
--     name VARCHAR(20),
--     address VARCHAR(40),
--     phone VARCHAR(12),
--     email varchar(30),
--     age INTEGER,
--     schoolid INTEGER,
--     foreign key (schoolid) references school(id) 
-- ) ;

-- CREATE TABLE school (
--     id INTEGER PRIMARY KEY IDENTITY(1,1),
--     name VARCHAR(20),
--     address VARCHAR(40),
--     phone VARCHAR(12),
--     principal VARCHAR(20)
-- ) ;

-- insert into school (name, address, principal, phone) VALUES ('Swati','nagpur','Archana','9876543216');
-- insert into school (name, address, principal, phone) VALUES ('Pranay','nagpur','Archana','6735873564');
-- insert into school (name, address, principal, phone) VALUES ('tarun','mumbai','Manoj','9882563725');
-- insert into school (name, address, principal, phone) VALUES ('rutuja','wardha','Kalesir','88709736524');
-- insert into school (name, address, principal, phone) VALUES ('vaishnavi','pune','Marie','98156273462');

--  select * FROM school;

-- insert into student (name, address, email, phone, age) VALUES ('Swati','nagpur','swatip@gmal.com','7689654320',23);
-- insert into student (name, address, email, phone, age) VALUES ('Pranay','nagpur','pranayp@gmal.com','9881567388',22);
-- insert into student (name, address, email, phone, age) VALUES ('Tarun','Mumbai','tarunk@gmal.com','9864575362',26);
-- insert into student (name, address, email, phone, age) VALUES ('Rutuja','Wardha','rutujas@gmal.com','8867354276',23);
-- insert into student (name, address, email, phone, age) VALUES ('Vaishnavi','Pune','vaishnavig@gmal.com','98637546256',21,);



-- update school set name = 'Gayatri Convent' where id = 1;
-- update school set name = 'Gayatri Convent' where id = 2;
-- update school set name = 'DAV Burhar' where id = 3;
-- update school set name = 'Gajanan High School' where id = 4;
-- update school set name = 'St. Mary School' where id = 5;

 --update student set schoolid = 1 where id = 1;
--  update student set schoolid = 2 where id = 2;
--  update student set schoolid = 3 where id = 3;
--  update student set schoolid = 4 where id = 4;
--  update student set schoolid = 5 where id = 5;

select * FROM school
select * FROM student;