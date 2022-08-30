-- --------------------- assignment 1 ---------------------------


-- create 'student_db' database
-- CREATE DATABASE student_db;
-- USE student_db;

-- ---create following tables in database with proper data types

-- student: id (PK), name, address, phone, email, age, schoolId (FK)
--     CREATE TABLE student(
--         id INT PRIMARY KEY,
--         name VARCHAR(20),
--         address VARCHAR(20),
--         phone INT,
--         email VARCHAR(20),
--         age INT,
--         schoolID INT FOREIGN KEY REFERENCES school(id)
--     );

-- school: id (PK), name, address, principal, phone
--     CREATE TABLE school(
--         id INT PRIMARY KEY,
--         name VARCHAR(20),
--         address VARCHAR(20),
--         principal VARCHAR(20),
--         phone VARCHAR(10)
--     );
-- create relationship as shown in the table schema

-- add some dummy data
--     INSERT INTO school(id, name, address, principal, phone)
--     VALUES(10001, 'RCPIT', 'Shirpur', 'J. B. Patil', '8825466651'),
--     (10002, 'SVKM', 'Dhule', 'M. N. Pardeshi', '9588745256'),
--     (10003, 'COEP', 'Pune', 'S. S. Bagul', '7858456825'),
--     (10004, 'COEPC', 'Pimpri Chinchvad', 'Y. S. Chaudhari', '8457585214'),
--     (10005, 'Sandip foundation', 'Nashik', 'T. K. Mane', '8456885145')
--     ;

--     select * from school;
--     select * from student;

--     INSERT INTO student (id, name, address, phone, email, age, schoolID)
--     VALUES (21, 'Rohan', 'Shirpur', '8551456651', 'rohan@gmail.com', 21, 10001),
--     (35, 'Swati', 'Pune', '7584466651', 'Swati@emtec.com', 25, 10003),
--     (41, 'Nandani', 'Pimpri', '4454966651', 'Nandani@gmail.com', 20, 10004),
--     (45, 'Ajinkya', 'Dhule', '8825464578', 'Ajinkya@gmail.com', 25, 10002),
--     (25, 'Sakshi', 'Bhusaval', '8822543651', 'Sakshi@gmail.com', 19, 10005),
--     (62, 'Aakash', 'Malegoan', '7588454651', 'aakash@gmail.com', 30, 10005),
--     (70, 'Jitendra', 'Jalgoan', '6585242651', 'jitendra@gmail.com', 32, 10002),
--     (12, 'Vishal', 'Varshi', '7548225684', 'Vishal@gmail.com', 23, 10003)
--     ;


--     ALTER TABLE student
--     ALTER COLUMN phone VARCHAR(10);
