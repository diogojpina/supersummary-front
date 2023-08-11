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
    <div className="item">
      <div className="image">
        <span className="rank">{book.rank}</span>
        <img src={book.image} alt="{book.title}"/>
      </div>
      <div className="info">
        <span className="publisher">{book.publisher}</span>
        <h4 className="title">{book.title} ({book.rank})</h4>
        <p className="author">By {book.author}</p>
        <p className="description">{book.description}</p>
      </div>
      <button onClick={storeBook}>See Details</button>
    </div>
  )
}