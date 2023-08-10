import { Link } from "react-router-dom"
import { BookList } from "../../../../entities"

interface ItemProps {
  bookList: BookList
}

export default function BookListItem(props: ItemProps) {
  const bookList = props.bookList

  return (
    <div>
      <h3>{bookList.displayName}</h3>
      <p>{bookList.oldestPublishedDate.toString()}</p>
      <p>Updated: {bookList.updated}</p>
      <Link to={`/lists/current/${bookList.slug}`}>See More</Link>
    </div>
  )
}