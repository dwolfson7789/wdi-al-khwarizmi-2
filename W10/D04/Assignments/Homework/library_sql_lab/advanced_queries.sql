-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all books written by any author from the USA
SELECT * FROM books JOIN authors on books.author_id = authors.id WHERE authors.nationality='United States of America';

-- Find all fields (book and author related) for all books written by George R.R. Martin.

-- Find all fields (book and author related) for all books written by Milan Kundera.

-- Find all books written by an author from China or the UK.

-- Find out how many books Albert Camus wrote.

-- Find out how many books were written by US authors.

-- Find all books written after 1930 by authors from Argentina.

-- Find all books written before 1980 by authors not from the US.

-- Find all authors whose names start with 'J'.

-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.
