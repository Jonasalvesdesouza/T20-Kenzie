
    CREATE TABLE products (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(250) NOT NULL,
        "description" TEXT,
        "price" INTEGER NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP NOT NULL
    ); 


INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
VALUES ('Computador', 'Computador gamer', 250000, '2024-03-15', '2024-03-15');

INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
VALUES ('Notbook', 'Notbook gamer', 250000, '2024-03-15', '2024-03-15'),
('Mouse', 'Mouse gamer', 3500, '2024-03-15', '2024-03-15');


INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
VALUES ('Cadeira', 'Cadeira gamer', 150000, '2024-03-15', '2024-03-15') RETURNING *;

SELECT * FROM products;