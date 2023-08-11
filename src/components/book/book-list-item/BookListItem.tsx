import { Link } from "react-router-dom"
import { BookList } from "../../../entities"

import "./BookListItem.scss"

interface ItemProps {
  bookList: BookList
}

export default function BookListItem(props: ItemProps) {
  const bookList = props.bookList

  return (
    <div className="item">
      <h4 className="title">{bookList.displayName}</h4>
      <span className="updated">Updated: {bookList.updated}</span>
      <div className="see-more-button">
        <Link to={`/list/current/${bookList.slug}`}>See More</Link>
      </div>
    </div>
  )
}