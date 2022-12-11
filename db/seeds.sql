USE employees;

INSERT INTO department
    (name)
VALUES 
    ('Market'),
    ('Research and Development'),
    ('General management'),
    ('Customer service.');

     INSERT INTO role
          (title,department_id, salary)
    VALUES
    (' Technician',1, 75000),
    ('Research Engineer.', 2, 74000),
    ('General manager', 3, 2000000),
    ('Customer Service Representatives', 4, 30000);

    INSERT INTO employee
    (first_name, last_name, role_id, manager_id )
    VALUES
    ('Freddie','Jason', 1, 2), 
    ('Keyshawn', 'davis', 3, 2),
    ('Matthew', 'Howard', 3, NULL),
    ('kristy', 'evans', 4, NULL);
    
