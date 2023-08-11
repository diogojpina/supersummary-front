import { Book, BookList } from "../entities";

const BookListTransformer = (list: any): BookList => {
  const books: Book[] = []
  if (list.books) {
    for (const book of list.books) {
      books.push({
        ...book,
        image: book.book_image,
        isbn10: book.primary_isbn10,
        isbn13: book.primary_isbn13,
        buyLinks: book.buy_links
      })
    }
  }

  const bookList = new BookList({
    name: list.list_name,
    displayName: list.display_name,
    slug: list.list_name_encoded,
    oldPublishedDate: list.oldest_published_date,
    newPublishedDate: list.newest_published_date,
    updated: list.updated,
    books
  })

  

  return bookList
}

export default BookListTransformer