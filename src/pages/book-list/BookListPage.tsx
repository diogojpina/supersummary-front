import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import BookItem from '../../components/book/book-item/BookItem'
import { BookList } from '../../entities'
import { BookService } from '../../services'
import { useParams } from 'react-router-dom'

import "./BookListPage.scss"

export default function BookListPage() {
  const params = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [bookList, setBookList] = useState<BookList>(new BookList())

  useEffect(() => {
    const date = params.date || 'current'
    const list = params.list || ''

    if (date && list)
      getBestSellerList(date, list)
  }, [params])

  const getBestSellerList = async (date: string, list: string) => {
    setIsLoading(true)
    BookService.getBestSellerList(date, list)
      .then(bookList => {
        setBookList(bookList)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }  

  return (
    <Layout>
      {isLoading && (
        <div>Loading...</div>
      )}
      <div className="container">
        <div>
          <h2>{bookList.displayName}</h2>
        </div>
        <h3>Books</h3>
        <div className="bookList">
          {bookList.books.map(book => (
            <BookItem key={book.primaryIsbn13} book={book} />
          ))}
        </div>
      </div>
    </Layout>
  )
}