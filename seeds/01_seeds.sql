INSERT INTO users (credit_rating, criminal_record_check, height_in_cm)
VALUES (20, 'confirmed tax evasion', 120),
(150, 'convicted for having too many garage sales', 300),
(3000, 'got caught bringing a llama into a national park', 50);

-- INSERT INTO users (name, email)
-- ('Eva Stanley', 'sebastianguerra@ymail.com'),
-- ('Louisa Meyer', 'jacksonrose@hotmail.com'),
-- ('Dominic Parks', 'victoriablackwell@hotmail.com'),
-- ('Sue Luna', 'jasonvincent@gmx.com'),
-- ('Rosalie Garza' 'jacksondavid@gmx.com'),
-- ('Etta West' 'charlielevy@yahoo.com'),
-- ('Margaret Wong', 'makaylaweiss@icloud.com')
-- ('Leroy Hart', 'jaycereynolds@inbox.com');


INSERT INTO properties (square_metres, exterior_paint_colour, marble_statues)
VALUES (300, 'magenta', 'arnold_governator'),
(2000, 'copper', 'Diogenes of Sinope'),
(5, 'red', 'N/A');


INSERT INTO reservations (guest_pets, guest_loudness_history, guest_facial_hair),
VALUES ('rattlesnake', 'very', 'handlebar'),
('pitbull', 'meek', 'A long Weird beard with Cube Shape'),
('falcon', 'moderate', 'handlebar mustache');


INSERT INTO property_reviews (positive, negative, other)
(yes, no, no),
(no, no, yes),
(no, yes, no);

-- Use $2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u. as every users password. It's the word password hashed with bcrypt.