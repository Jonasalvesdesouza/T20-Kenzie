CREATE TABLE products (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(250) NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL
);

SELECT * FROM products;

DROP TABLE products;