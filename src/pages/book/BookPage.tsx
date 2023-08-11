import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Book } from '../../entities'

import "./BookPage.scss"

export default function BookPage() {
  const [book, setBook] = useState<Book>(new Book())

  useEffect(() => {
    const bookData = localStorage.getItem('book') || '{}'
    const book = new Book(JSON.parse(bookData))
    setBook(book)
  }, [])
  
  return (
    <Layout>
      <div className="container">
        <div className="image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="content">
          <h3 className="title">{book.title}</h3>
          <span className="author">By {book.author}</span>
          <span className="publisher">{book.publisher}</span>
          <span className="description">{book.description}</span>

          <span className="buy-now">Buy Now</span>
          
          <div className="buy-links-container">
            {book.buyLinks.map(buyLink => (
              <a href={buyLink.url} target="_blank">{buyLink.name}</a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}