-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
  SELECT name, birth_year FROM authors;

-- Get all authors from the USA
SELECT * FROM authors WHERE nationality='United States of America';

-- Get all books published in 1985
SELECT * FROM books WHERE publication_date='2001';

-- Get just the title of all books.
SELECT title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
SELECT publication_date FROM books WHERE title='Ants Marching';

  -- Cry when you realize how long it's been
  :'(
-- Add yourself as an author
INSERT INTO authors (name, nationality, birth_year) VALUES ('Drew Wolfson', 'United States of America', 1989);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
ari_library2_db=# INSERT INTO books (id, title, publication_date, author_id) VALUES (69, 'Become A Web Developer in Ten Days', 2016, 69);
INSERT 0 1
ari_library2_db=# INSERT INTO books (id, title, publication_date, author_id) VALUES (70, 'A Laymans Guide to Walking on Ceilings', 2016, 70);
INSERT 0 1

-- Update one of your books to have a new title
UPDATE books SET title='Become a Web Developer in 9 Days' WHERE author_id=23;

-- Delete your books
DELETE FROM books WHERE author_id=10;
DELETE FROM books WHERE author_id=7;

-- Delete your author entry
DELETE FROM authors WHERE name='Drew Wolfson ';
