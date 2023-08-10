import NytApiClient from "../clients/NytApiClient";
import { BookList } from "../../entities";
import BookListTransformer from "../../util/BookListTransformer";

const client = new NytApiClient()

export class BookService {
  public static async getBestSellersList(): Promise<BookList[]> {
    const apiKey = process.env.REACT_APP_NYT_API_KEY
    const response = await client.DoRequest('GET', `/lists/names.json?api-key=${apiKey}`)  

    const bookLists: BookList[] = []
    for (const list of response.results) {
      const bookList = BookListTransformer(list)
      bookLists.push(bookList)
    }

    return bookLists
  }

  public static async getBestSellerList(date: string, list: string): Promise<BookList> {
    const apiKey = process.env.REACT_APP_NYT_API_KEY
    const response = await client.DoRequest('GET', `/lists/${date}/${list}.json?api-key=${apiKey}`)  

    const bookList = BookListTransformer(response.results)

    return bookList
  }
}