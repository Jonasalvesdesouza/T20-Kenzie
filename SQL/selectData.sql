SELECT * FROM products;
SELECT "name", "description" FROM products;

SELECT * FROM products WHERE id = 1;
SELECT * FROM products WHERE price < 300000

/* LIKE - diferencia lowerCase e upperCase */
SELECT * FROM products WHERE name LIKE '%Computador%';

/* LIKE - nao diferencia lowerCase de upperCase */
SELECT * FROM products WHERE name ILIKE '%computador';