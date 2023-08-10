import { useNavigate } from "react-router-dom"
import { Book } from "../../../entities"

interface ItemProps {
  book: Book
}

export default function BookItem(props: ItemProps) {
  const navigate = useNavigate()

  const book = props.book

  const storeBook = () => {
    console.log(book)
    localStorage.setItem('book', JSON.stringify(book))
    navigate(`/book/${book.title}`)
  }

  return (
    <div>
      <h3>{book.title} ({book.rank})</h3>
      <p>Publisher: {book.publisher}</p>
      <button onClick={storeBook}>See Details</button>
    </div>
  )
}