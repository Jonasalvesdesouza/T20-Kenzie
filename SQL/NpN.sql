CREATE TABLE products(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT
);

CREATE TABLE categories(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL
);

CREATE TABLE products_categories(
    "id" SERIAL PRIMARY KEY,
    "productId" INTEGER NOT NULL,
    FOREIGN KEY("productsId") REFERENCES products("id") ON DELETE CASCADE,
    "categoriesId" INSERT NOT NULL,
    FOREIGN KEY("categoriesId") REFERENCES categories("id") ON DELETE CASCADE

);