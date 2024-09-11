SELECT * FROM users

SELECT users."id" AS "userId", 
users."name" AS "userName",
users."email" AS "userEmail",
addresses."id" AS "addressId",
addresses."street",
addresses."number"
FROM users
JOIN addresses ON users."id" = addresses."userId";

SELECT products."id" AS "productId",
products."name" AS "productName",
products."price" AS "productPrice",
categories."id" AS "categoryId",
categories."name" AS "categoryName"
FROM products 
JOIN products_categories ON products."id" = products_categories."productId"
JOIN categories ON categories."id" = products_categories."categoryId" WHERE products."id" = 2;