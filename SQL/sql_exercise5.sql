------------------------------------------------- assignment 5 ------------------------------------------------- 
-- Display first name and last name after converting the first letter of each name to upper case and
-- the rest to lower case.
    -- use hr_DB;
    -- SELECT UPPER(SUBSTRING(FIRST_NAME, 1, 1))+ LOWER(SUBSTRING(FIRST_NAME, 2, LEN(FIRST_NAME)-1)) as First_Name,
    -- UPPER(SUBSTRING(LAST_NAME, 1, 1))+ LOWER(SUBSTRING(LAST_NAME, 2, LEN(LAST_NAME)-1)) as Last_Name FROM employees; 

-- Display the first word in job title.
-- SELECT SUBSTRING(JOB_TITLE, 1, CHARINDEX(' ', JOB_TITLE)-1) AS FIRST_WORD_JT FROM jobs;

-- Display the length of first name for employees where last name contain character ‘b’ after 3rd
-- position.
    -- SELECT LEN(First_Name), FIRST_NAME, LAST_NAME FROM employees WHERE SUBSTRING(Last_Name, 4, LEN(LAST_NAME)-1) LIKE '%b%';


-- Display first name in upper case and email address in lower case for employees where the first
-- name and email address are same irrespective of the case.
    -- SELECT UPPER(FIRST_NAME), LOWER(EMAIL) FROM employees WHERE UPPER(FIRST_NAME) = UPPER(EMAIL);

-- Display first name, salary, and round the salary to thousands.
    -- SELECT FIRST_NAME, ROUND(SALARY, -3) FROM employees;

-- Display employee ID and the date on which he ended his previous job.
    -- SELECT EMPLOYEE_ID, END_DATE FROM job_history;

-- Display first name and date of first salary of the employees.
    -- SELECT FIRST_NAME, DATEADD(month, 1, HIRE_DATE) AS SALARY_DATE FROM employees    

-- Display first name and experience of the employees.
    -- SELECT FIRST_NAME, DATEDIFF(MONTH, START_DATE, END_DATE)/12 + ((DATEDIFF(MONTH, START_DATE, END_DATE)%12)*0.1) AS EXP_MONTH FROM employees AS e INNER JOIN job_history AS jh ON e.EMPLOYEE_ID = jH.EMPLOYEE_ID;

-- Display first name of employees who joined in 2001.
    -- SELECT FIRST_NAME FROM employees WHERE YEAR(HIRE_DATE) = 2001;

-- Display employees who joined in the current year.
    -- SELECT * FROM employees WHERE YEAR(HIRE_DATE) = YEAR(CURRENT_TIMESTAMP);

-- Display the number of days between system date and 1st January 2011.
    -- SELECT DATEDIFF(DAY,'01-01-2011', CURRENT_TIMESTAMP);

-- Display number of employees joined after 15th of the month.
    -- SELECT COUNT(EMPLOYEE_ID) FROM employees WHERE DAY(HIRE_DATE) > 15;

-- Display third highest salary of employees.
    -- SELECT SALARY FROM employees ORDER BY SALARY DESC LIMIT 1, 2;

-- SELECT * FROM employees;
-- SELECT * FROM job_history;