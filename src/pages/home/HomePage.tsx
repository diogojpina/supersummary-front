import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { BookService } from '../../services'
import { BookList } from '../../entities'
import BookListItem from '../../components/book/book-list/item/BookListItem'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [bookLists, setBookLists] = useState<BookList[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    loadBestSellerLists()
  }, [])

  const loadBestSellerLists = async () => {
    setIsLoading(true)
    BookService.getBestSellersList()
      .then(bookLists => {
        setBookLists(bookLists)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }

  const filterBookList = (bookList: BookList[]): BookList[] => {
    if (filter === '') return bookList

    const filtered = bookList.filter(bookList => 
      bookList.displayName.toLowerCase().includes(
        filter.toLowerCase()
      )
    )

    return filtered
  }

  return (
    <Layout>
      {isLoading && (
        <div>Loading...</div>
      )}
      <div>
        <label>Search Filter</label>
        <input 
          type="text"
          name="filter"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </div>
      <div>
        {filterBookList(bookLists).map(bookList => (
          <BookListItem bookList={bookList} />
        ))}
      </div>
    </Layout>
  )
}