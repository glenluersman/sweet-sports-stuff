INSERT INTO category(id, category_name)
VALUES
(1, "Men's"),
(2, "Women's"),
(3, "kid's")

INSERT INTO user(id, email, username, password)
VALUES
(1, 'Dave'),
(2, 'Steve'),
(3, 'Bill')

INSERT INTO reviews(id, content, user_id, product_id)
VALUES
(1, 'This shirt sucks', 2, 3),
(2, 'Hat was too small', 3, 1),
(3, 'pants ripped', 1,2)

INSERT INTO products(id, product_name, category_id, price, product_desc)
VALUES
(1, 'shirt', 1, 50.00, 'this is a shirt'),
(2, 'shirt', 2, 75.00, 'this is a small hat'),
(3, 'shirt', 3, 65.00, 'these are pants')