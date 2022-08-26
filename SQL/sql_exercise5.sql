------------------------------------------------- assignment 5 ------------------------------------------------- 
-- Display first name and last name after converting the first letter of each name to upper case and
-- the rest to lower case.
    -- use hr_DB;
    -- SELECT UPPER(SUBSTRING(FIRST_NAME, 1, 1))+ LOWER(SUBSTRING(FIRST_NAME, 2, LEN(FIRST_NAME)-1)) as First_Name,
    -- UPPER(SUBSTRING(LAST_NAME, 1, 1))+ LOWER(SUBSTRING(LAST_NAME, 2, LEN(LAST_NAME)-1)) as Last_Name FROM employees; 

-- Display the first word in job title.
-- SELECT SUBSTRING(JOB_TITLE, 1, CHARINDEX(' ', JOB_TITLE)-1) AS FIRST_WORD_JT FROM jobs;

