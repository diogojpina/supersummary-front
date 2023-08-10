import { Link } from "react-router-dom"
import { Book } from "../../../entities"

interface ItemProps {
  book: Book
}

export default function BookItem(props: ItemProps) {
  const book = props.book

  return (
    <div>
      <h3>{book.title} ({book.rank})</h3>
      <p>Publisher: {book.publisher}</p>
      <Link to={`/list/current/${book.title}`}>See Details</Link>
    </div>
  )
}