CREATE DATABASE students;

CREATE TABLE infoStudents(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "module" VARCHAR(2) NOT NULL,
    "score" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL
);

INSERT INTO infoStudents (
    "name",
    "email",
    "module",
    "score",
    "active"
) VALUES (
        'Enzo',
        'enzo@email.com',
        'M3',
        85, 
        true
    ),(
        'Valentina',
        'valentina@email.com',
        'M4',
        97, 
        true
    ),(
        'Osvaldo',
        'osvaldo@email.com',
        'M5',
        67, 
        false
    )RETURNING *;

SELECT * FROM infoStudents WHERE score > 79;
SELECT * FROM infoStudents WHERE active 1;
SELECT * FROM infoStudents WHERE name LIKE '%Enzo%';
SELECT * FROM infoStudents;

UPDATE infoStudents SET score = 85 WHERE id = 1;
UPDATE infoStudents SET score = 97 WHERE id = 2;
UPDATE infoStudents SET score = 67 WHERE id = 3;

UPDATE infoStudents SET active = true WHERE id = 1;
UPDATE infoStudents SET active = 1 WHERE id = 2;
UPDATE infoStudents SET active = 0 WHERE id = 3;