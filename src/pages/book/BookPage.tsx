import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Book } from '../../entities'

export default function BookPage() {
  const [book, setBook] = useState<Book>(new Book())

  useEffect(() => {
    const bookData = localStorage.getItem('book') || '{}'
    const book = new Book(JSON.parse(bookData))
    setBook(book)
  }, [])
  
  return (
    <Layout>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
    </Layout>
  )
}