USE employees;

INSERT INTO department
    (name)
VALUES 
    ('Market'),
    ('Research and Development'),
    ('General management'),
    ('Customer service.');

     INSERT INTO role
         (department_id, title, salary)
    VALUES
    (1,' Technician', 75000),
    (2,'Research Engineer.', 74000),
    (3,'General manager', 2000000),
    (4,'Customer Service Representatives', 30000);

    INSERT INTO employee
    (first_name, last_name, role_id, manager_id )
    VALUES
    ('Freddie','Jason', 1, 2), 
    ('Keyshawn', 'davis', 3, 2),
    ('Matthew', 'Howard', 3, NULL),
    ('kristy', 'evans', 4, NULL);
    
