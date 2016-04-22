class Authors
  def initialize()
    @authors = []
  end

  def add(author)
    @authors << author
  end

end

class Books
  def initialize()
    @books = []
  end

  def add(book)
    @books << book
  end

end

class Author
  def initialize(id, name, nationality, birth_year)
    @author = {id: id, name: name, nationality: nationality, birth_year: birth_year}
  end
end

class Book
  def initialize(id, title, publication_date, author_id)
    @book = {id: id, title: title, publication_date: publication_date, author_id: author_id}
  end
end
